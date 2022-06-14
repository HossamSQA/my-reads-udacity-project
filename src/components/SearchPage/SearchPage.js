import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchedBooks from "./SearchedBooks";

const Search = ({
  searchingHandler,
  updateShelves,
  bookSearched,
  searching,
}) => {
  return (
    <Container>
      <div>
        <Link to="/" className="deco">
          {/* back to home button */}
          <Button className="search btn btn-danger fw-bold fs-6 mt-5 mb-5 d-flex justify-content-center ">
            Back
          </Button>
        </Link>

        {/* input field to search for a book */}
        <input
          onChange={searchingHandler}
          type="text"
          placeholder="Search by title, author"
          className="w-100 p-2 mt-2 mb-2"
        />
      </div>

      {searching === "" ? (
        <h4 className="text-center text-dark bg-warning rounded mt-5 p-3 fw-bold">
          You can search with author or book title and the result will appear
          immediately by every letter you typed
        </h4>
      ) : (
        // this component will not appear unless you start typing in the input field
        <SearchedBooks
          bookSearched={bookSearched}
          updateShelves={updateShelves}
        />
      )}
    </Container>
  );
};

export default Search;
