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

interface CaseStudyCardProps {
  title: string;
  category: string;
  image: string;
  link: string;
}

export default function CaseStudyCard({
  title,
  category,
  image,
  link,
}: CaseStudyCardProps) {
  return (
    <section className="border-b border-[#191919]/20">
      <div className="py-25 flex gap-16">
        {/* LEFT SIDE */}
        <div className="w-[35%] flex flex-col justify-between">
          <div>
            <h2
              className={`${syne.className} text-5xl font-semibold leading-tight`}
            >
              {title}
            </h2>

            <p
              className={`${robotoMono.className} text-sm uppercase tracking-widest text-[#191919]/60 mt-8`}
            >
              {category}
            </p>
          </div>

          <Link
            href={link}
            className={`${robotoMono.className} mt-12 w-fit px-6 py-3 border border-[#191919] text-sm uppercase tracking-widest hover:bg-[#191919] hover:text-[#fdfbf5] transition`}
          >
            View Project
          </Link>
        </div>

        {/* RIGHT SIDE */}
        {/* RIGHT SIDE */}
        {/* RIGHT SIDE */}
        <div className="w-[65%]">
          <Link href={link}>
            <div className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
              {/* IMAGE */}
              <img
                src={image}
                alt={title}
                className="w-full object-cover transition duration-500 group-hover:scale-[1.02] "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-[#191919]/0 group-hover: transition duration-500" />

              {/* CENTER TEXT */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-100">
                <div
                  className={` ${robotoMono.className}  bg-[#191919] text-[#fdfbf5] px-4 py-2 rounded-xl text-xs tracking-widest font-medium shadow-md`}
                >
                  VIEW MORE
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
