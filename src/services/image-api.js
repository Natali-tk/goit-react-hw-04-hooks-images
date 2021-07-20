import axios from 'axios';

const key = '21726262-6f53751bde553225c4af8487e';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async ({ query, page }) => {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return response.data.hits;
};

