import React from "react";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <div className="flex flex-col mx-auto pt-9">
      <TimelineItem
        title={"Software Developer at Playdate"}
        duration={"2023 → Now"}
        description={
          "I am full-stack developer responsible for building and maintaining the Playdate mobile application. I work with React Native, Redux and Node.js"
        }
        highlighted={true}
      />

      <TimelineItem
        title={"Teacher/Mentor and LabMasters and postgraduate studies at UW"}
        duration={"2015 → Now"}
        description={
          "As an instructor with a background in software development, I love sharing my knowledge and helping students prepare for success. With over 5 years of experience and 500+ students impacted, I prioritize hands-on instruction and mentoring to guide my students through their projects."
        }
      />

      <TimelineItem
        title={"Goldman Sachs"}
        duration={"2016 → 2020"}
        description={
          "At Goldman Sachs, I was a backend developer responsible for global authentication and authorization components. I designed, integrated, unit tested, and maintained MVC apps, and as product owner for SecurID, I successfully managed a pandemic-era release without impacting clients. I collaborated with teams, obtained sign-offs from partners and CTO, presented demos, and managed high-severity incidents."
        }
        last={true}
      />
    </div>
  );
};

export default Timeline;
