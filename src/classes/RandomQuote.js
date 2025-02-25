import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static getRandomQuoteViaAPI() {
    const url = 'https://dummyjson.com/quotes/random';
    const option = { headers: { 'content-Type': 'application/json' } };

    return fetch(url, option)
      .then((response) => response.json())
      .then((data) => {
        const { id, quote: text, author } = data;
        return new Quote(id, text, author);
      })
      .catch((error) => console.log(error));
  }
}

export default RandomQuote;
