"use client";
import { useEffect } from "react";

export default function CursorTracker() {
  useEffect(() => {
    const cursor = document.querySelector(".view-cursor") as HTMLElement;

    const moveCursor = (e: MouseEvent) => {
      if (!cursor) return;
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return null;
}
