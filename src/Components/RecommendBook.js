import React from "react";
import { Modal, Image, Header, Button } from "semantic-ui-react";

function RecommendBook({ open, setOpen, randomBook }) {
  return (
    <Modal
      size="tiny"
      centered
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Content image>
        <Image
          size="medium"
          src={randomBook.volumeInfo.imageLinks.thumbnail}
          wrapped
        />
        <Modal.Description>
          <Header>{randomBook.volumeInfo.title}</Header>
          <p>{randomBook.volumeInfo.publisher}</p>
          <p>Page Count: {randomBook.volumeInfo.pageCount}</p>
          <a href={randomBook.volumeInfo.previewLink}>Read this book online</a>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default RecommendBook;
