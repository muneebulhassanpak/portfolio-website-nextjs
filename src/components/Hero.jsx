import React from "react";
import { Josefin, Jockey } from "../../utils/fonts";
import Image from "next/image";
import ArrowDown from "../../public/arrow-down.png";
import MuneebImage from "../../public/muneeb.jpg";

const Hero = () => {
  return (
    <section className="relative bg-regal-blue min-h-eighty grid place-items-center py-6 md:py-10 px-2 md:px-0">
      <div>
        <div className="flex items-center justify-start gap-2 bg-white rounded-full max-w-[240px] mx-auto shadow-unique p-1 mb-3 sm:mb-0">
          <Image
            src={MuneebImage}
            width={100}
            height={100}
            alt="Image of website owner, Muneeb"
            className="rounded-full w-14 h-14 "
          />
          <h3 className={`text-lg ${Josefin.className} uppercase mt-2`}>
            Hi, I am <span className="font-bold">Muneeb</span>
          </h3>
        </div>
        <div className="text-center text-white flex flex-col items-center">
          <h2
            className={`text-6xl sm:text-[100px] md:text-[120px] leading-none md:leading-tight ${Jockey.className}`}
          >
            Welcome to my
          </h2>
          <h1
            className={`text-5xl sm:text-[80px] md:text-[100px] uppercase leading-tight relative ${Josefin.className}`}
          >
            <span className="relative inline-block text-white my-2 md:my-0 mr-2 md:mr-4">
              Online
              <span className="inline-block after:inline-block after:absolute after:bottom-1 sm:after:bottom-4 after:-left-0 after:w-full after:h-[10px] sm:after:h-[10px] md:after:h-[20px] after:bg-orange "></span>
            </span>
            Portfolio
          </h1>
          <Image
            src={ArrowDown}
            alt="Arrow pointing downwards"
            className="absolute bottom-10 md:bottom-0 lg:bottom-8 w-14 h-14 sm:w-auto sm:h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
