const API_KEY = '5H7buSTTqMJ1GzpFesAlq2rDmhfUUNkQ';
const BASE_URL = 'https://api.giphy.com/v1/gifs';

export const getGifs = searchText => {
  return fetch(
    `${BASE_URL}/search?q=${encodeURIComponent(
      searchText
    )}&api_key=${API_KEY}&limit=30`
  );
};
