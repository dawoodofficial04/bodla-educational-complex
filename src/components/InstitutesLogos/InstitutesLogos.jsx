import BodlaEyeCare from "../../assets/BodlaEyeCare.png";
import Nexskill from "../../assets/Nexskill.png";
import BodlaEducationalComplex from "../../assets/BodlaEducationalComplex.png";
import PunjabCollege from "../../assets/PunjabCollege.png";
import RIAHSE from "../../assets/RIAHSE.png";

const logos = [
  { logo: BodlaEyeCare },
  { logo: Nexskill },
  { logo: BodlaEducationalComplex },
  { logo: PunjabCollege },
  { logo: RIAHSE },
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