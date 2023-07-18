"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/navigation";

import {
  HiSearch,
  HiGlobeAlt,
  HiUserCircle,
  HiMenu,
  HiUser,
} from "react-icons/hi";
const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guest, setGuest] = useState(1);
  const router = useRouter();
  const seletionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetSearch = () => {
    setSearchInput("");
    setStartDate(new Date());
    setEndDate(new Date());
    setGuest(1);
  };

  const search = () => {
    router.push(
      `/search?location=${searchInput}&&guest=${guest}&&startDate=${startDate}&&endDate=${endDate}`
    );

    resetSearch();
  };

  return (
    <header className="sticky top-0 grid grid-cols-3 bg-white z-50 shadow-md py-5 px-5 md:px-10 ">
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto overflow-scroll scrollbar-hide">
          <DateRangePicker
            ranges={[seletionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            rangeColors={["#268ECE"]}
          />
          <div className="flex items-center">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guest
            </h2>

            <HiUser size={25} color="#268ECE" />

            <input
              type="number"
              value={guest}
              className="w-12 pl-2 text-lg outline-none text-blue-400"
              min={1}
              onChange={(e) => setGuest(e.target.value)}
            />
          </div>

          <div className="flex items-center mt-2">
            <button className="flex-grow font-semibold" onClick={resetSearch}>
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow font-semibold text-logoColor"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
