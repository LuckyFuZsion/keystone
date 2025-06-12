import { Calendar, Clock, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HolidaysPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Holidays & Opening Hours</h1>
            <p className="text-xl text-gray-600">Stay informed about our clinic schedule</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <span>Regular Opening Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Weekdays</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>By Appointment</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Weekends</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>By Appointment</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                  <p className="text-sm text-teal-800">
                    <strong>Note:</strong> We offer flexible appointment times to suit your schedule. Please contact us
                    to arrange a convenient time for your session.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>Holiday Schedule 2024</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Bank Holidays</h3>
                      <div className="space-y-2 text-gray-600">
                        <div>New Year's Day - Closed</div>
                        <div>Good Friday - Closed</div>
                        <div>Easter Monday - Closed</div>
                        <div>Early May Bank Holiday - Closed</div>
                        <div>Spring Bank Holiday - Closed</div>
                        <div>Summer Bank Holiday - Closed</div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Christmas Period</h3>
                      <div className="space-y-2 text-gray-600">
                        <div>Christmas Eve - Limited Hours</div>
                        <div>Christmas Day - Closed</div>
                        <div>Boxing Day - Closed</div>
                        <div>New Year's Eve - Limited Hours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                  <span>Important Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h3 className="font-semibold text-orange-800 mb-2">Emergency Appointments</h3>
                    <p className="text-orange-700 text-sm">
                      For urgent appointments during holiday periods, please contact us via email at
                      hello@kstherapyclinic.com and we will do our best to accommodate your needs.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Advance Booking</h3>
                    <p className="text-blue-700 text-sm">
                      We recommend booking appointments well in advance during holiday periods as availability may be
                      limited.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Cancellation Policy</h3>
                    <p className="text-green-700 text-sm">
                      Please provide at least 24 hours notice for appointment cancellations. Holiday period
                      cancellations may require 48 hours notice.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
