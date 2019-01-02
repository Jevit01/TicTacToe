const readlineSync = require("readline-sync");
class Human {
  constructor(name, sym) {
    this.name = name;
    this.sym = sym;
  }

  getMove() {
    let playerMove = readlineSync.question("Make a move: \n");

    return playerMove;
  }
}

let human = new Human('human', '')
// console.log(human.getMove());
module.exports = Human;
