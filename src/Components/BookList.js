import React from "react";
import { Grid } from "semantic-ui-react";
import BookCard from "./BookCard";

function BookList({ booksMetaInfo }) {
  return (
    <Grid columns="4" container padded="vertically">
      {booksMetaInfo.map((item) => (
        <Grid.Column key={item.id}>
          <BookCard
            image={item.volumeInfo.imageLinks.thumbnail}
            title={item.volumeInfo.title}
            desc={item.volumeInfo.description}
            publisher={item.volumeInfo.publisher}
            pageCount={item.volumeInfo.pageCount}
            avgRating={item.volumeInfo.averageRating}
            ratingCnt={item.volumeInfo.ratingsCount}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
}

export default BookList;
