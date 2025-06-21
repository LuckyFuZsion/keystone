import { type NextRequest, NextResponse } from "next/server"
import { sendNewPatientEmail, sendNewPatientConfirmationEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = [
      "name",
      "dateOfBirth",
      "contactNumber",
      "contactEmail",
      "address",
      "occupation",
      "emergencyContactName",
      "emergencyContactNumber",
      "gpSurgery",
      "gpSurgeryContact",
      "consentTreatment",
    ]

    for (const field of requiredFields) {
      if (!body[field] && body[field] !== false) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }

    // Send email to the clinic
    await sendNewPatientEmail(body)

    // Send confirmation email to the patient
    await sendNewPatientConfirmationEmail(body)

    // Log the submission for debugging
    console.log("New patient form submission:", {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: "New patient form submitted successfully",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("New patient form error:", error)
    return NextResponse.json({ error: "Failed to submit form. Please try again later." }, { status: 500 })
  }
}
