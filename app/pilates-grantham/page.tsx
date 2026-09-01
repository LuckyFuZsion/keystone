import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BookwhenCalendarWrapper from "@/components/bookwhen-calendar-wrapper"
import { FaqJsonLd, PilatesServicesJsonLd, WebPageJsonLd } from "@/components/json-ld"
import { siteConfig } from "@/lib/site"
import { images } from "@/lib/images"
import { Award, CheckCircle, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.seo.pageTitles.pilates,
  },
  description:
    "Reformer and Mat Pilates in Grantham. APPI-qualified instruction, Align Pilates equipment, group and 1:1 sessions. Book online at our Castlegate clinic.",
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.profilePath }],
  alternates: {
    canonical: "/pilates-grantham",
  },
  openGraph: {
    title: siteConfig.seo.pageTitles.pilates,
    description:
      "Expert Reformer and Mat Pilates in Grantham. APPI-qualified instruction at our Castlegate clinic. Beginners welcome.",
    url: `${siteConfig.url}/pilates-grantham`,
    images: [{ url: siteConfig.seo.ogImage, width: siteConfig.seo.ogImageWidth, height: siteConfig.seo.ogImageHeight, alt: siteConfig.seo.ogImageAlt }],
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

const pilatesServices = [
  {
    name: "Reformer Pilates",
    description:
      "Premium Reformer Pilates on Align Pilates equipment at our Grantham clinic. 1:1, duet, and small group sessions.",
    offers: [
      { name: "1:1 Private Session (60 mins)", price: "65" },
      { name: "5 Sessions", price: "310" },
      { name: "10 Sessions", price: "600" },
      { name: "Small Group Class (single)", price: "20" },
      { name: "Small Group Class (8-session pass)", price: "150" },
    ],
  },
  {
    name: "Mat Pilates",
    description:
      "Mat-based Pilates classes taught by an APPI-qualified instructor at our Grantham clinic.",
    offers: [
      { name: "Group Mat Class", price: "20", description: "Contact for current schedule and pricing" },
    ],
  },
]

const pageUrl = `${siteConfig.url}/pilates-grantham`
const { pilatesGranthamPublished, pilatesGranthamModified } = siteConfig.contentDates

export default function PilatesGranthamPage() {
  return (
    <>
      <WebPageJsonLd
        url={pageUrl}
        name="Pilates Classes in Grantham"
        description="Reformer and Mat Pilates in Grantham with APPI-qualified instruction at Keystone Sports Therapy."
        datePublished={pilatesGranthamPublished}
        dateModified={pilatesGranthamModified}
        speakableSelectors={[".speakable-summary", ".speakable-why", ".speakable-faq-first"]}
      />
      <FaqJsonLd faqs={faqs} url={pageUrl} />
      <PilatesServicesJsonLd services={pilatesServices} />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 tracking-wide">
                  Pilates Classes in Grantham
                </h1>
                <p className="text-sm text-gray-500 mb-4">
                  By{" "}
                  <Link href={siteConfig.author.profilePath} className="text-teal-700 hover:underline">
                    {siteConfig.author.name}
                  </Link>
                  , {siteConfig.author.jobTitle}
                  {" · "}
                  <time dateTime={pilatesGranthamModified}>
                    Updated{" "}
                    {new Date(pilatesGranthamModified).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </p>
                <p className="speakable-summary text-gray-600 leading-relaxed text-base md:text-lg mb-4">
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

        {/* What is Pilates */}
        <section className="py-16 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-wide">
                What Is Pilates?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Pilates is a low-impact exercise method that builds core strength, flexibility, posture, and controlled
                movement through precise, breath-coordinated exercises. Developed by Joseph Pilates, it is widely used for
                general fitness, injury rehabilitation, and back pain management. The{" "}
                <a
                  href="https://www.nhs.uk/live-well/exercise/pilates-and-yoga/"
                  className="text-teal-700 hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  NHS recommends Pilates and yoga
                </a>{" "}
                as accessible ways to improve strength and flexibility at any age.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At our Grantham studio, Pilates is taught by an APPI-qualified instructor — meaning exercises follow
                physiotherapy-informed principles and can be adapted for beginners, pre- and postnatal clients, and
                those recovering from injury.
              </p>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-wide">
                Why Choose Pilates in Grantham at Keystone?
              </h2>
              <p className="speakable-why text-gray-600 leading-relaxed mb-6">
                Keystone Sports Therapy offers clinical-grade Pilates in the heart of Grantham — not a generic fitness
                class, but instruction tailored to your body by a qualified APPI instructor with over 10 years of
                experience in sports therapy, personal training, and rehabilitation.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                {[
                  "APPI-qualified clinical instruction — exercises adapted to your ability and any injuries",
                  "Premium Align Pilates reformer equipment in a dedicated Castlegate studio",
                  "Small group classes capped at five people for individual attention",
                  "1:1 and duet Reformer sessions for personalised progression",
                  "Specialist programmes for lower back pain and injury recovery",
                  "Convenient location serving Grantham, Stamford, and South Kesteven villages",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
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
              <p className="text-gray-600 text-center max-w-3xl mx-auto mb-6">
                Our premium Reformer Pilates studio features the latest Align Pilates machines — giving you precise,
                spring-loaded resistance for a full-body workout that builds strength, flexibility, and control.
              </p>
              <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
                Reformer Pilates is especially popular for building core strength without high impact, making it a
                practical choice for people managing back pain, returning from injury, or looking for a structured
                alternative to gym-based training in Grantham.
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
                <p className="text-gray-600 leading-relaxed mb-4">
                  All Mat Pilates sessions at our Grantham clinic are taught by a qualified APPI instructor, ensuring
                  exercises are adapted to your individual needs and any existing injuries or conditions.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Research published by{" "}
                  <a
                    href="https://www.nhs.uk/conditions/back-pain/"
                    className="text-teal-700 hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    the NHS on back pain
                  </a>{" "}
                  notes that staying active with appropriate exercise is one of the most effective ways to manage
                  ongoing lower back discomfort — which is why many of our clients combine Mat and Reformer work as
                  part of a structured recovery plan.
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

        {/* How to get started */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-wide">
                How Do I Get Started with Pilates in Grantham?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Starting Pilates at Keystone Sports Therapy is straightforward. Complete beginners are welcome — no prior
                experience or equipment is needed. Here is how to book your first session:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 text-sm mb-6">
                <li>
                  Browse available classes on our{" "}
                  <Link href="/book" className="text-teal-700 hover:underline">
                    online booking page
                  </Link>{" "}
                  or call{" "}
                  <a href={`tel:${siteConfig.phoneTel}`} className="text-teal-700 hover:underline">
                    {siteConfig.phone}
                  </a>
                  .
                </li>
                <li>Choose a Reformer group class, 1:1 session, or Mat Pilates class that suits your schedule.</li>
                <li>Wear comfortable fitted clothing and grip socks for Reformer sessions (available to buy at the clinic).</li>
                <li>Arrive at 71 Castlegate, Grantham a few minutes early — your instructor will guide you through everything.</li>
              </ol>
              <p className="text-gray-600 text-sm">
                Not sure which class to pick?{" "}
                <Link href="/contact" className="text-teal-700 hover:underline">
                  Contact us
                </Link>{" "}
                or read our guide on{" "}
                <Link href="/blog/reformer-vs-mat-pilates" className="text-teal-700 hover:underline">
                  Reformer vs Mat Pilates
                </Link>
                .
              </p>
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
                {faqs.map((faq, index) => (
                  <div key={faq.question} className={index === 0 ? "speakable-faq-first" : undefined}>
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
