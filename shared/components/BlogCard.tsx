// "use client";

// import { Syne } from "next/font/google";
// import { Roboto_Mono } from "next/font/google";
// import Link from "next/link";

// const syne = Syne({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// const robotoMono = Roboto_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
// });

// interface BlogCardProps {
//   title: string;
//   category?: string;
//   image: string;
//   large?: boolean;
// }

// export default function BlogCard({
//   title,
//   category,
//   image,
//   large,
// }: BlogCardProps) {
//   return (
//     <div className="group">
//       <div className="overflow-hidden rounded-2xl">
//         <img
//           src={image}
//           alt={title}
//           className="w-full object-cover transition duration-500 group-hover:scale-105"
//         />
//       </div>

//       {category && (
//         <p
//           className={`${robotoMono.className} text-md text-center uppercase tracking-widest text-[#191919] mt-5`}
//         >
//           {category}
//         </p>
//       )}

//       <h3
//         className={`${syne.className} ${
//           large ? "text-2xl" : "text-xl"
//         } font-semibold mt-3 leading-snug`}
//       >
//         {title}
//       </h3>
//     </div>
//   );
// }

"use client";
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

import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  category?: string;
  image: string;
  large?: boolean;
}

export default function BlogCard({
  id,
  title,
  category,
  image,
  large,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <div className="group cursor-pointer lg:mb-0 mb-10 ">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
              large ? "lg:h-[360px]" : "lg:h-[240px]"
            }
            
            ${large ? "h-[200px]" : "h-[200px]"}
            ${large ? "md:h-[390px]" : "md:h-[390px]"}
            
            `}
          />
        </div>

        {category && (
          <p
            className={` ${robotoMono.className} text-sm lg:${
              large ? "lg:text-start" : "lg:text-center"
            } uppercase tracking-widest text-[#191919] mt-3 lg:font-400
            
            ${large ? "text-start" : "text-center"}
            
            `}
          >
            {category}
          </p>
        )}

        <h3
          className={`${
            large ? "lg:text-3xl" : "lg:text-2xl"
          } lg:font-[500] lg:mt-3 lg:leading-snug ${syne.className} 
${large ? "text-2xl" : "text-2xl"}
${large ? "md:text-2xl" : "md:text-2xl"}
          text-2xl font-[500]



       
          
          `}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
}
