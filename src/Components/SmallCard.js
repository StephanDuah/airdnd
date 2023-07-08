import React from "react";
import Image from "next/image";
import hero from "../../public/images/hero.jpg";
const SmallCard = () => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 rounded-lg transition-transform ease-out duration-200">
      <div className="relative h-16 w-16">
        <Image
          src={hero}
          fill
          alt="small-pic"
          className="object-cover object-center rounded-lg"
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold">London</h2>
        <h3 className="text-sm ">45-minutes drive</h3>
      </div>
    </div>
  );
};

export default SmallCard;