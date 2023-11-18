"use client";

import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

const appliedClasses = (pathname, href) => {
  return `w-[80%] mx-auto sm:w-auto sm:mx-4 cursor-pointer mb-2 sm:mb-0 sm:inline-block  rounded-lg group ${
    pathname == href ? "bg-black text-white" : "bg-gray text-black"
  } text-center text-2xl`;
};

const childrenStyles = `
w-full inline-block px-4 py-2
`;

const DevType = ({ name, href }) => {
  const pathname = usePathname();
  return (
    <div className={appliedClasses(pathname, href)}>
      <Link href={`${href}`} className={childrenStyles}>
        {name}
      </Link>
    </div>
  );
};

export default DevType;
