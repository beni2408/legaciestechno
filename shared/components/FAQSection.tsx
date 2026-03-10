import FAQItem from "./FAQItem";

import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export default function FAQSection() {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* LEFT SIDE */}
        <div className="lg:w-[45%] flex flex-col gap-10 lg:gap-0 lg:justify-between">
          <div>
            <p
              className={`${robotoMono.className} uppercase text-sm tracking-widest text-[#191919]`}
            >
              FAQ
            </p>

            <h2
              className={`${syne.className} text-4xl md:text-5xl lg:text-6xl font-[500] mt-6`}
            >
              Common
              <br className="hidden md:block" />
              Questions
            </h2>
          </div>

          <Link href="/contact">
            <button
              className={`${robotoMono.className} mt-4 lg:mt-0 px-6 py-3 lg:px-8 lg:py-4 bg-[#191919] w-fit text-[#fdfbf5] text-sm tracking-widest rounded-lg hover:bg-[#191919] hover:scale-105 transition`}
            >
              GET IN TOUCH
            </button>
          </Link>
        </div>

        {/* VERTICAL DIVIDER */}
        <div className="hidden lg:block w-px bg-[#191919]/30"></div>

        {/* RIGHT SIDE */}
        <div className="lg:w-[50%] w-full">
          <FAQItem
            question="What services does Legacies Techno provide?"
            answer="Legacies Techno is a comprehensive technology consultancy and full-stack development partner. We specialize in building advanced AI and machine learning solutions, including custom model development, data pipeline engineering, and the deployment of autonomous AI agents. Our compliance automation platform, Lynte-X Comply, helps organizations streamline regulatory workflows for SOC 2, HIPAA, and GDPR through automated evidence collection and reporting. Additionally, our Lynte-X Vault offering supports smart document scanning and OCR with features like intelligent indexing, template-based data extraction, and AI-driven quality control. We also deliver custom SaaS applications built on API-first architectures, microservices, and cloud-native stacks. Beyond product development, we provide enterprise system integrations—connecting tools like Twilio, RingCentral, CRMs, ERPs, and zero-trust security frameworks. For staffing needs, our Lynt-X Dev service supplies remote engineering talent, full recruitment solutions, and workforce compliance. Every engagement is tailored to your organization's industry, scale, and strategic needs—whether you're a growing healthcare provider or a global enterprise.

"
          />

          <FAQItem
            question="How does your AI-driven compliance solution (Lynte-X Comply) work?"
            answer="Lynte-X Comply is a next-generation RegOps platform designed to automate your compliance journey using AI. It begins by mapping your regulatory obligations—such as HIPAA, GDPR, and SOC 2—into a structured framework. From there, it integrates with your cloud infrastructure and internal systems to automatically gather logs, configurations, and attestations in real time. Our AI then performs natural language processing to identify policy violations, missing controls, and risks. The platform presents findings in a centralized dashboard, complete with risk scores, remediation tasks, and audit-ready documentation. Continuous monitoring is also included, alerting your team if something deviates from compliance—like an unauthorized new server deployment. The result is a significant reduction in manual effort, with some clients reporting up to 70% time savings on evidence collection and faster certification timelines."
          />

          <FAQItem
            question="Which industries and geographies do you serve?"
            answer="Although based in India, Legacies Techno serves clients worldwide. We maintain active operations in North America (USA and Canada), Europe (including the UK, Germany, and Austria), the Middle East (UAE and Saudi Arabia), and Asia Pacific (such as Australia, Singapore, and Vietnam). Our team has extensive experience in various industries, including healthcare and life sciences (e.g., telehealth automation), legal and professional services (e.g., data security and client intake), financial services (e.g., KYC/AML automation), manufacturing and supply chain (e.g., smart invoice scanning), and technology/SaaS (e.g., secure platform development). Our delivery model combines cost-efficient offshore engineering with local client-facing support, ensuring efficient execution and seamless communication across time zones."
          />

          <FAQItem
            question="How long does a typical engagement take, from discovery to delivery?"
            answer="Engagement timelines depend on the project’s complexity, but generally follow this structure: the discovery and requirements phase takes 1–2 weeks, followed by a proof of concept or prototype within 4–6 weeks. Building an MVP usually spans 8–12 weeks, while full-scale rollouts with system integrations and compliance audits can take 12–24 weeks. Smaller projects—such as AI dashboards or document-scanning pilots—can be up and running within a month. Throughout the process, we maintain transparency via weekly sprint demos, status dashboards, and a dedicated project manager to ensure everything stays on track."
          />

          <FAQItem
            question="What pricing models do you offer?"
            answer="Legacies Techno offers flexible pricing based on your organization’s size, maturity, and needs. We support time-and-materials (T&M) contracts for exploratory projects or evolving scopes, billed monthly with detailed timesheets. For clearly defined outcomes, we provide fixed-scope, fixed-price contracts—ideal for MVPs or compliance automation builds. Our products, such as Lynte-X Comply and Lynte-X Vault, are available via subscription pricing, typically tiered by user count or asset volume, with discounts for high usage. We also support outcome-based or milestone-driven pricing, especially for pilot programs or revenue-share partnerships. Startups and ISVs can access flexible payment options, including deferred billing or even equity-based compensation on a case-by-case basis."
          />

          <FAQItem
            question="How do you ensure data security and compliance?"
            answer="Security and compliance are foundational to our operations. We adhere to ISO 27001 and SOC 2 Type II standards, ensuring our infrastructure and processes undergo regular audits. Our systems are built on zero-trust architecture, using the principle of least privilege across applications and networks. All data is AES-256 encrypted at rest and TLS 1.3 encrypted in transit, with keys managed in customer-owned secure vaults such as AWS KMS or Azure Key Vault. We conduct quarterly penetration tests and daily vulnerability scans. For clients under GDPR or HIPAA, we enforce strict data handling, breach notification protocols, and patient data pseudonymization. Each project begins with a thorough compliance audit and results in a fully documented, audit-ready security dossier."
          />

          <FAQItem
            question="How can I get started with Legacies Techno?"
            answer="Getting started is easy. Simply click on “Get In Touch” on our website or email us at contact@legacestechno.com to schedule a free 30-minute Discovery Call. We then offer a one-day virtual Discovery Workshop at no charge to understand your objectives, limitations, and success metrics. Within five business days, we provide a custom Solution Blueprint that outlines timelines, tech stack suggestions, and a high-level investment estimate. Once approved, we assign a dedicated team—including a project manager, architects, and engineers—and begin execution. We follow a “fail-fast” approach, meaning if you choose not to proceed after Discovery, there’s no fee, and you still receive the insights gathered."
          />

          <FAQItem
            question="What sets Legacies Techno apart from other consultancies?"
            answer="Getting started is easy. Simply click on “Get In Touch” on our website or email us at contact@legacestechno.com to schedule a free 30-minute Discovery Call. We then offer a one-day virtual Discovery Workshop at no charge to understand your objectives, limitations, and success metrics. Within five business days, we provide a custom Solution Blueprint that outlines timelines, tech stack suggestions, and a high-level investment estimate. Once approved, we assign a dedicated team—including a project manager, architects, and engineers—and begin execution. We follow a “fail-fast” approach, meaning if you choose not to proceed after Discovery, there’s no fee, and you still receive the insights gathered."
          />
        </div>
      </div>
    </section>
  );
}
