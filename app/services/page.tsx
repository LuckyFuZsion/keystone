"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Star, Users, Award, Heart, MapPin, RotateCcw } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ServicesPage() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({})

  const toggleCard = (cardId: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional sports therapy and fitness services with transparent pricing
            </p>
            <p className="text-sm text-gray-500 mt-2">Click on any card to see more details</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sports Massage Therapy */}
            <div className="relative h-160" style={{ perspective: "1000px" }}>
              <div
                className={`relative w-full h-full transition-transform duration-700 cursor-pointer`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards["massage"] ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                onClick={() => toggleCard("massage")}
              >
                {/* Front of card */}
                <Card
                  className="absolute inset-0 w-full h-full hover:shadow-lg transition-shadow border-0 shadow-md flex flex-col"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="h-64 relative overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/sports_massage.png"
                      alt="Sports Massage Therapy"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
                      <Users className="w-6 h-6 text-teal-600" />
                    </div>
                    <CardTitle className="text-lg">Sports Massage Therapy</CardTitle>
                    <CardDescription className="text-sm">
                      Professional sports massage with comprehensive assessment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="space-y-2 flex-1">
                      <div className="flex justify-between items-center text-sm">
                        <span>Initial Consultation (Client Intake)</span>
                        <span className="font-bold text-teal-600">£70</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Movement Assessment & Treatment (1 hr)</span>
                        <span className="font-bold text-teal-600">£70</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Consecutive Treatment (60 mins)</span>
                        <span className="font-bold text-teal-600">£60</span>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <Link href="/contact">
                        <Button
                          className="w-full bg-teal-600 hover:bg-teal-700 text-sm py-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Book Now
                        </Button>
                      </Link>
                      <div className="flex items-center justify-center text-teal-600">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        <span className="text-xs">More Details</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Back of card */}
                <Card
                  className="absolute inset-0 w-full h-full hover:shadow-lg transition-shadow border-0 shadow-md bg-teal-50 flex flex-col"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="h-64 relative overflow-hidden rounded-t-lg bg-teal-100 flex items-center justify-center">
                    <div className="absolute inset-0 bg-teal-900/20"></div>
                    <h3 className="text-2xl font-bold text-white relative z-10 px-4 text-center">
                      Sports Massage Therapy Details
                    </h3>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-teal-800">What's Included</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="flex-1">
                      <div className="text-sm space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span>Sports Massage Therapy</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span>Remedial Massage Therapy</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span>Hot Stones Massage</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span>Dry Needling (no extra cost)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span>Acupuncture for Sports Injuries</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span>Cupping Therapy</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span>Taping & Strapping</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span>GP/Medical referral letter</span>
                        </div>
                      </div>
                      <p className="text-xs text-blue-600 font-medium mt-3">
                        15% Blue Light discount on all massage treatments until 31 May 2026 (card verification required).
                      </p>
                      <p className="text-xs text-gray-600 italic mt-2">
                        No additional cost for Dry Needling, Acupuncture, Cupping or Taping & Strapping. GP/medical referral letter available as part of the service fee.
                      </p>
                    </div>
                    <Link href="/contact">
                      <Button
                        className="w-full bg-teal-600 hover:bg-teal-700 text-sm py-2 mt-6"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Personal Training */}
            <div className="relative h-160" style={{ perspective: "1000px" }}>
              <div
                className={`relative w-full h-full transition-transform duration-700 cursor-pointer`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards["training"] ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                onClick={() => toggleCard("training")}
              >
                {/* Front of card */}
                <Card
                  className="absolute inset-0 w-full h-full hover:shadow-lg transition-shadow border-0 shadow-md flex flex-col"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="h-64 relative overflow-hidden rounded-t-lg">
                    <Image src="/images/personal_training.png" alt="Personal Training" fill className="object-cover" />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Personal Training</CardTitle>
                    <CardDescription className="text-sm">
                      Customised training programmes with flexible packages
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="space-y-2 flex-1">
                      <div className="flex justify-between items-center text-sm">
                        <span>Single Session (60 mins)</span>
                        <span className="font-bold text-blue-600">£50</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>5 Sessions (60 mins)</span>
                        <span className="font-bold text-blue-600">£240</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>10 Sessions</span>
                        <span className="font-bold text-blue-600">£450</span>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <Link href="/contact">
                        <Button
                          className="w-full bg-blue-600 hover:bg-blue-700 text-sm py-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Book Now
                        </Button>
                      </Link>
                      <div className="flex items-center justify-center text-blue-600">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        <span className="text-xs">More Details</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Back of card */}
                <Card
                  className="absolute inset-0 w-full h-full hover:shadow-lg transition-shadow border-0 shadow-md bg-blue-50 flex flex-col"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="h-64 relative overflow-hidden rounded-t-lg bg-blue-100 flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-900/20"></div>
                    <h3 className="text-2xl font-bold text-white relative z-10 px-4 text-center">
                      Personal Training Details
                    </h3>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-blue-800">Training Details</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="flex-1">
                      <div className="text-sm space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>Personalised workout programmes</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>Progress tracking & monitoring</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>Duet sessions available (+£10 levy)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>Clinical rehabilitation work (1:1)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>Flexible scheduling</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 italic mt-3">
                        I can accommodate Duet PT Sessions depending on goals and needs; Duet (bring a friend, share the cost: extra £10 levy per session which can be split equally between attendants).
                      </p>
                      <p className="text-xs text-gray-600 mt-2">
                        Clinical Rehabilitation Work (1:1) undertaken - price upon request. Please email me to discuss your requirements: <span className="text-blue-600">hello@kstherapyclinic.com</span>
                      </p>
                    </div>
                    <Link href="/contact">
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-sm py-2 mt-6"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Mat Based Pilates */}
            <div className="relative h-160" style={{ perspective: "1000px" }}>
              <div
                className={`relative w-full h-full transition-transform duration-700 cursor-pointer`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards["pilates"] ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                onClick={() => toggleCard("pilates")}
              >
                {/* Front of card */}
                <Card
                  className="absolute inset-0 w-full h-full hover:shadow-lg transition-shadow border-0 shadow-md flex flex-col"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="h-64 relative overflow-hidden rounded-t-lg">
                    <Image src="/images/mat_based_pilates.png" alt="Ropsley Village Pilates Class" fill className="object-cover" />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                      <Heart className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">Ropsley Village Pilates Class</CardTitle>
                    <CardDescription className="text-sm">APPI qualified Pilates instruction</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="space-y-2 flex-1">
                      <div className="flex justify-between items-center text-sm">
                        <span>6-week Subscription</span>
                        <span className="font-bold text-green-600">£48</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Drop-in Rate</span>
                        <span className="font-bold text-green-600">£10</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Class Time</span>
                        <span className="font-bold text-green-600">18:00-19:00</span>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <Link href="/contact">
                        <Button
                          className="w-full bg-green-600 hover:bg-green-700 text-sm py-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Book Now
                        </Button>
                      </Link>
                      <div className="flex items-center justify-center text-green-600">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        <span className="text-xs">More Details</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Back of card */}
                <Card
                  className="absolute inset-0 w-full h-full hover:shadow-lg transition-shadow border-0 shadow-md bg-green-50 flex flex-col"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="h-64 relative overflow-hidden rounded-t-lg bg-green-100 flex items-center justify-center">
                    <div className="absolute inset-0 bg-green-900/20"></div>
                    <h3 className="text-2xl font-bold text-white relative z-10 px-4 text-center">
                      Ropsley Village Pilates Class Details
                    </h3>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-green-800">Class Schedule</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="flex-1">
                      <div className="text-sm space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span>Every Tuesday 18:00-19:00</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span>Current Block: 11th June - 16th July</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span>Next Block: 3rd September - 8th October</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span>6-week subscription: £48</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span>Drop-in rate: £10 per person</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 italic mt-3">
                        Classes run in 6-week blocks. Book your place early to secure your spot!
                      </p>
                    </div>
                    <Link href="/contact">
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 text-sm py-2 mt-6"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Reformer Pilates */}
            <div className="relative h-160" style={{ perspective: "1000px" }}>
              <div
                className={`relative w-full h-full transition-transform duration-700 cursor-pointer`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards["reformer"] ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                onClick={() => toggleCard("reformer")}
              >
                {/* Front of card */}
                <Card
                  className="absolute inset-0 w-full h-full hover:shadow-lg transition-shadow border-0 shadow-md flex flex-col"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="h-64 relative overflow-hidden rounded-t-lg">
                    <Image src="/images/reformer.png" alt="Reformer Pilates" fill className="object-cover" />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <Star className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">Reformer Pilates 1:1</CardTitle>
                    <CardDescription className="text-sm">
                      Premium Reformer Pilates (Grantham clinic only)
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="space-y-2 flex-1">
                      <div className="flex justify-between items-center text-sm">
                        <span>Single Session (60 mins)</span>
                        <span className="font-bold text-purple-600">£65</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>5 Sessions</span>
                        <span className="font-bold text-purple-600">£310</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>10 Sessions</span>
                        <span className="font-bold text-purple-600">£600</span>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <Link href="/contact">
                        <Button
                          className="w-full bg-purple-600 hover:bg-purple-700 text-sm py-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Book Now
                        </Button>
                      </Link>
                      <div className="flex items-center justify-center text-purple-600">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        <span className="text-xs">More Details</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Back of card */}
                <Card
                  className="absolute inset-0 w-full h-full hover:shadow-lg transition-shadow border-0 shadow-md bg-purple-50 flex flex-col"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="h-64 relative overflow-hidden rounded-t-lg bg-purple-100 flex items-center justify-center">
                    <div className="absolute inset-0 bg-purple-900/20"></div>
                    <h3 className="text-2xl font-bold text-white relative z-10 px-4 text-center">
                      Reformer Pilates Details
                    </h3>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-purple-800">Premium Equipment</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="flex-1">
                      <div className="text-sm space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          <span>Latest Align Pilates machines (Grantham clinic)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          <span>Duet sessions available (+£10 levy)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          <span>Group classes: Single pass £20</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          <span>Group classes: 8 session pass £150</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          <span>Limited to 5 people per class</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          <span>50-minute sessions</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          <span>24-hour booking system closure</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          <span>24-hour cancellation policy</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 italic mt-3">
                        Book via email: <span className="text-purple-600">hello@kstherapyclinic.com</span> or booking system: <span className="text-purple-600">https://bookwhen.com/keystone</span>
                      </p>
                      <p className="text-xs text-gray-600 mt-2">
                        Please bring your own grip socks 🙏
                      </p>
                    </div>
                    <Link href="/contact">
                      <Button
                        className="w-full bg-purple-600 hover:bg-purple-700 text-sm py-2 mt-6"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Nutrition Advice */}
            <div className="relative h-160" style={{ perspective: "1000px" }}>
              <div
                className={`relative w-full h-full transition-transform duration-700 cursor-pointer`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards["nutrition"] ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                onClick={() => toggleCard("nutrition")}
              >
                {/* Front of card */}
                <Card
                  className="absolute inset-0 w-full h-full hover:shadow-lg transition-shadow border-0 shadow-md flex flex-col"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="h-64 relative overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/nutrition_advice.png"
                      alt="Nutrition Advice"
                      fill
                      className="object-cover"
                      style={{ objectPosition: "center 15%" }}
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">Nutrition Advice</CardTitle>
                    <CardDescription className="text-sm">
                      Personalised nutrition guidance and meal planning
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="space-y-2 flex-1">
                      <div className="flex justify-between items-center text-sm">
                        <span>Personalised Guidance (60mins)</span>
                        <span className="font-bold text-orange-600">£60</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Nutrition Plans (4 week plan)</span>
                        <span className="font-bold text-orange-600">£200</span>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <Link href="/contact">
                        <Button
                          className="w-full bg-orange-600 hover:bg-orange-700 text-sm py-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Book Now
                        </Button>
                      </Link>
                      <div className="flex items-center justify-center text-orange-600">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        <span className="text-xs">More Details</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Back of card */}
                <Card
                  className="absolute inset-0 w-full h-full hover:shadow-lg transition-shadow border-0 shadow-md bg-orange-50 flex flex-col"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="h-64 relative overflow-hidden rounded-t-lg bg-orange-100 flex items-center justify-center">
                    <div className="absolute inset-0 bg-orange-900/20"></div>
                    <h3 className="text-2xl font-bold text-white relative z-10 px-4 text-center">
                      Nutrition Advice Details
                    </h3>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-orange-800">Nutrition Services</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="flex-1">
                      <div className="text-sm space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                          <span>Comprehensive meal planning</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                          <span>Dietary guidance & education</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                          <span>Weight management support</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                          <span>Sports nutrition advice</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                          <span>Ongoing support & monitoring</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 italic mt-3">
                        Personalised approach to help you achieve your health and fitness goals.
                      </p>
                      <p className="text-xs text-gray-600 mt-2">
                        Contact us for personalised nutrition guidance and comprehensive meal planning.
                      </p>
                    </div>
                    <Link href="/contact">
                      <Button
                        className="w-full bg-orange-600 hover:bg-orange-700 text-sm py-2 mt-6"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* B12 Injections */}
            <div className="relative h-160" style={{ perspective: "1000px" }}>
              <div
                className={`relative w-full h-full transition-transform duration-700 cursor-pointer`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards["b12"] ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                onClick={() => toggleCard("b12")}
              >
                {/* Front of card */}
                <Card
                  className="absolute inset-0 w-full h-full hover:shadow-lg transition-shadow border-0 shadow-md flex flex-col"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="h-64 relative overflow-hidden rounded-t-lg">
                    <Image src="/images/b12_injections.png" alt="B12 Injections" fill className="object-cover" />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">B12 Injections</CardTitle>
                    <CardDescription className="text-sm">
                      Vitamin B12 injections for energy and wellness
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="space-y-2 flex-1">
                      <div className="flex justify-between items-center text-sm">
                        <span>Single injection</span>
                        <span className="font-bold text-red-600">£30</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>4 injections/vials (£25 per injection)</span>
                        <span className="font-bold text-red-600">£100</span>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <Link href="/contact">
                        <Button
                          className="w-full bg-red-600 hover:bg-red-700 text-sm py-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Book Now
                        </Button>
                      </Link>
                      <div className="flex items-center justify-center text-red-600">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        <span className="text-xs">More Details</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Back of card */}
                <Card
                  className="absolute inset-0 w-full h-full hover:shadow-lg transition-shadow border-0 shadow-md bg-red-50 flex flex-col"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="h-64 relative overflow-hidden rounded-t-lg bg-red-100 flex items-center justify-center">
                    <div className="absolute inset-0 bg-red-900/20"></div>
                    <h3 className="text-2xl font-bold text-white relative z-10 px-4 text-center">
                      B12 Injections Details
                    </h3>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-red-800">B12 Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="flex-1">
                      <div className="text-sm space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span>Increased energy levels</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span>Improved mood & mental clarity</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span>Enhanced metabolism</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span>Better sleep quality</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span>Immune system support</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 italic mt-3">
                        Safe, effective vitamin B12 supplementation for optimal wellness.
                      </p>
                      <p className="text-xs text-gray-600 mt-2">
                        Contact us for more information and to book your appointment.
                      </p>
                    </div>
                    <Link href="/contact">
                      <Button
                        className="w-full bg-red-600 hover:bg-red-700 text-sm py-2 mt-6"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
