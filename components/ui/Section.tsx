import React from "react";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Section = ({ children }: Props) => {
  return <section className={"max-w-2xl mx-auto my-16"}>{children}</section>;
};

export default Section;
