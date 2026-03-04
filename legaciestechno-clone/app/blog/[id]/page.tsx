"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Blog } from "@/types/blog";
import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";

import { ContactAd } from "@/components/ContactAd";

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
    <section className="bg-[#fdfbf5] text-[#191919] min-h-screen  py-20">
      {/* TITLE AREA */}
      <div className="flex justify-between  border-[#191919] pb-10">
        <div className="">
          <h1
            className={`text-7xl font-semibold leading-tight  ${syne.className} `}
          >
            {blog.title}
          </h1>

          <p className={`  mt-6 text-2xl font-medium text-[#191919] mr-10`}>
            {blog.excerpt}
          </p>
        </div>

        {/* SIDE META */}
        <div className="text-md space-y-6 border-l border-[#191919]  w-77    ml-25  ">
          <div className="ml-10 ">
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

          <div className="ml-10">
            <p
              className={` ${robotoMono.className} text-[#191919]/50 uppercase text-md`}
            >
              Category
            </p>
            <p className={` text-md w-80 uppercase ${robotoMono.className}`}>
              {blog.category}
            </p>
          </div>

          <div className="ml-10">
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
      <div className="mt-12">
        <img src={blog.image} alt={blog.title} className="w-full rounded-xl" />
      </div>

      {/* CONTENT */}
      <div className="mt-16 flex justify-between">
        <div className="max-w-4xl text-lg font-medium text-[#191919] leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          {blog.source && (
            <div className=" ">
              <p
                className={`${syne.className} text-[#191919] font-bold text-lg  `}
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
        <div className="border-l border-[#191919]  px-30  text-start">
          <p
            className={` ${robotoMono.className} font-medium text-[#191919]/50 uppercase text-md mb-2`}
          >
            Author
          </p>
          <p className={`mb-2  font-semibold ${syne.className} text-2xl`}>
            {blog.author}
          </p>
        </div>
      </div>
      {/* RELATED BLOGS SECTION */}
      <div className="mt-12 border-t border-[#191919]/20 pt-20">
        <div className="flex justify-between items-center mb-16">
          <h2
            className={`${syne.className} text-6xl font-semibold text-[#191919]`}
          >
            RELATED BLOGS
          </h2>

          <Link href="/blog">
            <button
              className={`${robotoMono.className} px-6 py-2 border border-[#191919]/30 text-[#191919] uppercase tracking-widest rounded-md hover:bg-[#191919] hover:text-[#fdfbf5] transition`}
            >
              See All
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-10">
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
      <ContactAd />
    </section>
  );
}
