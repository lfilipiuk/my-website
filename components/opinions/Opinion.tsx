type OpinionProps = {
  opinion: {
    firstPart: string;
    secondPart: string;
    thirdPart: string;
  };
};

const Opinion = ({ opinion }: OpinionProps) => {
  return (
    <div
      style={{
        boxShadow:
          "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.05)",
      }}
      className={
        "mt-3 mb-6 leading-7 bg-feather bg-opacity-5 p-10 rounded-lg flex items-center flex-col"
      }
    >
      <p className={"text-center"}>
        “{opinion.firstPart}{" "}
        <span className={"font-bold"}>{opinion.secondPart}</span>{" "}
        {opinion.thirdPart}“
      </p>
      <hr className="h-px w-10 my-8 bg-feather border-0 opacity-20" />
      <p className={"text-feather opacity-50 font-medium"}>Course student</p>
    </div>
  );
};

export default Opinion;
