import React from "react";

const Services = () => {
  return (
    <section className="my-10 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 md:p-12 rounded-lg text-center shadow-md bg-gray-50">
          <h3 className="font-bold text-xl md:text-2xl">Flexible Returns</h3>
          <p className="text-gray-500 text-sm">Return within 14 to 30 days</p>
        </div>
        <div className="p-6 md:p-12 rounded-lg text-center shadow-md bg-gray-50">
          <h3 className="font-bold text-xl md:text-2xl">Instant Borrowing</h3>
          <p className="text-gray-500 text-sm">
            Browse & reserve books instantly
          </p>
        </div>
        <div className="p-6 md:p-12 rounded-lg text-center shadow-md bg-gray-50">
          <h3 className="font-bold text-xl md:text-2xl">Massive Collection</h3>
          <p className="text-gray-500 text-sm">
            Thousands of books across all genres
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
