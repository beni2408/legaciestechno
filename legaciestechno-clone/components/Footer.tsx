import Link from "next/link";

import { Roboto_Mono } from "next/font/google";
import { Syne } from "next/font/google";
import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Variable.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Footer() {
  return (
    <footer className="bg-[#fdfbf5] text-[#191919] pt-15">
      {/* TOP DIVIDER */}
      <div className="border-t border-[#191919] mb-16" />

      <div className="">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* LEFT */}
          <div className="space-y-6 lg:w-132 ">
            <img src="/logo2.png" alt="Legacies Techno" className="w-62" />

            <p
              className={`text-[#191919]/90 lg:font-[300] lg:text-[18px]  leading-relaxed font-satoshi lg:w-166`}
            >
              3A, 3rd Floor, No. 143/6C, Durga Enclave, Easwaran Street,
              Karapakkam, Chennai — 600097
            </p>

            {/* <div className="pt-4">
              <i className="fa-brands fa-linkedin text-5xl opacity-60 hover:opacity-100 transition cursor-pointer" />
            </div> */}
            <div className="items-start justify-start flex lg:pt-10">
              <Link href="https://www.linkedin.com/company/legacies-techno/">
                <svg viewBox="0 0 23 23" overflow="visible" className="w-9 h-9">
                  <path
                    d="M 5.149 23 L 0.38 23 L 0.38 7.644 L 5.149 7.644 Z M 2.762 5.55 C 1.237 5.55 0 4.287 0 2.762 C 0 1.237 1.237 0 2.762 0 C 4.287 0 5.524 1.237 5.524 2.762 C 5.524 4.287 4.287 5.55 2.762 5.55 Z M 22.995 23 L 18.236 23 L 18.236 15.525 C 18.236 13.744 18.2 11.459 15.756 11.459 C 13.276 11.459 12.896 13.394 12.896 15.397 L 12.896 23 L 8.132 23 L 8.132 7.644 L 12.706 7.644 L 12.706 9.739 L 12.773 9.739 C 13.41 8.533 14.965 7.259 17.286 7.259 C 22.112 7.259 23 10.437 23 14.565 L 23 23 Z"
                    fill="#191919"
                  />
                </svg>
              </Link>
            </div>
            <div className="border-t lg:hidden md:block border-[#191919] mb-6" />
          </div>

          {/* CENTER */}
          <div className=" lg:border-l lg:pl-10   ">
            {/* <div className="hidden lg:block absolute left-[-30px] top-0 h-full w-px bg-[#191919]/20" /> */}

            <h3 className={` ${syne.className} text-2xl mb-6`}>Pages</h3>

            <div className="space-y-3 text-[#191919]/70 flex flex-col gap-1.5">
              <FooterLink
                href="/"
                className={` ${robotoMono.className} lg:text-md`}
              >
                HOME
              </FooterLink>
              <FooterLink
                href="/services"
                className={` ${robotoMono.className} lg:text-md`}
              >
                SERVICES
              </FooterLink>
              <FooterLink
                href="/studio"
                className={` ${robotoMono.className} lg:text-md`}
              >
                STUDIO
              </FooterLink>
              <FooterLink
                href="/work"
                className={` ${robotoMono.className} lg:text-md`}
              >
                WORK
              </FooterLink>
              <FooterLink
                href="/contact"
                className={` ${robotoMono.className} lg:text-md`}
              >
                CONTACT
              </FooterLink>
              <FooterLink
                href="/lynt-x-labs"
                className={` ${robotoMono.className} lg:text-md`}
              >
                LYNT-X LABS
              </FooterLink>
              <div className="border-t lg:hidden md:block border-[#191919] mb-6" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative lg:ml-20 ">
            <div className="flex justify-around items-center gap-6">
              <img
                src="https://framerusercontent.com/images/4eoLAY655JBYCFjJc9ZlMTkXfg.png"
                alt="ISO"
                className="h-30 object-contain opacity  "
              />
              <img
                src="https://framerusercontent.com/images/pMQwA1X7m6wB0ztMzAc0jeQDWE.png"
                alt="ISO/IEC"
                className="h-30 object-contain opacity  "
              />
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="  border-t border-[#191919] mt-16 pt-6 pb-10">
          <div className="border-t lg:hidden md:block border-[#191919] mb-6 mt-2" />
          <div
            className={`flex flex-col lg:flex-row justify-between md:px-50 px-3  lg:px-0 text-center items-center lg:text-sm text-[#191919] lg:text-[15px]  ${robotoMono.className}`}
          >
            <p>© 2026 LEGACIES TECHNO. ALL RIGHTS RESERVED.</p>

            <div className="flex gap-6 mt-3 md:mt-0">
              <FooterLink href="/cookie-policy">COOKIE POLICY</FooterLink>
              <FooterLink href="/privacy-policy">PRIVACY POLICY</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FooterLink({ href, children, className }: any) {
  return (
    <Link
      href={href}
      className={`${className} inline-block text-[#191919] hover:text-black`}
    >
      <span
        className="relative inline-block pb-[2px] 
        after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-current
        after:scale-x-0 after:origin-left after:transition-transform after:duration-500
        after:ease-[cubic-bezier(.76,0,.24,1)] hover:after:scale-x-100"
      >
        {children}
      </span>
    </Link>
  );
}
