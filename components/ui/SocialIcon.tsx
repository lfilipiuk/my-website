import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

type SocialIconProps = {
  href: string;
  type: string;
};

const SocialIcon = ({ href, type }: SocialIconProps) => {
  return (
    <a
      className={
        "opacity-40 hover:opacity-100 text-4xl transition-all duration-200 ease-in-out"
      }
      href={href}
    >
      {type === "github" && <AiFillGithub />}
      {type === "linkedin" && <AiFillLinkedin />}
    </a>
  );
};

export default SocialIcon;
