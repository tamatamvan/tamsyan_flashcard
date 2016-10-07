const fs = require('fs');

class Flashcard {
  static getData(file) {
    let deck = fs.readFileSync('deck.json');
    return JSON.parse(deck);
  }
}

class FlashcardController {
  constructor(args={}) {

  }
}

class FlashcardView {
  constructor(args={}) {
    this.varr = args['varr'];
  }
}

let controller = new FlashcardController();
let view = new FlashcardView();
