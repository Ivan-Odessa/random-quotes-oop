import RandomQuote from './RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.getQuoteBtn = document.querySelector('.quotes__btn--primary');
    this.quoteTextElement = document.querySelector('.quotes__text');
    this.quoteAuthorElement = document.querySelector('.quotes__author');
    this.currentQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
  }

  getRandomQuote() {
    const randomQuote = RandomQuote.getRandomQuote();
    this.currentQuote = randomQuote;
    this.displayCurrentQuote();
  }

  init() {
    this.getQuoteBtn.addEventListener('click', () => this.getRandomQuote());
  }
}

export default RandomQuotesApp;
