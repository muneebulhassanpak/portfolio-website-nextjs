import React from "react";
import Image from "next/image";
import ModalState from "@/store/modal-state";
import { useContext } from "react";

const PortfolioItem = (props) => {
  const modalContext = useContext(ModalState);
  const changeStatus = () => {
    modalContext.changeModalState(true);
    modalContext.setActiveElementId(props.id);
  };
  return (
    <div
      className={`col-span-full group overflow-hidden cursor-pointer ${
        props.type == "small"
          ? "sm:col-auto"
          : "lg:row-span-2 sm:col-auto lg:col-span-2"
      }`}
      onClick={changeStatus}
    >
      <Image
        id={props.id}
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
