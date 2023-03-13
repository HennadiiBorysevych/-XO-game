let playerTurn = "x";
let moves = 0;
let isGameOver = false;
const span = document.getElementsByTagName("span");

function play(y) {
  if (y.dataset.player == "none" && window.isGameOver == false) {
    y.innerHTML = playerTurn;
    y.dataset.player = playerTurn;
    moves++;
    if (playerTurn == "x") {
      playerTurn = "o";
    } else if (playerTurn == "o") {
      playerTurn = "x";
    }
  }

  checkWinner(1, 2, 3);
  checkWinner(4, 5, 6);
  checkWinner(7, 8, 9);
  checkWinner(1, 4, 7);
  checkWinner(2, 5, 8);
  checkWinner(3, 6, 9);
  checkWinner(1, 5, 9);
  checkWinner(3, 5, 7);
  if (moves == 9 && isGameOver == false) {
    draw();
  }
}
function checkWinner(a, b, c) {
  a--;
  b--;
  c--;
  if (
    (span[a].dataset.player === span[b].dataset.player &&
      span[b].dataset.player === span[c].dataset.player &&
      span[a].dataset.player === span[c].dataset.player &&
      span[a].dataset.player === "x") ||
    (span[a].dataset.player === "o" && isGameOver == false)
  ) {
    span[a].parentNode.className += "activeBox";
    span[b].parentNode.className += "activeBox";
    span[c].parentNode.className += "activeBox";
    isGameOver(a);
  }
}
function playAgain() {
  document
    .getElementsByClassName("alert")[0]
    .parentNode.removeChild(document.getElementsByClassName("alert")[0]);
  resetGame();
  window.isGameOver = false;
  for (let i = 0; i < span.length; i++) {}
}
