import React from "react";
import "./program-grid.css";

const ProgramGrid = ({ programs }) => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {programs.map((program, index) => (
        <div key={index} className="block">
          <div className="bg-white p-4 rounded-lg">
            <div className=" w-full h-96 mb-4">
              <img
                src={program.images[0].img}
                alt={program.name}
                className="pro-glowing-border h-full w-full object-fit rounded-lg active:shadow-2xl hover:shadow-2xl active:scale-105 hover:scale-105 transition-transform-all duration-300"
              />
            </div>
            <h3 className="text-sm text-blue-950 font-semibold mb-1">{program.name}</h3>
            <p className="text-blue-500 text-sm font-medium tracking-tighter">
              {program.duration}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgramGrid;
