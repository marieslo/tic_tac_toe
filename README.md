# Tic-Tac-Toe Game

This is a simple Tic-Tac-Toe game where you can play against a computer. The game alternates between player "X" and computer "O". The game records results and stores them in the local storage, providing a history of wins, ties, and losses. You can also clear the results at any time.

## Features

- **Interactive Gameplay:** Play against the computer (Player "X" vs. Computer "O").
- **Results History:** Keeps track of the game results (wins, ties, and losses) stored in local storage.
- **Replay Option:** After a game finishes, you can replay by clicking the "Replay" button.
- **Clear Results:** You can clear the entire game history.

## Technologies Used
- **JavaScript (Vanilla)**
- **HTML**
- **CSS**

## How it Works

1. **Game Mechanics:**
   - The game starts with an empty 3x3 grid. Player "X" makes the first move, followed by the computer, which makes its move randomly.
   - The game checks for a winner after every move. If a player or the computer wins, the game will announce the winner and display the results in the history.
   - If all cells are filled with no winner, the game is a tie.

2. **Results Tracking:**
   - After each game, the results (who won or if it was a tie) are saved in the browser's local storage.
   - A summary of wins, computer wins, and ties is displayed.

3. **Replay Button:**
   - After the end of each game, you can reset the game and start a new round using the "Replay" button.

4. **Clear Results:**
   - The "Clear Results" button clears the results history stored in local storage.


<img width="630" alt="TicTacToe" src="https://github.com/marieslo/TicTacToe/assets/110108878/b413465a-fb89-4306-805b-457dc8eb3d42">
