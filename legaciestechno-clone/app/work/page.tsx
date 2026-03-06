"use client";
import CaseStudyCard from "@/components/CaseStudyCard";
import { LogoAnimater } from "@/components/logoanimater";
import Link from "next/link";
import { ContactAd } from "@/components/ContactAd";
import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import { ServicesContactAd } from "@/components/ServicesContactCard";

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
      <section className=" border-b border-[#191919]">
        <div className="lg:my-20 my-7">
          <p
            className={`${robotoMono.className} lg:font-[400] font-[500] text-sm uppercase tracking-widest text-[#191919]/90 lg:mb-3`}
          >
            Work
          </p>

          <h1
            className={`${syne.className} leading-12 w-90  text-[43px] lg:font-[500] lg:leading-23 lg:text-8xl lg:w-200  font-[500] `}
          >
            Our branding success stories.
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
        title={`FIFA`}
        category="Branding"
        image="https://framerusercontent.com/images/2ULST2PdTZY8m4dkGeS6fkcBIv4.jpg"
        link="/work/FIFA"
      />

      <CaseStudyCard
        title={`IRIS`}
        category="Branding"
        image="https://framerusercontent.com/images/jWJlzsIbbYyJGqEsJMsYEAAczk.jpg"
        link="/work/IRIS"
      />
      <CaseStudyCard
        title={`BCPL-RETAIL\nMANAGEMENT\nSYSTEM`}
        category="Digital"
        image="https://framerusercontent.com/images/XqZxjGXWmJUzLdivazQynrY9AKY.jpg"
        link="/work/BPCL"
      />
      <CaseStudyCard
        title={`JIO`}
        category="Branding"
        image="https://framerusercontent.com/images/Om6OSjtTaEhbeEpaarBOMhumNNM.jpg"
        link="/work/JIO"
      />

      <ServicesContactAd />
    </main>
  );
}
