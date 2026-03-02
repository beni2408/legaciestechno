"use client";
import { useState, useEffect, useRef } from "react";
import { Blog } from "@/types/blog";
import { v4 as uuidv4 } from "uuid";

export default function AdminPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Blog>({
    id: "",
    title: "",
    excerpt: "",
    category: "",
    image: "",
    content: "",
    author: "",
    date: "",
    readingTime: "",
    source: "",
    sourceUrl: "",
    featured: false,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("blogs");
    if (stored) {
      setBlogs(JSON.parse(stored));
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        image: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleContentImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const img = document.createElement("img");
      img.src = reader.result as string;
      img.style.maxWidth = "100%";
      img.style.height = "auto";
      if (editorRef.current) {
        editorRef.current.appendChild(img);
        setForm({ ...form, content: editorRef.current.innerHTML });
      }
    };
    reader.readAsDataURL(file);
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  const saveBlogs = (updatedBlogs: Blog[]) => {
    const sortedBlogs = [...updatedBlogs].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const blogsWithFeatured = sortedBlogs.map((blog, index) => ({
      ...blog,
      featured: index < 2,
    }));

    setBlogs(blogsWithFeatured);
    localStorage.setItem("blogs", JSON.stringify(blogsWithFeatured));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      const updated = blogs.map((blog) =>
        blog.id === editingId ? { ...form, id: editingId } : blog
      );
      saveBlogs(updated);
      setEditingId(null);
    } else {
      const newBlog = {
        ...form,
        id: uuidv4(),
      };
      const updated = [...blogs, newBlog];
      saveBlogs(updated);
    }

    setForm({
      id: "",
      title: "",
      excerpt: "",
      category: "",
      image: "",
      content: "",
      author: "",
      date: "",
      readingTime: "",
      source: "",
      sourceUrl: "",
      featured: false,
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const deleteBlog = (id: string) => {
    const updated = blogs.filter((b) => b.id !== id);
    saveBlogs(updated);
  };

  const editBlog = (blog: Blog) => {
    setForm({
      ...blog,
      excerpt: blog.excerpt || "",
      category: blog.category || "",
      author: blog.author || "",
      date: blog.date || "",
      readingTime: blog.readingTime || "",
      source: blog.source || "",
      sourceUrl: blog.sourceUrl || "",
    });
    setEditingId(blog.id);
    setTimeout(() => {
      if (editorRef.current) {
        editorRef.current.innerHTML = blog.content || "";
      }
    }, 0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setForm({
      id: "",
      title: "",
      excerpt: "",
      category: "",
      image: "",
      content: "",
      author: "",
      date: "",
      readingTime: "",
      source: "",
      sourceUrl: "",
      featured: false,
    });
    setEditingId(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (editorRef.current) {
      editorRef.current.innerHTML = "";
    }
  };

  return (
    <div className="p-20 bg-white min-h-screen">
      <h1 className="text-4xl text-[#191919] font-bold mb-10">
        Admin - Manage Blogs
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl">
        {editingId && (
          <div className="bg-blue-100 p-4 rounded-md flex justify-between items-center">
            <p className="text-blue-800 font-semibold">Editing Blog</p>
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-600 text-white px-4 py-2 rounded"
            >
              Cancel Edit
            </button>
          </div>
        )}
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border p-3 text-[#191919]"
          required
        />

        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="w-full border p-3  text-[#191919]"
        />

        <div>
          <label className="block text-[#191919] mb-2">Blog Image</label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border p-3 text-[#191919]"
          />
          {form.image && (
            <img
              src={form.image}
              alt="Preview"
              className="w-60 h-40 object-cover mt-4 rounded-md border"
            />
          )}
        </div>
        <input
          placeholder="Excerpt"
          value={form.excerpt}
          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
          className="w-full border p-3  text-[#191919]"
        />

        <div>
          <label className="block text-[#191919] mb-2 font-semibold">
            Full Content
          </label>
          <div className="border-2 border-black rounded">
            <div className="bg-gray-200 border-b-2 border-black p-2 flex gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => document.execCommand("bold")}
                className="px-3 py-1 bg-white border-2 border-black rounded hover:bg-gray-300 text-black font-bold"
                title="Bold"
              >
                B
              </button>
              <button
                type="button"
                onClick={() => document.execCommand("italic")}
                className="px-3 py-1 bg-white border-2 border-black rounded hover:bg-gray-300 text-black italic"
                title="Italic"
              >
                I
              </button>
              <button
                type="button"
                onClick={() => document.execCommand("underline")}
                className="px-3 py-1 bg-white border-2 border-black rounded hover:bg-gray-300 text-black underline"
                title="Underline"
              >
                U
              </button>
              <button
                type="button"
                onClick={() => document.execCommand("insertUnorderedList")}
                className="px-3 py-1 bg-white border-2 border-black rounded hover:bg-gray-300 text-black"
                title="Bullet List"
              >
                • List
              </button>
              <button
                type="button"
                onClick={() => document.execCommand("insertOrderedList")}
                className="px-3 py-1 bg-white border-2 border-black rounded hover:bg-gray-300 text-black"
                title="Numbered List"
              >
                1. List
              </button>
              <button
                type="button"
                onClick={() => {
                  const url = prompt("Enter URL:");
                  if (url) document.execCommand("createLink", false, url);
                }}
                className="px-3 py-1 bg-white border-2 border-black rounded hover:bg-gray-300 text-black"
                title="Insert Link"
              >
                Link
              </button>
              <input
                ref={imageInputRef}
                type="file"
                accept="image/*"
                onChange={handleContentImageUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => imageInputRef.current?.click()}
                className="px-3 py-1 bg-white border-2 border-black rounded hover:bg-gray-300 text-black"
                title="Upload Image"
              >
                📷 Upload
              </button>
            </div>
            <div
              ref={editorRef}
              contentEditable
              onInput={(e) => {
                setForm({ ...form, content: e.currentTarget.innerHTML });
              }}
              className="min-h-[300px] p-4 bg-white text-[#191919] focus:outline-none"
              suppressContentEditableWarning
            />
          </div>
        </div>

        <input
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          className="w-full border p-3  text-[#191919]"
        />

        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full border p-3  text-[#191919]"
        />

        <input
          placeholder="Reading Time (e.g. 5-6 minutes)"
          value={form.readingTime}
          onChange={(e) => setForm({ ...form, readingTime: e.target.value })}
          className="w-full border p-3  text-[#191919]"
        />

        <input
          placeholder="Source (e.g. Reuters)"
          value={form.source}
          onChange={(e) => setForm({ ...form, source: e.target.value })}
          className="w-full border p-3  text-[#191919]"
        />

        <input
          placeholder="Source URL (e.g. https://reuters.com/article)"
          value={form.sourceUrl}
          onChange={(e) => setForm({ ...form, sourceUrl: e.target.value })}
          className="w-full border p-3  text-[#191919]"
          type="url"
        />

        <button className="bg-black text-white px-6 py-3 rounded">
          {editingId ? "Update Blog" : "Add Blog"}
        </button>
      </form>

      <div className="mt-16">
        <h2 className="text-2xl mb-6 text-[#191919] font-bold">
          Existing Blogs
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Note: The 2 most recent blogs (by date) are automatically featured.
        </p>

        {blogs.length === 0 ? (
          <p className="text-gray-500">
            No blogs yet. Add your first blog above!
          </p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="border p-6 mb-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4">
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-32 h-24 object-cover rounded"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-[#191919]">
                        {blog.title}
                        {blog.featured && (
                          <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-1 rounded">
                            FEATURED
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {blog.category}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {blog.author} • {blog.date} • {blog.readingTime}
                      </p>
                      {blog.source && (
                        <p className="text-sm text-gray-500 mt-1">
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
                        onClick={() => editBlog(blog)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          if (
                            confirm(
                              "Are you sure you want to delete this blog?"
                            )
                          ) {
                            deleteBlog(blog.id);
                          }
                        }}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
