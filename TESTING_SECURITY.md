# Testing Security Features

This guide will help you test all the security features added to the contact form.

## 🚀 Quick Start

1. **Start/Restart your development server** (if not already running):
   ```bash
   npm run dev
   ```
   ⚠️ **Important**: Restart the server after adding the reCAPTCHA keys to `.env.local`

2. **Open the contact form**:
   - Navigate to `http://localhost:3000/contact` in your browser

## ✅ Test 1: Normal Form Submission

**Purpose**: Verify the form works correctly for legitimate users.

**Steps**:
1. Fill out the form with valid information:
   - First Name: `John`
   - Last Name: `Doe`
   - Email: `john@example.com`
   - Phone: `07123456789`
   - Message: `I would like to book an appointment`
2. Click "Send Message"
3. **Expected Result**: 
   - Form submits successfully
   - Success toast message appears
   - Form fields are cleared
   - Email is sent (check your inbox)

**What's happening behind the scenes**:
- reCAPTCHA v3 runs invisibly and scores your interaction
- Rate limit counter increments
- All validations pass

---

## 🚫 Test 2: Rate Limiting

**Purpose**: Verify that spam/abuse is prevented by limiting requests.

**Steps**:
1. Submit the form 5 times quickly (use valid data each time)
2. On the 6th submission, you should see an error
3. **Expected Result**:
   - First 5 submissions: ✅ Success
   - 6th submission: ❌ Error: "Too many requests. Please try again later."
   - Wait 15 minutes OR restart the server to reset the limit

**Note**: The rate limit is stored in memory, so restarting the dev server resets it.

---

## 🤖 Test 3: Honeypot Field (Bot Detection)

**Purpose**: Verify that bots filling hidden fields are caught.

**Steps**:
1. Open browser Developer Tools (F12)
2. Go to the Console tab
3. Run this JavaScript to fill the honeypot field:
   ```javascript
   document.querySelector('input[name="website"]').value = "spam-bot"
   ```
4. Fill out the form normally
5. Submit the form
6. **Expected Result**:
   - Form appears to submit (no error shown to user)
   - But the submission is silently rejected
   - No email is sent
   - Check browser Network tab - you'll see the request, but it's rejected server-side

**Note**: This is intentionally silent to avoid teaching bots how to bypass it.

---

## 📧 Test 4: Input Validation

**Purpose**: Verify that invalid inputs are rejected.

### Test 4a: Missing Required Fields

**Steps**:
1. Leave one or more required fields empty
2. Try to submit
3. **Expected Result**: 
   - Form validation errors appear
   - Form won't submit

### Test 4b: Invalid Email

**Steps**:
1. Enter an invalid email like `notanemail`
2. Try to submit
3. **Expected Result**: 
   - Email validation error appears
   - Form won't submit

### Test 4c: Too Long Message

**Steps**:
1. Enter a message longer than 5000 characters
2. Try to submit
3. **Expected Result**: 
   - Server returns error: "Message is too long"
   - Form submission fails

### Test 4d: Too Many URLs

**Steps**:
1. Enter a message with more than 3 URLs:
   ```
   Check out https://example1.com and https://example2.com 
   and https://example3.com and https://example4.com
   ```
2. Submit the form
3. **Expected Result**: 
   - Error: "Message contains too many links"
   - Form submission fails

---

## 🔍 Test 5: reCAPTCHA Verification

**Purpose**: Verify reCAPTCHA is working correctly.

### Test 5a: Check reCAPTCHA is Loading

**Steps**:
1. Open browser Developer Tools (F12)
2. Go to the Console tab
3. Submit the form
4. **Expected Result**: 
   - No reCAPTCHA errors in console
   - Form submits successfully

### Test 5b: Test Without reCAPTCHA Token

**Steps**:
1. Open browser Developer Tools (F12)
2. Go to the Network tab
3. Submit the form
4. Click on the `/api/contact` request
5. Check the Request Payload
6. **Expected Result**: 
   - You should see `recaptchaToken` in the payload
   - Token should be a long string

### Test 5c: Simulate Failed reCAPTCHA

**Steps**:
1. Temporarily set a wrong secret key in `.env.local`:
   ```
   RECAPTCHA_SECRET_KEY=wrong_key_here
   ```
2. Restart the server
3. Submit the form
4. **Expected Result**: 
   - Error: "reCAPTCHA verification failed. Please try again."
5. **Restore the correct key** and restart server

---

## 🧪 Test 6: Browser Console Checks

**Purpose**: Verify no errors in the console.

**Steps**:
1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Clear the console
4. Navigate to the contact page
5. Submit the form
6. **Expected Result**: 
   - No red errors
   - reCAPTCHA loads without errors
   - Form submission completes

---

## 📊 Test 7: Network Request Inspection

**Purpose**: Verify the API is working correctly.

**Steps**:
1. Open browser Developer Tools (F12)
2. Go to Network tab
3. Filter by "Fetch/XHR"
4. Submit the form
5. Click on the `/api/contact` request
6. Check:
   - **Status**: Should be `200` for successful submissions
   - **Request Headers**: Should include `Content-Type: application/json`
   - **Request Payload**: Should include all form fields + `recaptchaToken`
   - **Response**: Should include rate limit headers:
     - `X-RateLimit-Limit: 5`
     - `X-RateLimit-Remaining: 4` (after first submission)
     - `X-RateLimit-Reset: [timestamp]`

---

## 🐛 Troubleshooting

### reCAPTCHA Not Working

**Symptoms**: Console errors about reCAPTCHA

**Solutions**:
1. ✅ Verify `.env.local` has both keys set correctly
2. ✅ Restart the dev server after adding keys
3. ✅ Check that domain is added to reCAPTCHA admin console
4. ✅ For localhost testing, make sure `localhost` is in allowed domains

### Rate Limiting Not Working

**Symptoms**: Can submit more than 5 times

**Solutions**:
1. ✅ Check that you're testing from the same IP
2. ✅ Rate limit is per IP - try from different network
3. ✅ Restart server resets in-memory store

### Form Not Submitting

**Symptoms**: Form hangs or shows error

**Solutions**:
1. ✅ Check browser console for errors
2. ✅ Check Network tab for failed requests
3. ✅ Verify email configuration is correct
4. ✅ Check server logs for errors

---

## 📝 Test Checklist

Use this checklist to verify all features:

- [ ] Normal form submission works
- [ ] Success message appears after submission
- [ ] Email is received (check inbox)
- [ ] Rate limiting blocks after 5 submissions
- [ ] Honeypot field rejects bot submissions
- [ ] Invalid email is rejected
- [ ] Missing fields show validation errors
- [ ] Long messages are rejected
- [ ] Too many URLs are rejected
- [ ] reCAPTCHA token is included in requests
- [ ] No console errors
- [ ] Rate limit headers appear in response

---

## 🎯 Quick Test Script

Run this in browser console to quickly test multiple scenarios:

```javascript
// Test 1: Check if reCAPTCHA is loaded
console.log('reCAPTCHA loaded:', typeof window.grecaptcha !== 'undefined');

// Test 2: Check form fields
const form = document.querySelector('form');
console.log('Form found:', !!form);

// Test 3: Check honeypot field
const honeypot = document.querySelector('input[name="website"]');
console.log('Honeypot field:', honeypot ? 'Found (hidden)' : 'Not found');
console.log('Honeypot value:', honeypot?.value || 'empty');
```

---

## 💡 Pro Tips

1. **Use Incognito Mode**: Test rate limiting more easily
2. **Check Server Logs**: Look for security-related logs in terminal
3. **Test on Mobile**: Verify reCAPTCHA works on mobile devices
4. **Monitor Email**: Check spam folder if emails aren't arriving
5. **Network Tab**: Always check Network tab for failed requests

---

## 🚨 Production Testing

Before going live:

1. ✅ Test on staging/production domain
2. ✅ Verify reCAPTCHA keys work on production domain
3. ✅ Test rate limiting with real IPs
4. ✅ Monitor for false positives (legitimate users blocked)
5. ✅ Adjust reCAPTCHA score threshold if needed (in `lib/recaptcha.ts`)

