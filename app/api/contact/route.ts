import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail, sendConfirmationEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
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
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
