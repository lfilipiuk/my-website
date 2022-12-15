import React from "react";
import TimelineItem from "./timelineitem";

const NewTimeline = () => {
  return (
    <div className="flex flex-col mx-auto text-gray-100 pt-9">
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
        duration={"2015 -> 2020"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }
      />

      <TimelineItem
        title={"Item 3"}
        duration={"2010 -> 2015"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }
        last={true}
      />
    </div>
  );
};

export default NewTimeline;
