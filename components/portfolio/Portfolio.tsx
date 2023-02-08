import mealmaster from "../../public/portfolio/mealmaster.png";
import hexhunter from "../../public/portfolio/hexhunter.png";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const portfolioItems = [mealmaster, hexhunter];

  return (
    <div>
      {portfolioItems.map((item) => (
        <PortfolioItem key={item.src} image={item} />
      ))}
    </div>
  );
};

export default Portfolio;
