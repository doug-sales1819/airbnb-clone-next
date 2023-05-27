"use client";

import { HeadingProps } from "./types";

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <header className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </header>
  );
};

export default Heading;
