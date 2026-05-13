import Quote from './Quote.js';
import RandomQuote from './RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.getQuoteBtn = document.querySelector('.quotes__btn--primary');
    this.getApiQuoteBtn = document.querySelector('.quotes__btn--api');
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

  getRandomQuote() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  async getRandomApiQuote() {
    const randomQuoteViaApi = await RandomQuote.getRandomQuoteViaApi();
    this.changeCurrentQuote(randomQuoteViaApi);
  }

  init() {
    this.getQuoteBtn.addEventListener('click', () => this.getRandomQuote());
    this.getApiQuoteBtn.addEventListener('click', () =>
      this.getRandomApiQuote(),
    );
  }
}

export default RandomQuotesApp;
