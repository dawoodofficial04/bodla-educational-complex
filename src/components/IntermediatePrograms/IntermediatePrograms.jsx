import React, { useEffect, useRef, useState } from "react";
import { ProgramGrid } from "../ProgramGrid";
import interProgramsImg2 from "../../assets/inter-regular-programs2.jpg";
import fscEngineeringImage from "../../assets/Fsc-pre-engineering.jpg";
import fscMedicalImage from "../../assets/Fsc-pre-medical.jpg";
import icsImage from "../../assets/Ics.jpg";
import icomImage from "../../assets/Icom.jpg";

const interPrograms = [
  {
    name: "FSc Pre-Engineering",
    duration: "2 Years Program",
    images: [{ img: fscEngineeringImage }],
  },
  {
    name: "FSc Pre-Medical",
    duration: "2 Years Program",
    images: [{ img: fscMedicalImage }],
  },
  {
    name: "ICS in Statistics & Physics",
    duration: "2 Years Program",
    images: [{ img: icsImage }],
  },
  {
    name: "ICOM",
    duration: "2 Years Program",
    images: [{ img: icomImage }],
  },
];

const IntermediatePrograms = () => {
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
    <section className="relative">
      <div
        ref={wrapRef}
        className="relative h-[300px] md:h-[500px] lg:h-[700px] overflow-hidden flex items-center justify-center"
        style={{ ["--mx"]: 0.5, ["--my"]: 0.5 }}
      >
        {/* Background */}
        <div
          ref={bgRef}
          className="absolute inset-0 -bottom-20 lg:-bottom-30 transform-gpu will-change-transform"
          style={{
            transform: `translate3d(${tx * 0.55}px, ${
              ty * 0.55
            }px, 0) scale(1.03)`,
            transition: "transform 220ms cubic-bezier(.2,.9,.25,1)",
          }}
        >
          <img
            src={interProgramsImg2}
            alt="Background Image"
            className="absolute inset-0 w-full h-full object-fit z-20 pointer-events-none"
          />
        </div>

        {/* SVG sweeps */}
        <svg
          className="absolute inset-0 w-full h-full lg:h-200 pointer-events-none z-40"
          viewBox="0 0 1590 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="gCenter" x1="0" x2="1">
              <stop offset="0%" stopColor="#8ee6ff" stopOpacity="0" />
              <stop offset="20%" stopColor="#58a6ff" stopOpacity="0.9" />
              <stop offset="80%" stopColor="#b78bff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ff88c2" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gSide" x1="0" x2="1">
              <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0" />
              <stop offset="30%" stopColor="#60a5fa" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
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
        <div className="container mx-auto mt-20">
          <h2 className="text-4xl md:text-5xl text-[#0c2d70] text-center font-bold mb-8">
            Intermediate Programs We Offer
          </h2>
          <ProgramGrid programs={interPrograms} />
        </div>
    </section>
  );
};

export default IntermediatePrograms;
