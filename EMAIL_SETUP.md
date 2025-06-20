# Email Setup for Contact Form

The contact form now sends emails to `hello@kstherapyclinic.com` when someone submits a message. Here's how to set it up:

## 📧 Email Configuration

### 1. Update Environment Variables

Edit the `.env.local` file and replace the placeholder values:

```env
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASS=your-app-password
```

### 2. Gmail Setup (Recommended)

If using Gmail, you'll need to:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Navigate to Security → 2-Step Verification → App passwords
   - Select "Mail" and generate a password
   - Use this generated password in `EMAIL_PASS`

### 3. Alternative Email Services

You can change the email service in `lib/email.ts`:

```typescript
const transporter = nodemailer.createTransport({
  service: 'outlook', // or 'yahoo', 'hotmail', etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})
```

## 📬 What Happens When Someone Submits the Form

1. **Email to Clinic**: A formatted email is sent to `hello@kstherapyclinic.com` with:
   - Contact information (name, email, phone)
   - The message content
   - Submission timestamp
   - Professional formatting

2. **Confirmation Email**: An automatic reply is sent to the person who submitted the form with:
   - Thank you message
   - What happens next
   - Contact information
   - Professional branding

## 🔧 Testing the Email Functionality

1. Start the development server: `npm run dev`
2. Go to `/contact` and submit a test form
3. Check your email inbox for the confirmation
4. Check the clinic email for the notification

## 🚨 Important Notes

- **Never commit real email credentials** to version control
- The `.env.local` file is already in `.gitignore`
- For production, use environment variables on your hosting platform
- Consider using a dedicated email service like SendGrid for better deliverability

## 📋 Email Templates

The email templates are located in `lib/email.ts` and can be customized to match your branding and messaging preferences. 