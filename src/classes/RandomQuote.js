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
   *  1. Each async function returns Promise
   *  2. Promise returned by the getRandomQuoteViaApi function will be always * *   'fulfilled' because we catch all possible errors
   *  3. Result of the 'fulfilled' promise eill be either Quote or undefined (if *  error is thrown)
   *  4. Therefore there is no need for try/catch block where we call this     * *  function
   */
  static async getRandomQuoteViaApi() {
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
      // resolves promise to Quote(Promise becomes "fulfilled")
      return new Quote(id, quote, author);
    } catch (error) {
      console.error(error);
      /**
       * 1. Returns undefined implicitly(resolves promise to undefined)
       * 2.Promise becomes "fulfilled"
       */
    }
  }

  // static getRandomQuoteViaApi() {
  //   const url = 'https://dummyjson.com/quotes/random';
  //   const options = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };

  //   return fetch(url, options)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const { id, quote, author } = data;
  //       return new Quote(id, quote, author);
  //     })
  //     .catch((error) => console.log(error));
  // }
}

export default RandomQuote;
