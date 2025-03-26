const isLocalhost = window.location.hostname === 'localhost';

const config = {
  PUBLIC_API_URL: 'https://dummyjson.com',
  API_URL: isLocalhost
    ? 'http://localhost:3000'
    : `${window.location.origin}/.netlify/functions/randomQuote`,
};

export default config;
