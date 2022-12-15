import React from "react";

type Props = {
  title: string;
  duration: string;
  description: string;
  highlighted?: boolean;
  last?: boolean;
};

const TimelineItem = ({
  title,
  duration,
  description,
  highlighted = false,
  last = false,
}: Props) => {
  const dotClasses = highlighted
    ? "w-3 h-3 absolute top-1 mt-2 ml-1.5 rounded-full bg-teal-600"
    : "w-2 h-2 absolute top-1 mt-2.5 ml-2 rounded-full bg-gray-700";

  const lastLineClasses = last
    ? "w-6 flex justify-center"
    : "h-full w-6 flex justify-center";

  const lastLineMargin = last ? "-mt-5 -ml-4" : "-mt-5 -ml-4 my-16";

  return (
    <div className="flex flex-row-reverse">
      <div className={lastLineMargin}>
        <h4 className="text-sm mb-0.5 text-gray-500">{duration}</h4>
        <h3 className="text-lg mb-1 text-gray-300">{title}</h3>
        <p className="leading-tight text-justify text-gray-400">
          {description}
        </p>
      </div>

      <div className="relative mr-10">
        <div className={lastLineClasses}>
          <div className="h-full mt-2 w-0.5 bg-gray-700"></div>
        </div>
        <div className="w-6 h-6 absolute top-1 mt-0.5 rounded-full bg-gray-700"></div>
        <div className="w-5 h-5 absolute top-1 mt-1 ml-0.5 rounded-full bg-gray-900"></div>
        <div className={dotClasses}></div>
      </div>
    </div>
  );
};

export default TimelineItem;
