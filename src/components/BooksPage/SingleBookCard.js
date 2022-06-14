import React from "react";
import { Card } from "react-bootstrap";

const SingleBookCard = ({ book, updateShelves }) => {
  const updatingShelf = (e) => {
    updateShelves(book, e.target.value);
  };

  // function to reduce the number of letters and added a 3 dots at the end of the title to save space
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    // using bootstrap card to display book info
    <Card className="book_card p-1">
      <Card.Img
        variant="top"
        src={
          // handle books thumbnail and added a default image if the book doesn't have a thumbnail
          book.imageLinks
            ? book.imageLinks.thumbnail
            : "https://ik.imagekit.io/upquizbqg/No_Image_Available_QdttPgGzm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652834944592"
        }
        className="rounded card-img-top"
      />
      <Card.Body>
        <Card.Title />
        <Card.Text className="fw-bold">{truncate(book.title, 24)}</Card.Text>
        <Card.Text>
          <span className="text-primary">Written by: </span>
          {truncate(book.authors.toString(), 30)}
        </Card.Text>
      </Card.Body>
      <div className="d-flex justify-content-start rounded">
        <select
          onChange={updatingShelf}
          value={book.shelf ? book.shelf : "none"}
          className="bg-dark rounded text-light p-1"
        >
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </Card>
  );
};

export default SingleBookCard;
