import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

interface PortfolioItemProps {
  image: StaticImageData;
}
const PortfolioItem = ({ image }: PortfolioItemProps) => {
  const router = useRouter();

  const handlePortfolioClick = () => {
    router.push("/portfolio");
  };

  return (
    <div
      className={
        "transition ease-in-out hover:-translate-y-1 hover:shadow-xl duration-200 cursor-pointer pt-2"
      }
      onClick={handlePortfolioClick}
    >
      <Image
        className={"rounded-lg object-cover"}
        width={700}
        height={200}
        src={image}
        alt={"Portfolio image"}
      />
    </div>
  );
};

export default PortfolioItem;
