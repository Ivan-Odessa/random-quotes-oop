const isLocalhost = window.location.hostname === '127.0.0.1';

const config = {
  PUBLIC_API_URL: 'https://dummyjson.com',
  API_URL: isLocalhost
    ? 'http://localhost:3000'
    : `/.netlify/functions/randomQuote`,
};

export default config;
