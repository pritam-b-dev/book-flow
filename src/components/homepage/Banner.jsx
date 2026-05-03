import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="hero min-h-[20vh] md:min-h-[30vh] bg-base-200 container mx-auto my-4">
      <div className="hero-content text-center">
        <div className="max-w-2xl space-y-2">
          <h1 className="text-lg md:mt-2 md:text-5xl font-semibold animate__animated animate__fadeInDown animate__slower">
            Find Your Next Read
          </h1>
          <p className="mt-2 md:mt-5 text-xs md:text-2xl animate__animated animate__fadeInUp animate__delay-1s animate__slower ">
            Explore thousands of books and borrow them digitally.
          </p>
          <Link
            href="/books"
            className="mt-2 md:mt-7 md:mb-2 btn btn-outline btn-lg animate__animated animate__pulse animate__slower animate__infinite"
          >
            Browse Books <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
