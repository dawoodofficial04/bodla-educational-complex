import React, { useEffect, useRef, useState } from "react";
import RIAHS from "../../assets/RIAHS.jpg";
import "./about.css"
import { InstitutesLogos } from '../InstitutesLogos';

const features = [
  { icon: "🏫", title: "A+ Category\nRecognition" },
  { icon: "📈", title: "90%+\nPassing Rate" },
  { icon: "👨‍🏫", title: "Highly Qualified\nFaculty" },
  { icon: "💰", title: "Cost Friendly\nFee Structure" },
  { icon: "🛠️", title: "State-of-the-Art\nSkill Labs" },
  { icon: "🏅", title: "Merit-Based\nScholarships" },
  { icon: "🎗️", title: "Need-Based\nScholarships" },
  { icon: "🥇", title: "Affiliation With\nTop Universities" },
  { icon: "🎤", title: "State-of-the-Art\nAuditorium" },
  { icon: "🎉", title: "Funful Events\n& Ceremony" },
  { icon: "🌍", title: "Recognized by\nGlobal Bodies" },
  { icon: "💼", title: "Career Placement\nOpportunities" },
];

const About = () => {
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
        className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden flex items-center justify-center"
        style={{ ["--mx"]: 0.5, ["--my"]: 0.5 }}
      >
        {/* Background */}
        <div
          ref={bgRef}
          className="absolute inset-0 transform-gpu will-change-transform"
          style={{
            transform: `translate3d(${tx * 0.55}px, ${
              ty * 0.55
            }px, 0) scale(1.03)`,
            transition: "transform 220ms cubic-bezier(.2,.9,.25,1)",
          }}
        >
          <img
            src={RIAHS}
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
      {/* About Us Header */}
      <div className="container mx-auto w-[90%] md:w-[80%] lg:w-[70%] bg-blue-950 rounded-xl py-3 mt-10 shadow-lg hover:shadow-2xl active:shadow-2xl hover:scale-105 active:scale-105 transition-transform-all duration-200 lg:duration-500">
        <h2 className="text-center text-white text-3xl font-semibold">
          About Us
        </h2>
      </div>

      {/* About Us Content */}
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto px-6 py-6 space-y-6 text-gray-700 text-[15px] md:text-[20px] leading-normal">
        <p className="bg-blue-100 hover:bg-blue-300 active:bg-blue-300 p-2 rounded-lg shadow-lg hover:shadow-2xl active:shadow-2xl hover:scale-105 active:scale-105 transition-transform-all duration-200 lg:duration-500">
          <span className="font-semibold">'Bodla Educational Complex'</span>{" "}
          running under the supervision of Pro. Dr. M Afzal Bodla with four
          registered institutions while providing quality education. 'Largest
          educational Complex in Mian Channu'. Our mission is to achieve the
          highest standards in providing education and health services to the
          public by promoting their educational and health safety and aims for a
          diverse population of students of this region to compete and succeed
          in a real world.
        </p>

        <p className="bg-blue-100 hover:bg-blue-300 active:bg-blue-300 p-2 rounded-lg shadow-lg hover:shadow-2xl active:shadow-2xl hover:scale-105 active:scale-105 transition-transform-all duration-200 lg:duration-500">
          <span className="font-semibold">
            'Regional Institute of Allied Health Sciences and Higher Education'
          </span>{" "}
          is a part of Bodla educational complex. To keep our standards of
          education we are moving step by step for better future. New building
          of institute along with training hospital is proposed to be completed
          in 2 years time. IN SHA ALLAH
        </p>

        <p className="bg-blue-100 hover:bg-blue-300 active:bg-blue-300 p-2 rounded-lg shadow-lg hover:shadow-2xl active:shadow-2xl hover:scale-105 active:scale-105 transition-transform-all duration-200 lg:duration-500">
          <span className="font-semibold">'PGC Mian Channu'</span> is an also
          part of 'Bodla Educational Complex' running under the supervision of
          Ms Aliya Afzal! Punjab College Mian Channu is the best college in Mian
          Channu. It is the one of the best educational institutions in the
          region. As a group we are committed to continuously strive for
          excellence while expanding in the remote areas for the purpose of
          educational development which can contribute in the growth of society.
        </p>

        <p className="bg-blue-100 hover:bg-blue-300 active:bg-blue-300 p-2 rounded-lg shadow-lg hover:shadow-2xl active:shadow-2xl hover:scale-105 active:scale-105 transition-transform-all duration-200 lg:duration-500">
          <span className="font-semibold">'Bodla Eye Care'</span> is founded by
          "Prof. Dr. M Afzal Bodla" who wanted to provide patients with a
          one-stop, specialist service for the diagnosis and treatment of all
          eye conditions. Bodla Eye Care team are leaders in their field and
          offer a consultant-only service to all patients requiring eye care or
          surgery. Every consultant is qualified to treat common eye conditions
          but each one also has a particular area of interest, ensuring that
          patients get the best possible outcome, no matter what the diagnosis.
        </p>

        <p className="bg-blue-100 hover:bg-blue-300 active:bg-blue-300 p-2 rounded-lg shadow-lg hover:shadow-2xl active:shadow-2xl hover:scale-105 active:scale-105 transition-transform-all duration-200 lg:duration-500">
          <span className="font-semibold">'Nexskill'</span> is one of the best
          digital skills training institute in Pakistan. It is also a part of
          Bodla Educational Complex. Nexskill offers practical, industry-focused
          IT and digital skills training, combining real-world skills with
          expert guidance to help you succeed in today's job market. With
          experienced mentors, hands-on learning, and job placement support,
          it's ideal for advancing your career.
        </p>
      </div>

      {/* M & V Header */}
      <div className="container mx-auto w-[90%] md:w-[80%] lg:w-[70%] bg-blue-950 rounded-xl py-3 mt-10 shadow-lg hover:shadow-2xl active:shadow-2xl hover:scale-105 active:scale-105 transition-transform-all duration-200 lg:duration-500">
        <h2 className="text-center text-white text-3xl font-semibold">
          Mission & Vision
        </h2>
      </div>

      {/* M & V Content */}
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto px-6 py-6 space-y-6 text-gray-700 text-[15px] md:text-[20px] leading-normal">
        <p className="bg-blue-100 hover:bg-blue-300 active:bg-blue-300 p-2 rounded-lg shadow-lg hover:shadow-2xl active:shadow-2xl hover:scale-105 active:scale-105 transition-transform-all duration-200 lg:duration-500">
          <span className="font-semibold">'Our mission'</span> is to achieve the
          highest standards in providing education and health services to the
          public by promoting their educational and health safety and aims for a
          diverse population of students of this region to compete and succeed
          in a real world.
        </p>

        <p className="bg-blue-100 hover:bg-blue-300 active:bg-blue-300 p-2 rounded-lg shadow-lg hover:shadow-2xl active:shadow-2xl hover:scale-105 active:scale-105 transition-transform-all duration-200 lg:duration-500">
          <span className="font-semibold">'Our vision'</span> is to become a
          leading educational and health service provider in the region by
          providing quality education and healthcare services to the public.
        </p>
      </div>

      {/* Affiliation Header */}
      <div className="container mx-auto w-[90%] md:w-[80%] lg:w-[70%] bg-blue-950 rounded-xl py-3 mt-10 shadow-lg hover:shadow-2xl active:shadow-2xl hover:scale-105 active:scale-105 transition-transform-all duration-200 lg:duration-500">
        <h2 className="text-center text-white text-3xl font-semibold">
          Our Affiliations
        </h2>
      </div>

      {/* Affiliation Content */}
      <div className="w-[90%] md:w-[80%] lg:w-[70%] text-center mx-auto px-6 py-6 space-y-6 text-gray-700 text-[15px] md:text-[20px] leading-normal">
        <p className="bg-blue-100 hover:bg-blue-300 active:bg-blue-300 font-semibold p-2 rounded-lg shadow-lg hover:shadow-2xl active:shadow-2xl hover:scale-105 active:scale-105 transition-transform-all duration-200 lg:duration-500">
          We are proudly affiliated with the following Pakistan's best universities:
          <br />
          <ul className="max-w-7xl mx-auto flex flex-wrap justify-evenly gap-10 p-10 text-2xl md:text-3xl text-blue-900">
            <li>University of <br />Central Punjab</li>
            <li>Bahauddin Zakariya <br />University</li>
            <li>Islamia University <br /> of Bahawalpur</li>
          </ul>
        </p>
      </div>

      {/* Choose Header */}
      <div className="container mx-auto w-[90%] md:w-[80%] lg:w-[70%] bg-blue-950 rounded-xl py-3 mt-10 shadow-lg hover:shadow-2xl active:shadow-2xl hover:scale-105 active:scale-105 transition-transform-all duration-200 lg:duration-500">
        <h2 className="text-center text-white text-3xl font-semibold">
          Why Choose Us?
        </h2>
      </div>

      {/* Choose Content */}
      <div className="w-[80%] md:w-full mx-auto px-4 py-10">
      <div className="max-w-6xl mx-auto grid gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4"
      >
        {features.map((item, index) => (
          <div
            key={index}
            className="about-glowing-border flex flex-col items-center justify-center
              text-center min-h-[200px]
              rounded-2xl border-6 border-[#8E44AD]
              shadow-[0_8px_20px_rgba(0,0,0,0.15)]
              px-6 py-6 p-2 hover:shadow-2xl active:shadow-2xl hover:scale-110 active:scale-110 transition-transform-all duration-200 lg:duration-500"
          >
            <span className="text-3xl mb-4">{item.icon}</span>

            <p className="text-[#69188d] text-2xl font-bold leading-snug whitespace-pre-line pb-4">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Logos */}
    <InstitutesLogos />
    </section>
  );
};

export default About;
