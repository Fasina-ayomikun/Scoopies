import React from "react";
import ListItems from "./ListItems";

function Tags({ items, type }: { items: string[] | undefined; type: string }) {
  return (
    <ul className='flex flex-wrap items-center gap-2'>
      {items &&
        items.length >= 1 &&
        items?.map((item: string, index: number) => {
          return (
            <ListItems key={index} index={index} item={item} type={type} />
          );
        })}
    </ul>
  );
}

export default Tags;
