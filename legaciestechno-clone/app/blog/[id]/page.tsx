"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Blog } from "@/types/blog";
import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";

import { ContactAd } from "@/components/ContactAd";
import { ServicesContactAd } from "@/components/ServicesContactCard";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function SingleBlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("blogs");
    if (stored) {
      const blogs: Blog[] = JSON.parse(stored);
      setAllBlogs(blogs);

      const found = blogs.find((b) => b.id === id);
      if (found) setBlog(found);
    }
  }, [id]);

  if (!blog)
    return (
      <div className="p-20">
        <h1>Blog not found</h1>
      </div>
    );
  const relatedBlogs = allBlogs
    .filter((b) => b.category === blog?.category && b.id !== blog?.id)
    .slice(0, 3);

  return (
    <section className="bg-[#fdfbf5] text-[#191919] min-h-screen  lg:py-15 ">
      {/* TITLE AREA */}
      <div className="lg:flex lg:flex-row flex-col justify-between lg:w-full border-[#191919] pb-10">
        <div className="">
          <h1
            className={`lg:text-[78px] lg:w-200 text-5xl mt-10 lg:mt-0 font-[500] lg:w-220  lg:font-[500]  lg:leading-20  ${syne.className} `}
          >
            {blog.title}
          </h1>

          <p
            className={` font-satoshi lg:w-250 mt-6 text-xl lg:text-2xl lg:leading-9 font-medium text-[#191919] `}
          >
            {blog.excerpt}
          </p>
        </div>
        <div className="border border-[#191919] w-full lg:hidden mt-10 border-[0.2px]"></div>
        {/* SIDE META */}
        <div className="text-md space-y-6 lg:border-l  lg:mt-0 pt-10 lg:pt-0 border-[#191919]  w-77     ">
          <div className="lg:ml-10 ">
            <p
              className={` ${robotoMono.className} text-[#191919]/50 uppercase text-md`}
            >
              Date
            </p>
            <p className={` ${robotoMono.className} text-[#191919] text-md`}>
              {new Date(blog.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="lg:ml-10">
            <p
              className={` ${robotoMono.className} text-[#191919]/50 uppercase text-md`}
            >
              Category
            </p>
            <p className={` text-md w-80 uppercase ${robotoMono.className}`}>
              {blog.category}
            </p>
          </div>

          <div className="lg:ml-10">
            <p
              className={` ${robotoMono.className}  text-[#191919]/50 uppercase text-md`}
            >
              Reading Time
            </p>
            <span className="overflow-hidden">
              <p className={` text-md ${robotoMono.className} uppercase`}>
                {blog.readingTime}
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="lg:mt-5">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-xl
        
        lg:h-190 object-cover
        "
        />
      </div>

      {/* CONTENT */}
      <div className="lg:mt-16 mt-10 lg:flex lg:flex-row flex-col text-sm justify-start">
        <div className="lg:w-260 lg:pr-10 text-md lg:text-lg font-medium text-[#191919] leading-relaxed ">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          {blog.source && (
            <div className=" ">
              <p
                className={`${syne.className} text-[#191919] font-bold lg:text-lg text-sm `}
              >
                Source:
              </p>
              {blog.sourceUrl ? (
                <a
                  href={blog.sourceUrl}
                  target="_blank"
                  style={{ textDecoration: "none", color: "#191919" }}
                  rel="noopener noreferrer"
                  className={`${syne.className} text-[#191919] font-medium no-underline hover:no-underline`}
                >
                  {blog.source}
                </a>
              ) : (
                <p
                  style={{ textDecoration: "none" }}
                  className={`text-[#191919] no-underline font-medium ${syne.className}`}
                >
                  {blog.source}
                </p>
              )}
            </div>
          )}
        </div>

        {/* AUTHOR SIDE */}
        <div className="lg:border-l lg:border-t-0 border-t mt-10 lg:mt-0 border-[#191919] pt-10    text-start ">
          <p
            className={` ${robotoMono.className} lg:ml-10 font-medium text-[#191919]/50 uppercase text-md mb-2`}
          >
            Author
          </p>
          <p
            className={`mb-2 lg:ml-10 font-[500] ${syne.className} lg:text-2xl text-2xl`}
          >
            {blog.author}
          </p>
        </div>
      </div>
      {/* RELATED BLOGS SECTION */}
      <div className="mt-12 lg:mt-10  border-t border-[#191919] pt-8 lg:pt-15">
        <div className="flex lg:flex-row flex-col lg:border-b border-[#191919] justify-between items-center lg:pb-15 lg:mb-16">
          <h2
            className={`${syne.className} lg:text-6xl text-4xl font-[500] text-[#191919]`}
          >
            RELATED NEWS
          </h2>

          <Link
            href="/blog"
            className={`${syne.className} lg:block hidden group  items-center justify-center px-3.5 py-1 border border-[#191919] rounded-md text-md tracking-widest overflow-hidden`}
          >
            <span className="relative h-6 overflow-hidden">
              {/* Top text */}
              <span className="block transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
                SEE ALL
              </span>

              {/* Bottom text */}
              <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
                SEE ALL
              </span>
            </span>
          </Link>
        </div>

        <div className="border border-[#191919] border-[0.2px] mt-7 mb-10 lg:hidden block md:block"></div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-10 flex flex-col">
          {relatedBlogs.map((item) => (
            <BlogCard
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <ServicesContactAd />
    </section>
  );
}
