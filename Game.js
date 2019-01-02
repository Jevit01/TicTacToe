// Define Game class for the whole game
const Board = require("./Board.js");
const HuPlayer = require("./HumanPlayer.js");
class Game {
  constructor(board, player1, player2) {
    this.board = new Board();
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = this.player1;
  }
  play() {
    while (!this.board.isGameOver()) {
      this.board.displayBoard();
      let move = this.currentPlayer.getMove();
      if (this.board.isValidMove(move)) {
        this.board.makeMove(move, this.currentPlayer.sym);
        this.switchPlayer()
      }
    }
    this.switchPlayer()
    this.board.displayBoard();
    console.log("Congratulations, " + this.currentPlayer.name + ", you won!")
  }

  // switch player to input choice
  switchPlayer() {
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }
}

let myGame = new Game(new Board(), new HuPlayer("Paola", "X"), new HuPlayer("Thomas", "O"))
myGame.play();
