
const cells = document.getElementById("game-board");
const resultsList = document.getElementById("results-list");
const conclusion = document.getElementById("conclusion");
let board = Array(9).fill("");
let currentPlayer = "X";
let gameResult = "";
let resultsHistory = JSON.parse(localStorage.getItem("resultsHistory")) || [];


function renderBoard() {
        cells.innerHTML = "";
        board.forEach((value, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = value;
        cell.addEventListener("click", () => cellClicked(index));
        cells.appendChild(cell);
        });
    }

function resetGame() {
      board = Array(9).fill("");
      currentPlayer = "X";
      gameResult = "";
      renderBoard();
  }

function computerMove() {
        const emptyCells = board.reduce((move, value, index) => {
            if (value === "") {
                move.push(index);
            }
            return move;
        }, []);

              if (emptyCells.length > 0) {
                  const randomIndex = Math.floor(Math.random() * emptyCells.length);
                  const computerIndex = emptyCells[randomIndex];
                  board[computerIndex] = "O";
                  renderBoard();
                  checkWinner();
                  currentPlayer = "X";
              }
    }

  function cellClicked(index) {
      if (board[index] === "" && gameResult === "") {
          board[index] = currentPlayer;
          renderBoard();
          checkWinner();
          currentPlayer = currentPlayer === "X" ? "O" : "X";
          if (gameResult === "") {
            setTimeout(() => computerMove(), 
            1000);
          }
          }
      }

function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8],
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8],
            [0, 4, 8], 
            [2, 4, 6]
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                gameResult = board[a];
                updateResults();
                return;
            }
        }

              if (!board.includes("") && gameResult === "") {
                  gameResult = "Tie";
                  alert("Tie!  ")
                  updateResults();
              }
    }

function updateResults() {
        const result = {dateTime: new Date().toLocaleString(),
            winner: gameResult === "O" ? "Computer" : gameResult === "X" ? "You" : "Tie"
                        };
        resultsHistory.push(result);
        localStorage.setItem("resultsHistory", JSON.stringify(resultsHistory));
        renderResults();
        setTimeout(() => resetGame(), 
        5000);
    }

function renderResults() {
        resultsList.innerHTML = "";
        resultsHistory.forEach(result => {
            const li = document.createElement("li");
            li.textContent = `${result.dateTime} - Winner: ${result.winner}`;
            resultsList.appendChild(li);
        });

        const wins = resultsHistory.filter(result => result.winner === "You").length;
        const computerWins = resultsHistory.filter(result => result.winner === "Computer").length;
        const ties = resultsHistory.filter(result => result.winner === "Tie").length;

        conclusion.textContent = `You Win: ${wins} | Computer Wins: ${computerWins} | Ties: ${ties}`;
    }

function clearResults() {
      resultsHistory = [];
      localStorage.removeItem("resultsHistory");
      renderResults();
  }

renderBoard();
renderResults();