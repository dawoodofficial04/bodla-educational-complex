import React from "react";
import CoreImage from "../../assets/Core-Values.jpg";
import { FaGem } from "react-icons/fa";

const CoreValues = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Heading */}
<h4 className="flex items-center gap-4 text-2xl text-[#8A5DA1] md:text-3xl font-semibold mb-4">
  {/* Left Line */}
  <div className="grow border-3 rounded-xl border-t border-[#7E3F9E]"></div>

  {/* Text */}
  <span className="flex items-center gap-2 text-2xl md:text-4xl whitespace-nowrap">
    <FaGem />
    Our Core Values
  </span>

  {/* Right Line */}
  <div className="grow border-3 rounded-xl border-t border-[#7E3F9E]"></div>
</h4>


      {/* Paragraph */}
      <p className="text-gray-600 leading-relaxed text-lg max-w-6xl mx-auto mb-8">
        The MBBS curriculum of Aziz Fatimah Medical and Dental College is designed
        and defined according to the PM&DC guidelines This Curriculum highlights
        outcomes and competencies expected out of medical graduate and is based
        on best evidence in medical education. These graduates should be competent
        to apply evidence based medicine to health promotion, disease prevention,
        curative and rehabilitative care, using the bio-psycho-social model
      </p>

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={CoreImage}
          alt="Core Values"
          className="w-full max-w-5xl "
        />
      </div>
    </div>
  );
};

export default CoreValues;
