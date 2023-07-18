import React from "react";

import Image from "next/image";
import { HiOutlineHeart, HiStar } from "react-icons/hi";

const InfoCard = ({ att }) => {
  const { location, guest } = att;
  return (
    <div className="flex py-7 px-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200  first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src="/images/pyramid.jpg"
          alt="pic"
          width={100}
          height={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-2xl"
          priority
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 font-semibold">
            Private room in the center of {location}
          </p>
          <HiOutlineHeart size={28} className="cursor pointer" />
        </div>
        <h4 className="text-xl">Luxurious Home Available</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">
          {guest} guest 1 bedroom
        </p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center font-bold">
            <HiStar color="blue" size={25} /> 3.57
          </p>

          <div>
            <p className="font-semibold text-lg lg:text-xl pb-2">GHC45/night</p>
            <p className="font-semibold">GHC450/total</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
