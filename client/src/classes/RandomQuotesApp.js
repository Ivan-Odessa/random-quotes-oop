import Quote from './Quote.js';
import RandomQuote from './RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.querySelector('.quotes__btn--primary');
    this.randomQuotePublicAPIBtn = document.querySelector(
      '.quotes__btn--public-api',
    );
    this.randomQuoteOwnAPIBtn = document.querySelector('.quotes__btn--own-api');
    this.quoteTextElement = document.querySelector('.quotes__text');
    this.quoteAuthorElement = document.querySelector('.quotes__author');
    this.currentQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
  }

  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayCurrentQuote();
    }
  }

  randomQuoteHandler() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  async handleRandomQuoteViaAPI(apiIsOwn = false) {
    this.changeCurrentQuote(
      apiIsOwn
        ? await RandomQuote.getRandomQuoteViaOwnApi()
        : await RandomQuote.getRandomQuoteViaPublicApi(),
    );
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () =>
      this.randomQuoteHandler(),
    );
    this.randomQuotePublicAPIBtn.addEventListener('click', () =>
      this.handleRandomQuoteViaAPI(),
    );
    this.randomQuoteOwnAPIBtn.addEventListener('click', () =>
      this.handleRandomQuoteViaAPI(true),
    );
  }
}

export default RandomQuotesApp;
