import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaPublicApi() {
    const url = 'https://dummyjson.com/quotes/random';
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const { id, quote, author } = data;
      return new Quote(id, quote, author);
    } catch (error) {
      console.error(error);
    }
  }

  static async getRandomQuoteViaOwnApi() {
    const url = 'http://localhost:3000/quotes/random-single';
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      const { id, text, author } = data;
      return new Quote(id, text, author);
    } catch (error) {
      console.error(error);
    }
  }
}

export default RandomQuote;
