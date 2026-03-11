"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Blog } from "@/types/blog";
import { useRef } from "react";
import BlogEditor from "../../components/BlogEditor";
import SimpleEditor from "../../components/SimpleEditor";

const runCommand = (command: string, value?: string) => {
  document.execCommand(command, false, value);
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const file = fileInputRef.current?.files?.[0];

  if (!file && !form.image) {
    alert("Please upload a blog image");
    return;
  }

  const newBlog = {
    ...form,
    id: Date.now().toString(),
  };

  await fetch("/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBlog),
  });

  router.push("/admin/blogs");
};
// const handleContentImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const file = e.target.files?.[0];
//   if (!file) return;

//   const reader = new FileReader();

//   reader.onloadend = () => {
//     const img = document.createElement("img");
//     img.src = reader.result as string;
//     img.style.maxWidth = "100%";
//     img.style.height = "auto";

//     if (editorRef.current) {
//       editorRef.current.appendChild(img);
//       setForm({ ...form, content: editorRef.current.innerHTML });
//     }
//   };

//   reader.readAsDataURL(file);

//   if (imageInputRef.current) {
//     imageInputRef.current.value = "";
//   }
// };

const handleContentImageUpload = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  const img = document.createElement("img");
  img.src = data.url;
  img.style.maxWidth = "100%";
  img.style.height = "auto";

  if (editorRef.current) {
    editorRef.current.appendChild(img);
    setForm({
      ...form,
      content: editorRef.current.innerHTML,
    });
  }
};

export default function NewBlogPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const runCommand = (command: string, value?: string) => {
    if (!editorRef.current) return;

    editorRef.current.focus(); // important

    document.execCommand(command, false, value);

    setForm((prev) => ({
      ...prev,
      content: editorRef.current!.innerHTML,
    }));
  };

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

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setForm((prev) => ({
      ...prev,
      image: data.url,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newBlog = {
      ...form,
      id: Date.now().toString(),
    };

    if (!newBlog.image) {
      alert("Please upload a blog image");
      return;
    }

    await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    });

    router.push("/admin/blogs");
  };

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#191919] mb-2">
          Create New Blog
        </h1>
        <p className="text-gray-600">Add a new blog post</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* TITLE */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Blog Title
            </label>
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="block text-sm font-semibold mb-2">Category</label>
            <input
              type="text"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#191919] mb-2">
              Blog Image
            </label>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full border border-gray-300 rounded-lg p-3 text-[#191919] focus:ring-2 focus:ring-[#191919] focus:border-transparent"
            />

            {form.image && (
              <img
                src={form.image}
                alt="Preview"
                className="w-full h-48 object-cover mt-4 rounded-lg border border-gray-200"
              />
            )}
          </div>

          {/* EXCERPT */}
          <div>
            <label className="block text-sm font-semibold mb-2">Excerpt</label>
            <textarea
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>

          {/* AUTHOR */}
          <div>
            <label className="block text-sm font-semibold mb-2">Author</label>
            <input
              type="text"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>

          {/* DATE */}
          <div>
            <label className="block text-sm font-semibold mb-2">Date</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>

          {/* CONTENT */}
          {/* <div>
            <label className="block text-sm font-semibold text-[#191919] mb-2">
              Full Content
            </label>

            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-100 border-b border-gray-300 p-3 flex gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => runCommand("bold")}
                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg font-bold"
                >
                  B
                </button>

                <button
                  type="button"
                  onClick={() => runCommand("italic")}
                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg italic"
                >
                  I
                </button>

                <button
                  type="button"
                  onClick={() => runCommand("underline")}
                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg underline"
                >
                  U
                </button>

                <button
                  type="button"
                  onClick={() => runCommand("insertUnorderedList")}
                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg"
                >
                  • List
                </button>

                <button
                  type="button"
                  onClick={() => runCommand("insertOrderedList")}
                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg"
                >
                  1. List
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
                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg"
                >
                  📷 Image
                </button>
              </div>

              <div
                ref={editorRef}
                contentEditable
                onInput={(e) =>
                  setForm({ ...form, content: e.currentTarget.innerHTML })
                }
                className="min-h-[300px] p-4 bg-white text-[#191919] focus:outline-none [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-6 [&_ol]:pl-6"
                suppressContentEditableWarning
              />
            </div>
          </div> */}

          {/* <div>
            <label className="block text-sm font-semibold text-[#191919] mb-2">
              Full Content
            </label>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-100 border-b border-gray-300 p-3 flex gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => runCommand("bold")}
                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-black font-bold"
                >
                  B
                </button>

                <button
                  type="button"
                  onClick={() => runCommand("italic")}
                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-black italic"
                >
                  I
                </button>

                <button
                  type="button"
                  onClick={() => runCommand("underline")}
                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-black underline"
                >
                  U
                </button>

                <button
                  type="button"
                  onClick={() => runCommand("insertUnorderedList")}
                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-black"
                >
                  • List
                </button>

                <button
                  type="button"
                  onClick={() => runCommand("insertOrderedList")}
                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-black"
                >
                  1. List
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
                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-black"
                  title="Upload Image"
                >
                  📷 Image
                </button>
              </div>
              <div
                ref={editorRef}
                contentEditable
                onInput={(e) =>
                  setForm({ ...form, content: e.currentTarget.innerHTML })
                }
                className="min-h-[300px] p-4 bg-white text-[#191919] focus:outline-none [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-6 [&_ol]:pl-6"
                suppressContentEditableWarning
              />
            </div>
          </div> */}

          <div>
            <label className="block text-sm font-semibold mb-2">
              Full Content
            </label>

            <SimpleEditor
              content={form.content}
              onChange={(content) => setForm({ ...form, content })}
            />
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#191919] mb-2">
                Reading Time
              </label>
              <input
                placeholder="5-6 minutes"
                value={form.readingTime}
                onChange={(e) =>
                  setForm({ ...form, readingTime: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg p-3 text-[#191919] focus:ring-2 focus:ring-[#191919] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#191919] mb-2">
                Source
              </label>
              <input
                placeholder="Reuters"
                value={form.source}
                onChange={(e) => setForm({ ...form, source: e.target.value })}
                className="w-full border border-gray-300 rounded-lg p-3 text-[#191919] focus:ring-2 focus:ring-[#191919] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#191919] mb-2">
                Source URL
              </label>
              <input
                placeholder="https://..."
                value={form.sourceUrl}
                onChange={(e) =>
                  setForm({ ...form, sourceUrl: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg p-3 text-[#191919] focus:ring-2 focus:ring-[#191919] focus:border-transparent"
                type="url"
              />
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-[#191919] text-white px-6 py-3 rounded-lg"
            >
              Create Blog
            </button>

            <button
              type="button"
              onClick={() => router.push("/admin/blogs")}
              className="border border-gray-300 px-6 py-3 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
