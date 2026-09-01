import Link from "next/link"
import { homeFaqs, homeServicesList } from "@/lib/home-faqs"

export function HomeFaqSection() {
  return (
    <section className="py-16 bg-white" aria-labelledby="home-faq-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 id="home-faq-heading" className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-wide text-center">
            Frequently asked questions about Pilates in Grantham
          </h2>
          <p className="text-gray-600 text-center text-sm md:text-base mb-10 speakable-summary">
            Keystone Sports Therapy offers Reformer and Mat Pilates, sports massage, and personal training at our
            Castlegate clinic in Grantham.
          </p>

          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What services are available at Keystone Sports Therapy?
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 ml-1">
              {homeServicesList.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {homeFaqs.map((faq, index) => (
              <div key={faq.question} className={index === 0 ? "speakable-faq-first" : undefined}>
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-600 mt-10">
            More detail on our{" "}
            <Link href="/pilates-grantham" className="text-teal-700 hover:underline">
              Pilates Grantham page
            </Link>{" "}
            or{" "}
            <Link href="/blog" className="text-teal-700 hover:underline">
              Pilates insights and guides
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
