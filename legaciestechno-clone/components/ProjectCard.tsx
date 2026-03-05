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
      <div className=" ">
        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <img
            src={image}
            className=" w-full h-[460px] object-cover scale-107 group-hover:scale-112 transition duration-500 saturate-50"
          />
        </div>

        {/* TEXT */}
        <div className="flex justify-between items-center mt-4 mb-10">
          <h3 className={` ${syne.className} text-2xl font-medium  `}>
            {title}
          </h3>
          <span
            className={`${robotoMono.className} text-md text-[#191919] tracking-wider font-mono`}
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
      <div className="">
        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden border border-white/10 w-[370px] h-[220px] ">
          <img
            src={image}
            className="  lg:w-[370px] h-[220px] rounded-2xl object-cover scale-107 group-hover:scale-112 transition duration-500 saturate-30 "
          />
        </div>

        {/* TEXT */}
        <div className="flex justify-between  w-[370px]   items-center mt-4 mb-7 ">
          <h3 className={` ${syne.className} text-xl font-medium  `}>
            {title}
          </h3>
          <span
            className={` ${robotoMono.className} text-sm font-normal  text-[#191919]/90 tracking-wider font-mono`}
          >
            {status}
          </span>
        </div>
      </div>
    </Link>
  );
}
