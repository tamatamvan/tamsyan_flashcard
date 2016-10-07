const fs = require('fs');

class Flashcard {
  static getData(file) {
    let deck = fs.readFileSync('deck.json');
    return JSON.parse(deck);
  }
}

class FlashcardController {
  constructor(args = {}) {
    this.point = [];
    this.answer = ""
    this.current_soal = 0
  }

  generate_soal() {
    var soalsoal = Flashcard.getData();
    var soal = soalsoal[this.current_soal]['definition'];
    this.current_soal += 1;
    return soal;
  }

  cek_answer() {
    if (answer === data[i]['term']) {
      this.point.push(4)
    } else {
      this.point.push(-1)
    }
  }

  scoring() {
    var result = 0
    for (var i = 0; i < this.point.length; i++) {
      x = x + this.point[i]
    }
    return result
  }

}

class FlashcardView {
  constructor(args = {}) {

  }
  soal() {
    console.log(controller.generate_soal());
  }


}

let controller = new FlashcardController();
let view = new FlashcardView();

for (var i = 0; i < Flashcard.getData().length; i++) {
  view.soal();
}
