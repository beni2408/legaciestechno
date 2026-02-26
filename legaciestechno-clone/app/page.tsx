import TrustedBrands from "@/components/trustedBrands";
import { ServiceCard } from "@/components/serviceCard";
import { ProjectCard, SmallProjectCard } from "@/components/ProjectCard";
import { Syne } from "next/font/google";

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

            <p className=" text-2xl leading-relaxed max-w-xl">
              At Legacies Techno, we build scalable digital ecosystems,
              intelligent systems, & future-ready platforms that redefine what's
              possible..
            </p>

            {/* Logo / Icon */}
            <div className="pt-8">
              <div className="flex flex-row items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex ">
                    <div className="items-center w-60 h-40 flex  object-cover">
                      <img
                        src="./logoelements/Untitled (40).png"
                        alt=""
                        className="w-[130px] h-[100px] animate-bracket-left object-contain grayscale-100"
                      />

                      <p className="text-[25px] font-black   animate-dot1">.</p>
                      <p className="text-[25px] font-black ml-1 animate-dot2">
                        .
                      </p>
                      <p className="text-[25px] font-black ml-1 animate-dot2">
                        /
                      </p>
                      <img
                        src="./logoelements/Untitled (41).png"
                        alt=""
                        className="w-[130px] h-[100px] animate-bracket-right"
                      />
                    </div>
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

      <section className="bg-[#fdfbf5] text-black py-20">
        <div className="max-w-7xl ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              <p className="text-sm tracking-widest text-[#191919]/60">
                OUR APPROACH
              </p>

              <h1
                className={` ${syne.className} text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight`}
              >
                Empowering Growth <br />
                Through Intelligent <br />
                Strategy and Engineering <br />
                Excellence
              </h1>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative">
              {/* VERTICAL DIVIDER */}
              <div className="hidden lg:block absolute left-[-40px] top-0 h-full w-px bg-black/20" />

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
        <div className="w-full border border-[#191919]/50 mb-10 border-[0.2px] mt-15"></div>
      </section>

      {/* section 6 */}
    </main>
  );
}
