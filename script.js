let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const messageElement = document.getElementById("message");

function handleClick(index) {
  if (board[index] === "" && !checkWinner()) {
    board[index] = currentPlayer;
    renderBoard();
    if (!checkWinner()) {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      messageElement.innerText = `Player ${currentPlayer}'s turn`;
    }
  }
}

function renderBoard() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell, index) => {
    cell.innerText = board[index];
  });
}

function checkWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      messageElement.innerText = `Player ${board[a]} wins!`;
      return true;
    }
  }
  if (!board.includes("")) {
    messageElement.innerText = "It's a draw!";
    return true;
  }
  return false;
}

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  messageElement.innerText = `Player ${currentPlayer}'s turn`;
  renderBoard();
}

messageElement.innerText = `Player ${currentPlayer}'s turn`;
renderBoard();
