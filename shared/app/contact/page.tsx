"use client";

import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import OfficesSection from "@/components/OfficeSection";
import FAQSection from "@/components/FAQSection";
import { LogoAnimater } from "@/components/logoanimater";
import Link from "next/link";
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
import FAQItem from "@/components/FAQItem";
import OfficeCard from "@/components/OfficeCard";

export default function ContactPage() {
  return (
    <main className="bg-[#fdfbf5] text-[#191919]">
      {/* CONTACT HERO */}
      <section className="lg:py-35 py-15">
        <div className=" lg:flex lg:flex-row flex flex-col  items-start gap-24">
          {/* LEFT SIDE */}
          <div className="">
            <p
              className={` ${robotoMono.className} lg:w-150 uppercase text-sm font-[300] tracking-widest  mb-6 text-[#191919]`}
            >
              Contact
            </p>

            <h1
              className={`lg:text-[80px] lg:w-150 text-6xl leading-16 lg:leading-[90px] font-[500] tracking-tight  ${syne.className}`}
            >
              Creating true brands together
            </h1>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:w-[45%] pl-5 space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm text-[#191919]/70">Name</label>
              <input
                className="w-full rounded-lg  h-[18%]  bg-[#191919]/5 px-4 py-3 focus:outline-none focus:border-[#191919]"
                placeholder="Jane Smith"
              />
            </div>

            {/* Email */}
            <div className="space-y-2 ">
              <label className="text-sm text-[#191919]/70">Email</label>
              <input
                className="w-full rounded-lg  h-[20%] bg-[#191919]/5 px-4 py-3 focus:outline-none focus:border-[#191919]"
                placeholder="jane@framer.com"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm text-[#191919]/70">Phone Number</label>
              <input
                className="w-full  h-[20%] rounded-lg bg-[#191919]/5 px-4 py-2 focus:outline-none focus:border-[#191919]"
                placeholder="1234567890"
              />
            </div>

            {/* Business */}
            <div className="space-y-2">
              <label className="text-sm text-[#191919]/70">Business Name</label>
              <input className="w-full  h-[20%] rounded-lg bg-[#191919]/5 px-4 py-3 focus:outline-none focus:border-[#191919]" />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm text-[#191919]/70">Message</label>
              <textarea className="w-full  rounded-lg bg-[#191919]/5 px-4 py-4 h-32 " />
            </div>

            {/* Submit */}
            <button className="lg:w-full w-full py-3 lg:h-[20%] lg:py-2 rounded-lg bg-[#191919]/80 text-[#fdfbf5] font-medium hover:opacity-90 transition">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="w-full border border-black/50 mb-15 mt-20 border-[0.2px]"></div>

      {/* OUR OFFICES */}
      <OfficesSection />

      {/* DIVIDER */}
      <div className="w-full border border-black/50 mb-15 mt-20 border-[0.2px]"></div>

      {/* FAQ */}
      <FAQSection />
      <div className="w-full border border-black/50 mb-15 mt-20 border-[0.2px]"></div>
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
                operations, or building from the ground up — Legacies Techno is
                your partner in crafting intelligent, enterprise-grade solutions
                that create lasting impact.
              </p>

              <Link href="/contact">
                <button
                  className={` ${robotoMono.className} px-8 py-4 bg-[#191919] w-50 text-[#fdfbf5] text-sm tracking-widest rounded-lg hover:bg-[#191919]/80 hover:scale-105 transition`}
                >
                  GET IN TOUCH
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
