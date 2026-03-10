"use client";
import { useState, useEffect } from "react";
import { Blog } from "@/types/blog";
import { useRouter } from "next/navigation";

export default function ManageBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("blogs");
    if (stored) setBlogs(JSON.parse(stored));
  }, []);

  const deleteBlog = (id: string) => {
    const updated = blogs.filter((b) => b.id !== id);
    const sortedBlogs = [...updated].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    const blogsWithFeatured = sortedBlogs.map((blog, index) => ({
      ...blog,
      featured: index < 2,
    }));
    setBlogs(blogsWithFeatured);
    localStorage.setItem("blogs", JSON.stringify(blogsWithFeatured));
  };

  return (
    <div className="">
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[#191919] mb-2 ">
            Manage Blogs
          </h1>
          <p className="text-gray-600">View and manage all your blog posts</p>
        </div>
        <button
          onClick={() => router.push("/admin/blogs/new")}
          className="px-6 py-3 bg-[#191919] text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          New Blog
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-8 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-[#191919] mb-1">All Blogs</h2>
          <p className="text-sm text-gray-500">
            The 2 most recent blogs are automatically featured
          </p>
        </div>
        <div className="p-8">
          {blogs.length === 0 ? (
            <div className="text-center py-12 bg-[#fdfbf5]">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="text-gray-500 mb-4">
                No blogs yet. Create your first blog!
              </p>
              <button
                onClick={() => router.push("/admin/blogs/new")}
                className="px-6 py-3 bg-[#191919] text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold"
              >
                Create Blog
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className=" bg-[#fdfbf5] border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-6">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-40 h-28 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-40 h-28 bg-gray-200 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-xl text-[#191919] mb-2">
                            {blog.title}
                            {blog.featured && (
                              <span className="ml-3 px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">
                                FEATURED
                              </span>
                            )}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                            <span className="px-2 py-1 bg-gray-100 rounded-md">
                              {blog.category}
                            </span>
                            <span>{blog.author}</span>
                            <span>•</span>
                            <span>{blog.date}</span>
                            <span>•</span>
                            <span>{blog.readingTime}</span>
                          </div>
                          {blog.source && (
                            <p className="text-sm text-gray-500">
                              Source:{" "}
                              {blog.sourceUrl ? (
                                <a
                                  href={blog.sourceUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  {blog.source}
                                </a>
                              ) : (
                                blog.source
                              )}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() =>
                              router.push(`/admin/blogs/edit/${blog.id}`)
                            }
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              if (confirm("Delete this blog?"))
                                deleteBlog(blog.id);
                            }}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
