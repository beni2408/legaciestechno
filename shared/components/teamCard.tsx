"use client";

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

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamCard({ name, role, image }: TeamCardProps) {
  return (
    <div className="group mb-10">
      <div className="overflow-hidden lg:h-58 rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full object-cover transition duration-500 group-hover:scale-105 saturate-50"
        />
      </div>

      <h3 className={`${syne.className} text-2xl font-semibold mt-6`}>
        {name}
      </h3>

      <p
        className={`${robotoMono.className} text-sm uppercase tracking-widest text-[#191919] mt-2`}
      >
        {role}
      </p>
    </div>
  );
}
