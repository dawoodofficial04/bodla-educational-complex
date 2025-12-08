import React from "react";
import { RiMailFill } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-[#E42127] text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-4 py-1 space-y-2 md:space-y-0">
        <div className="flex items-center">
          <a
            href="mailto:becomplex11%40gmail.com?subject=&body="
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-200 hover:text-gray-300 flex items-center"
          >
            <RiMailFill className="h-5 w-5 inline-block mr-2" />
            becomplex11@gmail.com
          </a>
        </div>
        <div className="text-sm text-center flex-1">
          <span className="text-yellow-200">
            <span className="text-yellow-300 font-bold">
              BODLA EDUCATIONAL COMPLEX
            </span>{" "}
            - The Name of Trust!
          </span>
        </div>
        <div className="text-sm flex flex-col">
          <a
            href="https://wa.link/0ipvm7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-200 hover:text-gray-300"
          >
            <span className="text-yellow-300 font-bold">RIAHS</span> +92 301
            9613810
          </a>
          <a
            href="https://wa.link/nsxsb6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-200 hover:text-gray-300"
          >
            <span className="text-yellow-300 font-bold">PGC</span> +92 329
            4715701
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
