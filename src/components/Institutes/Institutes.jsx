import React from "react";

const institutes = [
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

const Institutes = () => {
  return (
    <div className="w-full py-10">

      <div className="flex lg:flex-row flex-col justify-center lg:gap-28 gap-8 place-items-center">
        {institutes.map((inst, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <img
              src={inst.logo}
              className="w-50 h-50 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Institutes;
