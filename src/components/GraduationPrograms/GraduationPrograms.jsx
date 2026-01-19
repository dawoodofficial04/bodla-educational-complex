import React, { useEffect, useRef, useState } from "react";
import bsProgramsImg from "../../assets/bs-programs.jpg";
import { ProgramGrid } from "../ProgramGrid";
import bsHndImage from "../../assets/BS-HND.jpg";
import bsBiotechnologyImage from "../../assets/BS-Biotechnology.jpg";
import bsAiImage from "../../assets/BS-AI.jpg";
import bsMltImage from "../../assets/BS-MLT.jpg";
import bsBiochemistryImage from "../../assets/BS-Biochemistry.jpg";
import bsBotanyImage from "../../assets/BS-Botany.jpg";
import bsZoologyImage from "../../assets/BS-Zoology.jpg";
import bsChemistryImage from "../../assets/BS-Chemistry.jpg";
import bsEnglishImage from "../../assets/BS-English.jpg";
import bsMathsImage from "../../assets/BS-Maths.jpg";
import ADPImage from "../../assets/ADP.jpg";
import ADSImage from "../../assets/ADS.jpg";

const bsPrograms = [
  {
    name: "BS Human Nutrition and Dietetics",
    duration: "4 Years Program",
    images: [{ img: bsHndImage }],
  },
  {
    name: "BS Biotechnology",
    duration: "4 Years Program",
    images: [{ img: bsBiotechnologyImage }],
  },
  {
    name: "BS Artificial Intelligence",
    duration: "4 Years Program",
    images: [{ img: bsAiImage }],
  },
  {
    name: "BS Medical Laboratory Technology",
    duration: "4 Years Program",
    images: [{ img: bsMltImage }],
  },
  {
    name: "BS Biochemistry",
    duration: "4 Years Program",
    images: [{ img: bsBiochemistryImage }],
  },
  {
    name: "BS Botany",
    duration: "4 Years Program",
    images: [{ img: bsBotanyImage }],
  },
  {
    name: "BS Zoology",
    duration: "4 Years Program",
    images: [{ img: bsZoologyImage }],
  },
  {
    name: "BS Chemistry",
    duration: "4 Years Program",
    images: [{ img: bsChemistryImage }],
  },
  {
    name: "BS English",
    duration: "4 Years Program",
    images: [{ img: bsEnglishImage }],
  },
  {
    name: "BS Mathematics",
    duration: "4 Years Program",
    images: [{ img: bsMathsImage }],
  },
];

const GraduationPrograms = () => {
  const wrapRef = useRef(null);
  const bgRef = useRef(null);
  const adpRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMediumUp, setIsMediumUp] = useState(false);
  const targetProgressRef = useRef(0);
  const displayProgressRef = useRef(0);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumUp(window.innerWidth >= 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Smooth scroll-driven animation for ADP/ADS section
  useEffect(() => {
    const el = adpRef.current;
    if (!isMediumUp || !el) {
      // reset if small screen or no element
      targetProgressRef.current = 0;
      displayProgressRef.current = 0;
      setScrollProgress(0);
      if (leftRef.current) leftRef.current.style.transform = "translateX(0px)";
      if (rightRef.current)
        rightRef.current.style.transform = "translateX(0px)";
      return;
    }

    let animId = null;

    function updateTargetProgress() {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const start = vh;
      const end = vh * 0.2;
      const raw = (start - rect.top) / (start - end);
      const progress = Math.max(0, Math.min(raw, 1));
      targetProgressRef.current = progress;
    }

    function animate() {
      // lerp towards target for smoothing
      const cur = displayProgressRef.current;
      const tgt = targetProgressRef.current;
      const next = cur + (tgt - cur) * 0.12; // smoothing factor (lower = smoother)
      displayProgressRef.current = next;
      // apply to DOM directly to avoid rerenders
      const px = next * 35;
      if (leftRef.current)
        leftRef.current.style.transform = `translateX(${px}px)`;
      if (rightRef.current)
        rightRef.current.style.transform = `translateX(-${px}px)`;
      // update state at lower frequency for any UI that depends on scrollProgress
      setScrollProgress(next);
      animId = requestAnimationFrame(animate);
    }

    // initial compute and start loop
    updateTargetProgress();
    animate();

    // update target on scroll/resize
    const onScroll = () => updateTargetProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isMediumUp]);

  // Mouse move effect
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
            className="absolute inset-0 -bottom-8 md:-bottom-12 lg:-bottom-18 transform-gpu will-change-transform"
            style={{
              transform: `translate3d(${tx * 0.55}px, ${
                ty * 0.55
              }px, 0) scale(1.03)`,
              transition: "transform 220ms cubic-bezier(.2,.9,.25,1)",
            }}
          >
            <img
              src={bsProgramsImg}
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
        {/* Bachelor Programs */}
        <div className="container mx-auto mt-20">
          <h2 className="text-4xl md:text-5xl text-[#0c2d70] text-center font-bold mb-8">
            Bachelor Programs We Offer
          </h2>
          <ProgramGrid programs={bsPrograms} />
        </div>

        {/* ADP, ADS, ADA Programs */}
        <div className="container mx-auto mt-20" ref={adpRef}>
          <h2 className="text-4xl md:text-5xl text-[#0c2d70] text-center font-bold mb-15">
            ADP | ADS | ADA Programs We Offer
          </h2>
          <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-25 items-start">
              {/* LEFT SECTION */}
              <div
                ref={leftRef}
                className="will-change-transform transform-gpu"
              >
                {/* FIXED IMAGE SIZE */}
                <div className="w-full h-[280px] md:h-[340px] lg:h-[380px] overflow-hidden rounded-md shadow-md active:shadow-2xl md:hover:shadow-2xl active:scale-105 hover:scale-105 transition-transform-all duration-300">
                  <img
                    src={ADPImage}
                    alt="Campus"
                    className="intro-glowing-border w-full h-full object-fit"
                  />
                </div>

                <h2 className="text-[#1a2b4c] text-xl md:text-2xl font-semibold mt-4 border-b-[3px] border-[#7E3F9E] inline-block pb-1">
                  ADP Programs Affiliated With UCP
                </h2>

                <div className="text-gray-600 mt-3 text-sm md:text-[15px] leading-relaxed">
                  <p className="font-semibold mb-2">
                    Study ADP (Associate Degree Program) Affiliated with University of Central Punjab,
                    Lahore:
                    <br />
                    <span className="text-blue-500">Duration: 2 Years Program</span>
                  </p>
                  <ul className="list-inside space-y-1 mb-3">
                    <li>💎 ADP Accounting & Finance</li>
                    <li>💎 ADP Computer Science</li>
                    <li>💎 ADP Artificial Intelligence</li>
                    <li>💎 ADP Cyber Security</li>
                    <li>💎 ADP Data Science</li>
                    <li>💎 ADP Business Administration</li>
                    <li>💎 ADP Software Engineering</li>
                    <li>💎 ADP Psychology</li>
                  </ul>
                  <p>Join now and kickstart your academic journey!</p>
                </div>
              </div>

              {/* RIGHT SECTION */}
              <div
                ref={rightRef}
                className="will-change-transform transform-gpu"
              >
                {/* FIXED IMAGE SIZE (MATCHES LEFT) */}
                <div className="w-full h-[280px] md:h-[340px] lg:h-[380px] overflow-hidden rounded-md shadow-md active:shadow-2xl md:hover:shadow-2xl active:scale-105 hover:scale-105 transition-transform-all duration-300">
                  <img
                    src={ADSImage}
                    alt="Achievement"
                    className="intro-glowing-border w-full h-full object-fit"
                  />
                </div>

                <h2 className="text-[#1a2b4c] text-xl md:text-2xl font-semibold mt-4 border-b-[3px] border-[#7E3F9E] inline-block pb-1">
                  ADS & ADA Programs Affiliated With BZU
                </h2>

                <div className="text-gray-600 mt-3 text-sm md:text-[15px] leading-relaxed">
                  <p className="font-semibold mb-2">
                    Study ADS (Associate Degree in Science)  | ADA (Associate Degree in Arts) Affiliated with Bahauddin Zakariya
                    University, Multan:
                    <br />
                    <span className="text-blue-500">Duration: 2 Years Program</span>
                  </p>
                  <ul className="list-inside space-y-1 mb-3">
                    <li>💎 ADS Chemistry</li>
                    <li>💎 ADS Biochemistry</li>
                    <li>💎 ADS Mathematics</li>
                    <li>💎 ADS Botany</li>
                    <li>💎 ADS HND</li>
                    <li>💎 ADA English</li>
                    <li>💎 ADS Zoology</li>
                  </ul>
                  <p>Join now and kickstart your academic journey!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraduationPrograms;
