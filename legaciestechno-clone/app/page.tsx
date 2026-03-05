"use client";

import TrustedBrands from "@/components/trustedBrands";
import { ServiceCard } from "@/components/serviceCard";
import { ProjectCard, SmallProjectCard } from "@/components/ProjectCard";
import { Syne } from "next/font/google";
import { EthosItem } from "@/components/EthosItem";
import { LogoAnimater } from "@/components/logoanimater";
import { NewsCard } from "@/components/newsCard";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";

import { useEffect, useState } from "react";
import { Blog } from "@/types/blog";
import { ContactAd } from "@/components/ContactAd";

import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Variable.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "500", "500", "800"],
});

export default function HomePage() {
  const [latestBlogs, setLatestBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("blogs");

    if (stored) {
      const parsedBlogs: Blog[] = JSON.parse(stored);

      // Sort by newest date
      const sortedBlogs = parsedBlogs.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      // Take latest 3
      setLatestBlogs(sortedBlogs.slice(0, 3));
    }
  }, []);

  return (
    <main className="min-h-screen  bg-[#fdfbf5] text-[#191919]">
      <div className=" lg:pt-15  ">
        <div className="flex flex-col lg:flex-row items-start justify-between ">
          {/* LEFT CONTENT */}
          <div className="flex-1  ">
            <h1
              className={` ${syne.className}  text-4xl sm:text-5xl lg:text-7xl font-semibold leading-19 `}
            >
              Engineering the <br />
              Future with AI, <br />
              Innovation & <br />
              Purpose.
            </h1>

            <p className=" text-2xl leading-relaxed max-w-xl font-[300] font-satoshi ">
              At Legacies Techno, we build scalable digital ecosystems,
              intelligent systems, & future-ready platforms that redefine what's
              possible..
            </p>

            {/* Logo / Icon */}
            <div className="  mt-12">
              <div className="flex flex-row items-start gap-4 ">
                <div className="flex items-start justify-start lg:w-30   ">
                  <div className="flex  ">
                    <LogoAnimater />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex  ">
            <div
              className=" w-full 
            lg:w-160 lg:h-160 
            
            h-[500px]   rounded-2xl overflow-hidden"
            >
              <video
                src="https://framerusercontent.com/assets/za6N4j7jFO8ynuWiTOCihTLfvD8.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="  lg: w-full h-200 object-cover saturate-30"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border border-[#191919] border-[0.8px] lg:mt-7"></div>

      {/* section2 */}
      <TrustedBrands />
      <div className="w-full border border-[#191919] border-[0.8px]"></div>

      {/* Section 3 */}
      <section className="bg-[#fdfbf5] lg:pb-10  text-[#191919] lg:pt-15">
        <div className="max-w-7xl  ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT LABEL COLUMN */}
            <div>
              <p
                className={`text-md tracking-widest text-[#191919] ${robotoMono.className} `}
              >
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
            <div className="sticky top-20 space-y-2">
              <h2
                className={`lg:text-[52px] font-[600] leading-tight ${syne.className} `}
              >
                ENTERPRISE <br />
                IMPACT, <br />
                DELIVERED
              </h2>

              <p
                className={`text-[#191919]/60 font-satoshi  leading-relaxed font-normal lg:text-[22px] lg:w-105`}
              >
                At Legacies Techno, we engineer breakthrough solutions that
                scale globally. From AI-powered compliance platforms to
                high-velocity digital transformations — here’s a look at some of
                the brands we’ve powered forward.
              </p>

              <Link
                href="/work"
                className={`${robotoMono.className} group lg:mt-10 inline-flex items-center justify-center lg:px-1 lg:py-2 bg-[#191919] lg:w-37 text-center text-[#fdfbf5] text-sm tracking-widest rounded-md overflow-hidden relative`}
              >
                <span className="relative h-6 overflow-hidden">
                  {/* Top text */}
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
                    SEE ALL WORK
                  </span>

                  {/* Bottom text */}
                  <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
                    SEE ALL WORK
                  </span>
                </span>
              </Link>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="w-px bg-[#191919]" />

          {/* RIGHT SCROLLABLE PROJECTS */}
          <div className="lg:w-[65%]   lg:pl-16 pb-20 space-y-16">
            <ProjectCard
              title="Fidelity National Financial India"
              status="ON-GOING"
              image="https://framerusercontent.com/images/E5MvzFH7jExZr9bna26zHNVXI.jpg"
              href="/work/fidelity"
            />
            <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10">
              <SmallProjectCard
                title="FIFA 2022"
                status="2023"
                image="https://framerusercontent.com/images/2ULST2PdTZY8m4dkGeS6fkcBIv4.jpg"
                href="/work/FIFA"
              />

              <SmallProjectCard
                title="IRIS"
                status="2022"
                image="https://framerusercontent.com/images/jWJlzsIbbYyJGqEsJMsYEAAczk.jpg"
                href="/work/IRIS"
              />
              <SmallProjectCard
                title="BPCL - Retail Management System"
                status="2022"
                image="https://framerusercontent.com/images/XqZxjGXWmJUzLdivazQynrY9AKY.jpg"
                href="/work/BPCL"
              />
              <SmallProjectCard
                title="JIO"
                status="2021"
                image="https://framerusercontent.com/images/Om6OSjtTaEhbeEpaarBOMhumNNM.jpg"
                href="/work/JIO"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border border-[#191919]/50 mb-10 border-[0.2px] mt-15"></div>

      {/* section5  */}

      <section className="bg-[#fdfbf5] text-black mb-15 lg:mt-15 ">
        <div className="max-w-7xl ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-48">
            {/* LEFT SIDE */}
            <div className="space-y-2 w-1500">
              <p
                className={` ${robotoMono.className}   text-sm tracking-widest text-[#191919]`}
              >
                OUR APPROACH
              </p>

              <h1
                className={`${syne.className} font-[500] lg:w-[880px]  text-4xl sm:text-5xl lg:text-[65px] leading-17`}
              >
                Empowering Growth Through Intelligent Strategy and Engineering
                Excellence
              </h1>

              <div className="lg:mt-30  w-100  ">
                <LogoAnimater />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative   lg:ml-50 ">
              {/* VERTICAL DIVIDER */}
              <div className=" absolute left-[-40px] top-0 h-full  border-[#191919]   border-[0.5]" />

              <div className=" flex flex-col justify-between h-full">
                <p className="text-lg text-black/70 leading-relaxed font-satoshi lg:text-xl lg:w-94 ">
                  By combining data-driven analysis, AI-powered insights, and a
                  deep understanding of your business goals, we architect
                  transformative solutions that drive measurable outcomes —
                  helping you thrive in a fast-evolving digital landscape.
                </p>
                <Link
                  href="/services"
                  className={`${robotoMono.className} group relative inline-flex items-center justify-center px-4 py-2 bg-[#191919] lg:w-38 text-center text-[#fdfbf5] text-sm tracking-widest rounded-md overflow-hidden`}
                >
                  <span className="relative h-5 overflow-hidden">
                    {/* Top text */}
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
                      OUR SERVICES
                    </span>

                    {/* Bottom text */}
                    <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
                      OUR SERVICES
                    </span>
                  </span>
                </Link>
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
            className={`  ${syne.className} text-center text-3xl lg:font-[500] sm:text-4xl lg:text-[62px]  tracking-wide`}
          >
            "OUR ENGINEERING ETHOS"
          </h2>

          {/* DIVIDER */}

          <div className="w-full border border-[#191919]  border-[0.2px] mt-15"></div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
            {/* LEFT IMAGE */}
            <div className="rounded-2xl overflow-hidden lg:w-[97%]">
              <img
                src="https://framerusercontent.com/images/43b4lLPE355eafyrnuz3G58SeA.webp"
                alt="Ethos"
                className="w-full h-full object-cover saturate-30"
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="relative">
              {/* VERTICAL DIVIDER */}
              <div className="hidden lg:block absolute left-[-40px] top-0 h-full w-px lg:ml-2 border border-[#191919] border-[0.5]" />

              <div className="space-y-12">
                <EthosItem
                  number="01"
                  title="PURPOSEFUL VISION"
                  description="At Legacies Techno, we don’t follow trends — we architect the future. Our vision is grounded in strategic foresight, engineering precision, and the conviction to build systems that lead industries, not just serve them."
                />

                <div className="w-full border border-[#191919]/50 mb-5 border-[0.2px] mt-2"></div>

                <EthosItem
                  number="02"
                  title="RELENTLESS INNOVATION"
                  description="Innovation is not a feature — it’s our default setting. We blend AI, automation, and system design to push boundaries, unlock new business models, and create digital infrastructures built for tomorrow’s scale."
                />

                <div className="w-full border border-[#191919]/50 mb-5 border-[0.2px] mt-2"></div>

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
      {/* <div className="w-full border border-[#191919]  border-[0.2px] "></div> */}
      <div className="w-full border border-[#191919]  border-[0.2px] mt-15"></div>

      {/* section7 */}
      <ContactAd />
      {/* <div className="w-full border border-[#191919]/50 mb-5 border-[0.2px] "></div> */}

      {/* section8 */}

      <section className="bg-[#fdfbf5] text-[#191919] ">
        <div className="w-full ">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-12">
            <h2
              className={` ${syne.className} text-3xl sm:text-4xl lg:text-[64px] font-[500]`}
            >
              LATEST NEWS
            </h2>
            <Link
              href="/blog"
              className={`${syne.className} group inline-flex items-center justify-center px-3.5 py-1 border border-[#191919] rounded-md text-md tracking-widest overflow-hidden`}
            >
              <span className="relative h-6 overflow-hidden">
                {/* Top text */}
                <span className="block transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
                  SEE ALL
                </span>

                {/* Bottom text */}
                <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
                  SEE ALL
                </span>
              </span>
            </Link>
          </div>

          {/* DIVIDER */}
          <div className="w-full border border-[#191919] mb-15 border-[0.2px] "></div>

          {/* NEWS GRID */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {latestBlogs.map((blog) => (
              <NewsCard
                key={blog.id}
                id={blog.id}
                image={blog.image}
                category={blog.category}
                title={blog.title}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
