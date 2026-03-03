"use client";
import { useState, useRef, useEffect } from "react";
import { Blog } from "@/types/blog";
import { useRouter, useParams } from "next/navigation";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id as string;
  
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
      const blogs: Blog[] = JSON.parse(stored);
      const blog = blogs.find((b) => b.id === blogId);
      if (blog) {
        setForm(blog);
        setTimeout(() => {
          if (editorRef.current) {
            editorRef.current.innerHTML = blog.content || "";
          }
        }, 0);
      }
    }
  }, [blogId]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setForm((prev) => ({ ...prev, image: reader.result as string }));
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
    if (imageInputRef.current) imageInputRef.current.value = "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const stored = localStorage.getItem("blogs");
    const blogs: Blog[] = stored ? JSON.parse(stored) : [];
    const updated = blogs.map((blog) => (blog.id === blogId ? { ...form, id: blogId } : blog));
    const sortedBlogs = [...updated].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const blogsWithFeatured = sortedBlogs.map((blog, index) => ({ ...blog, featured: index < 2 }));
    localStorage.setItem("blogs", JSON.stringify(blogsWithFeatured));
    router.push("/admin/blogs");
  };

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#191919] mb-2">Edit Blog</h1>
        <p className="text-gray-600">Update your blog post details</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#191919] mb-2">Title *</label>
              <input placeholder="Enter blog title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full border border-gray-300 rounded-lg p-3 text-[#191919] focus:ring-2 focus:ring-[#191919] focus:border-transparent" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#191919] mb-2">Category</label>
              <input placeholder="e.g. Technology, Business" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full border border-gray-300 rounded-lg p-3 text-[#191919] focus:ring-2 focus:ring-[#191919] focus:border-transparent" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#191919] mb-2">Blog Image</label>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="w-full border border-gray-300 rounded-lg p-3 text-[#191919] focus:ring-2 focus:ring-[#191919] focus:border-transparent" />
            {form.image && <img src={form.image} alt="Preview" className="w-full h-48 object-cover mt-4 rounded-lg border border-gray-200" />}
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#191919] mb-2">Excerpt</label>
            <textarea placeholder="Brief description of the blog" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} className="w-full border border-gray-300 rounded-lg p-3 text-[#191919] focus:ring-2 focus:ring-[#191919] focus:border-transparent h-24 resize-none" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#191919] mb-2">Full Content</label>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-100 border-b border-gray-300 p-3 flex gap-2 flex-wrap">
                <button type="button" onClick={() => document.execCommand("bold")} className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-black font-bold" title="Bold">B</button>
                <button type="button" onClick={() => document.execCommand("italic")} className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-black italic" title="Italic">I</button>
                <button type="button" onClick={() => document.execCommand("underline")} className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-black underline" title="Underline">U</button>
                <button type="button" onClick={() => document.execCommand("insertUnorderedList")} className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-black" title="Bullet List">• List</button>
                <button type="button" onClick={() => document.execCommand("insertOrderedList")} className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-black" title="Numbered List">1. List</button>
                <button type="button" onClick={() => { const url = prompt("Enter URL:"); if (url) document.execCommand("createLink", false, url); }} className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-black" title="Insert Link">🔗 Link</button>
                <input ref={imageInputRef} type="file" accept="image/*" onChange={handleContentImageUpload} className="hidden" />
                <button type="button" onClick={() => imageInputRef.current?.click()} className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-black" title="Upload Image">📷 Image</button>
              </div>
              <div ref={editorRef} contentEditable onInput={(e) => setForm({ ...form, content: e.currentTarget.innerHTML })} className="min-h-[300px] p-4 bg-white text-[#191919] focus:outline-none" suppressContentEditableWarning />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#191919] mb-2">Author</label>
              <input placeholder="Author name" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className="w-full border border-gray-300 rounded-lg p-3 text-[#191919] focus:ring-2 focus:ring-[#191919] focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#191919] mb-2">Date</label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full border border-gray-300 rounded-lg p-3 text-[#191919] focus:ring-2 focus:ring-[#191919] focus:border-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#191919] mb-2">Reading Time</label>
              <input placeholder="5-6 minutes" value={form.readingTime} onChange={(e) => setForm({ ...form, readingTime: e.target.value })} className="w-full border border-gray-300 rounded-lg p-3 text-[#191919] focus:ring-2 focus:ring-[#191919] focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#191919] mb-2">Source</label>
              <input placeholder="Reuters" value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} className="w-full border border-gray-300 rounded-lg p-3 text-[#191919] focus:ring-2 focus:ring-[#191919] focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#191919] mb-2">Source URL</label>
              <input placeholder="https://..." value={form.sourceUrl} onChange={(e) => setForm({ ...form, sourceUrl: e.target.value })} className="w-full border border-gray-300 rounded-lg p-3 text-[#191919] focus:ring-2 focus:ring-[#191919] focus:border-transparent" type="url" />
            </div>
          </div>

          <div className="flex gap-4">
            <button type="submit" className="flex-1 bg-[#191919] text-white px-6 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Update Blog</button>
            <button type="button" onClick={() => router.push('/admin/blogs')} className="px-6 py-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
