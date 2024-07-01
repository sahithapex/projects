document.addEventListener("DOMContentLoaded", () => {
      const cells = document.querySelectorAll(".cell");
      const restartButton = document.getElementById("restart");
      const message = document.getElementById("message");
  
      let board = Array(9).fill(null);
      let currentPlayer = "X";
      let isGameOver = false;
  
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
  
      cells.forEach(cell => {
          cell.addEventListener("click", handleCellClick);
      });
  
      restartButton.addEventListener("click", restartGame);
  
      function handleCellClick(event) {
          const index = event.target.getAttribute("data-index");
  
          if (board[index] || isGameOver) return;
  
          board[index] = currentPlayer;
          event.target.textContent = currentPlayer;
  
          if (checkWin(currentPlayer)) {
              message.textContent = `Player ${currentPlayer} wins!`;
              isGameOver = true;
          } else if (board.every(cell => cell)) {
              message.textContent = "It's a draw!";
              isGameOver = true;
          } else {
              currentPlayer = currentPlayer === "X" ? "O" : "X";
          }
      }
  
      function checkWin(player) {
          return winningCombinations.some(combination => {
              return combination.every(index => {
                  return board[index] === player;
              });
          });
      }
  
      function restartGame() {
          board = Array(9).fill(null);
          cells.forEach(cell => {
              cell.textContent = "";
          });
          currentPlayer = "X";
          isGameOver = false;
          message.textContent = "";
      }
  });
  