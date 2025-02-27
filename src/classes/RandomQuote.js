import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  /**
   * 1. Each async function returns Promise
   * 2.
   * 3. Promise returned by the getRandomQuoteViaAPI function will be always "fulfilled"
   * because we catch all possible errors
   * 4. Result of the "fulfilled" promise will be either Quote or undefined
   * 5. Therefore there is no need for try/catch block where we call this function
   */

  static async getRandomQuoteViaAPI() {
    const url = 'https://dummyjson.com/quotes/random';
    const option = { headers: { 'content-Type': 'application/json' } };
    try {
      const response = await fetch(url, option);
      const { id, quote: text, author } = await response.json();
      // resolves promise to Quote(promise becomes "fulfilled")
      return new Quote(id, text, author);
    } catch (error) {
      console.error(error);
      /**
       * 1. Returns undefined implicitly (resolves promise to undefined)
       * 2. Promise becomes "fulfilled"
       */
    }
  }

  // static getRandomQuoteViaAPI() {
  //   const url = 'https://dummyjson.com/quotes/random';
  //   const option = { headers: { 'content-Type': 'application/json' } };

  //   return fetch(url, option)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const { id, quote: text, author } = data;
  //       return new Quote(id, text, author);
  //     })
  //     .catch((error) => console.log(error));
  // }
}

export default RandomQuote;
