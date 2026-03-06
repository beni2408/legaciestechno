"use client";

import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#fdfbf5] text-black border-b border-black/50 lg:py-1.5">
      <nav className="lg:w-335 flex items-center justify-between py-5 px-4 lg:px-0">
        {/* LEFT → Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo2.png" alt="Logo" width={260} height={140} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-5 my-5">
          <ul className="flex gap-10 lg:text-[15px] tracking-wider">
            <li className={robotoMono.className}>
              <Link href="/services" className="navLink">
                SERVICES
              </Link>
            </li>

            <li>
              <Link href="/work" className={`${robotoMono.className} navLink`}>
                WORK
              </Link>
            </li>

            <li>
              <Link
                href="/studio"
                className={`${robotoMono.className} navLink`}
              >
                STUDIO
              </Link>
            </li>

            <li>
              <Link href="/blog" className={`${robotoMono.className} navLink`}>
                BLOG
              </Link>
            </li>

            <li>
              <Link
                href="/lynt-x-labs"
                className={`${robotoMono.className} navLink`}
              >
                LYNT-X LABS
              </Link>
            </li>
          </ul>

          {/* Talk Button */}
          <Link href="/contact">
            <button
              className={`${robotoMono.className} group bg-[#191919] text-[#fdfbf5] lg:px-6 px-5 py-2 rounded-md text-sm overflow-hidden`}
            >
              <span className="relative block h-5 overflow-hidden">
                <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                  LET'S TALK
                </span>
                <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full">
                  LET'S TALK
                </span>
              </span>
            </button>
          </Link>

          <div className="lg:h-9 h-6 w-px bg-black" />

          {/* Linkedin */}
          <Link href="https://www.linkedin.com/company/legacies-techno/">
            <svg overflow="visible" className="w-5 h-7">
              <path
                d="M 5.149 23 L 0.38 23 L 0.38 7.644 L 5.149 7.644 Z M 2.762 5.55 C 1.237 5.55 0 4.287 0 2.762 C 0 1.237 1.237 0 2.762 0 C 4.287 0 5.524 1.237 5.524 2.762 C 5.524 4.287 4.287 5.55 2.762 5.55 Z M 22.995 23 L 18.236 23 L 18.236 15.525 C 18.236 13.744 18.2 11.459 15.756 11.459 C 13.276 11.459 12.896 13.394 12.896 15.397 L 12.896 23 L 8.132 23 L 8.132 7.644 L 12.706 7.644 L 12.706 9.739 L 12.773 9.739 C 13.41 8.533 14.965 7.259 17.286 7.259 C 22.112 7.259 23 10.437 23 14.565 L 23 23 Z"
                fill="#191919"
              />
            </svg>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-6">
          <div className="border border-black/70">
            <Link href="/services">
              <div className="">
                <div
                  className={`${robotoMono.className} px-6 py-6 tracking-widest text-md`}
                >
                  SERVICES
                </div>
              </div>
            </Link>
            <div className="w-60 md:w-145 ml-5  border-[0.5]"></div>
            <Link href="/work">
              <div className="">
                <div
                  className={`${robotoMono.className}  px-6 py-4 tracking-widest text-md`}
                >
                  WORK
                </div>
              </div>
            </Link>
            <div className="w-60 md:w-145 ml-5 border-[0.5]"></div>
            <Link href="/studio">
              <div className="">
                <div
                  className={`${robotoMono.className} px-6 py-4 tracking-widest text-md`}
                >
                  STUDIO
                </div>
              </div>
            </Link>
            <div className="w-60 md:w-145 ml-5 border-[0.5]"></div>
            <Link href="/blog">
              <div className="">
                <div
                  className={`${robotoMono.className} px-6 py-4 tracking-widest text-md`}
                >
                  BLOG
                </div>
              </div>
            </Link>
            <div className="w-60 md:w-145 ml-5 border-[0.5]"></div>
            <Link href="/lynt-x-labs">
              <div className=" ">
                <div
                  className={`${robotoMono.className} px-6 py-4 tracking-widest text-md`}
                >
                  LYNT-X LABS
                </div>
              </div>
            </Link>
            <div className="w-60 md:w-145 ml-5 border-[0.5]"></div>
            <Link href="/contact">
              <div>
                <div
                  className={`${robotoMono.className} px-6 py-4 tracking-widest text-md`}
                >
                  CONTACT
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
