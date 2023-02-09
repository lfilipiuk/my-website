import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
}

const PortfolioWrapper: FC<Props> = ({ image }) => {
  return (
    <Image
      src={image}
      alt={"portfolio logo"}
      height={30}
      className={"mb-3 pointer-events-none invert sm:invert-0 mx-auto sm:mx-0"}
    />
  );
};

export default PortfolioWrapper;
