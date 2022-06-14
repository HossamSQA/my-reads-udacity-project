import React from "react";
import SingleBookCard from "./SingleBookCard";

const BooksCategory = ({ categoryTitle, books, category, updateShelves }) => {
  // filter books by category
  const booksCategory = books.filter((book) => book.shelf === category);

  return (
    <div>
      <div sm="12">
        <div className="d-flex justify-content-center align-items-center text-center mb-3 mt-2">
          <p className="bg-warning text-dark rounded fw-bold shelf-title w-25 mt-5 mb-3 p-2 fs-lg-2 fs-md-3 fs-sm-4">
            {categoryTitle}
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
          {booksCategory.map((book) => (
            <SingleBookCard
              updateShelves={updateShelves}
              book={book}
              key={book.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksCategory;
