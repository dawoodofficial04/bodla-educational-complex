import React from "react";

const logos = [
  {
    logo: "src/assets/BodlaEyeCare.png",
  },
  {
    logo: "src/assets/Nexskill.png",
  },
  {
    logo: "src/assets/BodlaEducationalComplex.png",
  },
  {
    logo: "src/assets/PunjabCollege.png",
  },
  {
    logo: "src/assets/RIAHSE.png",
  },
];

const InstitutesLogos = () => {
  return (
    <div className="w-full py-10">
      <div className="flex lg:flex-row flex-col justify-center lg:gap-28 gap-8 items-center">
        
        {logos.map((inst, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={inst.logo}
              className="w-40 h-40 object-contain"
              alt="Institute Logo"
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default InstitutesLogos;
