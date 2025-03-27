const quotes = require('../../data/quotes');

exports.handler = async function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return {
    statusCode: 200,
    body: JSON.stringify(randomQuote),
    headers: { 'Content-Type': 'application/json' },
  };
};
