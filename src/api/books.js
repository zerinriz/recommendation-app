import axios from "axios";
const KEY = "AIzaSyCVQbdMe86BvedoUwEMQwmMWpO4F7IqEK8";

export default axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes?",
  params: {
    filter: "partial",
    maxResults: 10,
    key: KEY,
  },
});
