# Security Setup for Contact Form

The contact form now includes multiple layers of security to prevent spam and abuse:

## 🔒 Security Features Implemented

1. **Google reCAPTCHA v3 (Invisible)**
   - Runs in the background without user interaction
   - Scores user behavior (0.0 = bot, 1.0 = human)
   - Only accepts scores >= 0.5

2. **Rate Limiting**
   - 5 requests per 15 minutes per IP address
   - Prevents spam and abuse
   - Returns 429 status when limit exceeded

3. **Honeypot Field**
   - Hidden field that bots typically fill out
   - Legitimate users never see or fill it
   - Silently rejects submissions with filled honeypot

4. **Input Validation**
   - Field length limits
   - Email format validation
   - Suspicious pattern detection
   - URL count limits

5. **Request Validation**
   - All required fields must be present
   - Data sanitization and validation

## 🚀 Setup Instructions

### 1. Get Google reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "Create" to register a new site
3. Choose **reCAPTCHA v3**
4. Add your domain (e.g., `kstherapyclinic.com` or `localhost` for testing)
5. Accept the terms and submit
6. You'll receive two keys:
   - **Site Key** (public) - used in the frontend
   - **Secret Key** (private) - used in the backend

### 2. Add Environment Variables

Add these to your `.env.local` file:

```env
# reCAPTCHA Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

**Important:**
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - This is safe to expose in the frontend
- `RECAPTCHA_SECRET_KEY` - Keep this secret! Never commit it to version control

### 3. For Production

When deploying to production:

1. Add the environment variables to your hosting platform (Vercel, Netlify, etc.)
2. Make sure to add your production domain to the reCAPTCHA allowed domains list
3. Test the form to ensure reCAPTCHA is working

## 📊 How It Works

### Client-Side (Contact Form)
1. User fills out the form
2. reCAPTCHA v3 runs invisibly in the background
3. Form submission includes reCAPTCHA token
4. Honeypot field is checked (should be empty)

### Server-Side (API Route)
1. Rate limiting check (5 requests per 15 minutes)
2. Input validation and sanitization
3. reCAPTCHA token verification with Google
4. Suspicious pattern detection
5. If all checks pass, email is sent

## 🛡️ Security Layers Explained

### Rate Limiting
- **Limit**: 5 requests per 15 minutes per IP
- **Purpose**: Prevents automated spam attacks
- **Response**: Returns 429 status with reset time

### Honeypot Field
- **Field Name**: `website` (hidden from users)
- **Purpose**: Bots often fill all fields, including hidden ones
- **Action**: Silently rejects if filled

### reCAPTCHA v3 Scoring
- **Score Range**: 0.0 (bot) to 1.0 (human)
- **Threshold**: 0.5 (configurable in `lib/recaptcha.ts`)
- **Purpose**: Analyzes user behavior patterns

### Input Validation
- **Name fields**: Max 100 characters
- **Email**: Max 255 characters, must be valid format
- **Phone**: Max 20 characters
- **Message**: Max 5000 characters
- **URLs**: Max 3 URLs per message

## 🔧 Customization

### Adjust Rate Limits
Edit `lib/rate-limit.ts`:
```typescript
rateLimit(clientId, 5, 15 * 60 * 1000) // 5 requests per 15 minutes
```

### Adjust reCAPTCHA Score Threshold
Edit `lib/recaptcha.ts`:
```typescript
return data.success === true && (data.score || 0) >= 0.5 // Change 0.5 to your threshold
```

### Add More Suspicious Patterns
Edit `app/api/contact/route.ts` in the `suspiciousPatterns` array.

## 📝 Testing

1. **Test Normal Submission**
   - Fill out form normally
   - Should submit successfully

2. **Test Rate Limiting**
   - Submit form 6 times quickly
   - 6th submission should be blocked

3. **Test reCAPTCHA**
   - Form should work without visible challenge
   - Check browser console for reCAPTCHA errors

4. **Test Honeypot**
   - Use browser dev tools to fill the hidden `website` field
   - Submission should be silently rejected

## 🚨 Troubleshooting

### reCAPTCHA Not Working
- Check that `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set
- Verify domain is added to reCAPTCHA allowed domains
- Check browser console for errors

### Rate Limiting Too Strict
- Adjust limits in `lib/rate-limit.ts`
- Consider using Redis for production (better than in-memory)

### False Positives
- Lower reCAPTCHA score threshold (currently 0.5)
- Review suspicious pattern detection rules

## 📚 Additional Resources

- [Google reCAPTCHA v3 Documentation](https://developers.google.com/recaptcha/docs/v3)
- [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)

