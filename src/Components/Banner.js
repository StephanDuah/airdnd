import React from "react";
import Image from "next/image";
import hero2 from "../../public/images/hero2.jpg";

const Banner = () => {
  return (
    <div className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[70vh]">
      <Image
        src={hero2}
        alt="hero"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-white text-lg sm:text-4xl">Not sure where to go?</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl transition-all active:scale-95 duration-100">
          Im flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;