import React from "react";
import { Container } from "react-bootstrap";
import Title from "./Title";
import BooksCategory from "../BooksPage/BooksCategory";
import SearchButton from "../SearchPage/SearchButton";

const HomePage = ({ allBooks, updateShelves }) => {
  return (
    <Container>
      <Title />

      <BooksCategory
        books={allBooks}
        categoryTitle="Currently Reading"
        category="currentlyReading"
        updateShelves={updateShelves}
      />

      <BooksCategory
        books={allBooks}
        category="wantToRead"
        categoryTitle="Want to Read"
        updateShelves={updateShelves}
      />
      <BooksCategory
        books={allBooks}
        category="read"
        categoryTitle="Read"
        updateShelves={updateShelves}
      />

      <SearchButton />
    </Container>
  );
};

export default HomePage;
