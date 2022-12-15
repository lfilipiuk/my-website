import React from "react";
import TimelineItem from "./timelineitem";

const NewTimeline = () => {
  return (
    <div className="flex flex-col mx-auto p-2 text-gray-100">
      <TimelineItem
        title={"Item 1"}
        duration={"Now"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }
        highlighted={true}
      />

      <TimelineItem
        title={"Item 2"}
        duration={"Now"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }
      />

      <TimelineItem
        title={"Item 3"}
        duration={"Now"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }
      />
    </div>
  );
};

export default NewTimeline;
