import axios from "axios";

const API_KEY = process.env.REACT_APP_OMDB_KEY;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const getMoviesByTitle = (title, page = 1) =>
  axios.get(`${API_BASE_URL}/?apikey=${API_KEY}&s=${title}&page=${page}`);

export { getMoviesByTitle };
