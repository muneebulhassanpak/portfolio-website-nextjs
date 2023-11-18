import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <section className="text-center py-16 flex justify-center items-center min-h-screen bg-black">
      <Link
        href="/portfolio"
        className="px-8 py-3 bg-white text-black uppercase rounded-sm"
      >
        See Portfolio
      </Link>
    </section>
  );
};

export default Home;
