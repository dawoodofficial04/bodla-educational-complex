import { useEffect, useState } from "react";
import PGCImage from "../../assets/pgc.jpg";
import PGCAchievement from "../../assets/pgc-achievements.jpg";
import "./intro-section.css";

const IntroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMediumUp, setIsMediumUp] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumUp(window.innerWidth >= 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Scroll animation only when screen >= md
  useEffect(() => {
    if (!isMediumUp) {
      setScrollProgress(0); // remove effect on small screens
      return;
    }

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 300, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMediumUp]);

  const leftTransform = isMediumUp
    ? `translateX(${scrollProgress * 35}px)`
    : "none";
  const rightTransform = isMediumUp
    ? `translateX(-${scrollProgress * 35}px)`
    : "none";

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-25 items-start">
        {/* LEFT SECTION */}
        <div
          className="transition-transform duration-500"
          style={{ transform: leftTransform }}
        >
          {/* FIXED IMAGE SIZE */}
          <div className="w-full h-[280px] md:h-[340px] lg:h-[380px] overflow-hidden rounded-md shadow-md active:shadow-2xl md:hover:shadow-2xl active:scale-105 hover:scale-105 transition-transform-all duration-300">
            <img
              src={PGCImage}
              alt="Campus"
              className="intro-glowing-border w-full h-full object-fit"
            />
          </div>

          <h2 className="text-[#1a2b4c] text-xl md:text-2xl font-semibold mt-4 border-b-[3px] border-[#7E3F9E] inline-block pb-1">
            A project of Pir Sanaullah Bodla Memorial Trust
          </h2>

          <p className="text-gray-600 mt-3 text-sm md:text-[15px] leading-relaxed">
            Bodla Educational Complex- 'Largest educational Complex in Mian
            Channu' - Our mission is to achieve the highest standards in
            providing education and health services to the public by promoting
            their educational and health safety and aims for a diverse
            population of students of this region to compete and succeed in a
            real world.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div
          className="transition-transform duration-500"
          style={{ transform: rightTransform }}
        >
          {/* FIXED IMAGE SIZE (MATCHES LEFT) */}
          <div className="w-full h-[280px] md:h-[340px] lg:h-[380px] overflow-hidden rounded-md shadow-md active:shadow-2xl md:hover:shadow-2xl active:scale-105 hover:scale-105 transition-transform-all duration-300">
            <img
              src={PGCAchievement}
              alt="Achievement"
              className="intro-glowing-border w-full h-full object-fit"
            />
          </div>

          <h2 className="text-[#1a2b4c] text-xl md:text-2xl font-semibold mt-4 border-b-[3px] border-[#7E3F9E] inline-block pb-1">
            Achievements
          </h2>

          <p className="text-gray-600 mt-3 text-sm md:text-[15px] leading-relaxed">
            At Punjab Group of Colleges Mian Channu, we take pride in our
            consistent academic excellence. Our students have secured top board
            positions in BISE Multan from 2017 to 2025, proving our commitment
            to quality education and hard work.These achievements reflect our
            dedication, our strong learning environment, and the success that
            continues to inspire us every year.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
