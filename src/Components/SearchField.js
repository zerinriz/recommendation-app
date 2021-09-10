import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

function SearchField({ onSearch }) {
  const [query, setQuery] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      ></Input>
      <Button icon="search"></Button>
    </Form>
  );
}

export default SearchField;
