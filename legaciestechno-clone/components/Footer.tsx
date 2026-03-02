import Link from "next/link";

import { Roboto_Mono } from "next/font/google";
import { Syne } from "next/font/google";

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
    <footer className="bg-[#fdfbf5] text-[#191919] pt-20">
      {/* TOP DIVIDER */}
      <div className="border-t border-[#191919]/20 mb-16" />

      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* LEFT */}
          <div className="space-y-6">
            <img
              src="/logo2.png"
              alt="Legacies Techno"
              className="w-52 opacity-80"
            />

            <p className="text-[#191919]/70 leading-relaxed  ">
              3A, 3rd Floor, No. 143/6C, Durga Enclave, Easwaran Street,
              Karapakkam, Chennai — 600097
            </p>

            <div className="pt-4">
              <i className="fa-brands fa-linkedin text-5xl opacity-60 hover:opacity-100 transition cursor-pointer" />
            </div>
          </div>

          {/* CENTER */}
          <div className="relative ml-50">
            <div className="hidden lg:block absolute left-[-30px] top-0 h-full w-px bg-[#191919]/20" />

            <h3 className={` ${syne.className} text-2xl mb-6`}>Pages</h3>

            <div className="space-y-3 text-[#191919]/70">
              <FooterLink href="/" className={`${robotoMono.className}`}>
                HOME
              </FooterLink>
              <FooterLink
                href="/services"
                className={`${robotoMono.className}`}
              >
                SERVICES
              </FooterLink>
              <FooterLink href="/studio" className={`${robotoMono.className}`}>
                STUDIO
              </FooterLink>
              <FooterLink href="/work" className={`${robotoMono.className}`}>
                WORK
              </FooterLink>
              <FooterLink href="/contact" className={`${robotoMono.className}`}>
                CONTACT
              </FooterLink>
              <FooterLink
                href="/lynt-x-labs"
                className={`${robotoMono.className}`}
              >
                LYNT-X LABS
              </FooterLink>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative ml-20">
            <div className="flex items-center gap-6">
              <img
                src="https://framerusercontent.com/images/4eoLAY655JBYCFjJc9ZlMTkXfg.png"
                alt="ISO"
                className="h-30 object-contain opacity-80 hover:opacity-100 transition"
              />
              <img
                src="https://framerusercontent.com/images/pMQwA1X7m6wB0ztMzAc0jeQDWE.png"
                alt="ISO/IEC"
                className="h-30 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-[#191919]/20 mt-16 pt-6 pb-10">
          <div
            className={`flex flex-col md:flex-row justify-between items-center text-sm text-[#191919]/60  ${robotoMono.className}`}
          >
            <p>© 2025 LEGACIES TECHNO. ALL RIGHTS RESERVED.</p>

            <div className="flex gap-6 mt-3 md:mt-0">
              <FooterLink href="/cookies">COOKIE POLICY</FooterLink>
              <FooterLink href="/privacy">PRIVACY POLICY</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FooterLink({ href, children }: any) {
  return (
    <Link
      href={href}
      className={` ${robotoMono.className} block hover:text-black hover:underline transform `}
    >
      {children}
    </Link>
  );
}
