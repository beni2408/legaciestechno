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
    <section className="lg:py-10 py-2">
      <div className="flex">
        {/* LEFT LABEL */}
        <div className="lg:w-[28%] hidden lg:block">
          <p
            className={`${robotoMono.className} uppercase text-sm tracking-widest text-[#191919]`}
          >
            Our Offices
          </p>
        </div>

        {/* VERTICAL DIVIDER */}
        <div className="lg:w-px bg-[#191919]"></div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 border-b lg:border-r border-white/20 p-8">
              <OfficeCard
                image="https://framerusercontent.com/images/xXDQRggzMnnbX3kx9X9Fxrhy8.jpeg"
                city="CHENNAI"
                address="3A, 3rd Floor, No. 143/6C, Durga Enclave, Karapakkam, Chennai – 600097"
              />
            </div>

            <div className="lg:w-1/2 border-b border-white/20 p-8">
              <OfficeCard
                image="https://framerusercontent.com/images/qvxnEQ17dQiDEy8xgM0ERIQMMA.webp"
                city="USA"
                address="30 N Gould St, Sheridan, 82801 Wyoming, U.S.A"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:border-r border-white/20 p-8">
              <OfficeCard
                image="https://framerusercontent.com/images/4PBiLj2ZV8ETR8BjWOaPdoATbOc.jpg"
                city="UAE"
                address="Launching Soon — Stay Tuned!"
              />
            </div>

            <div className="lg:w-1/2 p-8">
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
