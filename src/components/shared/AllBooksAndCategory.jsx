"use client";
import React, { useState } from "react";
import BookCard from "./BookCard";

const AllBooksAndCategory = ({ books, categories }) => {
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const categoryFiltered = selected
    ? books.filter((b) => b.category === selected)
    : books;

  const filtered = categoryFiltered.filter((b) =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search books by title..."
        className="input input-bordered w-full mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-48 shrink-0">
          <h3 className="font-bold text-lg mb-4">Categories</h3>
          <ul className="flex flex-wrap gap-0.5 md:flex-col md:space-y-2">
            {categories.map((cat, ind) => (
              <li key={ind}>
                <button
                  onClick={() => setSelected(cat)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition
                  ${
                    selected === cat
                      ? "bg-gray-200 text-black"
                      : "hover:bg-base-200"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => setSelected(null)}
                className={`w-full text-left px-4 py-2 rounded-lg transition
                  ${
                    selected === null
                      ? "bg-gray-200 text-black"
                      : "hover:bg-base-200"
                  }`}
              >
                All Books
              </button>
            </li>
          </ul>
        </aside>
        <div className="flex-1">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">No books found!</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filtered.map((book, ind) => (
                <BookCard key={ind} book={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBooksAndCategory;
