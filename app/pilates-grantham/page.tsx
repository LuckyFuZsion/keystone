import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BookwhenCalendarWrapper from "@/components/bookwhen-calendar-wrapper"
import { FaqJsonLd } from "@/components/json-ld"
import { siteConfig } from "@/lib/site"
import { images } from "@/lib/images"
import { Award, CheckCircle, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Pilates Grantham | Reformer & Mat Classes",
  description:
    "Reformer and Mat Pilates in Grantham. APPI-qualified instruction, Align Pilates equipment, group and 1:1 sessions. Book online at our Castlegate clinic.",
  alternates: {
    canonical: "/pilates-grantham",
  },
  openGraph: {
    title: "Pilates Grantham | Reformer & Mat Classes",
    description:
      "Expert Reformer and Mat Pilates in Grantham. APPI-qualified instruction at our Castlegate clinic. Beginners welcome.",
    url: `${siteConfig.url}/pilates-grantham`,
    images: [{ url: siteConfig.seo.ogImage, width: 512, height: 512, alt: "Keystone Sports Therapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Grantham | Keystone Sports Therapy",
    description:
      "Reformer and Mat Pilates in Grantham. APPI-qualified classes at our Castlegate clinic. Book online.",
    images: [siteConfig.seo.ogImage],
  },
}

const faqs = [
  {
    question: "Where are your Pilates classes in Grantham?",
    answer: `Our Pilates studio is at ${siteConfig.address.full}, in the heart of Grantham. We welcome clients from Barrowby, Great Gonerby, Manthorpe, Harlaxton, and surrounding Lincolnshire villages.`,
  },
  {
    question: "Do you offer Reformer Pilates in Grantham?",
    answer:
      "Yes. We offer Reformer Pilates on state-of-the-art Align Pilates equipment, including 1:1 sessions, duet sessions, and small group classes limited to five people per class.",
  },
  {
    question: "Is Pilates suitable for beginners?",
    answer:
      "Absolutely. Our APPI-qualified instructor tailors every session to your ability. Whether you are new to Pilates or returning after injury, we welcome all levels at our Grantham clinic.",
  },
  {
    question: "What is the difference between Mat and Reformer Pilates?",
    answer:
      "Mat Pilates uses body weight and small equipment on the floor. Reformer Pilates uses a spring-loaded carriage for adjustable resistance, ideal for building core strength, posture, and controlled movement.",
  },
  {
    question: "How do I book a Pilates class in Grantham?",
    answer: `Book online via our booking system at ${siteConfig.bookwhenUrl}, email ${siteConfig.email}, or call ${siteConfig.phone}.`,
  },
  {
    question: "How much do Pilates classes cost?",
    answer:
      "Group Reformer classes start from £20 per session, with an 8-session pass at £150. Private 1:1 Reformer sessions are £65 for 60 minutes, with package discounts available.",
  },
]

export default function PilatesGranthamPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-wide">
                  Pilates Classes in Grantham
                </h1>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
                  Looking for Pilates in Grantham? At Keystone Sports Therapy, we offer expert{" "}
                  <strong>Reformer Pilates</strong> and <strong>Mat Pilates</strong> at our clinic on Castlegate —
                  tailored to your body, your goals, and your experience level.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Led by APPI-qualified instructor Nasreen Alexandra Davison, with over 10 years of clinical Pilates
                  experience. Whether you want to build core strength, improve posture, recover from injury, or simply
                  move better, our Grantham Pilates studio is here for you.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/book">
                    <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-3">
                      Book a Class
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="px-8 py-3">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-80 lg:h-[28rem] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={images.reformer}
                  alt="Reformer Pilates classes in Grantham at Keystone Sports Therapy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Reformer Pilates */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-wide text-center">
                Reformer Pilates in Grantham
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
                Our premium Reformer Pilates studio features the latest Align Pilates machines — giving you precise,
                spring-loaded resistance for a full-body workout that builds strength, flexibility, and control.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">1:1 Private Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-600 space-y-2">
                    <p>60-minute personalised sessions tailored to your needs.</p>
                    <p className="font-semibold text-purple-600">From £65 per session</p>
                    <p>5 sessions: £310 · 10 sessions: £600</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Small Group Classes</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-600 space-y-2">
                    <p>Limited to 5 people per class for proper attention and coaching.</p>
                    <p className="font-semibold text-purple-600">From £20 per class</p>
                    <p>8-session pass: £150</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Duet Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-600 space-y-2">
                    <p>Train with a partner on the reformer — ideal for couples or friends.</p>
                    <p className="font-semibold text-purple-600">+£10 levy per session</p>
                  </CardContent>
                </Card>
              </div>

              <ul className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
                {[
                  "Latest Align Pilates reformer machines",
                  "APPI-qualified clinical instruction",
                  "Suitable for beginners to advanced",
                  "Injury rehabilitation and prehab focus",
                  "Pre- and postnatal support available",
                  "Low back pain specialist programmes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Mat Pilates */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-72 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={images.matPilates}
                  alt="Mat Pilates classes in Grantham"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-wide">
                  Mat Pilates in Grantham
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Mat Pilates focuses on controlled movements using your body weight and small equipment. It is an
                  excellent way to build core stability, improve posture, and develop functional strength — whether as a
                  standalone practice or alongside Reformer sessions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  All Mat Pilates sessions at our Grantham clinic are taught by a qualified APPI instructor, ensuring
                  exercises are adapted to your individual needs and any existing injuries or conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-12 tracking-wide text-center">
                Who Is Pilates in Grantham For?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Users className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Complete Beginners</h3>
                  <p className="text-gray-600 text-sm">
                    No experience needed. Clear instruction and a supportive environment to build confidence from day
                    one.
                  </p>
                </div>
                <div className="text-center">
                  <Award className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Injury Recovery</h3>
                  <p className="text-gray-600 text-sm">
                    Clinical Pilates programmes for low back pain, post-injury rehabilitation, and graduated return to
                    activity.
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Active Lifestyles</h3>
                  <p className="text-gray-600 text-sm">
                    Complement your running, gym training, or sport with improved core strength, balance, and movement
                    control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instructor */}
        <section className="py-16 bg-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-wide">
                Your Pilates Instructor in Grantham
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nasreen Alexandra Davison is an APPI (Australian Physiotherapy & Pilates Institute) qualified Pilates
                Instructor, teaching both Mat and Reformer Pilates. With over 10 years of experience in sports therapy,
                personal training, and clinical Pilates, she tailors every session to your specific needs.
              </p>
              <Link href="/owner" className="text-teal-700 hover:text-teal-800 font-medium underline">
                Learn more about Nasreen →
              </Link>
            </div>
          </div>
        </section>

        {/* Booking */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-wide text-center">
                Book Pilates Classes in Grantham
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
                Select your preferred date and time from the calendar below, or{" "}
                <a href={`tel:${siteConfig.phoneTel}`} className="text-teal-700 hover:underline">
                  call {siteConfig.phone}
                </a>{" "}
                to enquire.
              </p>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <BookwhenCalendarWrapper className="w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-wide">
                  Find Us in Grantham
                </h2>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">{siteConfig.address.full}</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Conveniently located in the centre of Grantham, serving clients across South Kesteven and
                      Lincolnshire.
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-teal-700 hover:underline">
                    {siteConfig.email}
                  </a>
                  <br />
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${siteConfig.phoneTel}`} className="text-teal-700 hover:underline">
                    {siteConfig.phone}
                  </a>
                </p>
                <Link href="/contact">
                  <Button variant="outline">Get Directions & Contact</Button>
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-72">
                <iframe
                  title="Keystone Sports Therapy location in Grantham"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.address.full)}&hl=en&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 tracking-wide text-center">
                Pilates Grantham — Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
