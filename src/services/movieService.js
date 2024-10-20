import axios from 'axios';

const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjFkN2VjOGY4NWVhOGE4ZDk5OGQxZmM5ZmQ2NzdmZCIsIm5iZiI6MTcyOTI1OTEzOC4yODU3MjEsInN1YiI6IjY3MDQzYzg2YjRlM2QxYTQ4NDc0MDg4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yiX8_dbBPTXivlRmbgDHCDce3oDlXLSHUau2-pQH4kc'; // This is the token provided by TMDB
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchMovies = (query) => {
  return axios.get(`${BASE_URL}search/movie?query=${query}`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      accept: 'application/json',
    },
  });
};

export const fetchTopRatedMovies = () => {
    return axios.get(`${BASE_URL}movie/top_rated?language=en-US&page=1`, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        accept: 'application/json',
      },
    });
  };

export const fetchUpcomingMovies = () => {
  return axios.get(`${BASE_URL}movie/upcoming?language=en-US&page=1`,{
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN} `,
      accept: 'application/json',
    }
  });

};

export const fetchNowPlaying = () => {
  return axios.get(`${BASE_URL}movie/now_playing`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN} `,
      accept: 'application/json',
    }
  });
};


