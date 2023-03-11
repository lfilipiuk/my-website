import React from "react";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Section = ({ children }: Props) => {
  return (
    <section className={"lg:max-w-4xl max-w-xl mx-auto my-16"}>
      {children}
    </section>
  );
};

export default Section;
