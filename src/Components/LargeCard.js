import React from "react";
import Image from "next/image";
import pyramid from "../../public/images/pyramid.jpg";

const LargeCard = () => {
  return (
    <div className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={pyramid}
          fill
          className="object-cover rounded-2xl"
          alt="large-pic"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">Explore the pyramids</h3>
        <p>
          Take a vacation in our luxurious loggings in the land of the pharoahs
        </p>
        <button className="mt-5 text-sm text-white bg-gray-900 px-4 py-2 rounded-lg">
          Get Inspired
        </button>
      </div>
    </div>
  );
};

export default LargeCard;