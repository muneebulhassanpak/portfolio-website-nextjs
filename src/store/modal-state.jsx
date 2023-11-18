import React, { createContext } from "react";

const ModalState = createContext({
  isModalActive: false,
  changeModalState: () => {},
  activeElementId: null,
  setActiveElementId: () => {},
});

export default ModalState;
