"use client";
import React from "react";
import { motion } from "framer-motion";

import { ImageTypes } from "../../../../utils/Types";
import PortfolioItem from "@/components/PortfolioItem";

function getData() {
  const imagesToBeShown = ImageTypes.filter((item) => item.part === "frontend");
  console.log(imagesToBeShown);
  return imagesToBeShown;
}

const Frontendpage = () => {
  const imagesToBeShown = getData();
  return (
    <motion.section
      className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 grid-rows-4 px-2 lg:px-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
    >
      {imagesToBeShown.map((item) => (
        <PortfolioItem
          key={item.id}
          source={`/${item.source}`}
          alt={item.alt}
          type={item.type}
        />
      ))}
    </motion.section>
  );
};

export default Frontendpage;
