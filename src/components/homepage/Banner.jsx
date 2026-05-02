import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-[30vh] bg-base-200 container mx-auto">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Find Your Next Read</h1>
          <p className="py-6 text-gray-500">
            Explore thousands of books and borrow them digitally.
          </p>
          <Link href="/books" className="btn btn-outline btn-lg">
            Browse Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
