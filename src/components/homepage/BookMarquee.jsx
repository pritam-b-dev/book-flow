import React from "react";
import Marquee from "react-fast-marquee";

const BookMarquee = () => {
  return (
    <div className="border border-gray-300 py-1 overflow-hidden container mx-auto">
      <Marquee
        pauseOnHover={true}
        behavior="scroll"
        direction="left"
        scrollamount="5"
      >
        <strong>New Arrivals:</strong>&nbsp; The Alchemist | Clean Code | Cosmos
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ***Special
        Discount on Memberships!***
      </Marquee>
    </div>
  );
};

export default BookMarquee;
