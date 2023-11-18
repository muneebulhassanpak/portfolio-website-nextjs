"use client";
import React, { useState } from "react";
import ModalState from "../store/modal-state";
import Overlay from "@/components/Overlay";
import Modal from "@/components/Modal";

function Providers({ children }) {
  const [modalState, setModalState] = useState({
    isModalActive: false,
    activeElementId: null,
  });

  const changeModalState = (newState) => {
    console.log("Update", newState);
    setModalState((prev) => {
      return {
        ...prev,
        isModalActive: newState,
      };
    });
  };

  const changeElementId = (id) => {
    setModalState((prev) => {
      return {
        ...prev,
        activeElementId: id,
      };
    });
  };
  return (
    <ModalState.Provider
      value={{
        isModalActive: modalState.isModalActive,
        changeModalState: changeModalState,
        activeElementId: modalState.activeElementId,
        setActiveElementId: changeElementId,
      }}
    >
      {children}
      {modalState.isModalActive && (
        <Overlay>
          <Modal />
        </Overlay>
      )}
    </ModalState.Provider>
  );
}

export default Providers;
