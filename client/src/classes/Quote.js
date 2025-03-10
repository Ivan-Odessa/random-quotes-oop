class Quote {
  constructor(id, text, author) {
    this.id = id;
    this.text = text;
    this.author = author;
  }

  formatText() {
    return `"${this.text}"`;
  }

  setCopy() {
    return `© ${this.author}`;
  }
}

export default Quote;
