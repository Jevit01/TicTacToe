const HuPlayer = require("./HumanPlayer.js");
// const ComPlayer = require("./Computer.js");
class Board {
  constructor() {
    this.grid = [[1,2,3], [4,5,6], [7,8,9]];
    this.positionMap = {
      1: [0, 0],
      2: [0, 1],
      3: [0, 2],
      4: [1, 0],
      5: [1, 1],
      6: [1, 2],
      7: [2, 0],
      8: [2, 1],
      9: [2, 2],
    }
  }
// To check if if anyplayer win the game,and the game is over is so. Provide choice to restart.
isGameOver () {
  if (this.isVerticalWin() || this.isHorizontalWin()) {
    return true;
  }
  return false;
}
  displayBoard () {
    this.printRow(this.grid[0]);
    this.printLine();
    this.printRow(this.grid[1]);
    this.printLine();
    this.printRow(this.grid[2]);
  }
  printRow (row) {
    console.log(row.join(" | "));
  }
  printLine () {
    console.log("--------- ");
  }
  isValidMove (position) {
      // if (typeof this.positionMap[position] === 'number') {
        return true;
      // }
    // return false;
  }
  makeMove (position, sym) {
    let x = this.positionMap[position][0]
    let y = this.positionMap[position][1]
    this.grid[x][y] = sym
  }
  isVerticalWin() {
    if (this.grid[0][0] === this.grid[1][0] && this.grid[1][0] === this.grid[2][0]) {
      return true;
    } else if (this.grid[0][1] === this.grid[1][1] && this.grid[1][1] === this.grid[2][1]) {
      return true;
    } else if (this.grid[0][2] === this.grid[1][2] && this.grid[1][2] === this.grid[2][2]) {
      return true;
    } else if (this.grid[0][0] === this.grid[1][1] && this.grid[1][1] === this.grid[2][2]) {
      return true;
    } else if (this.grid[0][2] === this.grid[1][1] && this.grid[1][1] === this.grid[2][0]) {
      return true;
    }
    return false;
  }
  isHorizontalWin() {
    for (let i = 0; i < 3; i++) {
      if (this.grid[i][0] === this.grid[i][1] && this.grid[i][1] === this.grid[i][2]) {
        return true;
      }
    }
    return false;
}
}
let board = new Board();
// console.log(board.isGameOver());
module.exports = Board
