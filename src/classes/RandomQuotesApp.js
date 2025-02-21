import RandomQuote from './RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.quoteTextElement = document.getElementById('quote-text');
    this.qouteAuthorElement = document.getElementById('quote-author');
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.currentQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    const { text, author } = this.currentQuote;

    this.quoteTextElement.textContent = `"${text}"`;
    this.qouteAuthorElement.textContent = author;
  }

  getRandomQuote() {
    const randomQuote = RandomQuote.getRandomQuote();
    this.currentQuote = randomQuote;
    this.displayCurrentQuote();
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote());
  }
}

export default RandomQuotesApp;
