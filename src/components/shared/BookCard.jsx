import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
        <figure className="px-2 pt-2 md:px-4 md:pt-4">
          <Image
            src={book.image_url}
            alt={book.title}
            width={200}
            height={280}
            className="rounded-lg h-36 md:h-52 w-full object-contain"
          />
        </figure>
        <div className="card-body p-2 md:p-4">
          <span className="badge badge-ghost">{book.category}</span>
          <h2 className="card-title text-xs md:text-base">{book.title}</h2>
          <p className="text-sm text-gray-500">{book.author}</p>
          <div className="card-actions justify-end mt-2">
            <Link
              href={`/books/${book.id}`}
              className="btn btn-outline btn-xs md:btn-sm w-full"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
