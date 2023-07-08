import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import { HiSearch, HiGlobeAlt, HiUserCircle, HiMenu } from "react-icons/hi";
const Header = () => {
  return (
    <header className="sticky grid grid-cols-3 bg-white z-50 shadow-md py-5 px-5 md:px-10 ">
      {/* logo */}
      <div className=" relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          src={logo}
          alt="logo"
          fill
          className="object-contain object-left "
          priority
        />
      </div>
      {/* searchbar */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          type="text"
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder:text-gray-400"
          placeholder="Start your search here"
        />
        <HiSearch
          size={32}
          className=" text-white bg-logoColor hidden p-2 rounded-full cursor-pointer md:inline-flex md:mx-2"
        />
      </div>
      {/* addOns */}
      <div className="flex items-center justify-end space-x-4 text-gray-600">
        <p className="font-semibold hidden md:inline-flex">Become a host</p>
        <HiGlobeAlt size={24} />
        <div className="flex items-center border-2 rounded-full space-x-2 shadow-sm p-2">
          <HiUserCircle size={24} />
          <HiMenu size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
