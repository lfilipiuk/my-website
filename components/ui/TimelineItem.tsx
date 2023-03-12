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
    : "w-2 h-2 absolute top-1 mt-2.5 ml-2 rounded-full bg-feather-dark";

  const lastLineClasses = last
    ? "w-6 flex justify-center"
    : "h-full w-6 flex justify-center";

  const lastLineMargin = last ? "-mt-5 -ml-4" : "  -mt-5 -ml-4 my-16";

  return (
    <div className="flex flex-row-reverse">
      <div className={lastLineMargin}>
        <h4 className="text-sm mb-0.5">{duration}</h4>
        <h3 className="text-lg leading-8">{title}</h3>
        <p className="leading-7 opacity-80">{description}</p>
      </div>

      <div className="relative mr-10">
        <div className={lastLineClasses}>
          <div className="h-full mt-2 w-0.5 bg-feather-dark"></div>
        </div>
        <div className="w-6 h-6 absolute top-1 mt-0.5 rounded-full bg-feather-dark"></div>
        <div className="w-5 h-5 absolute top-1 mt-1 ml-0.5 rounded-full bg-[#0A0A0F]"></div>
        <div className={dotClasses}></div>
      </div>
    </div>
  );
};

export default TimelineItem;
