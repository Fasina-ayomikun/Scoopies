import { Direction } from "@/utils/functions/types";
import React from "react";

const Subheader = ({
  text,
  direction,
}: {
  text: string;
  direction: Direction;
}) => {
  return (
    <div
      className={`${
        direction === Direction.right
          ? "flex-row-reverse pr-7"
          : "flex-row pl-7"
      } max-w-3xl mx-auto pb-10  flex items-center justify-between gap-4`}
    >
      <h3 className='font-lora font-semibold text-coloured w-fit text-xl whitespace-nowrap '>
        {text}
      </h3>
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
    </div>
  );
};

export default Subheader;
