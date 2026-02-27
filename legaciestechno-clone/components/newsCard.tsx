import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function NewsCard({ image, category, title }: any) {
  return (
    <div className="group cursor-pointer">
      {/* IMAGE */}
      <div className="rounded-2xl overflow-hidden mb-5">
        <img
          src={image}
          alt=""
          className="w-full h-[280px] object-cover group-hover:scale-105 transition duration-700"
        />
      </div>

      {/* CATEGORY */}
      <p
        className={` text-center font-semibold  ${robotoMono.className} text-sm tracking-widest text-[#191919]/50 mb-2`}
      >
        {category}
      </p>

      {/* TITLE */}
      <h3
        className={`  ${syne.className} text-2xl leading-snug group-hover:text-black transition`}
      >
        {title}
      </h3>
    </div>
  );
}
