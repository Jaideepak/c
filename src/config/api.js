const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY = "1cf43bcc7010fe55ad6dc100d915a036";
export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&lang=en&category=${category}&apikey=${API_KEY}`;

export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;
//https://gnews.io/api/v4/top-headlines?country=us&lang=en&category=general&apikey=1cf43bcc7010fe55ad6dc100d915a036 
// `https://newsapi.org/v2/top-headlines?country=us&apiKey=1c711faae428438aa51354c290ab6ae2`//