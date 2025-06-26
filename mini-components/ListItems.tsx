import React from "react";
import { MdClose } from "react-icons/md";

function ListItems({
  index,
  item,
  type,
}: {
  index: number;
  item: string;
  type: string;
}) {
  return (
    <li
      key={index}
      className='bg-main-purple/10  px-3 rounded flex items-center gap-1 text-main-purple'
    >
      {item}
      <MdClose
        className='text-main-purple text-sm'
        onClick={() => {
          //   dispatch(deleteTags({ type, index }));
        }}
      />{" "}
    </li>
  );
}

export default ListItems;
