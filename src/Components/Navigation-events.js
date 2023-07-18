"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [count, setCount] = useState(0);

  useEffect(() => {}, [count, pathname, searchParams]);
  return null;
};

export default Navigation;
