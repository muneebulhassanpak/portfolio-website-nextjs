"use client";

import React from "react";
import { PageTypes } from "../../utils/Types";
import DevType from "./DevType";
import { motion } from "framer-motion";

const DevTypeNavigation = () => {
  return (
    <motion.nav
      className=" flex flex-col sm:flex-row items-center justify-center py-10"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 1,
        },
      }}
    >
      {PageTypes.map((item) => (
        <DevType key={item.id} name={item.name} href={item.href} />
      ))}
    </motion.nav>
  );
};

export default DevTypeNavigation;
