import React from "react";
import AllBooksAndCategory from "../../../components/shared/AllBooksAndCategory";
import { getAllBooks, getCategories } from "@/lib/data";

const AllBooksPage = async () => {
  const booksData = await getAllBooks();
  const categoriesData = await getCategories();
  const books = booksData.data;
  const categories = categoriesData.data;
  return (
    <div className="container mx-auto px-4 py-8 min-h-[50vh]">
      <h1 className="text-3xl font-bold mb-8">All Books</h1>
      <AllBooksAndCategory books={books} categories={categories} />
    </div>
  );
};

export default AllBooksPage;
