import React, { useEffect, useRef, useState } from "react";
import { FaGraduationCap, FaUser } from "react-icons/fa";

export default function Achievements() {
  const studentsTarget = 1600;
  const alumniTarget = 800;
  const duration = 1500;

  const [students, setStudents] = useState(0);
  const [alumni, setAlumni] = useState(0);

  const startTimeRef = useRef(null);
  const rafRef = useRef(null);

  // Respect user's reduced-motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      setStudents(studentsTarget);
      setAlumni(alumniTarget);
      return;
    }

    function step(timestamp) {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);

      // ease-out cubic for a smoother finish
      const eased = 1 - Math.pow(1 - progress, 3);

      setStudents(Math.floor(eased * studentsTarget));
      setAlumni(Math.floor(eased * alumniTarget));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // ensure final values
        setStudents(studentsTarget);
        setAlumni(alumniTarget);
      }
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section aria-labelledby="achievements-heading">
      <div className="w-full mt-5 py-12 max-w-6xl mx-auto px-6 bg-[#ffcb30] rounded-3xl">
        <h2 id="achievements-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">
          OUR ACHIEVEMENTS
        </h2>
        <p className="text-center text-gray-700 mb-8">When you talk about our achievements “Sky is the limit”</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center">
          <div className="flex flex-col items-center p-6 bg-white/60 rounded-2xl shadow-md">
          <FaUser className="text-7xl py-3" />
            <div className="text-5xl md:text-6xl font-bold text-gray-900 leading-none">
              {students.toLocaleString()}+
            </div>
            <div className="mt-2 text-lg font-medium text-gray-700">Students</div>
          </div>

          <div className="flex flex-col items-center p-6 bg-white/60 rounded-2xl shadow-md">
          <FaGraduationCap className="text-7xl py-3" />
            <div className="text-5xl md:text-6xl font-bold text-gray-900 leading-none">
              {alumni.toLocaleString()}+
            </div>
            <div className="mt-2 text-lg font-medium text-gray-700">Alumni</div>
          </div>
        </div>
      </div>
    </section>
  );
}
