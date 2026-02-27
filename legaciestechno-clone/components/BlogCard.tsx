"use client";

import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface BlogCardProps {
  title: string;
  category?: string;
  image: string;
  large?: boolean;
}

export default function BlogCard({
  title,
  category,
  image,
  large,
}: BlogCardProps) {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {category && (
        <p
          className={`${robotoMono.className} text-md text-center uppercase tracking-widest text-[#191919] mt-5`}
        >
          {category}
        </p>
      )}

      <h3
        className={`${syne.className} ${
          large ? "text-2xl" : "text-xl"
        } font-semibold mt-3 leading-snug`}
      >
        {title}
      </h3>
    </div>
  );
}
