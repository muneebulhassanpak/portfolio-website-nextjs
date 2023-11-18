"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";

import { ImageTypes } from "../../../utils/Types";
import Modal from "@/components/Modal";

import PortfolioItem from "@/components/PortfolioItem";
import ModalState from "@/store/modal-state";
import Overlay from "@/components/Overlay";
const Portfolio = () => {
  const context = useContext(ModalState);
  return (
    <>
      <motion.section
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 grid-rows-4 px-2 lg:px-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
      >
        {ImageTypes.map((item) => (
          <PortfolioItem
            id={item.id}
            key={item.id}
            source={`/${item.source}`}
            alt={item.alt}
            type={item.type}
          />
        ))}
      </motion.section>
      {context.isModalActive && (
        <Overlay>
          <Modal />
        </Overlay>
      )}
    </>
  );
};

export default Portfolio;
