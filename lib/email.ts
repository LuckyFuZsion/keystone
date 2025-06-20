import nodemailer from 'nodemailer'

// Debug environment variables
console.log('Email configuration debug:')
console.log('GMAIL_USER:', process.env.GMAIL_USER)
console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? '***SET***' : 'NOT SET')
console.log('EMAIL_FROM:', process.env.EMAIL_FROM)
console.log('EMAIL_TO:', process.env.EMAIL_TO)

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'info.webfuzsion@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || 'iloaowlqeyrnmhch',
  },
})

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  const { firstName, lastName, email, phone, message } = data

  const mailOptions = {
    from: process.env.EMAIL_FROM || 'WebFuZsion <info.webfuzsion@gmail.com>',
    to: process.env.EMAIL_TO || 'hello@kstherapyclinic.com',
    replyTo: email, // This allows the client to reply directly to the visitor
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0f766e;">New Contact Form Submission</h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        </div>
        
        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        
        <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; font-size: 14px;">
          <p style="margin: 0;"><strong>Submission Time:</strong> ${new Date().toLocaleString('en-GB', { 
            timeZone: 'Europe/London',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        <p style="color: #6b7280; font-size: 14px; text-align: center;">
          This email was sent from the Keystone Sports Therapy contact form.<br>
          <strong>Reply to this email to respond directly to ${firstName}.</strong>
        </p>
      </div>
    `,
  }

  try {
    console.log('Attempting to send email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      replyTo: mailOptions.replyTo,
      subject: mailOptions.subject
    })
    
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully!')
    return { success: true }
  } catch (error) {
    console.error('Email sending failed:', error)
    throw new Error('Failed to send email')
  }
}

export async function sendConfirmationEmail(data: ContactFormData) {
  const { firstName, lastName, email } = data

  const mailOptions = {
    from: process.env.EMAIL_FROM || 'WebFuZsion <info.webfuzsion@gmail.com>',
    to: email,
    subject: 'Thank you for contacting Keystone Sports Therapy',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0f766e;">Thank you for your message!</h2>
        
        <p>Dear ${firstName},</p>
        
        <p>Thank you for contacting Keystone Sports Therapy. We have received your message and will get back to you as soon as possible.</p>
        
        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">What happens next?</h3>
          <ul style="line-height: 1.6;">
            <li>We'll review your enquiry within 24 hours</li>
            <li>You'll receive a personal response from our team</li>
            <li>We may call you to discuss your needs in more detail</li>
          </ul>
        </div>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
          <p><strong>Phone:</strong> Call us for immediate assistance</p>
          <p><strong>Email:</strong> hello@kstherapyclinic.com</p>
          <p><strong>Address:</strong> 71 Castlegate, Grantham, NG31 6SQ</p>
        </div>
        
        <p>Best regards,<br>The Keystone Sports Therapy Team</p>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        <p style="color: #6b7280; font-size: 14px; text-align: center;">
          Keystone Sports Therapy Clinic & Reformer Pilates<br>
          71 Castlegate, Grantham, NG31 6SQ
        </p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Confirmation email sending failed:', error)
    // Don't throw error for confirmation email - it's not critical
    return { success: false }
  }
} 