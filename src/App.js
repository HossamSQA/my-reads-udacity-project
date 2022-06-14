import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import * as BooksAPI from "./components/API/BooksAPI";
import SearchPage from "./components/SearchPage/SearchPage";

const App = () => {
  // using state management to store the books and searched books
  const [books, setBooks] = useState([]);
  const [searching, setSearching] = useState("");
  const [bookSearched, setBookSearched] = useState([]);

  // getting All books from API
  const getBooks = () => {
    BooksAPI.getAll().then((res) => setBooks(res));
  };

  // updating book option selected to shelves
  const updateShelves = (book, shelf) => {
    BooksAPI.update(book, shelf);
    getBooks();
  };

  // mounting all books
  useEffect(() => {
    getBooks();
  });

  // searching function for books by title or id
  const getBookSearched = (searchID) => {
    BooksAPI.search(searchID).then((res) => {
      if (res && res.length > 0) {
        setBookSearched(
          res.map((result) => {
            books.forEach((item) => {
              if (result.id === item.id) {
                result.shelf = item.shelf;
              }
            });
            return result;
          })
        );
      } else {
        setBookSearched([]);
      }
    });
  };
  // handling searched books and store the result to the state
  const searchingHandler = (e) => {
    setSearching(e.target.value);
    if (e.target.value.length) {
      getBookSearched(e.target.value);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path={"/"}
          exact
          element={<HomePage allBooks={books} updateShelves={updateShelves} />}
        />
        <Route
          path={"/search"}
          element={
            <SearchPage
              searchingHandler={searchingHandler}
              searching={searching}
              bookSearched={bookSearched}
              updateShelves={updateShelves}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
