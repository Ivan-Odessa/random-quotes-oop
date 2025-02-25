import Quote from './Quote.js';
import RandomQuote from './RandomQuote.js';
class RandomQuotesApp {
  constructor() {
    this.quoteTextElement = document.getElementById('quote-text');
    this.qouteAuthorElement = document.getElementById('quote-author');
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.randomQuoteAPIBtn = document.getElementById('random-quote-api-btn');
    this.currentQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.qouteAuthorElement.textContent = this.currentQuote.setCopy();
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

  getRandomQuoteViaAPI() {
    RandomQuote.getRandomQuoteViaAPI().then((quote) => {
      this.changeCurrentQuote(quote);
    });
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote());
    this.randomQuoteAPIBtn.addEventListener('click', () =>
      this.getRandomQuoteViaAPI()
    );
  }
}

export default RandomQuotesApp;
