import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export function EthosItem({ number, title, description }: any) {
  return (
    <div className="flex items-start gap-6 lg:ml-4">
      {/* NUMBER */}
      <div
        className={` ${robotoMono.className} flex items-center justify-center w-5 h-5 p-4 rounded-full border border-[#191919] font-mono text-sm`}
      >
        {number}
      </div>

      {/* TEXT */}
      <div className="space-y-1">
        <h3
          className={`lg:text-3xl lg:font-[500] text-3xl font-[500] tracking-wide ${syne.className}`}
        >
          {title}
        </h3>

        <p
          className={`text-[#191919]/80  lg:text-[18px] font-[200] font-satoshi lg:leading-8 leading-6 lg:w-full w-70 md:w-full `}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
