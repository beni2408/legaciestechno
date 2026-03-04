"use client";

import ServiceSection from "@/components/serviceSection";
import { Syne } from "next/font/google";

import { Roboto_Mono } from "next/font/google";

import { LogoAnimater } from "@/components/logoanimater";
import Link from "next/link";
import SectionNavigator from "@/components/SectionNavigator";
const sections = [
  { label: "AI & AUTOMATION", id: "ai" },
  { label: "DIGITAL TRANSFORMATION", id: "digital" },
  { label: "CLOUD & INFRASTRUCTURE", id: "cloud" },
  { label: "CUSTOM SOFTWARE DEVELOPMENT", id: "software" },
];

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ServicesPage() {
  return (
    <main className="bg-[#fdfbf5] text-[#191919]">
      {/* HERO */}
      <section className="py-24 border-b border-[#191919]/20">
        <div className=" ">
          <h1
            className={` ${syne.className} text-6xl lg:text-7xl font-black leading-tight`}
          >
            We engineer intelligent
            <br />
            solutions for global impact.
          </h1>
        </div>
        <SectionNavigator sections={sections} />
      </section>

      {/* SERVICE SECTION TEMPLATE USAGE */}

      <div id="ai">
        <ServiceSection
          icon={<i className="fa-solid fa-microchip text-8xl mt-10" />}
          title="AI-POWERED PLATFORMS"
          bullets={[
            "Autonomous Agents",
            "Intelligent Dashboards",
            "LLM-Powered Workflows",
          ]}
          buttonText="GET IN TOUCH"
        >
          <h2 className={` ${syne.className} text-6xl font-bold leading-tight`}>
            Transform workflows with autonomous agents, intelligent dashboards,
            and real-time insights.
          </h2>

          <div className="grid grid-cols-2 gap-8 text-[#191919]/70 leading-relaxed text-xl">
            <p>
              At Legacies Techno, we don’t just integrate AI — we build entire
              platforms around it. Our AI-powered solutions are designed to
              enhance decision-making, automate complex workflows, and deliver
              predictive, real-time intelligence at scale.
              <br></br>
              <br></br>
              We specialize in architecting systems that include large language
              models (LLMs), autonomous agents, embeddings, and machine learning
              pipelines that empower businesses to think and act faster. From
              intelligent chatbots and AI copilots to advanced data analytics
              dashboards and generative process automations,
            </p>

            <p>
              our platforms are tailored for industry-specific needs and
              future-ready operations.
              <br />
              <br />
              We ensure that every model is tuned to context, aligned to
              business KPIs, and capable of adapting over time.
              <br />
              <br />
              Whether you’re in healthcare, finance, logistics, or compliance —
              we build systems that learn from your data, respond in real time,
              and help you stay several steps ahead.
              <br />
              <br />
              Our platforms aren’t just smart — they’re strategic, scalable, and
              secure. Let’s turn your business into an AI-native organization —
              one intelligent platform at a time.
            </p>
          </div>

          <video
            src="https://framerusercontent.com/assets/U4bMcTSdL0TJqLegWATqxD4F3I.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-2xl object-cover saturate-50"
          />
        </ServiceSection>
      </div>

      <div id="digital">
        <ServiceSection
          icon={<HonestyIcon />}
          title="ENTERPRISE SOFTWARE DEVELOPMENT"
          bullets={[
            "Cloud-Native Architecture",
            "Secure System Integrations",
            "Custom Web & Mobile Apps",
          ]}
          buttonText="GET IN TOUCH"
        >
          <h2 className={` ${syne.className} text-6xl font-bold leading-tight`}>
            From cloud-native apps to secure integrations — we architect your
            next big system.
          </h2>

          <div className="grid grid-cols-2 gap-8 text-[#191919]/70 leading-relaxed text-xl">
            <p>
              Engineering high-performance software is more than writing code —
              it’s building resilient ecosystems that solve real-world problems
              at scale. At Legacies Techno, we specialize in crafting custom
              enterprise software systems that are cloud-native, modular, and
              built to last.
              <br></br>
              <br></br>
              Whether you’re rearchitecting a legacy stack or launching a
              completely new product, our team works with you from the ground up
              — defining architectures, optimizing infrastructure, and ensuring
              seamless backend integrations. Our focus is on performance,
              reliability, and long-term maintainability.
            </p>

            <p>
              We bring deep experience across industries and technologies,
              including microservices, serverless deployments, secure APIs,
              enterprise-grade authentication, and cross-platform delivery. Our
              agile process ensures rapid delivery without compromising
              stability.
              <br />
              <br />
              From internal ops platforms and ERP systems to customer-facing
              apps and data ecosystems, we build what your business needs — not
              just what’s trending.
              <br />
              <br />
              We don’t stop at development. We help you scale, support, and
              evolve your software to meet the demands of a changing world. Your
              vision deserves more than off-the-shelf tech.
              <br />
              <br />
              Let’s build your next big system — from scratch, the right way.
            </p>
          </div>

          <video
            src="https://framerusercontent.com/assets/MbIoDvlbmFsF0Kj9SrUHSvSToQ.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-2xl object-cover saturate-50"
          />
        </ServiceSection>
      </div>

      <div id="cloud">
        <ServiceSection
          icon={<AiPlatformIcon />}
          title="SMART AUTOMATION"
          bullets={[
            "AI OCR & Data Extraction",
            "Compliance-Aware Workflows",
            "RPA & Workflow Builders",
          ]}
          buttonText="GET IN TOUCH"
        >
          <h2 className={` ${syne.className} text-6xl font-bold leading-tight`}>
            Digitize operations with RPA, document intelligence, and
            compliance-aware automation.
          </h2>

          <div className="grid grid-cols-2 gap-8 text-[#191919]/70 leading-relaxed text-xl">
            <p>
              Manual processes are holding businesses back — and we’re here to
              eliminate them.
              <br></br>
              <br></br>
              At Legacies Techno, we specialize in smart automation that
              combines robotic process automation (RPA), AI-powered document
              processing, and compliance-aware decision logic to transform the
              way enterprises operate.
              <br />
              <br />
              We work with you to identify high-friction processes and
              bottlenecks, then build automation workflows that dramatically
              improve speed, accuracy, and efficiency.
              <br />
              <br />
              Whether it’s automating data entry, document indexing, onboarding
              workflows, or compliance checks, our systems ensure consistent,
              auditable results with minimal human intervention.
            </p>

            <p>
              Our automation stack includes intelligent OCR, human-in-the-loop
              validation, conditional logic flows, and secure API integrations.
              <br />
              <br />
              From standalone bots to end-to-end intelligent automation
              platforms, we deliver solutions that reduce cost, increase
              throughput, and scale with your growth.
              <br />
              <br />
              No matter your industry — healthcare, legal, logistics, or finance
              — we help you unlock operational excellence with automation built
              to align with your goals.
              <br />
              <br />
              The future is fast, error-free, and intelligent. Let us help you
              automate toward it.
            </p>
          </div>

          <video
            src="https://framerusercontent.com/assets/vCGkzFH2CfVxDeNGFP9S8coCgw.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-2xl object-cover saturate-50"
          />
        </ServiceSection>
      </div>

      <div id="software">
        <ServiceSection
          icon={<i className="fa-solid fa-brain text-8xl mt-10" />}
          title="SAAS PRODUCT ENGINEERING"
          bullets={[
            "Multi-Tenant Architecture",
            "MVP to Enterprise Scaling",
            "Embedded AI Features",
          ]}
          buttonText="GET IN TOUCH"
        >
          <h2 className={` ${syne.className} text-6xl font-bold leading-tight`}>
            MVP to scale — we help you ship faster with proven frameworks and
            AI-first logic.
          </h2>

          <div className="grid grid-cols-2 gap-8 text-[#191919]/70 leading-relaxed text-xl">
            <p>
              Building a SaaS product isn’t just about speed — it’s about scale,
              stability, and delivering value at every stage of the journey.
              <br></br>
              <br></br>
              At Legacies Techno, we partner with startups, scale-ups, and
              enterprises to build SaaS products that are modern, multi-tenant,
              AI-ready, and built for global deployment.
              <br />
              <br />
              From concept validation to MVP to full-scale growth, our team
              brings the product thinking, technical architecture, and delivery
              experience needed to ship fast and grow with confidence.
              <br />
              <br />
              We work across all layers — UI/UX, frontend, backend, DevOps, and
              integrations — to ensure your product is market-ready from day
              one.
            </p>

            <p>
              Our engineering approach leverages proven frameworks, modular
              APIs, and scalable cloud infrastructure.
              <br />
              <br />
              We embed AI where it matters, enabling smarter decision-making,
              personalization, and automation from the start. Whether you’re
              launching your first product or rebuilding for your next phase, we
              ensure every line of code aligns with business goals and user
              expectations.
              <br />
              <br />
              With Legacies Techno, you don’t just get developers — you get a
              committed product partner. Let’s turn your idea into a
              category-leading SaaS platform.
              <br />
              <br />
            </p>
          </div>

          <video
            src="https://framerusercontent.com/assets/xEdicqj6DHxVreqqPANZgeeEs.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-2xl object-cover saturate-50"
          />
        </ServiceSection>
      </div>

      <section className="bg-[#fdfbf5] text-[#191919] py-24">
        <div className="  ">
          <div className="flex">
            {/* LEFT SIDE */}
            <div className="space-y-10">
              <p
                className={` ${robotoMono.className} text-sm tracking-widest text-[#191919]/60`}
              >
                CONTACT
              </p>

              <h1
                className={`${syne.className} text-4xl sm:text-5xl  w-200 lg:text-7xl font-semibold leading-tight`}
              >
                LET’S ENGINEER THE <br />
                FUTURE — <br />
                TOGETHER
              </h1>

              <LogoAnimater />
            </div>

            {/* RIGHT SIDE */}
            <div className="relative ml-20">
              {/* VERTICAL DIVIDER */}
              <div className="hidden lg:block absolute  top-0 h-full w-px bg-[#191919]/20 border border-black/10 border-0.5" />

              <div className="space-y-16 flex flex-col justify-between h-full ml-10">
                <p className="text-lg text-[#191919]/70 leading-relaxed">
                  Whether you’re scaling a digital product, modernizing
                  operations, or building from the ground up — Legacies Techno
                  is your partner in crafting intelligent, enterprise-grade
                  solutions that create lasting impact.
                </p>

                <Link
                  href="/contact"
                  className={`${robotoMono.className} inline-block px-8 py-4 bg-[#191919] w-52 text-center text-[#fdfbf5] text-sm tracking-widest rounded-lg hover:bg-[#191919]/80 hover:scale-105 transition-all duration-300 relative z-10`}
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const AiPlatformIcon = () => (
  <svg
    viewBox="0 0 75 64.784"
    overflow="visible"
    className="text-8xl mt-10 w-24 h-24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#191919"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={pathof} />
  </svg>
);

const pathof =
  "M 15.245 0.101 C 13.283 0.732 12.196 2.169 12.196 4.149 C 12.196 6.567 13.879 8.249 16.297 8.249 C 17.979 8.249 19.293 7.443 20.047 5.936 L 20.345 5.375 L 26.741 5.375 L 28.826 7.356 L 30.911 9.336 L 30.315 10.247 C 29.842 10.983 29.667 11.141 29.369 11.053 C 28.756 10.86 27.249 10.948 26.583 11.228 C 24.515 12.087 23.254 14.47 23.797 16.468 L 23.972 17.116 L 22.886 17.642 C 22.272 17.922 21.396 18.465 20.923 18.851 L 20.064 19.552 L 17.856 17.361 L 15.648 15.189 L 8.429 15.189 L 8.131 14.558 C 6.817 11.807 2.926 11.368 1.104 13.769 C -0.929 16.415 0.719 20.165 4.03 20.41 C 4.591 20.446 5.345 20.393 5.695 20.27 C 6.536 19.99 7.64 19.009 8.078 18.132 L 8.411 17.467 L 14.807 17.467 L 16.717 19.377 L 18.627 21.304 L 18.154 22.356 C 17.891 22.934 17.593 23.863 17.471 24.388 L 17.278 25.352 L 15.333 25.352 C 12.687 25.352 11.793 25.632 10.584 26.824 C 9.042 28.366 9.112 27.683 9.112 42.385 L 9.112 55.142 L 4.854 55.142 C -0.07 55.142 0 55.124 0 56.649 C 0 60.294 3.137 63.903 6.904 64.587 C 8.376 64.85 66.624 64.85 68.096 64.587 C 71.863 63.903 75 60.294 75 56.631 C 75 55.124 75.053 55.142 70.128 55.142 L 65.888 55.142 L 65.888 42.385 C 65.888 27.683 65.958 28.366 64.416 26.824 C 63.207 25.632 62.313 25.352 59.667 25.352 L 57.722 25.352 L 57.529 24.388 C 57.407 23.863 57.109 22.934 56.846 22.356 L 56.373 21.304 L 58.283 19.377 L 60.193 17.467 L 66.571 17.467 L 66.852 18.062 C 67.921 20.288 70.724 21.111 72.827 19.815 C 76.332 17.642 74.825 12.227 70.689 12.21 C 68.937 12.21 67.342 13.243 66.764 14.733 L 66.589 15.189 L 59.352 15.189 L 57.144 17.361 L 54.936 19.552 L 54.077 18.851 C 53.604 18.465 52.728 17.922 52.114 17.642 L 51.028 17.116 L 51.203 16.468 C 51.746 14.47 50.485 12.087 48.435 11.228 C 47.804 10.965 46.209 10.86 45.596 11.053 C 45.333 11.141 45.158 11.036 44.877 10.597 C 44.685 10.282 44.422 9.879 44.299 9.704 C 44.089 9.406 44.282 9.161 46.157 7.373 L 48.224 5.375 L 54.673 5.375 L 55.006 6.024 C 55.742 7.478 57.039 8.249 58.703 8.249 C 61.121 8.249 62.804 6.567 62.804 4.149 C 62.804 1.731 61.121 0.048 58.703 0.048 C 56.968 0.048 55.496 0.995 54.866 2.537 L 54.638 3.097 L 47.261 3.097 L 44.65 5.673 L 42.056 8.249 L 40.882 8.267 C 39.603 8.302 38.814 8.6 37.991 9.371 L 37.5 9.826 L 37.027 9.371 C 36.186 8.6 35.397 8.302 34.118 8.267 L 32.944 8.249 L 30.35 5.673 L 27.74 3.097 L 20.362 3.097 L 20.134 2.537 C 19.801 1.731 18.978 0.854 18.172 0.451 C 17.401 0.048 15.929 -0.127 15.245 0.101 Z";

const CloudRocketIcon = () => (
  <svg
    viewBox="0 0 75 63.048"
    overflow="visible"
    className="text-xl mt-10 w-24 h-24"
    xmlns="http://www.w3.org/2000/svg"
    fill="#191919"
    stroke="#191919"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <g>
      {/* Main rocket body - paste your full first path d="" here */}
      <path d="M 30.96 2.477 C 27.492 3.829 24.534 5 24.399 5.09 C 24.144 5.24 24.129 5.66 24.129 10.405 C 24.129 16.11 24.249 17.266 25.045 19.789 C 25.3 20.584 25.81 21.815 26.156 22.521 L 26.801 23.812 L 24.504 23.993 C 23.243 24.098 21.817 24.248 21.336 24.323 C 20.841 24.413 20.255 24.503 20.03 24.548 C 19.67 24.608 19.625 24.578 19.7 24.323 C 19.925 23.602 19.159 22.146 18.288 21.71 C 18.078 21.59 15.901 20.945 13.454 20.269 C 8.664 18.933 8.424 18.903 7.463 19.563 C 7.193 19.744 6.848 20.059 6.697 20.269 C 6.547 20.479 4.971 25.704 3.184 31.905 C -0.404 44.367 -0.374 44.171 0.467 45.268 C 0.707 45.568 1.097 45.913 1.352 46.033 C 1.983 46.319 10.436 48.646 10.826 48.646 C 11.772 48.631 12.973 47.655 13.319 46.619 C 13.409 46.334 13.544 46.093 13.604 46.093 C 13.664 46.093 13.889 46.288 14.114 46.514 C 14.46 46.874 14.52 47.054 14.52 47.865 C 14.52 49.306 15.195 50.372 16.427 50.883 C 16.847 51.063 16.862 51.078 16.802 51.934 C 16.712 53.105 17.117 54.021 17.988 54.636 C 18.333 54.892 18.709 55.102 18.814 55.102 C 18.979 55.102 18.994 55.297 18.919 56.003 C 18.799 57.159 19.129 58.045 19.925 58.765 C 20.811 59.561 21.907 59.756 23.303 59.381 C 23.543 59.321 23.678 59.426 23.949 59.906 C 24.669 61.182 26.366 61.738 27.807 61.182 L 28.483 60.927 L 29.384 61.768 C 30.735 63.014 32.086 63.329 33.753 62.804 C 34.864 62.444 36.14 61.182 36.5 60.086 L 36.771 59.306 L 37.581 60.041 C 39.398 61.708 41.996 61.678 43.677 59.981 C 44.293 59.366 44.848 58.345 44.848 57.864 C 44.848 57.399 44.953 57.369 45.704 57.594 C 47.311 58.075 48.722 57.699 49.953 56.483 C 51.199 55.222 51.575 53.735 51.064 51.979 C 50.989 51.739 51.034 51.649 51.199 51.649 C 51.334 51.649 51.815 51.513 52.265 51.348 C 53.181 51.003 54.157 50.147 54.592 49.276 C 54.878 48.721 54.938 48.691 55.989 48.511 C 57.595 48.225 59.397 47.67 60.598 47.099 L 61.649 46.589 L 61.814 47.009 C 62.145 47.79 63.391 48.646 64.186 48.646 C 64.757 48.646 73.585 46.108 73.961 45.838 C 74.621 45.328 74.922 44.787 74.997 43.961 C 75.042 43.271 74.666 41.814 72.039 32.656 C 68.435 20.149 68.526 20.419 68 19.924 C 67.55 19.488 66.649 19.068 66.168 19.068 C 65.913 19.068 58.631 21.035 57.19 21.485 C 56.094 21.846 55.358 22.806 55.313 23.993 L 55.283 24.683 L 52.926 25.689 L 50.569 26.71 L 49.353 25.974 C 48.677 25.569 47.986 25.194 47.836 25.149 C 47.461 25.029 47.476 24.893 47.956 24.128 C 49.187 22.191 50.238 19.233 50.629 16.666 C 50.869 15.134 50.959 5.63 50.734 5.315 C 50.674 5.225 50.479 5.075 50.298 4.97 C 49.728 4.669 37.627 0 37.446 0 C 37.341 0.015 34.429 1.126 30.96 2.477 Z" />

      {/* Smaller accent details - paste your full second path d="" here */}
      <path d="M 38.511 14.338 C 37.04 15.78 35.779 16.966 35.704 16.966 C 35.614 16.966 35.163 16.561 34.683 16.065 C 34.007 15.374 33.707 15.164 33.377 15.164 C 32.821 15.164 32.416 15.72 32.626 16.23 C 32.791 16.651 35.373 19.218 35.629 19.218 C 36.094 19.218 36.83 18.587 39.517 15.87 C 41.454 13.903 42.4 12.852 42.4 12.627 C 42.4 12.221 41.89 11.711 41.484 11.711 C 41.259 11.711 40.283 12.582 38.511 14.338 Z M 10.645 24.293 C 9.174 24.998 8.558 26.575 9.204 28.001 C 10.525 30.914 14.849 29.818 14.594 26.65 C 14.429 24.683 12.387 23.467 10.645 24.293 Z M 12.537 26.11 C 13.062 26.65 13.093 27.025 12.627 27.566 C 11.981 28.317 10.885 28.001 10.645 26.995 C 10.555 26.665 10.63 26.5 10.991 26.125 C 11.561 25.554 11.981 25.554 12.537 26.11 Z M 61.828 24.308 C 60.672 24.833 59.952 26.29 60.267 27.446 C 60.492 28.317 61.018 28.992 61.753 29.383 C 63.42 30.253 65.387 29.323 65.807 27.461 C 66.318 25.194 63.975 23.332 61.828 24.308 Z M 63.795 26.049 C 64.426 26.665 64.246 27.581 63.435 27.911 C 62.174 28.437 61.303 26.485 62.519 25.869 C 63.074 25.584 63.39 25.629 63.795 26.049 Z" />
    </g>
  </svg>
);

function HonestyIcon({ size = 64, strokeWidth = 18, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Shield Outer */}
      <path
        d="M256 40 
                 L370 85 
                 V180 
                 C370 260 310 305 256 330 
                 C202 305 142 260 142 180 
                 V85 
                 Z"
      />

      {/* Shield Inner */}
      <path
        d="M256 85 
                 L330 115 
                 V185 
                 C330 235 295 265 256 285 
                 C217 265 182 235 182 185 
                 V115 
                 Z"
      />

      {/* Check */}
      <path d="M225 190 L250 215 L295 165" />

      {/* Left Sleeve */}
      <rect x="50" y="230" width="95" height="140" rx="18" />

      {/* Right Sleeve */}
      <rect x="367" y="230" width="95" height="140" rx="18" />

      {/* Handshake */}
      <path
        d="M200 300 
                 C225 270 287 270 312 300 
                 C332 325 305 360 256 380 
                 C207 360 180 325 200 300 Z"
      />
    </svg>
  );
}

const SecureHandshakeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="text-8xl mt-10 w-24 h-24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Shield with checkmark */}
    <path d="M12 1 3 5v11c0 2 2 4 4 4h2c0 1.5 1.5 3 3 3s3-1.5 3-3h2c2 0 4-2 4-4V5z" />
    <polyline points="12,9 9,12 13,16" />

    {/* Left sleeve cuff with button */}
    <path d="M6 15 L4 17" />
    <circle cx="4.5" cy="17" r="0.8" />

    {/* Left hand - thumb up for handshake */}
    <path d="M7 14 L6 13 L5.5 12.5 L6 12 L7 11 L8 10" />
    <path d="M8.5 14.5 L9 15 L9.5 15.5" />

    {/* Right sleeve cuff with button */}
    <path d="M18 15 L20 17" />
    <circle cx="19.5" cy="17" r="0.8" />

    {/* Right hand - grasping position */}
    <path d="M17 14 L18 13 L18.5 12.5 L18 12 L17 11 L16 10" />
    <path d="M15.5 14.5 L15 15 L14.5 15.5" />
  </svg>
);
