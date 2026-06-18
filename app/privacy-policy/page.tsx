import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: siteConfig.seo.pageTitles.privacy,
  description:
    "Privacy policy for Keystone Sports Therapy in Grantham. How we collect, use, and protect your personal data.",
  alternates: { canonical: "/privacy-policy" },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-gray">
            <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-2 tracking-wide">
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-sm mb-8">Last updated: June 2026</p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Keystone Sports Therapy (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates{" "}
              <a href={siteConfig.url} className="text-teal-700 hover:underline">
                {siteConfig.url}
              </a>{" "}
              and provides sports therapy, Pilates, and personal training services at our clinic in Grantham. This
              policy explains how we collect, use, and protect your personal information when you visit our website or
              use our services.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Data controller: Keystone Sports Therapy Clinic &amp; Reformer Pilates
              <br />
              Address: {siteConfig.address.full}
              <br />
              Email:{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-teal-700 hover:underline">
                {siteConfig.email}
              </a>
              <br />
              Phone:{" "}
              <a href={`tel:${siteConfig.phoneTel}`} className="text-teal-700 hover:underline">
                {siteConfig.phone}
              </a>
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We may collect the following information:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Contact details (name, email address, phone number) when you submit our contact or new patient forms</li>
              <li>Health and medical information provided in new patient intake forms, necessary for safe treatment</li>
              <li>Booking information when you schedule appointments via our online booking system</li>
              <li>Technical data such as IP address, browser type, and pages visited (via standard web server logs)</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We use your personal data to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Respond to enquiries and book appointments</li>
              <li>Provide sports therapy, Pilates, and personal training services</li>
              <li>Maintain accurate clinical and patient records</li>
              <li>Send appointment confirmations and relevant service communications</li>
              <li>Improve our website and protect against spam or abuse</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Legal Basis for Processing</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Under UK GDPR, we process your data based on: (a) your consent when you submit a form; (b) performance of
              a contract when you book and receive treatment; (c) our legitimate interests in operating our clinic and
              website; and (d) compliance with legal obligations where applicable.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We use trusted third-party services that may process your data:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Bookwhen — online appointment booking</li>
              <li>Google reCAPTCHA — spam protection on contact forms</li>
              <li>Vercel — website hosting</li>
              <li>Email services — to send form submissions and appointment correspondence</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6">
              These providers process data only as needed to deliver their services and are required to protect your
              information appropriately.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Data Retention</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We retain contact enquiry data for up to 12 months unless a treatment relationship is established.
              Clinical and patient records are retained in line with professional healthcare record-keeping requirements,
              typically for a minimum of 8 years from your last appointment.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal and clinical record requirements)</li>
              <li>Object to or restrict certain processing</li>
              <li>Lodge a complaint with the ICO (ico.org.uk)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6">
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-teal-700 hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our website may use essential cookies required for security (such as reCAPTCHA) and basic functionality.
              We do not use advertising or tracking cookies. You can control cookies through your browser settings.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated
              revision date.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <Link href="/contact" className="text-teal-700 hover:underline font-medium">
                Contact us
              </Link>{" "}
              if you have any questions about this privacy policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
