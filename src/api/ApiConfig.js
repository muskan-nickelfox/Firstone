import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID VVZZ0j_Jwyct8zZO8rFDjO7Olq0K6S3_JqUHPx5KzBQ"
  }
});
