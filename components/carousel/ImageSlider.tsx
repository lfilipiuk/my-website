import { companies } from "../../utils/images";
import Image from "next/image";

interface ImageSliderProps {
  images: typeof companies;
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const duplicateImages = [...images, ...images];

  const width = duplicateImages.length * 10;
  const widthString = width.toString() + "rem";

  return (
    <div
      className={
        "relative h-28 lg:w-[200%] w-[300%] flex items-center overflow-hidden"
      }
    >
      <div
        className={
          "lg:w-[200%] w-[300%] flex infinite-scroll absolute lg:justify-around justify-start"
        }
      >
        {duplicateImages.map((image, index) => {
          // @ts-ignore
          return (
            <div
              key={index}
              className="flex justify-center items-center shrink-0"
            >
              <Image src={image.logo} alt={image.name} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
