import Head from "next/head";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Section from "../components/ui/Section";
import Title from "../components/ui/Title";
import Timeline from "../components/ui/Timeline";
import Portfolio from "../components/portfolio/Portfolio";

import lukasz from "../public/avatar-lukasz.png";
import mars from "../public/mars.svg";
import bain from "../public/bain.svg";
import deloitte from "../public/deloitte.svg";
import novo from "../public/novo-nordisk.svg";
import mf from "../public/mf.svg";
import euronet from "../public/euronet.svg";
import portfolio from "../public/portfolio.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lukasz Filipiuk</title>
        <meta name="description" content="Lukasz Filipiuk" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <main className={"bg-gray-900 font-inter my-32 px-5 md:px-0"}>
        <Section>
          <header className={"flex items-center justify-between"}>
            <div className={"flex"}>
              <div
                className={
                  "bg-gradient-to-b from-teal-500 rounded-full w-16 h-16 relative overflow-hidden"
                }
              >
                <Image
                  src={lukasz}
                  alt={"Picture of me"}
                  width={200}
                  height={200}
                />
              </div>
              <div className={"px-4"}>
                <p className={"text-white font-newsreader text-2xl"}>
                  Łukasz Filipiuk
                </p>
                <p className={"text-xl text-gray-500"}>Developer and Teacher</p>
              </div>
            </div>

            <div className={"flex gap-2"}>
              <a
                className={
                  "text-gray-600 hover:text-gray-200 text-4xl transition-all duration-200 ease-in-out"
                }
                href={"https://www.linkedin.com/in/lfilipiuk/"}
              >
                <AiFillLinkedin />
              </a>
              <a
                className={
                  "text-gray-600 hover:text-gray-200 text-4xl transition-all duration-200 ease-in-out"
                }
                href={"https://github.com/lfilipiuk"}
              >
                <AiFillGithub />
              </a>
            </div>
          </header>
        </Section>

        <Section>
          <Title name={"about me"} />
          <p className={"leading-7 text-gray-400"}>
            I am a highly motivated and enthusiastic software developer with
            experience in both backend and frontend development. I have a strong
            passion for learning and continuously improving my skills. I have
            been a mentor and instructor in the past, sharing my knowledge and
            experience with others. I am a quick learner and thrive in
            fast-paced, challenging environments. I am confident that my
            attention to detail, creative problem-solving skills, and ability to
            work well with others will make me a valuable addition to any team.
          </p>
        </Section>

        <Section>
          <Title name={"i taught at"} />

          <div className={"flex flex-wrap gap-2 items-center"}>
            <div className={"flex-auto"}>
              <Image src={euronet} alt={"Euronet Logo"} />
            </div>
            <div className={"flex-auto"}>
              <Image src={bain} alt={"Bain & Company Logo"} />
            </div>
            <div className={"flex-auto"}>
              <Image src={mars} alt={"Mars Logo"} />
            </div>
            <div className={"flex-auto"}>
              <Image src={novo} alt={"Novo Nordisk Logo"} />
            </div>
            <div className={"flex-auto"}>
              <Image src={mf} alt={"Ministry of Finance Logo"} />
            </div>
            <div className={"flex-auto"}>
              <Image src={deloitte} alt={"Deloitte Logo"} />
            </div>
          </div>
        </Section>

        <Section>
          <Title name={"portfolio"} />

          <Portfolio />
        </Section>

        <Section>
          <Title name={"my experience"} />
          <Timeline />
        </Section>

        <Section>
          <Title name={"what others say about me"} />
          <div className={"text-white italic text-gray-400 pb-2 leading-7"}>
            <p>
              “I am once again very impressed with the{" "}
              <span className={"font-bold text-gray-200"}>
                knowledge and preparation
              </span>{" "}
              as well as the PASSION with which the Leaders convey this
              knowledge to the Participants“
            </p>
          </div>
          <div className={"text-white italic text-gray-400 py-3 leading-7"}>
            <p>
              “The teacher was very well-prepared,{" "}
              <span className={"font-bold text-gray-200"}>
                presented the discussed tools in an accessible
              </span>{" "}
              way and helped course participants in the event of problems with
              taking the &quot;step by step&quot; approach.“
            </p>
          </div>
          <div className={"text-white italic text-gray-400 py-3 leading-7"}>
            <p>
              “Łukasz has good contact with the course participants, he explains
              the material very well, he can answer any question and{" "}
              <span className={"font-bold text-gray-200"}>
                keep the participants active
              </span>{" "}
              despite the long training day.“
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
}
