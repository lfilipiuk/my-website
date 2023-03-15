import Image from "next/image";
import PortfolioItemWrapper from "./PortfolioItemWrapper";
import PortfolioLogo from "./PortfolioLogo";
import PortfolioDesktopLink from "./PortfolioDesktopLink";

import hexhuntermockup from "../../public/portfolio/hexhunter-mockup.png";
import hexhunterLogo from "../../public/portfolio/hexlogo.svg";

import quizquestLogo from "../../public/portfolio/quizquest-logo.png";
import quizquestmockup from "../../public/portfolio/quizquest-mockup.png";

import mealmasterLogo from "../../public/portfolio/mealmaster-logo.png";
import mealmastermockup from "../../public/portfolio/mealmaster-mockup.png";

const Portfolio = () => {
  return (
    <>
      <PortfolioItemWrapper backgroundColor={"bg-[#CDE5CD]"}>
        <div
          className={
            "absolute sm:p-10 p-5 z-10 flex flex-col sm:justify-between justify-start w-full h-full"
          }
        >
          <PortfolioLogo image={mealmasterLogo} />

          <div className={"block"}>
            <p
              className={
                "w-80 text-sm my-3 leading-6 text-black divide-y lg:w-80 sm:w-64 w-fit"
              }
            >
              Say hello to effortless meal planning. Mealmaster is an intuitive
              tool to help you plan meals and come up with new recipes with help
              of AI chef!
            </p>

            <hr className="h-px w-36 my-8 bg-black border-0 opacity-50" />

            <div className={"gap-4 flex"}>
              <PortfolioDesktopLink
                github
                link={"https://github.com/lfilipiuk/mealmaster"}
                color={"text-black"}
              />

              <PortfolioDesktopLink
                website
                link={"https://mealmaster.lukaszfilipiuk.com/"}
                color={"text-black"}
              />
            </div>
          </div>
        </div>

        <Image
          className={
            "block absolute lg:left-[30%] lg:top-[-25%] lg:scale-[65%] lg:group-hover:scale-[70%] sm:top-0 sm:left-[45%] sm:scale-[80%] sm:group-hover:scale-[85%] top-[55%] scale-[90%] transition duration-300 ease-in-out"
          }
          src={mealmastermockup}
          alt={"mealmaster mockup"}
          style={{
            objectFit: "fill",
            pointerEvents: "none",
          }}
        />
      </PortfolioItemWrapper>

      <PortfolioItemWrapper backgroundColor={"bg-[#2F3339]"}>
        <div
          className={
            "absolute sm:p-10 p-5 z-10 flex flex-col sm:justify-between justify-start w-full h-full"
          }
        >
          <PortfolioLogo image={hexhunterLogo} />

          <div className={"block"}>
            <p
              className={
                "w-80 text-sm my-3 leading-6 text-feather divide-y lg:w-80 sm:w-64 w-fit"
              }
            >
              A fun and simple color guessing game for all. Optimized for
              desktop and mobile, challenge yourself to guess hex codes of
              popular design colors. Give it a try today!
            </p>

            <hr className="h-px w-36 my-8 bg-feather border-0 opacity-50" />

            <div className={"gap-4 flex"}>
              <PortfolioDesktopLink
                github
                link={"https://github.com/lfilipiuk/hexhunter"}
              />

              <PortfolioDesktopLink
                website
                link={"https://hexhunter.lukaszfilipiuk.com/"}
              />
            </div>
          </div>
        </div>

        <Image
          className={
            "block absolute lg:left-[25%] lg:top-[-75%] sm:left-[30%] sm:top-[-15%] sm:scale-75 sm:group-hover:scale-[80%] left-[10%] bottom-[-10%] scale-[140%] transition duration-300 ease-in-out"
          }
          src={hexhuntermockup}
          alt={"Hexhunter mockup"}
          style={{
            objectFit: "fill",
            pointerEvents: "none",
          }}
        />
      </PortfolioItemWrapper>

      <PortfolioItemWrapper backgroundColor={"bg-[#C9DCE9]"}>
        <div
          className={
            "absolute sm:p-10 p-5 z-10 flex flex-col sm:justify-between justify-start w-full h-full"
          }
        >
          <PortfolioLogo image={quizquestLogo} />

          <div className={"block"}>
            <p
              className={
                "w-80 text-sm my-3 leading-6 text-black divide-y lg:w-80 sm:w-64 w-fit"
              }
            >
              The ultimate flashcard app for developers! With quizquest, you can
              enhance your coding knowledge and test your skills in a fun and
              engaging way.
            </p>

            <hr className="h-px w-36 my-8 bg-black border-0 opacity-50" />

            <div className={"gap-4 flex"}>
              <PortfolioDesktopLink
                github
                link={"https://github.com/lfilipiuk/hexhunter"}
                color={"text-black"}
              />

              <PortfolioDesktopLink
                website
                link={"https://quizquest.lukaszfilipiuk.com/"}
                color={"text-black"}
              />
            </div>
          </div>
        </div>

        <Image
          className={
            "block absolute lg:left-[30%] lg:top-[-35%] lg:scale-50 lg:group-hover:scale-[55%] sm:top-0 sm:left-[45%] sm:scale-75 sm:group-hover:scale-[80%] top-[55%] scale-[80%] transition duration-300 ease-in-out"
          }
          src={quizquestmockup}
          alt={"quizquest mockup"}
          style={{
            objectFit: "fill",
            pointerEvents: "none",
          }}
        />
      </PortfolioItemWrapper>
    </>
  );
};

export default Portfolio;
