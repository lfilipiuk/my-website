type OpinionProps = {
  opinion: {
    firstPart: string;
    secondPart: string;
    thirdPart: string;
  };
};

const Opinion = ({ opinion }: OpinionProps) => {
  return (
    <div className={"mt-3 mb-6 leading-7"}>
      <p>
        “{opinion.firstPart}{" "}
        <span className={"font-bold"}>{opinion.secondPart}</span>{" "}
        {opinion.thirdPart}“
      </p>
    </div>
  );
};

export default Opinion;
