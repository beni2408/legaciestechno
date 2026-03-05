// import { Syne } from "next/font/google";
// import { Roboto_Mono } from "next/font/google";

// const robotoMono = Roboto_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
// });
// const syne = Syne({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// export function NewsCard({ image, category, title }: any) {
//   return (
//     <div className="group cursor-pointer">
//       {/* IMAGE */}
//       <div className="rounded-2xl overflow-hidden mb-5">
//         <img
//           src={image}
//           alt=""
//           className="w-full h-[280px] object-cover group-hover:scale-105 transition duration-700"
//         />
//       </div>

//       {/* CATEGORY */}
//       <p
//         className={` text-center font-semibold  ${robotoMono.className} text-sm tracking-widest text-[#191919]/50 mb-2`}
//       >
//         {category}
//       </p>

//       {/* TITLE */}
//       <h3
//         className={`  ${syne.className} text-2xl leading-snug group-hover:text-black transition`}
//       >
//         {title}
//       </h3>
//     </div>
//   );
// }

import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type NewsCardProps = {
  id: string;
  image: string;
  category: string;
  title: string;
};

export function NewsCard({ id, image, category, title }: NewsCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <div className="group cursor-pointer">
        {/* IMAGE */}
        <div className="rounded-2xl mb-3 overflow-hidden lg:h-[237px] w-full ">
          <img
            src={image}
            alt={title}
            className="  w-full lg:h-[237px] object-cover group-hover:scale-105 transition duration-700"
          />
        </div>

        {/* CATEGORY */}
        <p
          className={`${robotoMono.className}  uppercase text-center font-normal text-sm tracking-widest text-[#191919]  mb-1`}
        >
          {category}
        </p>

        {/* TITLE */}
        <h3
          className={`${syne.className} lg:text-2xl lg:font-[500]  leading-tight group-hover:text-black transition`}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
}
