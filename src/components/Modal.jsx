"use client";
import React, { useContext } from "react";
import ModalState from "../store/modal-state";
import Image from "next/image";
import Link from "next/link";
import { ImageTypes } from "../../utils/Types";
import { motion } from "framer-motion";

const dataFetcher = (id) => {
  return ImageTypes.find((item) => item.id == id);
};

const Modal = () => {
  const { activeElementId, changeModalState } = useContext(ModalState);
  const Item = dataFetcher(activeElementId);
  return (
    <motion.section
      className="h-screen w-[95%] sm:w-[90%] bg-white absolute right-0 top-0 bottom-0"
      onClick={(e) => {
        e.stopPropagation();
      }}
      initial={{ x: "100vw", opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          ease: "easeInOut",
        },
      }}
    >
      <div className="relative">
        <div className="max-w-3xl mx-auto px-2 sm:px-0 py-4">
          {Item && (
            <>
              <div className="flex justify-center mt-6 sm:mt-0 sm:pb-2">
                <Image
                  src={`/${Item.source}`}
                  alt={Item.alt}
                  width={Item.type == "small" ? 409 : 845}
                  height={Item.type == "small" ? 249 : 521}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between py-2  border-b border-[rgba(0,0,0.5)]">
                <div className="w-full sm:w-1/2 p-1">
                  <h3 className="text-center sm:text-left mb-2 text-xl font-semibold">
                    Used Technologies
                  </h3>
                  <div className="flex items-center justify-between ">
                    {Item.technolgies.map((item) => (
                      <Image
                        key={item.id}
                        alt={item.name}
                        src={`/${item.image}`}
                        width={40}
                        height={40}
                      />
                    ))}
                  </div>
                </div>
                <div className=" rounded-xl py-2">
                  <h3 className="text-center sm:text-right mb-2 text-xl font-semibold">
                    Important Links
                  </h3>
                  <div className="flex items-center justify-end w-auto ">
                    <div className="w-[50px] grid place-items-center h-[50px] border rounded-full shadow-md">
                      <a href={Item.githubLink} target="_blank">
                        <Image
                          src={"/github.png"}
                          width={40}
                          height={40}
                          alt="github-icon"
                        />
                      </a>
                    </div>
                    <div className="w-[50px] h-[50px] grid place-items-center border rounded-full shadow-md p-2 ml-6">
                      <a href={Item.liveLink} target="_blank">
                        <Image
                          src={"/live.png"}
                          width={40}
                          height={40}
                          alt="live-icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-center underline mt-4 mb-2 text-2xl font-semibold">
                  Description
                </h3>
              </div>
            </>
          )}
          {!Item && <p className="text-center py-4">No such element exists</p>}
        </div>
        <div
          className="absolute left-0 top-0"
          onClick={() => {
            changeModalState(false);
          }}
        >
          <button className="px-3 text-white grid place-items-center bg-red-400">
            <p className="text-3xl sm:text-5xl rotate-45">+</p>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Modal;
