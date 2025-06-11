import { Direction } from "@/utils/functions/types";
import React from "react";

const Subheader = ({
  text,
  direction = Direction.left,
  showArrow = true,
}: {
  text: string;
  direction?: Direction;
  showArrow?: boolean;
}) => {
  return (
    <div
      className={`${
        direction === Direction.right
          ? "flex-row-reverse pr-7 text-start"
          : "flex-row pl-7 text-end"
      } max-w-3xl mx-auto pb-10  flex items-center justify-between gap-4`}
    >
      <h3
        className={`${
          showArrow ? "text-inherit  mx-0" : "text-center mx-auto"
        } font-lora font-semibold text-coloured w-fit   text-xl whitespace-nowrap `}
      >
        {text}
      </h3>
      {showArrow && (
        <>
          <img
            src='/assets/arrow.svg'
            alt=''
            className={`w-full sm:hidden  ${
              direction === Direction.right ? "rotate-180" : "rotate-0"
            }`}
          />
          <img
            src='/assets/arrow2.svg'
            alt=''
            className={`w-full hidden sm:block  ${
              direction === Direction.right ? "rotate-180" : "rotate-0"
            }`}
          />
        </>
      )}
    </div>
  );
};

export default Subheader;
