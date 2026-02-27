"use client";

import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import React from "react";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface ProductSectionProps {
  tag: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export default function ProductSection({
  tag,
  title,
  description,
  image,
  features,
}: ProductSectionProps) {
  return (
    <section className="bg-[#fdfbf5] text-[#191919]">
      <div className="flex gap-16">
        {/* LEFT SIDE (Sticky) */}
        <div className="w-[35%] pr-12">
          <div className="sticky top-24 space-y-6">
            <p
              className={`${robotoMono.className} text-xs uppercase tracking-widest text-[#191919]/60`}
            >
              {tag}
            </p>

            <h2
              className={`${syne.className} text-5xl font-semibold leading-tight`}
            >
              {title}
            </h2>

            <p className="text-[#191919]/70 leading-relaxed">{description}</p>
          </div>
        </div>

        {/* VERTICAL DIVIDER */}
        <div className="w-px bg-[#191919]/20" />

        {/* RIGHT SIDE */}
        <div className="w-[65%] space-y-10">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src={image} alt={title} className="w-full object-cover" />
          </div>

          <ul className="space-y-4 text-[#191919]/80 leading-relaxed">
            {features.map((feature, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 bg-[#191919] rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CUSTOM DIVIDER FORMAT */}
      <div className="w-full border border-black/50 mb-15 mt-20 border-[0.2px]"></div>
    </section>
  );
}
