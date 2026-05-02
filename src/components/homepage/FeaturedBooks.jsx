import React from "react";
import { getFeaturedBooks } from "@/lib/data";
import BookCard from "../shared/BookCard";
const FeaturedBooks = async () => {
  const books = await getFeaturedBooks();

  return (
    <div>
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedBooks;
