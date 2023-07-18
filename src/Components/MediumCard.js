import React from "react";
import Image from "next/image";

const MeduimCard = () => {
  return (
    <div className="cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">
      <div className="relative h-80 w-80">
        <Image
          src={"/images/hero1.jpg"}
          alt="hi"
          width={100}
          height={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center rounded-lg"
        />
      </div>
      <h1 className="font-semibold text-lg text-gray-700">Place title</h1>
    </div>
  );
};

export default MeduimCard;
