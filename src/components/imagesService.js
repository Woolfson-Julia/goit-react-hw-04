import axios from 'axios';

export const fetchImages = async (topic) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      client_id: 'YcxlRspkhN8jxkIwedxhJPCTQsoC8f57HtjeLCsgiS4',
      query: topic,
    },
  });
  return response.data.results;
}

