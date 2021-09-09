import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import booksApi from "./api/books";
import SearchField from "./Components/SearchField";
import BookList from "./Components/BookList";
import { Button, Container, Header } from "semantic-ui-react";
import RecommendBook from "./Components/RecommendBook";
function App() {
  const [booksMetaInfo, setBooksMetaInfo] = useState([]);
  const [randomBook, setRandomBook] = useState([]);
  const [number, setNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const randomNumber = () => {
    setNumber(Math.floor(Math.random() * 11));
    setRandomBook(booksMetaInfo[number]);
    setOpen(true);
  };

  const onSearch = async (keyword) => {
    const response = await booksApi.get("/search", {
      params: {
        q: keyword,
      },
    });
    setBooksMetaInfo(response.data.items);
    setDisabled(false);
    console.log(booksMetaInfo);
  };

  if (open === true) {
    return (
      <RecommendBook randomBook={randomBook} setOpen={setOpen} open={open} />
    );
  }
  return (
    <div style={{ marginTop: 20 }}>
      <Container textAlign="center">
        <Header block size="huge">
          Books
        </Header>
        <br />
        <SearchField onSearch={onSearch} />
        <br />
        <Button disabled={disabled} onClick={randomNumber}>
          Recommended
        </Button>
        <BookList
          booksMetaInfo={booksMetaInfo}
          setBooksMetaInfo={setBooksMetaInfo}
        />
      </Container>
    </div>
  );
}

export default App;
