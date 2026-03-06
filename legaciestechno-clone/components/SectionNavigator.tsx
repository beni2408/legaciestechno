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
    <div className="w-full md:w-100 lg:w-500 h-5 py-2 mb-50 lg:mb-0">
      <div className="flex flex-wrap gap-4 justify-start  lg:justify-start">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`${robotoMono.className} lg:h-8 h-8 w-80 lg:w-58 text-center lg:px-0  border border-black rounded-md text-xs tracking-widest hover:bg-black hover:text-white transition`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );
}
