"use client";

import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

type Section = {
  label: string;
  id: string;
};

type Props = {
  sections: Section[];
};

export default function SectionNavigator({ sections }: Props) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="w-full h-5 py-2">
      <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`${robotoMono.className} h-8 text-center px-4  border border-black rounded-md text-xs tracking-widest hover:bg-black hover:text-white transition`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );
}
