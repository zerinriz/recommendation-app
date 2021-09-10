import React from "react";
import { Card } from "semantic-ui-react";
import BookCard from "./BookCard";

function BookList({ booksMetaInfo }) {
  return (
    <Card.Group itemsPerRow="4" stackable>
      {booksMetaInfo.map((item) => (
        <BookCard
          image={item.volumeInfo.imageLinks.thumbnail}
          title={item.volumeInfo.title}
          desc={item.volumeInfo.description}
          publisher={item.volumeInfo.publisher}
          pageCount={item.volumeInfo.pageCount}
          avgRating={item.volumeInfo.averageRating}
          ratingCnt={item.volumeInfo.ratingsCount}
        />
      ))}
    </Card.Group>
  );
}

export default BookList;
