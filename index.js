let playerTurn = "x";
let moves = 0;
let isGameOver = false;
const span = document.getElementsByTagName("span");
let restartButton = `<button onclick="resetGame()">Restart Game</button>`;

function play(box) {
  if (box.dataset.player == "none" && isGameOver === false) {
    box.innerHTML = playerTurn;
    box.dataset.player = playerTurn;
    moves++;
    playerTurn = playerTurn == "x" ? "o" : "x";
  }

  checkWinner(1, 2, 3);
  checkWinner(4, 5, 6);
  checkWinner(7, 8, 9);
  checkWinner(1, 4, 7);
  checkWinner(2, 5, 8);
  checkWinner(3, 6, 9);
  checkWinner(1, 5, 9);
  checkWinner(3, 5, 7);

  if (moves == 9 && isGameOver === false) {
    draw();
  }
}
function checkWinner(a, b, c) {
  a--;
  b--;
  c--;
  if (
    isGameOver == false &&
    span[a].dataset.player === span[b].dataset.player &&
    span[b].dataset.player === span[c].dataset.player &&
    span[a].dataset.player === span[c].dataset.player &&
    (span[a].dataset.player === "x" || span[a].dataset.player === "o")
  ) {
    span[a].parentNode.className += " activeBox";
    span[b].parentNode.className += " activeBox";
    span[c].parentNode.className += " activeBox";
    gameOver(a);
  }
}
function playAgain() {
  document
    .getElementsByClassName("alert")[0]
    .parentNode.removeChild(document.getElementsByClassName("alert")[0]);
  resetGame();
  isGameOver = false;
  for (let i = 0; i < span.length; i++) {
    span[i].parentNode.className = span[i].parentNode.cloneName.replace(
      "activeBox",
      ""
    );
  }
}

function resetGame() {
  for (let i = 0; i < span.length; i++) {
    span[i].dataset.player = "none";
    span[i].innerHTML = "&nbsp;";
  }
  playerTurn = "x";
  location.reload();
}
function gameOver(a) {
  let gameOverAlert =
    "<b>GAME OVER</b><br><br> Player " +
    span[a].dataset.player.toUpperCase() +
    " Win! <br><br>" +
    restartButton;
  let div = document.createElement("div");
  div.className = "alert";
  div.innerHTML = gameOverAlert;
  document.getElementsByTagName("body")[0].appendChild(div);
  isGameOver = true;
  moves = 0;
}

function draw() {
  let drawAlert = "<b>Draw!</b><br><br>" + restartButton;
  let div = document.createElement("div");
  div.className = "alert";
  div.innerHTML = drawAlert;
  document.getElementsByTagName("body")[0].appendChild(div);
  isGameOver = true;
  moves = 0;
}
