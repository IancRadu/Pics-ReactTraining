import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID C6HHX2i0Al4EASzcQcLqEArMGX5VWn2YAfNzCeToNE0",
  },
});
