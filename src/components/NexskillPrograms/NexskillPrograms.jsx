import React, { useEffect, useRef, useState } from "react";
import nexskillImg from "../../assets/Nexskill.jpg";
import mernWebImage from "../../assets/MERN-Stack-Web-Dev.jpg";
import graphicDesignImage from "../../assets/Graphic-Designing.jpg";
import digitalMediaImage from "../../assets/Digital-Media-Marketing.jpg";
import ecommerceImage from "../../assets/Ecommerce.jpg";
import mobileGameImage from "../../assets/Mobile-Game-Development.jpg";
import forexImage from "../../assets/Forex-Trading.jpg";
import cryptoImage from "../../assets/Crypto-Trading.jpg";

const nexskillPrograms = [
  {
    name: "MERN Stack Web Development",
    duration: "3 Months Program",
    images: [{ img: mernWebImage }],
  },
  {
    name: "Graphic Designing",
    duration: "3 Months Program",
    images: [{ img: graphicDesignImage }],
  },
  {
    name: "Digital Media Marketing",
    duration: "3 Months Program",
    images: [{ img: digitalMediaImage }],
  },
  {
    name: "Ecommerce",
    duration: "3 Months Program",
    images: [{ img: ecommerceImage }],
  },
  {
    name: "Mobile Game Development",
    duration: "3 Months Program",
    images: [{ img: mobileGameImage }],
  },
  {
    name: "Forex Trading",
    duration: "3 Months Program",
    images: [{ img: forexImage }],
  },
  {
    name: "Crypto Trading",
    duration: "3 Months Program",
    images: [{ img: cryptoImage }],
  },
];

const NexskillPrograms = () => {
  const wrapRef = useRef(null);
  const bgRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    function onMove(e) {
      const r = el.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const x = (clientX - r.left) / r.width;
      const y = (clientY - r.top) / r.height;
      setMouse({ x, y });
      el.style.setProperty("--mx", `${x}`);
      el.style.setProperty("--my", `${y}`);
    }

    function onLeave() {
      setMouse({ x: 0.5, y: 0.5 });
      el.style.setProperty("--mx", `0.5`);
      el.style.setProperty("--my", `0.5`);
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchend", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchend", onLeave);
    };
  }, []);

  const maxTranslate = 14;
  const tx = (mouse.x - 0.5) * 2 * maxTranslate;
  const ty = (mouse.y - 0.5) * 2 * (maxTranslate * 0.55);

  return (
    <div>
      <section className="relative">
        <div
          ref={wrapRef}
          className="relative h-[300px] md:h-[500px] lg:h-[700px] overflow-hidden flex items-center justify-center"
          style={{ ["--mx"]: 0.5, ["--my"]: 0.5 }}
        >
          {/* Background */}
          <div
            ref={bgRef}
            className="absolute inset-0 -bottom-8 md:-bottom-13 lg:-bottom-17 transform-gpu will-change-transform"
            style={{
              transform: `translate3d(${tx * 0.55}px, ${
                ty * 0.55
              }px, 0) scale(1.03)`,
              transition: "transform 220ms cubic-bezier(.2,.9,.25,1)",
            }}
          >
            <img
              src={nexskillImg}
              alt="Background Image"
              className="absolute inset-0 w-full h-full object-fit z-20 pointer-events-none"
            />
          </div>

          {/* SVG sweeps */}
          <svg
            className="absolute inset-0 w-full h-full lg:h-220 pointer-events-none z-40"
            viewBox="0 0 1590 900"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="gCenter" x1="0" x2="1">
                <stop offset="0%" stopColor="#FF3135" stopOpacity="0" />
                <stop offset="20%" stopColor="#8B0A1A" stopOpacity="0.9" />
                <stop offset="80%" stopColor="#BA0001" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#660000" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gSide" x1="0" x2="1">
                <stop offset="0%" stopColor="#FF3135" stopOpacity="0" />
                <stop offset="30%" stopColor="#BA0001" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#660000" stopOpacity="0" />
              </linearGradient>
              <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              id="centerPath"
              d="M320 420 C 520 220, 720 170, 880 190 C 1040 210, 1160 280, 1240 320"
              stroke="url(#gCenter)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              filter="url(#glow2)"
              className="center-path"
            />
            <path
              id="leftArc"
              d="M180 460 C 280 360, 480 300, 720 260"
              stroke="url(#gSide)"
              strokeWidth="3.4"
              strokeLinecap="round"
              fill="none"
              filter="url(#glow2)"
              className="side-path left"
            />
            <path
              id="rightArc"
              d="M1420 460 C 1240 360, 1040 300, 780 260"
              stroke="url(#gSide)"
              strokeWidth="3.4"
              strokeLinecap="round"
              fill="none"
              filter="url(#glow2)"
              className="side-path right"
            />
          </svg>
        </div>
        {/* Nexskill Programs */}
        <div className="container mx-auto mt-20">
          <h2 className="text-4xl md:text-5xl text-[#BA0001] text-center font-bold mb-8">
            Nexskill Programs We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {nexskillPrograms.map((program, index) => (
              <div key={index} className="block">
                <div className="bg-white p-4 rounded-lg">
                  <div className=" w-full h-96 mb-4">
                    <img
                      src={program.images[0].img}
                      alt={program.name}
                      className="pro-glowing-border h-full w-full object-fit rounded-lg active:shadow-2xl hover:shadow-2xl active:scale-105 hover:scale-105 transition-transform-all duration-300"
                    />
                  </div>
                  <h3 className="text-sm text-red-900 font-semibold mb-1">
                    {program.name}
                  </h3>
                  <p className="text-red-500 text-sm font-medium tracking-tighter">
                    {program.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NexskillPrograms;
