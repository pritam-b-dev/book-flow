import React from "react";

const Services = () => {
  return (
    <section className="my-10 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-12 rounded-lg text-center shadow-md bg-gray-50">
          <h3 className="font-bold text-2xl">Free Delivery</h3>
          <p className="text-gray-500 text-sm">On orders over $50</p>
        </div>
        <div className="p-12 rounded-lg text-center shadow-md bg-gray-50">
          <h3 className="font-bold text-2xl">Quick Support</h3>
          <p className="text-gray-500 text-sm">24/7 online help</p>
        </div>
        <div className="p-12 rounded-lg text-center shadow-md bg-gray-50">
          <h3 className="font-bold text-2xl">Secure Payment</h3>
          <p className="text-gray-500 text-sm">100% safe checkout</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
