import BookwhenCalendar from "@/components/bookwhen-calendar"

export default function BookPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto pt-40">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Book Your Appointment
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Select your preferred date and time below to schedule your appointment.
              We look forward to helping you on your journey to better health.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <div className="w-full overflow-hidden">
              <BookwhenCalendar />
            </div>
          </div>

          {/* Additional information section */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
            <div className="bg-gray-50 rounded-lg p-4 md:p-6">
              <h2 className="font-semibold text-gray-900 mb-2">Appointment Duration</h2>
              <p className="text-gray-600">
                Initial consultations typically last 60 minutes, while follow-up sessions are 30-45 minutes.
                Please arrive 5 minutes before your scheduled time.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 md:p-6">
              <h2 className="font-semibold text-gray-900 mb-2">Cancellation Policy</h2>
              <p className="text-gray-600">
                We require 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a fee.
                Please contact us if you need to reschedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 