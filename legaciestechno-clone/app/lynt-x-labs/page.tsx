"use client";

import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import ProductSection from "@/components/ProductSection";
import { LogoAnimater } from "@/components/logoanimater";
import Link from "next/link";
import { HomescreennavContactAd } from "@/components/HomescreenContactAd";
const ethosItems = [
  {
    number: "01",
    title: "Future-Ready Innovation",
    description:
      "We don’t just build for today’s needs; we anticipate tomorrow’s challenges.",
  },
  {
    number: "02",
    title: "Vertical Precision",
    description:
      "Every product is engineered with built-in compliance and domain expertise—so you don’t have to retrofit later.",
  },
  {
    number: "03",
    title: "Rapid, Agile Development",
    description: "From concept to working prototype in weeks, not months.",
  },
  {
    number: "04",
    title: "Enterprise-Grade Security",
    description:
      "All solutions adhere to SOC 2, HIPAA, GDPR, and other global standards by design.",
  },
  {
    number: "05",
    title: "Collaborative Ecosystem",
    description:
      "By co-innovating with Auxo Innovations, we ensure market alignment from Day 1.",
  },
];
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function LyntXPage() {
  return (
    <main className="bg-[#fdfbf5] text-[#191919] py-10 lg:py-14">
      {/* HERO SECTION */}
      <section className=" lg:flex lg:flex-row flex flex-col lg:justify-between gap-16 items-center">
        <div className=" space-y-8">
          <h1
            className={`${syne.className}  lg:w-150 lg:text-[74px] text-6xl font-[500] lg:font-semibold lg:leading-20`}
          >
            Innovate today to power tomorrow.
          </h1>

          <p className="text-[#191919] leading-relaxed text-2xl font-[500] w-80 md:w-160  lg:w-153 font-satoshi lg:text-[23px]">
            Lynt-X Labs is the dedicated Research & Development arm of Legacies
            Techno, built to ideate, incubate, and launch next-generation
            technology products that address real-world enterprise challenges.
            As the innovation engine within our organization, Lynt-X Labs
            continually explores cutting-edge AI, automation, and cloud-native
            architectures—transforming emerging concepts into market-ready
            solutions.
          </p>
        </div>

        <div className="rounded-4xl h-60 lg:h-130 w-90 lg:w-160  md:w-175 md:h-100 aspect-square overflow-hidden shadow-lg border">
          <img
            src="https://framerusercontent.com/images/IxZ9V9UxHiUjDdjJhRri3Kdxk.jpg"
            alt="Lynt X Labs"
            className="w-full lg:h-full object-cover"
          />
        </div>
      </section>

      {/* DIVIDER */}
      <div className="w-full border border-black/50 lg:mb-15 mb-7 lg:mt-20 mt-20  border-[0.2px]"></div>

      {/* PORTFOLIO TITLE */}
      <section className="  lg:text-center  ">
        <h2
          className={`${syne.className} lg:text-[65px] text-[40px] font-[500] lg:font-[500] `}
        >
          OUR PRODUCT PORTFOLIO
        </h2>

        <p className="text-[#191919] font-satoshi lg:text-[22px] text-2xl lg:w-full w-90 md:w-full md:text-3xl ">
          Below is a snapshot of flagship products under development at Lynt-X
          Labs — each conceived to solve a distinct business problem and built
          with scalability, compliance, and user experience in mind.
        </p>
      </section>

      {/* DIVIDER */}
      <div className="w-full border border-black/50 lg:mb-15 mb-8 mt-15 border-[0.2px]"></div>

      {/* PRODUCT SECTION */}
      <div className=" lg:mt-12">
        <ProductSection
          tag="Lynt-X Vault"
          title="Intelligent Document Operations Platform"
          description="Lynt-X Vault is an AI-powered document scanning, OCR, and indexing solution designed to transform manual data-entry workflows into fully automated, audit-ready pipelines."
          image="https://framerusercontent.com/images/c2KwxhK89NH7wvVv9MLNuAeJibY.jpg"
          features={[
            "Template-Based Field Extraction: Automatically identify and extract structured data from standardized and unstructured documents.",
            "AI-Driven Quality Control (QC): Detect anomalies like missing pages, misaligned text, and trigger real-time alerts.",
            "Smart Indexing & Search: Generate contextual metadata tags and enable lightning-fast search across millions of pages.",
            "Seamless Integrations: Connect with AWS S3, Azure Blob Storage, and third-party CMS platforms.",
            "Global Compliance: Built-in support for GDPR, HIPAA, and other privacy regulations.",
          ]}
          last_desc="As an evolution of Legacies Techno’s existing document-scanning expertise, Lynt-X Vult delivers enterprise-grade reliability and compliance, dramatically reducing operational costs and accelerating downstream analytics."
        />
        <ProductSection
          tag="Lynt-X Coomplis"
          title="Automated Compliance & RegOps Engine"
          description="Lynt-X Coomplis is our flagship RegOps (Regulatory Operations) platform that reimagines how organizations achieve, maintain, and prove compliance across multiple frameworks (HIPAA, GDPR, SOC 2, ISO, PCI, and more). Core features include:"
          image="https://framerusercontent.com/images/MGnB8hSK8Er2dNothUvfsfkf34k.jpg"
          features={[
            "Regulatory Mapping Engine: Translate complex control sets into a unified taxonomy, enabling multi-standard coverage from a single dashboard.",
            "Automated Evidence Collection: Integrate directly with cloud providers (AWS, Azure, GCP), enterprise applications (Okta, Azure AD, Salesforce), and network devices to pull configuration snapshots, access logs, and policy attestations on demand.",
            "AI-Powered Gap Analysis: Apply natural-language processing (NLP) and machine learning algorithms to identify control deficiencies, generate risk heat maps, and prioritize remediation tasks.",
            "Audit-Ready Reporting: Produce customizable, audit-quality reports with one-click export (PDF/Excel) for internal stakeholders and external auditors.",
            "Continuous Monitoring & Alerts: Detect drift (e.g., new assets spun up without appropriate controls) and notify stakeholders in real time before a minor oversight becomes a major audit finding.",
          ]}
          last_desc="Lynt-X Coomplis dramatically reduces manual compliance overhead (on average, 70% time savings in evidence collection) and accelerates time to certification, enabling clients to focus on innovation rather than process maintenance."
        />
        <ProductSection
          tag="inCallIQ Bot for Lawyers (Powered by Vapi.ai)"
          title="Virtual Receptionist & Appointment Concierge"
          description="Developed in partnership with Auxo Innovations (USA)—where Legacies Techno serves as the exclusive technology vendor—the inCallIQ Bot for Lawyers is a conversational AI assistant tailored for legal practices in the United States and the United Kingdom. Its primary functions include:"
          image="https://framerusercontent.com/images/rhGKbO7CsXTeW2IW7Hcgc7GmYso.jpg"
          features={[
            "24×7 Virtual Reception: Answer incoming calls, understand client intent through natural-language processing, and collect essential details (case type, urgency, contact information).",
            "Smart Appointment Scheduling: Sync with each attorney’s calendar (Google Calendar or Office 365) to surface real-time availability, propose slots, and book consultations without human intervention.",
            "Contextual Intake Forms: Dynamically generate intake questions based on practice areas (e.g., employment law, personal injury, family law) to gather relevant case details upfront.",
            "Seamless Lawmatics Integration: Once a client confirms, automatically populate and submit Lawmatics form data—ensuring the appointment and matter ticket are created instantly.",
            "Post-Call Follow-Up: Send SMS/email confirmations with appointment details and next-steps checklists, preserving a branded, professional experience.",
          ]}
          last_desc="By automating front-desk workflows, inCallIQ Bot frees up billable hours for attorneys and improves conversion rates by promptly engaging prospective clients. Auxo Innovations has already deployed this solution across multiple mid-sized law firms, reporting a 30% reduction in no-shows and a 25% increase in booked consultations within the first quarter of implementation."
        />
        <ProductSection
          tag="inCallIQ Business Intelligence for Healthcare & Wellness Providers"
          title="AI-Driven Call Analytics & Insights"
          description="Also created under an exclusive partnership with Auxo Innovations, inCallIQ Business Intelligence is specifically designed to serve audiology clinics, dental practices, wellness centers, and law firms in the USA and UK. By harnessing AI for call tracking and analysis, this platform provides:"
          image="https://framerusercontent.com/images/cOddLk9PBmxNsOvBZtUWzppoYU.jpg"
          features={[
            "Comprehensive Call Attribution: Tag each inbound call to its originating marketing channel (Google Ads, Facebook, organic search, direct), enabling precise ROI calculations.",
            "Automated Transcriptions & Semantic Analysis: Convert voice calls into text, then apply natural-language understanding (NLU) to categorize reasons for calls (e.g., appointment requests, insurance inquiries, product questions).",
            "Performance Dashboards: Visualize key metrics such as call volume by region, peak call times, average hold times, and call abandonment rates—empowering operational teams to optimize staff scheduling.",
            "Client Conversion Funnel: Map each call through the funnel—from inquiry to booking to no-show or completed appointment—providing granular insights into conversion rates and revenue impact.",
            "Actionable Recommendations: Generate AI-driven suggestions for marketing budget reallocation, call-script optimizations, and staffing adjustments based on historical call performance and seasonal trends.",
          ]}
          last_desc="By combining targeted intelligence with industry-specific context, inCallIQ Business Intelligence helps healthcare and wellness providers improve patient acquisition, reduce missed opportunities, and elevate the quality of the client experience."
        />
      </div>

      <section className="bg-[#fdfbf5] text-[#191919]  ">
        <div className=" ">
          {/* TITLE */}
          <h1
            className={`${syne.className} text-4xl  pl-10 w-80 md:pl-0 lg:pl-0 md:w-full md:pb-7 items-center lg:w-auto lg:text-6xl lg:mb-7 lg:pb-5 font-[500] text-center`}
          >
            WHY LYNT-X LABS MATTERS
          </h1>

          {/* TOP DIVIDER */}
          <div className="w-full border border-[#191919] lg:mb-15 mb-10  border-[0.2px]"></div>

          {/* MAIN CONTENT */}
          <div className="lg:flex lg:flex-row  flex flex-col  justify-center gap-20 items-start">
            {/* LEFT IMAGE */}
            <div className=" lg:w-230 lg:h-190 w-auto h-50 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://framerusercontent.com/images/NSkOSetjgvVA6FZXD2IHiQdMZJU.jpg"
                alt="Lynt-X Innovation"
                className="lg:w-full lg:object-cover object-fill scale-175  md:scale-auto lg:h-200 h-auto w-auto saturate-30"
              />
            </div>

            <div className="space-y-6 lg:border-l lg:pl-10">
              {ethosItems.map((item, index) => (
                <div key={item.number}>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`${robotoMono.className} w-10 h-10 flex items-center justify-center rounded-full border border-[#191919]/30 text-sm`}
                      >
                        {item.number}
                      </div>

                      <div className="space-y-5">
                        <h2
                          className={`${syne.className} lg:text-3xl uppercase text-3xl font-[500]`}
                        >
                          {item.title}
                        </h2>

                        <p className="text-[#191919]/90 font-satoshi lg:text-xl text-xl md:text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Divider except last item */}
                  {index !== ethosItems.length - 1 && (
                    <div className="border-b border-[#191919] mt-6"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM DIVIDER */}
          <div className="w-full border border-black/50 mb-15 mt-20 border-[0.2px]"></div>
        </div>
        <HomescreennavContactAd />
      </section>
    </main>
  );
}
