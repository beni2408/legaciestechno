"use client";
import CaseStudyCard from "@/components/CaseStudyCard";
import { LogoAnimater } from "@/components/logoanimater";
import Link from "next/link";
import { ContactAd } from "@/components/ContactAd";
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
            className={`${syne.className} text-6xl lg:text-8xl font-semibold leading-tight`}
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

      <ContactAd />
    </main>
  );
}
