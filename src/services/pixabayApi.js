const API_KEY = '47606801-75c62912983a7ab29411db2a8';
const BASE_URL = 'https://pixabay.com/api';

export const fetchImages = (searchImage, page) => {
  return fetch(
    `${BASE_URL}/?q=${encodeURIComponent(
      searchImage
    )}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
