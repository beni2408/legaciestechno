import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-[#fdfbf5] text-black border-b border-black/50">
      <nav className=" mx-auto flex items-center justify-between  py-5">
        {/* LEFT → Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo2.png" alt="Logo" width={250} height={100} />
          {/* <svg
            style="width:100%;height:100%;"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
          >
            <use href="#svg-618144569_41686"></use>
          </svg> */}
        </div>

        <div className="flex items-center gap-5">
          <ul className="hidden md:flex gap-10 text-sm tracking-wider">
            <li className="hover:text-black cursor-pointer">SERVICES</li>
            <li className="hover:text-black cursor-pointer">WORK</li>
            <li className="hover:text-black cursor-pointer">STUDIO</li>
            <li className="hover:text-black cursor-pointer">BLOG</li>
            <li className="hover:text-black cursor-pointer">LYNT-X LABS</li>
          </ul>

          <button className="bg-[#191919] text-[#fdfbf5] px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition">
            LETS TALK
          </button>

          <div className="h-6 w-px bg-black/20" />

          <a
            className="text-3xl cursor-pointer hover:text-gray-700 font-black "
            href="https://www.linkedin.com/company/legacies-techno/"
          >
            in
          </a>
          <div className="h-6 w-px bg-black/20" />

          <div className="w-10 h-6 border border-black/30 rounded-full flex items-center px-1">
            <div className="w-4 h-4 bg-black rounded-full" />
          </div>
        </div>
      </nav>
    </header>
  );
}
