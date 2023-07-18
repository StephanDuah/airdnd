"use client";
import React from "react";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation";
import InfoCard from "@/Components/InfoCard";
const Search = () => {
  const location = useSearchParams().get("location");
  const guest = useSearchParams().get("guest");
  const startDate = useSearchParams().get("startDate");
  const endDate = useSearchParams().get("endDate");

  const formatStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formatStartDate} - ${formatEndDate}`;

  return (
    <main className="flex p-4">
      <section className="flex-grow px-6 pt-16">
        <p className="text-xs">
          300+ Stays {range} - {guest} guests
        </p>
        <h1 className="text-3xl font-semibold mt-2 mb-6">
          Stays in {location}
        </h1>

        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-500 whitespace-nowrap">
          <p className="button">Cancellation Flexibillity</p>
          <p className="button">Type of Place</p>
          <p className="button">Price</p>
          <p className="button">Rooms and Beds</p>
          <p className="button">More filters</p>
        </div>

        {Array(6)
          .fill(0)
          .map((_, id) => (
            <InfoCard key={id} att={{ location, guest }} />
          ))}
      </section>
    </main>
  );
};

export default Search;
