import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Navbar() {
  return (
    <header
      className="
    
    
    w-full bg-[#fdfbf5] text-black border-b border-black/50 lg:py-1.5"
    >
      <nav className=" lg:w-335  flex items-center justify-between  py-5">
        {/* LEFT → Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo2.png"
            alt="Logo"
            width={260}
            height={140}
            className=""
          />
          {/* <svg
            style="width:100%;height:100%;"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
          >
            <use href="#svg-618144569_41686"></use>
          </svg> */}
        </div>

        <div className="flex items-center gap-5 my-5">
          <ul className="hidden md:flex gap-10 lg:text-[15px] tracking-wider">
            <li className={`${robotoMono.className}`}>
              <Link
                href="/services"
                className="relative inline-block pb-[2px] cursor-pointer
    after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-black
    after:scale-x-0 after:origin-left after:transition-transform after:duration-500
    after:ease-[cubic-bezier(.76,0,.24,1)] hover:after:scale-x-100"
              >
                SERVICES
              </Link>
            </li>

            <li>
              <Link
                href="/work"
                className={`${robotoMono.className} relative inline-block pb-[2px] cursor-pointer
    after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-black
    after:scale-x-0 after:origin-left after:transition-transform after:duration-500
    after:ease-[cubic-bezier(.76,0,.24,1)] hover:after:scale-x-100`}
              >
                WORK
              </Link>
            </li>

            <li>
              <Link
                href="/studio"
                className={`${robotoMono.className} relative inline-block pb-[2px] cursor-pointer
    after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-black
    after:scale-x-0 after:origin-left after:transition-transform after:duration-500
    after:ease-[cubic-bezier(.76,0,.24,1)] hover:after:scale-x-100`}
              >
                STUDIO
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className={`${robotoMono.className} relative inline-block pb-[2px] cursor-pointer
    after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-black
    after:scale-x-0 after:origin-left after:transition-transform after:duration-500
    after:ease-[cubic-bezier(.76,0,.24,1)] hover:after:scale-x-100`}
              >
                BLOG
              </Link>
            </li>

            <li>
              <Link
                href="/lynt-x-labs"
                className={`${robotoMono.className} relative inline-block pb-[2px] cursor-pointer
    after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-black
    after:scale-x-0 after:origin-left after:transition-transform after:duration-500
    after:ease-[cubic-bezier(.76,0,.24,1)] hover:after:scale-x-100`}
              >
                LYNT-X LABS
              </Link>
            </li>
          </ul>

          <Link href="/contact">
            <button
              className={`${robotoMono.className} group bg-[#191919] text-[#fdfbf5] lg:px-6 px-5 py-2 rounded-md text-sm overflow-hidden`}
            >
              <span className="relative block h-5 overflow-hidden">
                {/* Top Text */}
                <span className="block transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
                  {` LET'S TALK`}
                </span>

                {/* Bottom Text */}
                <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
                  {` LET'S TALK`}
                </span>
              </span>
            </button>
          </Link>

          <div className=" lg:h-9 h-6 w-px bg-black" />

          <div className=" items-center justify-center flex">
            <Link href="https://www.linkedin.com/company/legacies-techno/">
              <svg overflow="visible" className="w-5 h-7 ">
                <path
                  d="M 5.149 23 L 0.38 23 L 0.38 7.644 L 5.149 7.644 Z M 2.762 5.55 C 1.237 5.55 0 4.287 0 2.762 C 0 1.237 1.237 0 2.762 0 C 4.287 0 5.524 1.237 5.524 2.762 C 5.524 4.287 4.287 5.55 2.762 5.55 Z M 22.995 23 L 18.236 23 L 18.236 15.525 C 18.236 13.744 18.2 11.459 15.756 11.459 C 13.276 11.459 12.896 13.394 12.896 15.397 L 12.896 23 L 8.132 23 L 8.132 7.644 L 12.706 7.644 L 12.706 9.739 L 12.773 9.739 C 13.41 8.533 14.965 7.259 17.286 7.259 C 22.112 7.259 23 10.437 23 14.565 L 23 23 Z"
                  fill="#191919"
                ></path>
              </svg>
            </Link>
          </div>

          <div className=" hidden w-10 h-6 border border-black/30 rounded-full flex items-center px-1">
            <div className="w-4 h-4 bg-black rounded-full" />
          </div>
        </div>
      </nav>
    </header>
  );
}
