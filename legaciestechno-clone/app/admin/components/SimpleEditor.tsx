"use client";

import { useRef, useEffect } from "react";

type Props = {
  content: string;
  onChange: (content: string) => void;
};

export default function SimpleEditor({ content, onChange }: Props) {
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    // Only set content if editor is empty
    if (editorRef.current.innerHTML === "") {
      editorRef.current.innerHTML = content || "";
    }
  }, [content]);

  const runCommand = (command: string, value?: string) => {
    if (!editorRef.current) return;

    editorRef.current.focus();

    document.execCommand(command, false, value);

    onChange(editorRef.current.innerHTML);
  };

  const insertLink = () => {
    const url = prompt("Enter URL");
    if (!url) return;

    runCommand("createLink", url);
  };

  const insertImage = async (file: File) => {
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
    img.style.marginTop = "10px";

    editorRef.current?.appendChild(img);

    onChange(editorRef.current?.innerHTML || "");
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    insertImage(file);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="bg-gray-100 border-b border-gray-300 p-3 flex gap-2 flex-wrap">
        <button
          type="button"
          onClick={() => runCommand("bold")}
          className="px-3 py-1 border rounded font-bold"
        >
          B
        </button>

        <button
          type="button"
          onClick={() => runCommand("italic")}
          className="px-3 py-1 border rounded italic"
        >
          I
        </button>

        <button
          type="button"
          onClick={() => runCommand("underline")}
          className="px-3 py-1 border rounded underline"
        >
          U
        </button>

        <button
          type="button"
          onClick={() => runCommand("insertUnorderedList")}
          className="px-3 py-1 border rounded"
        >
          • List
        </button>

        <button
          type="button"
          onClick={() => runCommand("insertOrderedList")}
          className="px-3 py-1 border rounded"
        >
          1. List
        </button>

        <button
          type="button"
          onClick={insertLink}
          className="px-3 py-1 border rounded"
        >
          🔗 Link
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          className="hidden"
        />

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="px-3 py-1 border rounded"
        >
          📷 Image
        </button>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={() => {
          if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
          }
        }}
        className="min-h-[350px] p-4 outline-none [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-6 [&_ol]:pl-6"
        suppressContentEditableWarning
      />
    </div>
  );
}
