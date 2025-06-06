import React from "react";
import { Button } from "../button/Button"; 

interface SectionBlockProps {
  label: string;
  heading: React.ReactNode; // allows JSX like line breaks
  description: React.ReactNode;
  buttonText: string;
  onButtonClick?: () => void; // optional click handler
}

const SectionBlock: React.FC<SectionBlockProps> = ({
  label,
  heading,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="text-black flex flex-col gap-4 items-start   ">
      <p className="text-sm lg:text-base">{label}</p>
      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-[600] leading-tight">
        {heading}
      </h3>
      <p className="text-base lg:text-lg">{description}</p>
      <Button
        text={buttonText}
        variant="primary"
        className="py-3 !font-medium !text-black w-full sm:w-auto"
        onClick={onButtonClick}
      />
    </div>
  );
};

export default SectionBlock;
