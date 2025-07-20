import nodemailer from "nodemailer"

// Debug environment variables
console.log("Email configuration debug:")
console.log("GMAIL_USER:", process.env.GMAIL_USER)
console.log("GMAIL_APP_PASSWORD:", process.env.GMAIL_APP_PASSWORD ? "***SET***" : "NOT SET")
console.log("EMAIL_FROM:", process.env.EMAIL_FROM)
console.log("EMAIL_TO:", process.env.EMAIL_TO)

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER || "hello@kstherapyclinic.com",
    pass: process.env.GMAIL_APP_PASSWORD || "",
  },
})

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export interface NewPatientFormData {
  firstName: string
  lastName: string
  dateOfBirth: string
  gender: string
  address: string
  postcode: string
  phone: string
  email: string
  emergencyContactName: string
  emergencyContactPhone: string
  currentMedication?: string
  allergies?: string
  medicalConditions?: string
  previousSurgeries?: string
  problemDescription: string
  painLevel: string
  problemDuration: string
  previousTreatment?: string
  occupation: string
  exerciseFrequency: string
  exerciseType?: string
  sleepQuality: string
  stressLevel: string
  treatmentGoals: string
  consentTreatment: boolean
  consentDataProcessing: boolean
  consentMarketing?: boolean
  heartDisease: boolean
  faintDizziness: boolean
  hypertension: boolean
  diabetes: boolean
  pacemaker: boolean
  osteoporosis: boolean
  epilepsy: boolean
  asthma: boolean
  pregnant: boolean
  smoker: boolean
  cancer: boolean
  surgeries: boolean
  medications: boolean
  bleedingDisorders: boolean
}

export async function sendContactEmail(data: ContactFormData) {
  const { firstName, lastName, email, phone, message } = data

  const mailOptions = {
    from: process.env.EMAIL_FROM || "Keystone Sports Therapy <hello@kstherapyclinic.com>",
    to: process.env.EMAIL_TO || "hello@kstherapyclinic.com",
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
          <p style="margin: 0;"><strong>Submission Time:</strong> ${new Date().toLocaleString("en-GB", {
            timeZone: "Europe/London",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
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
    console.log("Attempting to send email with options:", {
      from: mailOptions.from,
      to: mailOptions.to,
      replyTo: mailOptions.replyTo,
      subject: mailOptions.subject,
    })

    await transporter.sendMail(mailOptions)
    console.log("Email sent successfully!")
    return { success: true }
  } catch (error) {
    console.error("Email sending failed:", error)
    throw new Error("Failed to send email")
  }
}

export async function sendConfirmationEmail(data: ContactFormData) {
  const { firstName, lastName, email } = data

  const mailOptions = {
    from: process.env.EMAIL_FROM || "Keystone Sports Therapy <hello@kstherapyclinic.com>",
    to: email,
    subject: "Thank you for contacting Keystone Sports Therapy",
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
    console.error("Confirmation email sending failed:", error)
    // Don't throw error for confirmation email - it's not critical
    return { success: false }
  }
}

export async function sendNewPatientEmail(data: NewPatientFormData) {
  const mailOptions = {
    from: process.env.EMAIL_FROM || "Keystone Sports Therapy <hello@kstherapyclinic.com>",
    to: process.env.EMAIL_TO || "hello@kstherapyclinic.com",
    replyTo: data.email,
    subject: `New Patient Form - ${data.firstName} ${data.lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
        <h2 style="color: #0f766e;">New Patient Form Submission</h2>
        
        <!-- Personal Information -->
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Personal Information</h3>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Date of Birth:</strong> ${data.dateOfBirth}</p>
          <p><strong>Gender:</strong> ${data.gender}</p>
          <p><strong>Address:</strong> ${data.address}</p>
          <p><strong>Postcode:</strong> ${data.postcode}</p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Emergency Contact:</strong> ${data.emergencyContactName} - <a href="tel:${data.emergencyContactPhone}">${data.emergencyContactPhone}</a></p>
        </div>

        <!-- Medical History -->
        <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Medical History</h3>
          <p><strong>Heart disease or chest pain:</strong> ${data.heartDisease ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Faint or severe dizziness:</strong> ${data.faintDizziness ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Hypertension (high blood pressure):</strong> ${data.hypertension ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Diabetes:</strong> ${data.diabetes ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Pacemaker:</strong> ${data.pacemaker ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Osteopenia or osteoporosis:</strong> ${data.osteoporosis ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Epilepsy/seizures:</strong> ${data.epilepsy ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Asthma or respiratory conditions:</strong> ${data.asthma ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Allergies/sensitivities:</strong> ${data.allergies ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Pregnant:</strong> ${data.pregnant ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Smoker:</strong> ${data.smoker ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Cancer history:</strong> ${data.cancer ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Major surgeries:</strong> ${data.surgeries ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Taking medications:</strong> ${data.medications ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Bleeding disorders:</strong> ${data.bleedingDisorders ? "✅ Yes" : "❌ No"}</p>
        </div>

        <!-- Current Problem -->
        <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Current Problem</h3>
          <p><strong>Problem Description:</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.6; background: white; padding: 10px; border-radius: 4px;">${data.problemDescription}</p>
          <p><strong>Pain Level:</strong> ${data.painLevel}/10</p>
          <p><strong>Problem Duration:</strong> ${data.problemDuration}</p>
          <p><strong>Previous Treatment:</strong> ${data.previousTreatment || "None specified"}</p>
        </div>

        <!-- Lifestyle Information -->
        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Lifestyle Information</h3>
          <p><strong>Occupation:</strong> ${data.occupation}</p>
          <p><strong>Exercise Frequency:</strong> ${data.exerciseFrequency}</p>
          <p><strong>Exercise Type:</strong> ${data.exerciseType || "Not specified"}</p>
          <p><strong>Sleep Quality:</strong> ${data.sleepQuality}</p>
          <p><strong>Stress Level:</strong> ${data.stressLevel}</p>
        </div>

        <!-- Treatment Goals -->
        <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Treatment Goals</h3>
          <p style="white-space: pre-wrap; line-height: 1.6; background: white; padding: 10px; border-radius: 4px;">${data.treatmentGoals}</p>
        </div>

        <!-- Consent Information -->
        <div style="background-color: #f5f3ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Consent & Agreement</h3>
          <p><strong>Treatment Consent:</strong> ${data.consentTreatment ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Data Processing Consent:</strong> ${data.consentDataProcessing ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Marketing Consent:</strong> ${data.consentMarketing ? "✅ Yes" : "❌ No"}</p>
        </div>
        
        <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; font-size: 14px;">
          <p style="margin: 0;"><strong>Submission Time:</strong> ${new Date().toLocaleString("en-GB", {
            timeZone: "Europe/London",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        <p style="color: #6b7280; font-size: 14px; text-align: center;">
          This email was sent from the Keystone Sports Therapy new patient form.<br>
          <strong>Reply to this email to respond directly to ${data.firstName}.</strong>
        </p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log("New patient email sent successfully!")
    return { success: true }
  } catch (error) {
    console.error("New patient email sending failed:", error)
    throw new Error("Failed to send new patient email")
  }
}

export async function sendNewPatientConfirmationEmail(data: NewPatientFormData) {
  const mailOptions = {
    from: process.env.EMAIL_FROM || "Keystone Sports Therapy <hello@kstherapyclinic.com>",
    to: data.email,
    subject: "Thank you for your New Patient Form - Keystone Sports Therapy",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0f766e;">Thank you for completing your New Patient Form!</h2>
        
        <p>Dear ${data.firstName},</p>
        
        <p>Thank you for completing your new patient form with Keystone Sports Therapy. We have received all your information and will review it before your appointment.</p>
        
        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">What happens next?</h3>
          <ul style="line-height: 1.6;">
            <li>We'll review your medical history and current problem</li>
            <li>Our team will contact you to schedule your first appointment</li>
            <li>Please arrive 10 minutes early for your appointment</li>
            <li>Bring comfortable clothing suitable for examination and treatment</li>
          </ul>
        </div>

        <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Your Treatment Goals</h3>
          <p style="font-style: italic;">"${data.treatmentGoals}"</p>
          <p>We'll work together to help you achieve these goals through our comprehensive treatment approach.</p>
        </div>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
          <p><strong>Phone:</strong> Call us if you have any questions before your appointment</p>
          <p><strong>Email:</strong> hello@kstherapyclinic.com</p>
          <p><strong>Address:</strong> 71 Castlegate, Grantham, NG31 6SQ</p>
        </div>

        <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; font-size: 14px;"><strong>Important:</strong> If you need to cancel or reschedule your appointment, please give us at least 24 hours notice.</p>
        </div>
        
        <p>We look forward to helping you on your journey to better health and achieving your treatment goals.</p>
        
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
    console.error("New patient confirmation email sending failed:", error)
    // Don't throw error for confirmation email - it's not critical
    return { success: false }
  }
}
