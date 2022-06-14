import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchButton = () => {
  return (
    <div className="d-flex justify-content-center align-items-center  mt-5 mb-5">
      <Link to="/search">
        <Button className="deco btn btn-success fw-bold fs-4">
          Search & Add a Book to Your Library
        </Button>
      </Link>
    </div>
  );
};

export default SearchButton;
