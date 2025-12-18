import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail, sendConfirmationEmail } from '@/lib/email'
import { verifyRecaptcha } from '@/lib/recaptcha'
import { rateLimit, getClientIdentifier } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting - stricter limits for rapid submissions
    const clientId = getClientIdentifier(request)
    
    // Check for rapid submissions (more than 2 in 1 minute)
    const rapidLimitResult = rateLimit(`${clientId}-rapid`, 2, 60 * 1000) // 2 per minute
    
    // Debug logging (remove in production if desired)
    console.log('Rate limit check:', {
      clientId: clientId.substring(0, 50), // Truncate for privacy
      rapidAllowed: rapidLimitResult.allowed,
      rapidRemaining: rapidLimitResult.remaining,
    })
    
    if (!rapidLimitResult.allowed) {
      console.warn('Rapid submission detected:', {
        clientId,
        timestamp: new Date().toISOString(),
      })
      return NextResponse.json(
        { 
          error: 'Too many requests. Please wait a moment before trying again.',
          resetTime: rapidLimitResult.resetTime 
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': '2',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rapidLimitResult.resetTime.toString(),
          }
        }
      )
    }
    
    // Standard rate limiting - 5 requests per 15 minutes per IP
    const rateLimitResult = rateLimit(clientId, 5, 15 * 60 * 1000)
    
    if (!rateLimitResult.allowed) {
      console.warn('Rate limit exceeded:', {
        clientId,
        timestamp: new Date().toISOString(),
      })
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          resetTime: rateLimitResult.resetTime 
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
          }
        }
      )
    }

    const body = await request.json()
    const { firstName, lastName, email, phone, message, recaptchaToken } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate field lengths to prevent abuse
    if (firstName.length > 100 || lastName.length > 100) {
      return NextResponse.json(
        { error: 'Name fields are too long' },
        { status: 400 }
      )
    }

    if (email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    if (phone.length > 20) {
      return NextResponse.json(
        { error: 'Phone number is too long' },
        { status: 400 }
      )
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Message is too long' },
        { status: 400 }
      )
    }

    // Check for suspicious patterns (basic spam detection)
    const suspiciousPatterns = [
      /http[s]?:\/\//i, // URLs
      /(free|cheap|discount|click here|buy now)/i, // Common spam words
      /[A-Z]{10,}/, // Excessive caps
      /(.)\1{5,}/, // Repeated characters
    ]

    const combinedText = `${firstName} ${lastName} ${email} ${message}`.toLowerCase()
    
    // Allow some URLs in message but flag excessive ones
    const urlCount = (message.match(/http[s]?:\/\//gi) || []).length
    if (urlCount > 3) {
      return NextResponse.json(
        { error: 'Message contains too many links' },
        { status: 400 }
      )
    }

    // Verify reCAPTCHA
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      )
    }

    const recaptchaValid = await verifyRecaptcha(recaptchaToken)
    if (!recaptchaValid) {
      console.warn('reCAPTCHA verification failed for contact form', {
        email,
        ip: clientId,
        timestamp: new Date().toISOString(),
      })
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      )
    }

    // Send email to the clinic
    await sendContactEmail({
      firstName,
      lastName,
      email,
      phone,
      message,
    })

    // Send confirmation email to the user
    await sendConfirmationEmail({
      firstName,
      lastName,
      email,
      phone,
      message,
    })

    // Log the submission for debugging
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      phone,
      messageLength: message.length,
      timestamp: new Date().toISOString(),
      ip: clientId,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully' 
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
          'X-RateLimit-Rapid-Limit': '2',
          'X-RateLimit-Rapid-Remaining': rapidLimitResult.remaining.toString(),
        }
      }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
