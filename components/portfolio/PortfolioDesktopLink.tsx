import { FC } from "react";
import Link from "next/link";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";

interface Props {
  link: string;
  github?: boolean;
  website?: boolean;
  custom?: {
    icon: JSX.Element;
    text: string;
  };
}

const PortfolioDesktopLink: FC<Props> = ({ link, github, website, custom }) => {
  let icon;
  let text;
  if (github) {
    icon = <AiFillGithub />;
    text = "Github";
  } else if (website) {
    icon = <AiOutlineGlobal />;
    text = "Visit website";
  } else if (custom) {
    icon = custom.icon;
    text = custom.text;
  }

  return (
    <Link
      className={
        "flex items-center justify-center gap-1 font-semibold text-sm text-gray-700"
      }
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      {icon}
      <h3 className={"hover:underline"}>{text}</h3>
    </Link>
  );
};

export default PortfolioDesktopLink;
