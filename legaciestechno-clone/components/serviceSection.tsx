"use client";
import Link from "next/link";

import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import React from "react";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface ServiceSectionProps {
  icon?: React.ReactNode;
  title: string;
  bullets?: string[];
  buttonText?: string;
  children: React.ReactNode;
}

export default function ServiceSection({
  icon,
  title,
  bullets,
  buttonText,
  children,
}: ServiceSectionProps) {
  return (
    <section className="bg-[#fdfbf5] text-[#191919]">
      <div className="flex">
        {/* LEFT SIDE (Sticky) */}
        <div className="w-[30%] pr-12">
          <div className="sticky top-24 space-y-8">
            {icon && <div className="text-6xl">{icon}</div>}

            <h3
              className={`${syne.className} text-5xl font-semibold leading-snug`}
            >
              {title}
            </h3>

            {bullets && (
              <ul
                className={`${robotoMono.className} list-none pl-0 space-y-3 text-lg uppercase text-[#191919]/70`}
              >
                {bullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            {buttonText && (
              <Link
                href="/contact"
                className={`${robotoMono.className} inline-block px-8 py-4 bg-[#191919] w-52 text-center text-[#fdfbf5] text-sm tracking-widest rounded-lg hover:bg-[#191919]/80 hover:scale-105 transition-all duration-300 relative z-10`}
              >
                {buttonText}
              </Link>
            )}
          </div>
        </div>

        {/* VERTICAL DIVIDER */}
        <div className=" mt-15 w-px bg-[#191919]/20" />

        {/* RIGHT SIDE */}
        <div className="w-[70%] pl-12 py-16 space-y-12">{children}</div>
      </div>
      <div className="w-full border border-[#191919]/50 mb-10 border-[0.2px] mt-15"></div>
    </section>
  );
}
