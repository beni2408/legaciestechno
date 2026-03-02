import OfficeCard from "./OfficeCard";

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

export default function OfficesSection() {
  return (
    <section className="py-10">
      <div className=" flex gap-16">
        {/* LEFT LABEL */}
        <div className="w-[28%]">
          <p
            className={` ${robotoMono.className} uppercase text-sm font-bold tracking-widest text-[#191919]`}
          >
            Our Offices
          </p>
        </div>

        {/* VERTICAL DIVIDER */}
        <div className="w-px bg-[#191919]/30"></div>

        {/* RIGHT CONTENT */}
        <div className="w-[62%] ">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Card 1 */}
            <div className="md:border-r md:border-b border-white/20 p-8">
              <OfficeCard
                image="https://framerusercontent.com/images/xXDQRggzMnnbX3kx9X9Fxrhy8.jpeg"
                city="CHENNAI"
                address="3A, 3rd Floor, No. 143/6C, Durga Enclave, Karapakkam, Chennai – 600097"
              />
            </div>

            {/* Card 2 */}
            <div className="md:border-b border-white/20 p-8">
              <OfficeCard
                image="https://framerusercontent.com/images/qvxnEQ17dQiDEy8xgM0ERIQMMA.webp"
                city="USA"
                address="30 N Gould St, Sheridan, 82801 Wyoming, U.S.A"
              />
            </div>

            {/* Card 3 */}
            <div className="md:border-r border-white/20 p-8">
              <OfficeCard
                image="https://framerusercontent.com/images/4PBiLj2ZV8ETR8BjWOaPdoATbOc.jpg"
                city="UAE"
                address="Launching Soon — Stay Tuned!"
              />
            </div>

            {/* Card 4 */}
            <div className="p-8">
              <OfficeCard
                image="https://framerusercontent.com/images/uyZQWzwkEkryEXSBO6KJq2z0Ids.webp"
                city="GERMANY"
                address="Launching Soon — Stay Tuned!"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
