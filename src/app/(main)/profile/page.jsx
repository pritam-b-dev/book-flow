"use client";
import React from "react";
import { authClient } from "../../../lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const MyProfile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  if (isPending) {
    return <div className="text-center mt-20">Loading...</div>;
  }
  if (!user) {
    return <div className="text-center mt-20">Please login first.</div>;
  }
  return (
    <div className="container min-h-[90vh] mx-auto flex justify-center items-center">
      <div className="card bg-base-100 shadow-xl p-20">
        <div className="card-body items-center text-center">
          {user.image && (
            <Image
              src={user.image}
              alt={user.name}
              width={100}
              height={100}
              className="rounded-full w-24 h-24 object-cover"
            />
          )}
          <h2 className="card-title text-2xl">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <Link href="/profile/update" className="btn btn-primary w-full mt-4">
            Update Information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
