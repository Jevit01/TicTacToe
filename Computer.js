const readlineSync = require("readline-sync");
class Computer {
  constructor(name) {
    this.name = name;
  }

  getMove() {
    setInterval();
    let compChoice = readlineSync.question(Math.ceil(Math.random() * 9));
    return compChoice;
  }
}

let corey = new Computer("corey");
console.log(corey.getMove());
