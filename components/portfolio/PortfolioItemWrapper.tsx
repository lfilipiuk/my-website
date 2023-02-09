import { FC } from "react";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const PortfolioItemWrapper: FC<Props> = ({ children }) => {
  return (
    <div
      className={
        "w-full sm:h-80 h-96 sm:bg-cyan-200 bg-gray-700 rounded-lg overflow-hidden my-5 relative"
      }
    >
      {children}
    </div>
  );
};

export default PortfolioItemWrapper;
