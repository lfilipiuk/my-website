import Head from "next/head";
import Image from "next/image";
import Section from "../components/ui/Section";
import Title from "../components/ui/Title";
import Timeline from "../components/ui/Timeline";
import Portfolio from "../components/portfolio/Portfolio";

import lukasz from "../public/avatar-lukasz.png";

import ImageSlider from "../components/carousel/ImageSlider";
import Opinion from "../components/opinions/Opinion";
import SocialIcons from "../components/social/SocialIcons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lukasz Filipiuk</title>
        <meta name="description" content="Lukasz Filipiuk" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <main className={"font-mona my-32 px-5 md:px-0 text-feather"}>
        <Section>
          <header
            className={
              "flex sm:flex-row sm:gap-0 gap-4 flex-col sm:items-center  sm:justify-between"
            }
          >
            <div className={"flex"}>
              <div
                className={
                  "bg-gradient-to-b from-teal-500 rounded-full w-16 h-16 relative overflow-hidden shrink-0"
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
                <p
                  className={
                    "text-feather font-newsreader font-medium text-2xl"
                  }
                >
                  Łukasz Filipiuk
                </p>
                <p className={"text-xl opacity-70"}>
                  Fullstack Software Developer and Educator
                </p>
              </div>
            </div>

            <SocialIcons />
          </header>
        </Section>

        <Section>
          <Title name={"about me"} />
          <p className={"leading-7"}>
            Ambitious and creative Full Stack Developer and educator with solid
            work ethics, good communication skills and experience in modern web
            development technologies. Passionate about learning new skills and
            building innovative solutions. Skilled in React, React Native,
            TypeScript, Django and other full stack technologies.
          </p>
        </Section>

        <Section>
          <Title name={"i taught at"} />
          <div className={"relative w-full overflow-hidden"}>
            <div
              className={
                "bg-gradient-to-r from-transparent to-[#0A0A0F] h-28 absolute w-1/3 right-0 z-10"
              }
            />
            <div
              className={
                "bg-gradient-to-l from-transparent to-[#0A0A0F] h-28 absolute w-1/3 left-0 z-10"
              }
            />
            <ImageSlider />
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

          <Opinion
            opinion={{
              firstPart: "I am once again very impressed with the",
              secondPart: "knowledge and preparation",
              thirdPart:
                "as well as the PASSION with which the Leaders convey this knowledge to the Participants",
            }}
          />

          <Opinion
            opinion={{
              firstPart: "The teacher was very well-prepared,",
              secondPart: "presented the discussed tools in an accessible",
              thirdPart: `way and helped course participants in the event of problems with taking the "step by step" approach.`,
            }}
          />

          <Opinion
            opinion={{
              firstPart:
                "Lukasz has good contact with the course participants, he explains the material very well, he can answer any question and",
              secondPart: "keep the participants active",
              thirdPart: "despite the long training day.",
            }}
          />
        </Section>

        <Section>
          <div
            className={
              "flex sm:flex-row flex-col justify-between sm:items-center items-start gap-2"
            }
          >
            <p>Thanks for taking the time to get to know me!</p>
            <SocialIcons />
          </div>
        </Section>
      </main>
    </div>
  );
}
