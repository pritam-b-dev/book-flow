"use client";
import React, { useState } from "react";
import BookCard from "./BookCard";

const AllBooksAndCategory = ({ books, categories }) => {
  const [selected, setSelected] = useState(null);
  const filtered = selected
    ? books.filter((b) => b.category === selected)
    : books;

  return (
    <div className="flex gap-6">
      <aside className="w-48 shrink-0">
        <h3 className="font-bold text-lg mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat, ind) => (
            <li key={ind}>
              <button
                onClick={() => setSelected(cat)}
                className={`w-full text-left px-4 py-2 rounded-lg transition
                  ${
                    selected === cat
                      ? "bg-primary text-primary-content"
                      : "hover:bg-base-200"
                  }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((book, ind) => (
            <BookCard key={ind} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooksAndCategory;
