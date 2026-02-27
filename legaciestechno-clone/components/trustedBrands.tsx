import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function TrustedBrands() {
  return (
    <section className="bg-[#19191] text-white py-5">
      {/* TOP LINE */}
      <div className=" mb-6" />

      <div className="max-w-7xl  ">
        <div className="flex items-center">
          {/* LABEL */}
          <div className="w-[160px]">
            <p className="text-sm tracking-widest text-[#191919]">TRUSTED BY</p>
          </div>

          {/* LOGOS */}
          <div className="flex-1 overflow-hidden relative">
            <div className="flex items-center justify-between gap-20 animate-logo-scroll ">
              <img
                src="/audiology.png"
                className="h-5 grayscale-100 opacity-50  hover:opacity-100 transition"
              />
              <img
                src="/brand_logos/dentaprodigital.png"
                className="h-5 grayscale-100 opacity-50 hover:opacity-100 transition"
              />
              <img
                src="/brand_logos/wellgenpro-logo.png"
                className="h-10 grayscale-100 opacity-50  hover:opacity-100 transition"
              />
              <img
                src="/brand_logos/Qualiconvert.png"
                className="h-6 grayscale-100 opacity-50 hover:opacity-100 transition "
              />
              <img
                src="https://framerusercontent.com/images/ccgJwIpyRN7xD6oYFuVF5HERDY.png"
                className="h-19 opacity-50  hover:opacity-100 transition grayscale-100"
              />
              <img
                src="https://framerusercontent.com/images/RMWoyyK4OZ58PQnAgSUsnjw0uRU.png"
                className="h-20 opacity-50  hover:opacity-100 transition grayscale-100"
              />
              <img
                src="https://framerusercontent.com/images/vW1UWuyNjLZcSeLEYjPdeH7aY.png"
                className="h-15 opacity-50  hover:opacity-100 transition grayscale-100"
              />
              <img
                src="https://framerusercontent.com/images/WlyV0IAe1FY1d3R13Q1YnNwv4c.png"
                className="h-15 opacity-50  hover:opacity-100 transition grayscale-100"
              />
              <img
                src="/brand_logos/jiologo.png"
                className="h-15 opacity-50  hover:opacity-100 transition grayscale-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className=" mt-6" />
    </section>
  );
}
