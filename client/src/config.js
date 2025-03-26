const isLocalhost = window.location.hostname === 'localhost';

const config = {
  PUBLIC_API_URL: 'https://dummyjson.com',
<<<<<<< HEAD
  API_URL: '/.netlify/functions/randomQuote',
=======
  API_URL: isLocalhost
    ? 'http://localhost:3000'
    : `${window.location.origin}/.netlify/functions/randomQuote`,
>>>>>>> 00fbda17f4424f100d59e7d6040cd4b718c4e44a
};

export default config;
