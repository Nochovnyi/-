let players = ['x', 'o'];
let activePlayer = 0;
let boardGame
function startGame() {
  boardGame = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  renderBoard(boardGame);
  alert(`Игрок № ${(activePlayer % 2) + 1} ходит первым! `);  
}

function click(row, column){
  activePlayer = activePlayer % 2;
  let chosePlayer = players[activePlayer] ;
  boardGame[row][column] = chosePlayer;
  renderBoard(boardGame);
  let chekgorizont = 0;
  let chekvertical = 0
  let chekline = 0
  let cheklinetwo = 0
  
  
  for (let i = 0; i < boardGame.length; i++) {
    if (boardGame[row][i] === chosePlayer) {
      chekgorizont++;
      if (boardGame.length === chekgorizont) {
        showWinner(activePlayer);
      } 
  } 
} 
  for (let i = 0; i < boardGame.length; i++) {
    if (boardGame[i][column] === chosePlayer) {
      chekvertical++;
      if (boardGame.length === chekvertical) {
        showWinner(activePlayer);
      } 
  } 
} 

  for (let i = 0; i < boardGame.length; i++) {
    if (boardGame[i][boardGame.length - 1 - i] === chosePlayer) {
      chekline++;
      if (boardGame.length === chekline) {
        showWinner(activePlayer);
      } 
  } 
} 

  for (let i = 0; i < boardGame.length; i++) {
    if (boardGame[i][boardGame.length - 3 + i] === chosePlayer) {
      cheklinetwo++;
      if (boardGame.length === cheklinetwo) {
        showWinner(activePlayer);
      } 
  } 
} 
 activePlayer++; 
  
}

