import { Award, Heart, Users, Star, Clock } from "lucide-react"
import Image from "next/image"

export default function OwnerPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">Owner</h1>

            <div className="space-y-16">
              {/* Main intro section */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nutrition_advice-EnUdEB7VC2I8Dw51Ggn8kgkjKd874j.jpeg"
                    alt="Nasreen Alexandra Davison - Owner"
                    width={400}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Nasreen Alexandra Davison</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      My name is Nasreen Alexandra Davison and I am a qualified Advanced Personal Trainer (Level 4),
                      Sports Massage Therapist (Level 4) and Exercise Referral Specialist with a focus on Low Back Pain.
                      I am also an experienced APPI (Australian Physiotherapy & Pilates Institute) qualified Pilates
                      Instructor, teaching both Mat based and Reformer Pilates, tailoring the exercises to the specific
                      needs of my clients.
                    </p>
                    <p>
                      I set up Keystone Sports Therapy to help clients return to good functional movement and activities
                      of daily living.
                    </p>
                  </div>

                  <div className="mt-8 space-y-3">
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-teal-600" />
                      <span className="text-gray-700">Advanced Personal Trainer (Level 4)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-teal-600" />
                      <span className="text-gray-700">Sports Massage Therapist (Level 4)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-teal-600" />
                      <span className="text-gray-700">Exercise Referral Specialist - Low Back Pain Focus</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-teal-600" />
                      <span className="text-gray-700">APPI Qualified Pilates Instructor</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience & Background */}
              <div className="bg-teal-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Professional Experience</h3>
                </div>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    I am the former Lead Therapist for Peterborough Lions, who looked after the players in all aspects
                    of rehabilitation, ranging from taping and strapping to soft tissue work as well as dry needling and
                    Acupuncture for Sports Injuries to covering trauma support on match days.
                  </p>
                  <p>
                    My extensive experience in amateur sports has allowed me to understand movement patterns and injury
                    management as well as graduated return to play - something I draw on when writing training and
                    recovery programmes.
                  </p>
                </div>
              </div>

              {/* Philosophy */}
              <div className="bg-blue-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">My Philosophy</h3>
                </div>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Pain, whether through injury or illness, can limit your enjoyment of all the things you love:
                    playing your favourite sport, taking your children or grandchildren to the park or simply move more
                    freely when gardening or going about your daily routine.
                  </p>
                  <p>
                    At Keystone Sports Therapy I focus on your needs and goals. After an initial movement assessment I
                    will design a personalised programme for you that will set you on the route to recovery and
                    achieving your goals.
                  </p>
                </div>
              </div>

              {/* Specializations */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Pre & Postnatal */}
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Pre & Postnatal Care</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    I am a Pre- and Postnatal exercise qualified instructor and cherish coaching mums to be and new
                    mummies how to look after themselves and their fitness. I know the struggles having had 4 children
                    of my own and I am aware of the barriers to exercise that new mums are facing. I will design a way
                    around the issues that hold you back from making time for yourself.
                  </p>
                </div>

                {/* Menopause Support */}
                <div className="bg-purple-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Menopause Support</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Another area of focus for me is peri to post-menopause advice - I have studied this extensively and
                    am on hand to advise how best to overcome these fundamental changes in any woman's life. My training
                    advice combined with nutritional guidance will leave you feeling empowered and confident.
                  </p>
                </div>
              </div>

              {/* Treatment Options */}
              <div className="bg-orange-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Treatment Options</h3>
                </div>
                <div className="text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    These plans can range from in-depth exercise plans to hands on massage treatments or a combination
                    of the two as well as incorporating functional tests and the use of:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span>Dry Needling</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span>Acupuncture for Sports Injuries</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span>Dry and Fire Cupping</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span>Nutrition Coaching</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span>B12 Injections</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span>Home Visits Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Personal Connection */}
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Personal Connection</h3>
                </div>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  I have invested in developing a personal connection with each and every one of my customers, by
                  providing quality service and offering tailor-made treatments to help them regain their strength and
                  functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
