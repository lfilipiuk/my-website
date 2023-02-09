import hexhuntermockup from "../../public/portfolio/hexhuntermockup.png";
import hexhuntermockupMobile from "../../public/portfolio/hexhuntermockup-mobile.png";
import hexhunterLogo from "../../public/portfolio/hexlogo.svg";
import Image from "next/image";
import Link from "next/link";
import PortfolioItemWrapper from "./PortfolioItemWrapper";
import PortfolioLogo from "./PortfolioLogo";
import PortfolioDesktopLink from "./PortfolioDesktopLink";

const Portfolio = () => {
  return (
    <PortfolioItemWrapper>
      <div
        className={"absolute p-10 z-10 flex flex-col justify-between w-full"}
      >
        <PortfolioLogo image={hexhunterLogo} />

        <div className={"hidden sm:block"}>
          <p className={"w-80 text-sm my-3 leading-6 text-gray-700 divide-y"}>
            A fun and simple color guessing game for all. Optimized for desktop
            and mobile, challenge yourself to guess hex codes of popular design
            colors. Give it a try today!
          </p>

          <hr className="h-px w-36 my-8 bg-gray-700 border-0" />

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

      {/*Desktop Image*/}
      <Image
        className={"hidden sm:block"}
        src={hexhuntermockup}
        alt={"Hexhunter mockup"}
        style={{
          position: "absolute",
          left: "25%",
          top: "-30%",
          objectFit: "fill",
          pointerEvents: "none",
        }}
      />

      {/*Mobile Image*/}
      <Image
        className={"sm:hidden"}
        width={350}
        src={hexhuntermockupMobile}
        alt={"Hexhunter mockup"}
        style={{
          position: "absolute",
          left: "50%",
          bottom: "15%",
          transform: "translateX(-50%)",
          objectFit: "fill",
          pointerEvents: "none",
        }}
      />

      <Link href={"https://hexhunter.lukaszfilipiuk.com/"}>
        <p
          className={
            "sm:hidden bottom-0 absolute h-16 w-full bg-gray-900 bg-opacity-70 flex items-center justify-center font-bold text-white"
          }
        >
          Visit website
        </p>
      </Link>
    </PortfolioItemWrapper>
  );
};

export default Portfolio;
