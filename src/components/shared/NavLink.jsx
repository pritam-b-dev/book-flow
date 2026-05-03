"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = href === pathName;
  return (
    <Link
      className={`text-[16px] md:text-[20px]  ${isActive ? "border-b-4 border-b-gray-300" : ""}`}
      href={href}
      onClick={() => document.activeElement.blur()}
    >
      {children}
    </Link>
  );
};

export default NavLink;
