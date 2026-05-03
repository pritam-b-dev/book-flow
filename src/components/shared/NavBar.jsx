"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { authClient } from "../../lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NavBar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();
  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/signin");
  };

  const nav = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/books"}>All Books</NavLink>
      </li>
      {user && (
        <li>
          <NavLink href={"/profile"}>My Profile</NavLink>
        </li>
      )}
      {user && (
        <li className="md:hidden">
          <div className="flex items-center gap-2">
            {user.image && (
              <Image
                src={user.image}
                alt="user logo"
                className="rounded-full object-cover"
                width={30}
                height={30}
              />
            )}
            <span className="font-medium">{user.name}</span>
          </div>
        </li>
      )}
      {user && (
        <li className="md:hidden">
          <button onClick={handleSignOut} className="text-red-600">
            Logout
          </button>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {nav}
          </ul>
        </div>
        <Link
          href={"/"}
          className="btn btn-ghost text-2xl md:text-4xl font-bold"
        >
          BookFlow
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end items-center gap-3">
        {isPending ? (
          ""
        ) : user ? (
          <>
            <h2 className="mr-4 hidden md:block">hello! {user.name}</h2>
            {user.image && (
              <Image
                src={user.image}
                alt="user logo"
                className="mr-4 rounded-full hidden md:block object-cover "
                width={50}
                height={50}
              />
            )}
            <button
              onClick={handleSignOut}
              className="btn btn-soft btn-secondary px-8 py-2 hidden md:flex items-center justify-center text-[20px] "
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href={"/signin"}
            className=" text-[20px] rounded-lg btn btn-outline text-black align-middle px-8 py-2"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
