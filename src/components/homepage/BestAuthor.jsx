import Image from "next/image";
import React from "react";

const BestAuthor = () => {
  return (
    <section className="my-12 max-w-5xl mx-auto p-8 bg-slate-50 rounded-2xl >">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="text-center shrink-0">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
            <Image
              src="https://deadline.com/wp-content/uploads/2018/04/paulo-coelho-2.jpg?w=653&h=383&crop=1"
              alt="author photo"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="mt-4 text-3xl font-bold text-gray-500">
            Paulo Coelho
          </h3>
          <p className="font-medium text-4xl text-gray-400">
            Bestselling Novelist
          </p>
        </div>
        <div className="flex-1">
          <p className="text-lg text-slate-600 italic leading-relaxed mb-6">
            Books are a uniquely portable magic. Explore the most celebrated
            works of Paulo Coelho, now available in our store.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BestAuthor;
