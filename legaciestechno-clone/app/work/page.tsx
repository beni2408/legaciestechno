"use client";
import CaseStudyCard from "@/components/CaseStudyCard";
import { LogoAnimater } from "@/components/logoanimater";
import Link from "next/link";

import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function WorkPage() {
  return (
    <main className="bg-[#fdfbf5] text-[#191919]">
      {/* HEADER */}
      <section className=" border-b border-[#191919]/20">
        <div className="my-10">
          <p
            className={`${robotoMono.className} text-sm uppercase tracking-widest text-[#191919]/60 mb-6`}
          >
            Work
          </p>

          <h1
            className={`${syne.className} text-6xl lg:text-7xl font-semibold leading-tight`}
          >
            Our branding
            <br />
            success stories.
          </h1>
        </div>
      </section>

      {/* PROJECTS */}

      <CaseStudyCard
        title={`FIDELITY\nNATIONAL\nFINANCIAL\nINDIA`}
        category="Branding"
        image="https://framerusercontent.com/images/E5MvzFH7jExZr9bna26zHNVXI.jpg"
        link="/work/fidelity"
      />

      <CaseStudyCard
        title={`NEXT\nENTERPRISE\nAI SYSTEM`}
        category="Branding"
        image="https://framerusercontent.com/images/2ULST2PdTZY8m4dkGeS6fkcBIv4.jpg"
        link="/work/project2"
      />

      <CaseStudyCard
        title={`GLOBAL\nSaaS\nENGINEERING`}
        category="Branding"
        image="https://framerusercontent.com/images/jWJlzsIbbYyJGqEsJMsYEAAczk.jpg"
        link="/work/project3"
      />
      <CaseStudyCard
        title={`BCPL-RETAIL\nMANAGEMENT\nSYSTEM`}
        category="Digital"
        image="https://framerusercontent.com/images/XqZxjGXWmJUzLdivazQynrY9AKY.jpg"
        link="/work/project4"
      />
      <CaseStudyCard
        title={`JIO`}
        category="Branding"
        image="https://framerusercontent.com/images/Om6OSjtTaEhbeEpaarBOMhumNNM.jpg"
        link="/work/project4"
      />

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
