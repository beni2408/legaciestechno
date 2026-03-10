"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside
      className={` border border-black w-72 bg-white border-r border-gray-200 min-h-screen shadow-sm transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-72"
      }`}
    >
      <div className="p-8">
        <h2
          className={` ${syne.className} text-2xl font-black text-[#191919] mb-2`}
        >
          Legacies Admin
        </h2>
      </div>
      <nav className="px-4">
        <Link
          href="/admin"
          className={`w-full text-left px-6 py-4 rounded-xl mb-2 transition-all flex items-center gap-3 block ${
            isActive("/admin")
              ? "bg-[#191919] text-white shadow-lg"
              : "text-gray-700 hover:bg-gray-100"
          }`}
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
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          <span className="font-medium">Dashboard</span>
        </Link>
        <Link
          href="/admin/blogs"
          className={`w-full text-left px-6 py-4 rounded-xl mb-2 transition-all flex items-center gap-3 block ${
            isActive("/admin/blogs")
              ? "bg-[#191919] text-white shadow-lg"
              : "text-gray-700 hover:bg-gray-100"
          }`}
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
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <span className="font-medium">Manage Blogs</span>
        </Link>
      </nav>
    </aside>
  );
}
