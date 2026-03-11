// "use client";
// import Link from "next/link";

// import BlogCard from "@/components/BlogCard";
// import { Syne } from "next/font/google";
// import { Roboto_Mono } from "next/font/google";
// import { LogoAnimater } from "@/components/logoanimater";

// const syne = Syne({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// const robotoMono = Roboto_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
// });

// export default function BlogPage() {
//   return (
//     <section className="bg-[#fdfbf5] text-[#191919] py-28">
//       <div className="">
//         {/* HEADER */}
//         <div className="flex justify-between items-end border-b border-[#191919]/20 pb-10">
//           <h1 className={`${syne.className} text-8xl font-semibold`}>Blog</h1>

//           <p className={` text-[#191919] text-xl max-w-sm`}>
//             Discover insights, inspiration, and expert advice on our engaging
//             blog.
//           </p>
//         </div>

//         {/* FEATURED ROW */}
//         <div className="grid grid-cols-2 gap-12 mt-16">
//           <BlogCard
//             large
//             title="Alphabet Inc. to Invest $40 Billion in Texas Data Centres Amid AI Build-Out"
//             image="https://framerusercontent.com/images/9j5FA8yF4YNvpGBK7f9jYsFDssI.png?width=1536&height=1024"
//           />

//           <BlogCard
//             large
//             title="Major Analysts See AI Infrastructure Spending Reaching Up to $4 Trillion by 2030"
//             image="https://framerusercontent.com/images/rcIqaIutw3o4YSDDykyUiOJVs.png?width=1536&height=1024"
//           />
//         </div>
//         <div className="w-full border border-black/50 mb-10 mt-10 border-[0.2px]"></div>
//         {/* SECOND GRID */}
//         <div className="grid grid-cols-3 gap-10 mt-20">
//           <BlogCard
//             title="Cisco Systems Raises Forecast on AI-Driven Networking Boom"
//             category="Technology & Infrastructure"
//             image="https://framerusercontent.com/images/5Y6pGQ4FuaIsVgtB3ocCF7ObvA.png?width=1536&height=1024"
//           />

//           <BlogCard
//             title="EU Considers Major Telecom Crack-Down on Chinese Gear as Tech Tensions Escalate"
//             category="Technology & Regulation"
//             image="https://framerusercontent.com/images/OFwBTMfteP9VhTUOUBsgxxVc3w.png?width=1536&height=1024"
//           />

//           <BlogCard
//             title="Tech Stocks Spark Rally as AI Titans Bounce Back Amid U.S. Shutdown Hope"
//             category="Technology & Investment"
//             image="https://framerusercontent.com/images/kc4Q1PPMWCxcm2HwD4CNpnim3jw.png?width=1536&height=1024"
//           />

//           <BlogCard
//             title="Meta Platforms Faces Revelations: Billions in Ad Revenue From Scam-Linked Ads"
//             category="Technology & Regulation"
//             image="https://framerusercontent.com/images/bYSUKWqBPd3oRpXPhDviNf2vOk.png?width=1536&height=1024"
//           />

//           <BlogCard
//             title="Apple Inc. to Power Siri Revamp with Google LLC’s 1.2-Trillion-Parameter AI Model"
//             category="Technology & AI"
//             image="https://framerusercontent.com/images/7xktFkEYZSMYh3ScoxfrzIoYcnk.png?width=1536&height=1024"
//           />

//           <BlogCard
//             title="Gartner, Inc. Raises 2025 Forecast as IT Advisory Demand Holds Up"
//             category="Technology & Infrastructure"
//             image="https://framerusercontent.com/images/RQVCxD2TXV7RnVLodkSt6EbrsM.png?width=1536&height=1024"
//           />
//         </div>

//         {/* LOAD MORE BUTTON */}
//         <div className="flex justify-center mt-20">
//           <button
//             className={`${robotoMono.className} px-8 py-3 bg-[#191919] text-[#fdfbf5] text-sm uppercase tracking-widest rounded-md hover:scale-105 transition`}
//           >
//             Load More
//           </button>
//         </div>
//       </div>
//       <div className="w-full border border-black/50 mb-15 mt-20 border-[0.2px]"></div>
//       <div className="  ">
//         <div className="flex">
//           {/* LEFT SIDE */}
//           <div className="space-y-10">
//             <p
//               className={` ${robotoMono.className} text-sm tracking-widest text-[#191919]/60`}
//             >
//               CONTACT
//             </p>

//             <h1
//               className={`${syne.className} text-4xl sm:text-5xl  w-200 lg:text-7xl font-semibold leading-tight`}
//             >
//               LET’S ENGINEER THE <br />
//               FUTURE — <br />
//               TOGETHER
//             </h1>

//             <LogoAnimater />
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="relative ml-20">
//             {/* VERTICAL DIVIDER */}
//             <div className="hidden lg:block absolute  top-0 h-full w-px bg-[#191919]/20 border border-black/10 border-0.5" />

//             <div className="space-y-16 flex flex-col justify-between h-full ml-10">
//               <p className="text-lg text-[#191919]/70 leading-relaxed">
//                 Whether you’re scaling a digital product, modernizing
//                 operations, or building from the ground up — Legacies Techno is
//                 your partner in crafting intelligent, enterprise-grade solutions
//                 that create lasting impact.
//               </p>
//               <Link href={"/contact"}>
//                 <button
//                   className={` ${robotoMono.className} px-8 py-4 bg-[#191919] w-50 text-[#fdfbf5] text-sm tracking-widest rounded-lg hover:bg-[#191919]/80 hover:scale-105 transition`}
//                 >
//                   GET IN TOUCH
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import { Blog } from "@/types/blog";
import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import { ContactAd } from "@/components/ContactAd";
import { ServicesContactAd } from "@/components/ServicesContactCard";
// import localFont from "next/font/local";

// const satoshi = localFont({
//   src: [
//     {
//       path: "../public/fonts/Satoshi-Variable.woff2",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-satoshi",
// });

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await fetch("/api/blogs", { cache: "no-store" });
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error loading blogs:", error);
      }
    };

    loadBlogs();
  }, []);

  const featuredBlogs = blogs.filter((b) => b.featured);
  const normalBlogs = blogs.filter((b) => !b.featured);

  const visibleBlogs = normalBlogs.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="bg-[#fdfbf5] text-[#191919]  lg:py-15">
      <div>
        {/* HEADER */}
        <div className="lg:flex lg:flex-row flex-col  mt-10 lg:mt-0 justify-between items-end  border-b border-[#191919] pb-8 lg:pb-18">
          <h1
            className={`${syne.className} lg:text-8xl text-5xl lg:font-[500]`}
          >
            Blog
          </h1>
          <p className="lg:text-2xl text-xl mt-3 lg:mt-0 lg:max-w-sm text-[#191919] font-satoshi md:w-200">
            Discover insights, inspiration, and expert advice on our engaging
            blog.
          </p>
        </div>

        {/* FEATURED BLOGS */}
        {featuredBlogs.length > 0 && (
          <div className="lg:grid lg:grid-cols-2 gap-12 mt-16">
            {featuredBlogs.slice(0, 2).map((blog) => (
              <BlogCard key={blog.id} id={blog.id} {...blog} large />
            ))}
          </div>
        )}

        <div className="w-full border border-[#191919] border-[0.2px] my-10 lg:block hidden"></div>

        {/* NORMAL BLOGS */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-12 flex flex-col">
          {visibleBlogs.map((blog) => (
            <BlogCard key={blog.id} id={blog.id} {...blog} />
          ))}
        </div>

        {/* LOAD MORE BUTTON */}
        {visibleCount < normalBlogs.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={loadMore}
              className={`font-bold bg-[#191919]/80 px-3 py-2 border border-[#191919] text-[#fdfbf5]   rounded-md hover:bg-[#191919] hover:text-[#fdfbf5] transition`}
            >
              Load More
            </button>
          </div>
        )}
      </div>

      <ServicesContactAd />
    </section>
  );
}
