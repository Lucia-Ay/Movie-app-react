import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGNiNzJkNDdiMmJmNzM4MDU2YTg4ODVkYjYzNzgyYSIsInN1YiI6IjY0OTMxMmMyZjlhYTQ3MDEwNjBlZDMzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dl-taxI0WbhNlpO2__t9XqdSOZQ5kcy7pNvEKQRbzB0"

const headers = {
  Authorization: 'Bearer ' + TMDB_TOKEN,
};

export const fetchData = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default fetchData;
