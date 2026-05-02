import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-[30vh] bg-base-200 container mx-auto">
      <div className="hero-content text-center">
        <div className="max-w-md space-y-2">
          <h1 className="text-4xl font-bold animate__animated animate__fadeInDown animate__slower">
            Find Your Next Read
          </h1>
          <p className="animate__animated animate__fadeInUp animate__delay-1s animate__slower">
            Explore thousands of books and borrow them digitally.
          </p>
          <Link
            href="/books"
            className="btn btn-outline btn-lg animate__animated animate__pulse animate__slower animate__infinite"
          >
            Browse Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
