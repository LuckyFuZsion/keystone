// Server-side reCAPTCHA verification

export async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not set')
    return false
  }

  if (!token) {
    return false
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()

    // Check if verification was successful and score is acceptable
    // reCAPTCHA v3 returns a score from 0.0 to 1.0
    // 0.0 is very likely a bot, 1.0 is very likely a human
    // We'll accept scores >= 0.5
    return data.success === true && (data.score || 0) >= 0.5
  } catch (error) {
    console.error('reCAPTCHA verification error:', error)
    return false
  }
}

