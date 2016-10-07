const fs = require('fs');

class Flashcard {
  static getData(file) {
    let deck = fs.readFileSync(file);
    return JSON.parse(deck);
  }
}

class FlashcardController {
  constructor(args = {}) {
    this.point = [];

  }
  
  call_data() {

  }
  generate_soal() {

  }
  ask_input() {

  }
  cek_answer() {

  }
  scoring() {

  }

}

class FlashcardView {
  constructor(args = {}) {
    this.varr = args['varr'];
  }
}

let controller = new FlashcardController();
let view = new FlashcardView();

console.log(Flashcard.getData('deck.json'));
