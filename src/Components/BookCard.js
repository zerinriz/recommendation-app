import React from "react";
import { Button, Card, Image, Popup } from "semantic-ui-react";

function BookCard({
  image,
  title,
  desc,
  publisher,
  pageCount,
  avgRating,
  ratingCnt,
}) {
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{desc}</Card.Description>
      </Card.Content>
      <Popup
        on="click"
        content={
          <Card fluid>
            <Card.Content textAlign="center">
              <Card.Header>Publisher: {publisher}</Card.Header>
              <Card.Description>Page Count: {pageCount}</Card.Description>
              <Card.Description>Average Rating: {avgRating}</Card.Description>
              <Card.Description>Ratings Count: {ratingCnt}</Card.Description>
            </Card.Content>
          </Card>
        }
        trigger={<Button content="Button" />}
      />
    </Card>
  );
}

export default BookCard;
