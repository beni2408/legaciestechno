import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Syne } from "next/font/google";

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
const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "500", "500", "800"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export function ServiceCard({ icon, title, description }: any) {
  return (
    <div className="relative lg:px-10 py-10 ">
      {/* Divider Lines */}

      <div className="space-y-5">
        {/* ICON */}
        <i className={`${icon} lg:text-6xl text-[#191919]/80 text-6xl  `} />

        {/* TITLE */}
        <h3
          className={`lg:text-4xl font-[500] font-mono  tracking-wide text-3xl  ${syne.className}`}
        >
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className={` ${satoshi.className} lg:text-xl font-[300]} text-[#191919]/90 leading-relaxed `}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
