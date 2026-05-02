import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>Logo</div>
      <div>
        <Link href={"/"}>Home </Link>
        <Link href={"/books"}> All Books</Link>
        <Link href={"/profile"}>My Profile</Link>
      </div>
      <Link href={"/signin"}>Login</Link>
    </div>
  );
};

export default NavBar;
