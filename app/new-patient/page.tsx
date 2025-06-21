"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Form validation schema
const newPatientFormSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["male", "female", "other", "prefer-not-to-say"], {
    required_error: "Please select your gender",
  }),
  address: z.string().min(5, "Address is required"),
  postcode: z.string().min(5, "Postcode is required"),
  phone: z.string().min(10, "Phone number is required"),
  email: z.string().email("Please enter a valid email address"),
  emergencyContactName: z.string().min(2, "Emergency contact name is required"),
  emergencyContactPhone: z.string().min(10, "Emergency contact phone is required"),

  // Medical History
  currentMedication: z.string().optional(),
  allergies: z.string().optional(),
  medicalConditions: z.string().optional(),
  previousSurgeries: z.string().optional(),

  // Current Problem
  problemDescription: z.string().min(10, "Please describe your current problem"),
  painLevel: z.string().min(1, "Please rate your pain level"),
  problemDuration: z.string().min(1, "Please specify how long you've had this problem"),
  previousTreatment: z.string().optional(),

  // Lifestyle
  occupation: z.string().min(2, "Occupation is required"),
  exerciseFrequency: z.enum(["none", "1-2-times", "3-4-times", "5-plus-times"], {
    required_error: "Please select your exercise frequency",
  }),
  exerciseType: z.string().optional(),
  sleepQuality: z.enum(["excellent", "good", "fair", "poor"], {
    required_error: "Please rate your sleep quality",
  }),
  stressLevel: z.enum(["low", "moderate", "high"], {
    required_error: "Please rate your stress level",
  }),

  // Goals and Expectations
  treatmentGoals: z.string().min(10, "Please describe your treatment goals"),

  // Consent and Agreement
  consentTreatment: z.boolean().refine((val) => val === true, {
    message: "You must consent to treatment",
  }),
  consentDataProcessing: z.boolean().refine((val) => val === true, {
    message: "You must consent to data processing",
  }),
  consentMarketing: z.boolean().optional(),
})

type NewPatientFormData = z.infer<typeof newPatientFormSchema>

export default function NewPatientPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<NewPatientFormData>({
    resolver: zodResolver(newPatientFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      address: "",
      postcode: "",
      phone: "",
      email: "",
      emergencyContactName: "",
      emergencyContactPhone: "",
      currentMedication: "",
      allergies: "",
      medicalConditions: "",
      previousSurgeries: "",
      problemDescription: "",
      painLevel: "",
      problemDuration: "",
      previousTreatment: "",
      occupation: "",
      exerciseType: "",
      treatmentGoals: "",
      consentTreatment: false,
      consentDataProcessing: false,
      consentMarketing: false,
    },
  })

  const onSubmit = async (data: NewPatientFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/new-patient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      toast({
        title: "Form submitted successfully!",
        description: "We'll review your information and contact you soon to schedule your appointment.",
      })

      form.reset()
    } catch (error) {
      toast({
        title: "Error submitting form",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-teal-50">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">New Patient Form</h1>
            <p className="text-xl text-gray-600">Please complete this form before your first appointment</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Patient Information & Medical History</CardTitle>
              <CardDescription>
                All information provided will be kept strictly confidential and used only for treatment purposes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date of Birth *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Gender *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select gender" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address *</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your full address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="postcode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Postcode *</FormLabel>
                            <FormControl>
                              <Input placeholder="NG31 6SQ" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="07123 456789" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="emergencyContactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Emergency Contact Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Contact name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="emergencyContactPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Emergency Contact Phone *</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="07123 456789" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Medical History */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Medical History</h3>

                    <FormField
                      control={form.control}
                      name="currentMedication"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Medication</FormLabel>
                          <FormControl>
                            <Textarea placeholder="List any current medications, including dosage" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="allergies"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Allergies</FormLabel>
                          <FormControl>
                            <Textarea placeholder="List any known allergies" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="medicalConditions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Medical Conditions</FormLabel>
                          <FormControl>
                            <Textarea placeholder="List any current or past medical conditions" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="previousSurgeries"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Previous Surgeries</FormLabel>
                          <FormControl>
                            <Textarea placeholder="List any previous surgeries and dates" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Current Problem */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Current Problem</h3>

                    <FormField
                      control={form.control}
                      name="problemDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Describe Your Current Problem *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please describe your symptoms, when they started, and what makes them better or worse"
                              className="h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="painLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Pain Level (0-10) *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select pain level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {[...Array(11)].map((_, i) => (
                                  <SelectItem key={i} value={i.toString()}>
                                    {i} {i === 0 ? "(No pain)" : i === 10 ? "(Worst pain)" : ""}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="problemDuration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How Long Have You Had This Problem? *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select duration" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="less-than-week">Less than a week</SelectItem>
                                <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                                <SelectItem value="3-4-weeks">3-4 weeks</SelectItem>
                                <SelectItem value="1-3-months">1-3 months</SelectItem>
                                <SelectItem value="3-6-months">3-6 months</SelectItem>
                                <SelectItem value="6-12-months">6-12 months</SelectItem>
                                <SelectItem value="over-year">Over a year</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="previousTreatment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Previous Treatment</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Have you received any treatment for this problem? If so, what and when?"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Lifestyle */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Lifestyle Information</h3>

                    <FormField
                      control={form.control}
                      name="occupation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Occupation *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your job title or occupation" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="exerciseFrequency"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Exercise Frequency *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="How often do you exercise?" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="none">No regular exercise</SelectItem>
                                <SelectItem value="1-2-times">1-2 times per week</SelectItem>
                                <SelectItem value="3-4-times">3-4 times per week</SelectItem>
                                <SelectItem value="5-plus-times">5+ times per week</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="exerciseType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Type of Exercise</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Running, gym, swimming, football" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="sleepQuality"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sleep Quality *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Rate your sleep quality" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="excellent">Excellent</SelectItem>
                                <SelectItem value="good">Good</SelectItem>
                                <SelectItem value="fair">Fair</SelectItem>
                                <SelectItem value="poor">Poor</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="stressLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Stress Level *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Rate your stress level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="moderate">Moderate</SelectItem>
                                <SelectItem value="high">High</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Goals and Expectations */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Treatment Goals</h3>

                    <FormField
                      control={form.control}
                      name="treatmentGoals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What Are Your Goals for Treatment? *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="e.g., Return to sport, reduce pain, improve mobility, prevent future injury"
                              className="h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Consent and Agreement */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Consent & Agreement</h3>

                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="consentTreatment"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-normal">
                                I consent to examination and treatment by Keystone Sports Therapy. I understand that no
                                guarantee of recovery has been made. *
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="consentDataProcessing"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-normal">
                                I consent to my personal data being processed for the purpose of providing healthcare
                                services, in accordance with GDPR regulations. *
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="consentMarketing"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-normal">
                                I would like to receive updates about services, health tips, and special offers from
                                Keystone Sports Therapy (optional).
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting Form...
                      </>
                    ) : (
                      "Submit New Patient Form"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
