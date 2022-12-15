import Head from "next/head";
import Image from "next/image";
import lukasz from "../public/avatar-lukasz.png";
import mars from "../public/mars.svg";
import bain from "../public/bain.svg";
import deloitte from "../public/deloitte.svg";
import novo from "../public/novo-nordisk.svg";
import mf from "../public/mf.svg";
import euronet from "../public/euronet.svg";
import portfolio from "../public/portfolio.png";
import { AiFillLinkedin } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handlePortfolioClick = () => {
    router.push("/portfolio");
  };

  return (
    <div>
      <Head>
        <title>Lukasz Filipiuk</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={"bg-gray-900 font-inter py-9"}>
        <section className={"max-w-2xl mx-auto"}>
          <header className={"mt-20 flex items-center justify-between"}>
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
              <div className={"px-3"}>
                <p className={"text-white font-newsreader text-2xl"}>
                  Łukasz Filipiuk
                </p>
                <p className={"text-xl text-gray-500"}>Some text goes here</p>
              </div>
            </div>
            <div className={"text-gray-600 hover:text-gray-200 text-4xl"}>
              <a href={"https://www.linkedin.com/in/lfilipiuk/"}>
                <AiFillLinkedin />
              </a>
            </div>
          </header>

          <div className={"py-9"}>
            <h1 className={"font-semibold text-gray-600"}>ABOUT ME</h1>
            <p className={"leading-7 text-gray-100"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris.
            </p>
          </div>
        </section>

        <section className={"max-w-2xl mx-auto py-9"}>
          <div>
            <h1 className={"font-semibold text-gray-600"}>I TAUGHT AT</h1>
          </div>
          <div className={"flex  flex-wrap gap-1 justify-center items-center"}>
            <div className={"flex-auto"}>
              <Image src={bain} alt={"Bain & Company Logo"} />
            </div>
            <div className={"flex-auto"}>
              <Image src={euronet} alt={"Euronet Logo"} />
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
        </section>

        <section className={"max-w-2xl mx-auto py-9"}>
          <div>
            <h1 className={"font-semibold text-gray-600 py-2"}>PORTFOLIO</h1>
          </div>
          <div
            className={
              "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer"
            }
            onClick={handlePortfolioClick}
          >
            <Image
              className={"rounded-lg object-cover"}
              width={700}
              src={portfolio}
              alt={"Portfolio image"}
            />
          </div>
        </section>

        <section className={"max-w-2xl mx-auto py-12"}>
          <div>
            <h1 className={"font-semibold text-gray-600 py-6"}>
              MY EXPERIENCE
            </h1>
          </div>

          <div className={"px-2"}>
            <ol>
              <li className={"border-l-2 border-gray-600"}>
                <div className="flex flex-start items-center">
                  <div className="bg-gray-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                  <h4 className="text-gray-200 font-semibold text-lg -mt-2">
                    Consulting at LabMasters and Exploring fullstack development
                  </h4>
                </div>
                <div className="ml-6 mb-6 pb-6">
                  <p className="text-gray-400 text-gray-600-700 text-sm">Now</p>
                  <p className="text-gray-400 mt-2 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </li>
              <li className={"border-l-2 border-gray-600 -mt-6"}>
                <div className="flex flex-start items-center">
                  <div className="bg-gray-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                  <h4 className="text-gray-200 font-semibold text-lg -mt-2">
                    Developer at Goldman Sachs & Teaching at the University of
                    Warsaw
                  </h4>
                </div>
                <div className="ml-6 mb-6 pb-6">
                  <p className="text-gray-400 text-gray-600-700 text-sm">
                    2000 -{">"} 2010
                  </p>
                  <p className="text-gray-400 mt-2 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </li>

              <li className={"-mt-6"}>
                <div className="flex flex-start items-center">
                  <div className="bg-gray-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                  <h4 className="text-gray-200 font-semibold text-lg -mt-2">
                    Something
                  </h4>
                </div>
                <div className="ml-6 mb-6 pb-6">
                  <p className="text-gray-400 text-gray-600-700 text-sm">
                    1990 -{">"} 2000
                  </p>
                  <p className="text-gray-400 mt-2 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className={"max-w-2xl mx-auto"}>
          <div>
            <h1 className={"font-semibold text-gray-600"}>
              WHAT OTHERS SAY ABOUT ME
            </h1>
          </div>
          <div className={"text-white italic text-gray-400 py-3 leading-7"}>
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
        </section>
      </main>
    </div>
  );
}
