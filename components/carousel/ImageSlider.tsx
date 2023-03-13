import companies from "../../public/companies/companies1.png";
import Image from "next/image";

const ImageSlider = () => {
  const sectionWidth = companies.width * 2;

  return (
    <div
      style={{ width: sectionWidth }}
      className={`relative h-28 flex items-center overflow-hidden`}
    >
      <div
        style={{ width: sectionWidth }}
        className={`flex infinite-scroll absolute justify-start`}
      >
        <div className={"shrink-0 flex justify-center items-center"}>
          <Image src={companies} alt={"companies i worked at"} />
          <Image src={companies} alt={"companies i worked at"} />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
