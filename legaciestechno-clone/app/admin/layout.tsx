"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50 mt-10 border border-[#191919]/80 rounded-xl">
      <Sidebar isOpen={sidebarOpen} />

      <main
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-0" : "ml-[-170]"
        }`}
      >
        <div className="p-12 pt-24">{children}</div>
      </main>
    </div>
  );
}
