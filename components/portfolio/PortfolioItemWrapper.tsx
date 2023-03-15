import { FC } from "react";

interface Props {
  children?: JSX.Element | JSX.Element[];
  backgroundColor?: string;
}

const PortfolioItemWrapper: FC<Props> = ({ children, backgroundColor }) => {
  const bgColor = backgroundColor ? backgroundColor : "bg-[#2F3339]";

  return (
    <div
      className={`w-full sm:h-80 h-[30em] ${bgColor} rounded-lg overflow-hidden my-5 relative group`}
    >
      {children}
    </div>
  );
};

export default PortfolioItemWrapper;
