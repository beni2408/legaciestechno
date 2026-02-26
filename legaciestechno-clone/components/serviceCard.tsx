import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export function ServiceCard({ icon, title, description }: any) {
  return (
    <div className="relative p-10 ">
      {/* Divider Lines */}

      <div className="space-y-5">
        {/* ICON */}
        <i className={`${icon} text-6xl text-[#191919]/80  `} />

        {/* TITLE */}
        <h3 className="text-4xl font-mono  tracking-wide ">{title}</h3>

        {/* DESCRIPTION */}
        <p className="text-[#191919]/90 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
