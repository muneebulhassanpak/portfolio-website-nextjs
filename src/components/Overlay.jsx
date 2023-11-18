"use client";
import React, { useContext } from "react";
import ModalState from "@/store/modal-state";

const Overlay = (props) => {
  const context = useContext(ModalState);
  return (
    <div
      className="fixed inset-0 w-full h-screen bg-[rgba(0,0,0,0.7)]"
      onClick={() => {
        context.changeModalState(false);
      }}
    >
      {props.children}
    </div>
  );
};

export default Overlay;
