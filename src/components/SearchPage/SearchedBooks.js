import React from "react";
import { Row, Col } from "react-bootstrap";
import SingleBookCard from "../BooksPage/SingleBookCard";

const SearchedBooks = ({ bookSearched, updateShelves }) => {
  return (
    <Row sm="12">
      <Col className="d-flex justify-content-center align-items-center text-center mb-2 mt-5 flex-wrap gap-3">
        {/* if letters are typed in the input field, this component will appear and display the books that match the search criteria
        (the books that match the search criteria are stored in the bookSearched variable) */}

        {bookSearched.length > 0 ? (
          bookSearched.map((book) => (
            <SingleBookCard
              book={book}
              updateShelves={updateShelves}
              key={book.id}
            />
          ))
        ) : (
          // if no letters are typed in the input field or the books typed didn't found in the API , this component will appear and display a message
          <p className="text-light bg-danger p-3 d-flex justify-content-center rounded align-items-center mt-5 fs-2">
            No books matches your search
          </p>
        )}
      </Col>
    </Row>
  );
};

export default SearchedBooks;
