import axios from "axios";
const KEY = `${process.env.REACT_APP_UNSPLASH_URL}`;

export default axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes?",
  params: {
    filter: "partial",
    maxResults: 10,
    key: KEY,
  },
});
