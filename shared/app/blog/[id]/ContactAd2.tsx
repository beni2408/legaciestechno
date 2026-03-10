import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import { LogoAnimater } from "@/components/logoanimater";
import Link from "next/link";
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export function ContactAd2() {
  return (
    <div>
      <div className="w-full border border-black/50 mb-15 mt-20 border-[0.2px]"></div>
      <div className="  ">
        <div className="flex">
          {/* LEFT SIDE */}
          <div className="space-y-10">
            <p
              className={` ${robotoMono.className} text-sm tracking-widest font-bold text-[#191919]`}
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
    </div>
  );
}
