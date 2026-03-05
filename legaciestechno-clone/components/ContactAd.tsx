import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
import { LogoAnimater } from "./logoanimater";
import Link from "next/link";
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export function ContactAd() {
  return (
    <section className="bg-[#fdfbf5] text-black mb-12 lg:mt-15 ">
      <div className="max-w-7xl ">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-48">
          {/* LEFT SIDE */}
          <div className="space-y-2 w-1500">
            <p
              className={` ${robotoMono.className}   text-sm tracking-widest text-[#191919]`}
            >
              CONTACT
            </p>

            <h1
              className={`${syne.className} font-[400] lg:w-[880px] uppercase  text-4xl sm:text-5xl lg:text-[85px] leading-20`}
            >
              Let’s Engineer the
              <br />
              Future—
              <br />
              Together
            </h1>

            <div className="lg:mt-40  w-100  ">
              <LogoAnimater />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative   lg:ml-50 ">
            {/* VERTICAL DIVIDER */}
            <div className=" absolute left-[-40px] top-0 h-full  border-[#191919]   border-[0.5]" />

            <div className=" flex flex-col justify-between h-full">
              <p className="text-lg text-[#191919]/90  leading-relaxed font-satoshi lg:text-[22px] font-[300] lg:w-94 tracking-wide ">
                {`Whether you're scaling a digital product, modernizing
                operations, or building from the ground up — Legacies Techno is
                your partner in crafting intelligent, enterprise-grade solutions
                that create lasting impact.`}
              </p>

              <Link
                href="/contact"
                className={`${robotoMono.className} group relative inline-flex items-center justify-center px-4 py-2 bg-[#191919] lg:w-38 text-[#fdfbf5] text-sm tracking-widest rounded-md overflow-hidden`}
              >
                <span className="relative h-5 overflow-hidden">
                  {/* Top Text */}
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
                    GET IN TOUCH
                  </span>

                  {/* Bottom Text */}
                  <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
                    GET IN TOUCH
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="w-full border border-[#191919]  border-[0.2px] mt-15"></div>
    </section>
  );
}
