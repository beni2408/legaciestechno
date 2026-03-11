"use client";
import { useState, useEffect } from "react";
import { Blog } from "@/types/blog";
import { useRouter } from "next/navigation";

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

export default function DashboardPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filter, setFilter] = useState("all");
  const router = useRouter();

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await fetch("/data/blogs.json");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error loading blogs:", error);
      }
    };

    loadBlogs();
  }, []);

  // 🔹 SORT BLOGS BY DATE (LATEST FIRST)
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // 🔹 FEATURED BLOGS = LATEST 2
  const featuredBlogs = sortedBlogs.slice(0, 2);

  const stats = {
    total: blogs.length,
    featured: featuredBlogs.length,
    categories: [...new Set(blogs.map((b) => b.category).filter(Boolean))]
      .length,
  };

  const getFilteredBlogs = () => {
    if (filter === "recent") {
      return [...blogs].reverse();
    }

    if (filter === "featured") {
      return featuredBlogs;
    }

    if (filter === "month") {
      const currentMonth = new Date().getMonth();
      return blogs.filter((b) => new Date(b.date).getMonth() === currentMonth);
    }

    return blogs;
  };

  const filteredBlogs = getFilteredBlogs();

  const blogsToShow =
    filter === "recent" ? filteredBlogs.slice(0, 5) : filteredBlogs;

  return (
    <div>
      {/* HEADER */}
      <div className="mb-12">
        <h1
          className={`${syne.className} text-4xl font-bold text-[#191919] mb-2`}
        >
          Dashboard Overview
        </h1>
        <p
          className={`${robotoMono.className} text-gray-600 text-sm uppercase`}
        >
          Monitor your blog performance and statistics
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm mb-1">Total Blogs</p>
          <p className="text-4xl font-bold text-[#191919]">{stats.total}</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm mb-1">Featured Blogs</p>
          <p className="text-4xl font-bold text-[#191919]">{stats.featured}</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm mb-1">Categories</p>
          <p className="text-4xl font-bold text-[#191919]">
            {stats.categories}
          </p>
        </div>
      </div>

      {/* BLOG PANEL */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        {/* PANEL HEADER */}
        <div className="p-8 border-b border-gray-100 flex justify-between items-center">
          <h2
            className={`${robotoMono.className} text-2xl font-bold text-[#191919]`}
          >
            Blogs
          </h2>

          {/* FILTER BUTTONS */}
          <div className="flex gap-3">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-sm rounded-lg border ${
                filter === "all"
                  ? "bg-[#191919] text-white"
                  : "bg-white text-[#191919]"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setFilter("recent")}
              className={`px-4 py-2 text-sm rounded-lg border ${
                filter === "recent"
                  ? "bg-[#191919] text-white"
                  : "bg-white text-[#191919]"
              }`}
            >
              Recent
            </button>

            <button
              onClick={() => setFilter("featured")}
              className={`px-4 py-2 text-sm rounded-lg border ${
                filter === "featured"
                  ? "bg-[#191919] text-white"
                  : "bg-white text-[#191919]"
              }`}
            >
              Featured
            </button>

            <button
              onClick={() => setFilter("month")}
              className={`px-4 py-2 text-sm rounded-lg border ${
                filter === "month"
                  ? "bg-[#191919] text-white"
                  : "bg-white text-[#191919]"
              }`}
            >
              This Month
            </button>
          </div>
        </div>

        {/* BLOG LIST */}
        <div className="p-8">
          {blogs.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No blogs yet. Create your first blog!
            </div>
          ) : (
            <div className="space-y-4">
              {blogsToShow.map((blog) => (
                <div
                  key={blog.id}
                  className={`flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl ${robotoMono.className} transition cursor-pointer`}
                  onClick={() => router.push(`/blog/${blog.id}`)}
                >
                  <div className="flex items-center gap-4">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt=""
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded-lg" />
                    )}

                    <div>
                      <p className="font-semibold text-[#191919] mb-1">
                        {blog.title}
                      </p>

                      <p className="text-sm text-gray-500">
                        {blog.date} • {blog.category}
                      </p>
                    </div>
                  </div>

                  {featuredBlogs.some((b) => b.id === blog.id) && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
