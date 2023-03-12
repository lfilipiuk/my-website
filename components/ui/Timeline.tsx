import React from "react";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <div className="flex flex-col mx-auto pt-9">
      <TimelineItem
        title={"Freelance Software Developer"}
        duration={"Now"}
        description={
          "As a freelancer in the world of software development, I offer my clients expertise in frontend development with an emphasis on creating user-friendly designs. I strive to approach each assignment with humility, taking the time to listen and understand my clients' needs while keeping a sharp focus on the details. My passion for learning and growth motivates me to continually enhance my skills and knowledge, staying up-to-date with the latest technologies and trends in the industry. Whether working solo or as part of a team, I am dedicated to delivering the best possible outcomes and always aim to exceed expectations."
        }
        highlighted={true}
      />

      <TimelineItem
        title={"Teacher/Mentor and LabMasters and postgraduate studies at UW"}
        duration={"2015 -> Now"}
        description={
          "As an instructor at LabMasters and postgraduate studies, I'm excited to share my love for learning and knowledge with my students. My background in software development helps me provide practical, hands-on instruction that prepares my students for success in their careers. I enjoy putting together high-quality course materials and presenting them in a clear, engaging way that resonates with my students and clients. I make it a priority to mentor and guide my students through their end-of-the-year projects. Over the last five years, I've impacted the lives of more than 500 students, and I'm thrilled for the opportunity to keep making a difference."
        }
      />

      <TimelineItem
        title={"Goldman Sachs"}
        duration={"2016 -> 2020"}
        description={
          "During my time at Goldman Sachs, I worked as a backend developer. My primary role was to develop core components to support authentication and authorization for the bank on a global scale. I was responsible for designing, planning, integrating, unit testing, and maintaining MVC applications. As the product owner for SecurID, I designed a new cluster and managed to perform a production release during the COVID-19 pandemic without any impact on clients. I collaborated with multiple teams and obtained sign-offs from partners and CTO to ensure successful releases. I had the opportunity of presenting demos to clients and partners and managing high-severity incidents."
        }
        last={true}
      />
    </div>
  );
};

export default Timeline;
