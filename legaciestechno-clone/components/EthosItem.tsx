import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function EthosItem({ number, title, description }: any) {
  return (
    <div className="flex items-start gap-6">
      {/* NUMBER */}
      <div className="flex items-center justify-center w-10 h-10 rounded rounded-4xl border border-black/30 text-sm">
        {number}
      </div>

      {/* TEXT */}
      <div className="space-y-2">
        <h3 className={`text-xl font-semibold tracking-wide ${syne.className}`}>
          {title}
        </h3>

        <p className={`text-black/70 leading-relaxed `}>{description}</p>
      </div>
    </div>
  );
}
