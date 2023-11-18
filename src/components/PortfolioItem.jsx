import React from "react";
import Image from "next/image";

const PortfolioItem = (props) => {
  return (
    <div
      class={`col-span-full group overflow-hidden  cursor-pointer ${
        props.type == "small"
          ? "sm:col-auto"
          : "lg:row-span-2 sm:col-auto lg:col-span-2"
      }`}
    >
      <Image
        src={props.source}
        alt={props.alt}
        width={props.type == "small" ? 409 : 845}
        height={props.type == "small" ? 249 : 521}
        className="group-hover:scale-110 group-hover:opacity-90 ease-in-out duration-200 w-full"
      />
    </div>
  );
};

export default PortfolioItem;
