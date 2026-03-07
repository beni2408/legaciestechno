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

export function HomescreennavContactAd() {
  return (
    <section className="bg-[#fdfbf5] text-black lg:mb-12 mb-5 lg:mt-15 mt-10 ">
      <div className="max-w-7xl ">
        <div className="lg:grid flex-col lg:grid-cols-2 lg:gap-48">
          {/* LEFT SIDE */}
          <div className="lg:space-y-2  w-1500">
            <p
              className={` ${robotoMono.className}   text-sm tracking-widest text-[#191919]`}
            >
              CONTACT
            </p>
            <div className="flex lg:flex-col flex-col md:flex-row">
              <h1
                className={`${syne.className} font-[500] lg:w-[850px] md:w-78 lg:uppercase  lg:text-4xl text-4xl w-90 lg:text-[85px]  lg:leading-20`}
              >
                Let’s Engineer the
              </h1>
              <h1
                className={`${syne.className} font-[500] lg:w-[750px] md:w-78 lg:uppercase  lg:text-4xl text-4xl w-90 lg:text-[85px] lg:leading-20`}
              >
                Future— Together
              </h1>
            </div>

            <div className="lg:mt-40  w-100  ">
              <LogoAnimater />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative   lg:ml-50 ">
            {/* VERTICAL DIVIDER */}
            <div className=" absolute left-[-40px] top-0 h-full  border-[#191919]   border-[0.5]" />

            <div className=" flex flex-col justify-between h-full w-88 md:w-full">
              <p className="text-xl  text-[#191919]/90 lg:font-500 lg:leading-relaxed leading-7 tracking-10  font-satoshi lg:text-[22px] font-[300] lg:w-94 lg:tracking-wide ">
                {`Whether you're scaling a digital product, modernizing
                operations, or building from the ground up — Legacies Techno is
                your partner in crafting intelligent, enterprise-grade solutions
                that create lasting impact.`}
              </p>

              <Link
                href="/"
                className={`${robotoMono.className} mt-10 lg:mt-0   group relative inline-flex items-center justify-center lg:px-4 px-0 lg:py-2 py-2 bg-[#191919] w-40 lg:w-38 text-center text-[#fdfbf5] text-xs lg:text-sm tracking-widest rounded-md overflow-hidden`}
              >
                <span className="relative h-5 overflow-hidden ">
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
    </section>
  );
}
