import React from "react";

interface IProps {
  children: React.ReactNode;
  title: string;
}

export default function SectionHeading({ children, ...props }: IProps) {
  return (
    <div className="text-center">
      <h3 className="section-title title-gradient text-4xl md:text-5xl">
        {props.title}
      </h3>
      <p className="section-subtitle max-w-[40ch] text-base md:text-lg">
        {children}

        <span className="text-indigo-400">.</span>
      </p>
    </div>
  );
}
