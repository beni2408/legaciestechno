import TrustedBrands from "@/components/trustedBrands";
import { ServiceCard } from "@/components/serviceCard";
import { ProjectCard, SmallProjectCard } from "@/components/ProjectCard";
import { Syne } from "next/font/google";
import { EthosItem } from "@/components/EthosItem";
import { LogoAnimater } from "@/components/logoanimater";
import { NewsCard } from "@/components/newsCard";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fdfbf5] text-[#191919]">
      <div className="   py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between ">
          {/* LEFT CONTENT */}
          <div className="flex-1 space-y-6">
            <h1
              className={` ${syne.className} text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight `}
            >
              Engineering the <br />
              Future with AI, <br />
              Innovation & <br />
              Purpose.
            </h1>

            <p className=" text-2xl leading-relaxed max-w-xl font-satoshi">
              At Legacies Techno, we build scalable digital ecosystems,
              intelligent systems, & future-ready platforms that redefine what's
              possible..
            </p>

            {/* Logo / Icon */}
            <div className="pt-8">
              <div className="flex flex-row items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex ">
                    <LogoAnimater />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1  ">
            <div className="relative w-full h-[500px]  lg:h-[700px] rounded-2xl overflow-hidden">
              <video
                src="https://framerusercontent.com/assets/za6N4j7jFO8ynuWiTOCihTLfvD8.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-200 object-cover saturate-50"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border border-black/50 mb-2 border-[0.2px]"></div>

      {/* section2 */}
      <TrustedBrands />
      <div className="w-full border border-black/50 mb-10 border-[0.2px]"></div>

      {/* Section 3 */}
      <section className="bg-[#fdfbf5] text-[#191919] py-10">
        <div className="max-w-7xl  ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT LABEL COLUMN */}
            <div>
              <p className="text-sm tracking-widest text-[#191919]">
                WHAT WE DO.
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-2 flex">
              <div className="border border-[0.2px] border-black/50 w-[0px] h-full"></div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* ITEM 1 */}
                <ServiceCard
                  icon="fa-solid fa-microchip"
                  title="AI-POWERED PLATFORMS"
                  description="Transform workflows with autonomous agents, intelligent dashboards, and real-time insights."
                />

                {/* ITEM 2 */}
                <ServiceCard
                  icon="fa-solid fa-handshake"
                  title="ENTERPRISE SOFTWARE DEVELOPMENT"
                  description="From cloud-native apps to secure integrations — we architect your next big system."
                />

                {/* ITEM 3 */}
                <ServiceCard
                  icon="fa-solid fa-gears"
                  title="SMART AUTOMATION"
                  description="Digitize operations with RPA, document intelligence, and compliance-aware automation."
                />

                {/* ITEM 4 */}
                <ServiceCard
                  icon="fa-solid fa-cloud"
                  title="SAAS PRODUCT ENGINEERING"
                  description="MVP to scale — we help you ship faster with proven frameworks and AI-first logic."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <div className="w-full border border-black/50 mb-10 border-[0.2px]"></div>
      <section className="bg-[#fdfbf5] text-[#191919]">
        <div className="max-w-7xl  flex">
          {/* LEFT STICKY PANEL */}
          <div className="w-[34.6%] ">
            <div className="sticky top-20 space-y-6">
              <h2 className="text-5xl font-normal leading-tight">
                ENTERPRISE <br />
                IMPACT, <br />
                DELIVERED
              </h2>

              <p className="text-[#191919] leading-relaxed font-normal text-xl w-90">
                At Legacies Techno, we engineer breakthrough solutions that
                scale globally. From AI-powered compliance platforms to
                high-velocity digital transformations — here’s a look at some of
                the brands we’ve powered forward.
              </p>

              <button className="mt-6 px-6 py-3 bg-[#191919] font-mono text-[#fdfbf5] text-sm tracking-wide rounded-md hover:bg-black/80 transition">
                SEE ALL WORK
              </button>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="w-px bg-[#191919]/50" />

          {/* RIGHT SCROLLABLE PROJECTS */}
          <div className="w-[65%] pl-16 py-20 space-y-16">
            <ProjectCard
              title="Fidelity National Financial India"
              status="ON-GOING"
              image="https://framerusercontent.com/images/E5MvzFH7jExZr9bna26zHNVXI.jpg"
              href="/projects/fidelity"
            />
            <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10">
              <SmallProjectCard
                title="FIFA 2022"
                status="2023"
                image="https://framerusercontent.com/images/2ULST2PdTZY8m4dkGeS6fkcBIv4.jpg"
                href="/projects/sports"
              />

              <SmallProjectCard
                title="IRIS"
                status="2022"
                image="https://framerusercontent.com/images/jWJlzsIbbYyJGqEsJMsYEAAczk.jpg"
                href="/projects/identity"
              />
              <SmallProjectCard
                title="BPCL - Retail Management System"
                status="2022"
                image="https://framerusercontent.com/images/XqZxjGXWmJUzLdivazQynrY9AKY.jpg"
                href="/projects/identity"
              />
              <SmallProjectCard
                title="JIO"
                status="2021"
                image="https://framerusercontent.com/images/Om6OSjtTaEhbeEpaarBOMhumNNM.jpg"
                href="/projects/identity"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border border-[#191919]/50 mb-10 border-[0.2px] mt-15"></div>

      {/* section5  */}

      <section className="bg-[#fdfbf5] text-black mb-15 ">
        <div className="max-w-7xl ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT SIDE */}
            <div className="space-y-6 w-1500">
              <p className="text-sm tracking-widest text-[#191919]/60">
                OUR APPROACH
              </p>

              <h1
                className={` ${syne.className} w-500 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight`}
              >
                Empowering Growth <br />
                Through Intelligent <br />
                Strategy and Engineering <br />
                Excellence
              </h1>
              <LogoAnimater />
            </div>

            {/* RIGHT SIDE */}
            <div className="relative   ml-80 ">
              {/* VERTICAL DIVIDER */}
              <div className="hidden lg:block absolute left-[-40px] top-0 h-full w-px bg-black/20   border border-black/10 border-0.5" />

              <div className=" flex flex-col justify-between h-full">
                <p className="text-lg text-black/70 leading-relaxed">
                  By combining data-driven analysis, AI-powered insights, and a
                  deep understanding of your business goals, we architect
                  transformative solutions that drive measurable outcomes —
                  helping you thrive in a fast-evolving digital landscape.
                </p>

                <button className="px-6 py-3 bg-black text-white text-sm tracking-widest rounded-md hover:bg-black/80 transition w-50">
                  OUR SERVICES
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="w-full border border-[#191919]/50  border-[0.2px] mt-15"></div>
      </section>

      {/* section 6 */}

      <section className="bg-[#fdfbf5] text-black mb-10 ">
        {/* TITLE */}
        <div className="w-full ">
          <h2
            className={`  ${syne.className} text-center text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide`}
          >
            "OUR ENGINEERING ETHOS"
          </h2>

          {/* DIVIDER */}

          <div className="w-full border border-[#191919]/50 mb-5 border-[0.2px] mt-15"></div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-15">
            {/* LEFT IMAGE */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://framerusercontent.com/images/43b4lLPE355eafyrnuz3G58SeA.webp"
                alt="Ethos"
                className="w-full h-full object-cover saturate-50"
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="relative">
              {/* VERTICAL DIVIDER */}
              <div className="hidden lg:block absolute left-[-40px] top-0 h-full w-px bg-black/20  bg-[#191919]/20 border border-black/10 border-0.5" />

              <div className="space-y-12">
                <EthosItem
                  number="01"
                  title="PURPOSEFUL VISION"
                  description="At Legacies Techno, we don’t follow trends — we architect the future. Our vision is grounded in strategic foresight, engineering precision, and the conviction to build systems that lead industries, not just serve them."
                />

                <div className="w-full border border-[#191919]/50 mb-10 border-[0.2px] mt-15"></div>

                <EthosItem
                  number="02"
                  title="RELENTLESS INNOVATION"
                  description="Innovation is not a feature — it’s our default setting. We blend AI, automation, and system design to push boundaries, unlock new business models, and create digital infrastructures built for tomorrow’s scale."
                />

                <div className="w-full border border-[#191919]/50 mb-10 border-[0.2px] mt-15"></div>

                <EthosItem
                  number="03"
                  title="TRUST BY DESIGN"
                  description="Trust is embedded in every decision we make — from secure architecture to compliance frameworks. We partner with businesses to deliver not just outcomes, but certainty — at scale, across borders, and through change."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border border-[#191919]/50 mb-5 border-[0.2px] "></div>

      {/* section7 */}

      <section className="bg-[#fdfbf5] text-[#191919] py-24">
        <div className="  ">
          <div className="flex">
            {/* LEFT SIDE */}
            <div className="space-y-10">
              <p className="text-sm tracking-widest text-[#191919]/60">
                CONTACT
              </p>

              <h1 className="text-4xl sm:text-5xl  w-200 lg:text-7xl font-semibold leading-tight">
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

                <button className="px-8 py-4 bg-[#191919] w-50 text-[#fdfbf5] text-sm tracking-widest rounded-lg hover:bg-[#191919]/80 hover:scale-105 transition">
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full border border-[#191919]/50 mb-5 border-[0.2px] "></div>

      {/* section8 */}

      <section className="bg-[#fdfbf5] text-[#191919] py-24">
        <div className="w-full ">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-10">
            <h2
              className={` ${syne.className} text-3xl sm:text-4xl lg:text-5xl font-semibold`}
            >
              LATEST NEWS
            </h2>

            <button
              className={`  ${syne.className} px-5 py-2 border border-[#191919]/30 rounded-md text-md tracking-widest hover:bg-[#191919] hover:text-[#fdfbf5] transition`}
            >
              SEE ALL
            </button>
          </div>

          {/* DIVIDER */}
          <div className="w-full border border-[#191919]/50 mb-15 border-[0.2px] "></div>

          {/* NEWS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <NewsCard
              image="https://framerusercontent.com/images/9j5FA8yF4YNvpGBK7f9jYsFDssI.png?width=1536&height=1024"
              category="TECHNOLOGY & INFRASTRUCTURE"
              title="Alphabet Inc. to Invest $40 Billion in Texas Data Centres Amid AI Build-Out"
            />

            <NewsCard
              image="https://framerusercontent.com/images/rcIqaIutw3o4YSDDykyUiOJVs.png?width=1536&height=1024"
              category="TECHNOLOGY & INFRASTRUCTURE"
              title="Major Analysts See AI Infrastructure Spending Reaching Up to $4 Trillion by 2030"
            />

            <NewsCard
              image="https://framerusercontent.com/images/5Y6pGQ4FuaIsVgtB3ocCF7ObvA.png?width=1536&height=1024"
              category="TECHNOLOGY & INFRASTRUCTURE"
              title="Cisco Systems Raises Forecast on AI-Driven Networking Boom"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
