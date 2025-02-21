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
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.qouteAuthorElement.textContent = this.currentQuote.setCopy();
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
