import React from "react";
import TimelineItem from "./timelineitem";

const NewTimeline = () => {
  return (
    <div className="flex flex-col mx-auto text-gray-100 pt-9">
      <TimelineItem
        title={"Freelance Software Developer"}
        duration={"Now"}
        description={
          "As a freelance software developer, I bring my expertise in frontend development to a variety of projects. With my attention to detail and creative, outside-the-box thinking, I work to deliver high-quality solutions for my clients. My passion for learning and giving back drives me to continuously improve my skills and knowledge, ensuring that I am always up to date with the latest technologies and trends in the industry. Whether working on a new project or collaborating with a team, I approach every task with a dedication to excellence and a commitment to delivering the best possible outcomes."
        }
        highlighted={true}
      />

      <TimelineItem
        title={"Teacher/Mentor and LabMasters and postgraduate studies at UW"}
        duration={"2015 -> Now"}
        description={
          "As a teacher at LabMasters and postgraduate studies, I bring a passion for learning and a wealth of knowledge to the classroom. With a background in software development, I am able to provide hands-on, practical instruction to my students, helping them develop the skills they need to succeed in their careers. My ability to design and create high-quality course materials, as well as my experience in presenting in front of clients and partners, makes me a valuable asset to the students I teach. My dedication to growth and improvement, not only for myself but also for those around me, is evident in my commitment to mentoring students and guiding them through their end-of-the-year projects. With over five years of experience as an instructor, I have had the opportunity to teach a diverse range of topics and have impacted the lives of over 500 people."
        }
      />

      <TimelineItem
        title={"Goldman Sachs"}
        duration={"2016 -> 2020"}
        description={
          "At Goldman Sachs, I served as a backend developer, responsible for the development of core components supporting authentication and authorization for the bank globally. I was instrumental in the development of the PingFederate platform for single sign-on and was responsible for the design, planning, integration, unit testing, production rollout, and maintenance of MVC applications. As the product owner for SecurID, I designed a new cluster and successfully performed a production release during the COVID-19 pandemic without any downtime or impact on clients. I represented releases on global calls, coordinated with multiple teams, and obtained sign-offs from partners and CTO. Additionally, I was the product owner for FreeRADIUS and was responsible for maintaining and developing the FreeRADIUS cluster used for network device and user authentication within the company. I also frequently presented in demos for clients and partners, and had experience managing and resolving high severity incidents."
        }
        last={true}
      />
    </div>
  );
};

export default NewTimeline;
