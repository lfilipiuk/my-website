import React from "react";

type Props = {
  title: string;
  duration: string;
  description: string;
  highlighted?: boolean;
};

const TimelineItem = ({
  title,
  duration,
  description,
  highlighted = false,
}: Props) => {
  const dotClasses = highlighted
    ? "w-3 h-3 absolute top-1/2 -mt-1.5 ml-1.5 rounded-full bg-teal-600"
    : "w-2 h-2 absolute top-1/2 -mt-1 ml-2 rounded-full bg-gray-700";

  return (
    <div className="flex flex-row-reverse">
      <div className="col-start-1 col-end-5 p-4 my-4 ml-auto">
        <h4 className="text-sm mb-1 text-gray-500">{duration}</h4>
        <h3 className="text-lg mb-1 text-gray-300">{title}</h3>
        <p className="leading-tight text-justify text-gray-400">
          {description}
        </p>
      </div>

      <div className="col-start-5 col-end-6 relative mr-10">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-0.5 bg-gray-700 pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-700"></div>
        <div className="w-5 h-5 absolute top-1/2 -mt-2.5 ml-0.5 rounded-full bg-gray-900"></div>
        <div className={dotClasses}></div>
      </div>
    </div>
  );
};

export default TimelineItem;
