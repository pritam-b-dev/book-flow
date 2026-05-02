import Image from "next/image";
import React from "react";
import { getBookById } from "../../../../lib/data";
import Link from "next/link";
import ButtonWithToast from "../../../../components/shared/ButtonWithToast";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const result = await getBookById(id);
  const book = result.data;
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="w-full h-full flex justify-center items-center">
          <Image
            src={book.image_url}
            alt={book.title}
            width={1000}
            height={1000}
            className="rounded-xl w-full max-h-137.5 object-contain "
          />
        </div>
        <div className="space-y-4">
          <span className="badge badge-ghost">{book.category}</span>
          <h1 className="text-4xl font-bold">{book.title}</h1>
          <p className="text-xl text-gray-500">by {book.author}</p>
          <p className="text-gray-600 leading-relaxed">{book.description}</p>
          <p className="font-semibold text-green-600">
            {book.available_quantity} copies available
          </p>
          <ButtonWithToast bookTitle={book.title} />
          <Link href="/books" className="btn btn-outline w-full">
            ← Back to All Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
