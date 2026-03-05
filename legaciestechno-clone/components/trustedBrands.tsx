import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function TrustedBrands() {
  return (
    <section className="bg-[#19191] text-white py-7">
      {/* TOP LINE */}
      <div className=" lg:mb-3 mb-3" />

      <div className="lg:w-full  ">
        <div className="lg:flex items-center flex-col flex">
          {/* LABEL */}
          <div className=" lg:w-[220px]">
            <p
              className={` ${robotoMono.className} text-sm tracking-widest text-[#191919] lg:mr-10 lg:border-r lg:h-15 items-center flex justify-start`}
            >
              TRUSTED BY
            </p>
          </div>

          {/* LOGOS */}
          <LogoScroller />
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className=" mt-6" />
    </section>
  );
}
import { useEffect, useRef } from "react";

function LogoScroller() {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);

  const logos = [
    "https://framerusercontent.com/images/LgSUtnnbFpshquQXHd6fTZjzmg.png",
    "https://framerusercontent.com/images/NxQsFUZp6e78Lks84dz4RdolLTM.png",
    "https://framerusercontent.com/images/GlGQY5vsZGETufjV1gPlbINuIMU.png",
    "https://framerusercontent.com/images/sPB94iy0PwoGtzj7d4Cj7SJmS4.png",
    "https://framerusercontent.com/images/ccgJwIpyRN7xD6oYFuVF5HERDY.png",
    "https://framerusercontent.com/images/RMWoyyK4OZ58PQnAgSUsnjw0uRU.png",
    "https://framerusercontent.com/images/vW1UWuyNjLZcSeLEYjPdeH7aY.png",
    "https://framerusercontent.com/images/R1g4DoXxtxD30j0gwjOPVqcs.png",
    "https://framerusercontent.com/images/1Eo1ZgzCwmWtlGQFUeovvchKns.png",
  ];

  useEffect(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;

    let position = 0;
    let speed = 1.4; // normal speed (faster)
    const slowSpeed = 0.5; // hover speed (still slower but faster than before)

    const animate = () => {
      position -= speed;

      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }

      track.style.transform = `translateX(${position}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    wrapper.addEventListener("mouseenter", () => {
      speed = slowSpeed;
    });

    wrapper.addEventListener("mouseleave", () => {
      speed = 1.4;
    });
  }, []);

  const loopLogos = [...logos, ...logos];

  return (
    <div ref={wrapperRef} className="logo-wrapper">
      <div ref={trackRef} className="logo-track">
        {loopLogos.map((logo, i) => (
          <img key={i} src={logo} alt="logo" className="logo-img" />
        ))}
      </div>
    </div>
  );
}
