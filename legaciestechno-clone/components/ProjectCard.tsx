import Link from "next/link";
import CursorTracker from "./cursorTracker";
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
export function ProjectCard({ title, status, image, href }: any) {
  return (
    <Link href={href} className="group">
      <div className="relative cursor-none">
        {/* CUSTOM CURSOR */}
        <div className="view-cursor hidden group-hover:flex">VIEW</div>

        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <img
            src={image}
            className="w-full h-[460px] object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* TEXT */}
        <div className="flex justify-between items-center mt-4 mb-10">
          <h3 className={` ${syne.className} text-2xl font-semibold  `}>
            {title}
          </h3>
          <span
            className={`${robotoMono.className} text-xl text-[#191919] tracking-wider font-mono`}
          >
            {status}
          </span>
        </div>
      </div>
    </Link>
  );
}

export function SmallProjectCard({ title, status, image, href }: any) {
  return (
    <Link href={href} className="group">
      <div className="relative cursor-none">
        {/* CUSTOM CURSOR */}
        <div className="view-cursor hidden text-black group-hover:flex w-[370px] h-[220px] ">
          VIEW
        </div>

        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden border border-white/10 w-[370px] h-[220px] ">
          <img
            src={image}
            className="w-[370px] h-[220px] rounded-2xl object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* TEXT */}
        <div className="flex justify-between  w-[370px]   items-center mt-4 mb-7 ">
          <h3 className={` ${syne.className} text-xl font-semibold  `}>
            {title}
          </h3>
          <span
            className={` ${robotoMono.className} text-sm font-normal  text-[#191919]/80 tracking-wider font-mono`}
          >
            {status}
          </span>
        </div>
      </div>
    </Link>
  );
}
