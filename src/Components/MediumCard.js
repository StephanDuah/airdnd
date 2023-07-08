import React from "react";
import Image from "next/image";
import hero1 from "../../public/images/hero1.jpg";
const MeduimCard = () => {
  return (
    <div className="cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">
      <div className="relative h-80 w-80">
        <Image
          src={hero1}
          alt="hi"
          fill
          className="object-cover object-center rounded-lg"
        />
      </div>
      <h1 className="font-semibold text-lg text-gray-700">Place title</h1>
    </div>
  );
};

export default MeduimCard;
