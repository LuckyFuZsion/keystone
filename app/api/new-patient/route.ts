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

    // Transform the data to match the email library expectations
    const emailData = {
      firstName: body.name.split(' ')[0] || body.name,
      lastName: body.name.split(' ').slice(1).join(' ') || '',
      dateOfBirth: body.dateOfBirth,
      gender: 'Not specified',
      address: body.address,
      postcode: 'Not specified',
      phone: body.contactNumber,
      email: body.contactEmail,
      emergencyContactName: body.emergencyContactName,
      emergencyContactPhone: body.emergencyContactNumber,
      currentMedication: body.otherRelevantInfo || '',
      allergies: body.allergies ? 'Yes' : 'No',
      medicalConditions: [
        body.heartDisease && 'Heart disease',
        body.faintDizziness && 'Faint/dizziness',
        body.hypertension && 'Hypertension',
        body.diabetes && 'Diabetes',
        body.pacemaker && 'Pacemaker',
        body.osteoporosis && 'Osteoporosis',
        body.epilepsy && 'Epilepsy',
        body.asthma && 'Asthma',
        body.pregnant && 'Pregnant',
        body.smoker && 'Smoker',
        body.cancer && 'Cancer',
        body.surgeries && 'Previous surgeries',
        body.medications && 'Taking medications',
        body.bleedingDisorders && 'Bleeding disorders'
      ].filter(Boolean).join(', ') || 'None',
      previousSurgeries: body.surgeries ? 'Yes' : 'No',
      problemDescription: body.otherRelevantInfo || 'Not specified',
      painLevel: 'Not specified',
      problemDuration: 'Not specified',
      previousTreatment: 'Not specified',
      occupation: body.occupation,
      exerciseFrequency: 'Not specified',
      exerciseType: body.sportsHobbies || 'Not specified',
      sleepQuality: 'Not specified',
      stressLevel: 'Not specified',
      treatmentGoals: body.otherRelevantInfo || 'Not specified',
      consentTreatment: body.consentTreatment,
      consentDataProcessing: body.consentTreatment,
      consentMarketing: false,
      heartDisease: body.heartDisease,
      faintDizziness: body.faintDizziness,
      hypertension: body.hypertension,
      diabetes: body.diabetes,
      pacemaker: body.pacemaker,
      osteoporosis: body.osteoporosis,
      epilepsy: body.epilepsy,
      asthma: body.asthma,
      pregnant: body.pregnant,
      smoker: body.smoker,
      cancer: body.cancer,
      surgeries: body.surgeries,
      medications: body.medications,
      bleedingDisorders: body.bleedingDisorders,
    }

    // Send email to the clinic
    await sendNewPatientEmail(emailData)

    // Send confirmation email to the patient
    await sendNewPatientConfirmationEmail(emailData)

    // Log the submission for debugging
    console.log("New patient form submission:", {
      name: body.name,
      email: body.contactEmail,
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
