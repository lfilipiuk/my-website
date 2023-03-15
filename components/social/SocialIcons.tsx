import SocialIcon from "../ui/SocialIcon";

const SocialIcons = () => {
  return (
    <div className={"flex gap-2"}>
      <SocialIcon
        href={"https://www.linkedin.com/in/lfilipiuk/"}
        type={"linkedin"}
      />
      <SocialIcon href={"https://github.com/lfilipiuk"} type={"github"} />
      <a
        className={
          "block py-2 px-3 rounded-full text-white bg-white bg-opacity-[8%] hover:bg-opacity-20 transition-all duration-200 ease-in-out"
        }
        href={"mailto:contact@lukaszfilipiuk.com"}
      >
        Contact me
      </a>
    </div>
  );
};

export default SocialIcons;
