import React from "react";

type Props = {
  name: string;
};

const Title = ({ name }: Props) => {
  const formattedName = name.toUpperCase();
  return (
    <h1 className={"font-semibold text-gray-600 text-sm mb-3 tracking-widest"}>
      {formattedName}
    </h1>
  );
};

export default Title;
