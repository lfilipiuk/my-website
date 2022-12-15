import React from "react";
import styles from "./Section.module.css";

type Props = {
  children: JSX.Element;
};

const Section = ({ children }: Props) => {
  return <section className={"max-w-2xl mx-auto my-11"}>{children}</section>;
};

export default Section;
