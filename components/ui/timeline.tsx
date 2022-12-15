import React from "react";

const Timeline = () => {
  return (
    <div className={"px-2 pt-4"}>
      <ol>
        <li className={"border-l-2 border-gray-600"}>
          <div className="flex flex-start items-center">
            <div className="bg-gray-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2.5 mr-3 -mt-2"></div>
            <h4 className="text-gray-200 font-semibold text-lg -mt-2 ml-1">
              Consulting at LabMasters and Exploring fullstack development
            </h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <p className="text-gray-400 text-gray-600-700 text-sm">Now</p>
            <p className="text-gray-400 mt-2 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </li>
        <li className={"border-l-2 border-gray-600 -mt-6"}>
          <div className="flex flex-start items-center">
            <div className="bg-gray-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <h4 className="text-gray-200 font-semibold text-lg -mt-2 ml-1">
              Developer at Goldman Sachs & Teaching at the University of Warsaw
            </h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <p className="text-gray-400 text-gray-600-700 text-sm">
              2000 -{">"} 2010
            </p>
            <p className="text-gray-400 mt-2 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </li>

        <li className={"-mt-6"}>
          <div className="flex flex-start items-center">
            <div className="bg-gray-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <h4 className="text-gray-200 font-semibold text-lg -mt-2 ml-1">
              Something
            </h4>
          </div>
          <div className="ml-6">
            <p className="text-gray-400 text-gray-600-700 text-sm">
              1990 -{">"} 2000
            </p>
            <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Timeline;
