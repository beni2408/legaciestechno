"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import "../globals.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-gray-50 mt-10 border border-[#191919]/80 rounded-xl ">
          <Sidebar isOpen={sidebarOpen} />

          <main
            className={`flex-1 transition-all duration-300 ${
              sidebarOpen ? "ml-0" : "ml-[-170]"
            }`}
          >
            {/* <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="mt-10 ml-10 top-6 left-6 z-40 bg-[#191919] text-white p-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
            > */}
            {/* <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button> */}

            <div className="p-12 pt-24">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
