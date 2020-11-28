import React from "react";
import timeline from "../data/timeline.json";

function VerticalTimeline() {
  return (
    <div className="relative m-8">
      <div className="border-r-2 border-gray-500 absolute h-full top-0"></div>
      <ul className="list-none m-0 p-0">
        {timeline.map((current, index) => (
          <li className="mb-10" key={index}>
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8 text-xl text-center">
                <p className={`fa ${current.icon} text-white relative`}></p>
              </div>
              <div className="ml-4 font-bold">{`${current.title}`} </div>
              <div className="ml-4 mt-1 text-xs font-mono text-gray-600">
                {`${current.date}`}{" "}
              </div>
            </div>
            <div className="ml-12">{current.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VerticalTimeline;
