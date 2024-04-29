let origBoard;
let huPlayer = "o";
let aiPlayer = "x";
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cells = document.querySelectorAll(".cell");

// reset button
document.querySelector(".end-game button").addEventListener("click", startGame);

// start game
startGame();

function startGame() {
  document.querySelector(".end-game").classList.remove("end-game--show");
  origBoard = Array.from(Array(9).keys());
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.addEventListener("click", turnClick);
  });
}

function turnClick(e) {
  if (typeof origBoard[e.target.id] == "number") {
    const isWon = turn(e.target.id, huPlayer);

    if (!isWon) {
      if (!checkTie()) turn(bestSpot(), aiPlayer);
    }
  }
}
function turn(index, player) {
  origBoard[index] = player;

  cells[index].textContent = player;
  let gameWon = checkWin(origBoard, player);
  if (gameWon) gameOver(gameWon);
  return gameWon;
}

function checkWin(board, player) {
  let plays = board.reduce((a, e, i) => (e === player ? a.concat(i) : a), []);
  let gameWon = null;
  winHappend = winCombinations.some((winCombo) => {
    return winCombo.every((i) => {
      return plays.includes(i);
    });
  });
  if (winHappend) gameWon = player;
  return gameWon;
}

function gameOver(gameWon) {
  cells.forEach((cell) => cell.removeEventListener("click", turnClick));
  declareWinner(gameWon == huPlayer ? "You Won" : "You Lost");
}
function declareWinner(who) {
  document.querySelector(".end-game").classList.add("end-game--show");
  document.querySelector(".end-game h1").textContent = who;
}
function bestSpot() {
  return emptyCells()[0];
}
function emptyCells() {
  return origBoard.filter((i) => typeof i == "number");
}
function checkTie() {
  if (emptyCells().length == 0) {
    cells.forEach((cell) => cell.removeEventListener("click", turnClick));
    declareWinner("Tie Game");
    return true;
  }
  return false;
}

const students = [
  {
    name: "john",
    age: 36,
  },
  {
    name: "ben",
    age: 26,
  },
  {
    name: "david",
    age: 16,
  },
  {
    name: "max",
    age: 27,
  },
  {
    name: "maria",
    age: 19,
  },
  {
    name: "rose",
    age: 24,
  },
];
