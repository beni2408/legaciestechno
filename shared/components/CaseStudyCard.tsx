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
    <section className="border-b pb-10 lg:pb-0 border-[#191919]">
      <div className="lg:py-15  flex flex-col lg:flex-row gap-16">
        {/* LEFT SIDE */}
        <div className="w-[35%] flex flex-col justify-between">
          <div>
            <p
              className={`${robotoMono.className} lg:hidden  text-sm uppercase tracking-widest text-[#191919] mt-8`}
            >
              {category}
            </p>
            <h2
              className={`${syne.className} w-90 md:w-150 lg:w-20 lg:text-5xl text-4xl font-semibold leading-tight`}
            >
              {title}
            </h2>
            <Link
              href={link}
              className={`${robotoMono.className} mt-5 text-sm text-center lg:hidden inline-flex group items-center justify-center px-1.5 py-1 border w-40 border-[#191919] rounded-md tracking-widest overflow-hidden`}
            >
              <span className="relative h-5 overflow-hidden flex items-center justify-center w-full leading-none">
                {/* Top text */}
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
                  VIEW PROJECT
                </span>

                {/* Bottom text */}
                <span className="absolute inset-0 translate-y-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:translate-y-0">
                  VIEW PROJECT
                </span>
              </span>
            </Link>

            <p
              className={`${robotoMono.className} hidden lg:block text-sm uppercase tracking-widest text-[#191919] mt-8`}
            >
              {category}
            </p>
          </div>

          <Link
            href={link}
            className={`${robotoMono.className} text-sm text-center lg:block hidden group items-center justify-center px-1.5 py-1 border w-40 border-[#191919] rounded-md text-md tracking-widest overflow-hidden`}
          >
            <span className="relative h-5 overflow-hidden block w-full">
              {/* Top text */}
              <span className="block w-full text-center transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
                VIEW PROJECT
              </span>

              {/* Bottom text */}
              <span className="absolute left-0 top-full w-full text-center block transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
                VIEW PROJECT
              </span>
            </span>
          </Link>
        </div>

        {/* RIGHT SIDE */}

        <div className="lg:w-[80%]">
          <Link href={link}>
            <div className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
              {/* IMAGE */}
              <img
                src={image}
                alt={title}
                className="w-full  h-50 lg:h-125 object-cover transition duration-500 group-hover:scale-[1.05] "
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
