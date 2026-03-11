"use client";

import dynamic from "next/dynamic";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CKEditor = dynamic(
  () => import("@ckeditor/ckeditor5-react").then((mod) => mod.CKEditor),
  { ssr: false }
);

type Props = {
  content: string;
  onChange: (content: string) => void;
};

export default function BlogEditor({ content, onChange }: Props) {
  return (
    <div className="border border-gray-300 rounded-lg">
      <CKEditor
        editor={ClassicEditor}
        data={content || ""}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
      />
    </div>
  );
}
