//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below and figure out the data flow
// 2. Add in your code from the terminal app (check for win logic)
// 3. Look for the @TODO, to fix
// next to each @TODO you will find tasks that need to be finished
// 4. GET THIS GAME WORKING!!

let currentMarker = 'X';
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

endGame = false;

// is called when a square is clicked. "this" = element here
const handleClick = (element) => {
  // check to see if the square clicked has anything in it, if not continue
  // this prevents an X being changed to an O
  row = parseInt(element.id.charAt(0));
  column = parseInt(element.id.charAt(2));
  console.log(`The element you clicked on has an id:  ${element.id}`)
  board[row][column] = currentMarker;
  if (!document.getElementById(element.id).innerHTML) {
    addMarker(element.id);
    computerTurn();
  }
};

// This is the function that let's the computer AI run

const computerTurn = (row, column) => {
  if (endGame === false) {
    row = Math.floor(Math.random() * 3);
    column = Math.floor(Math.random() * 3);
    if (board[row][column] === '') {
      addMarker(row + "-" + column);
    }
  }
};

const resetBoard = () => {
  // sanity check: this tells us the function is being called
  // collects all of the "td"s into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  
  // loops over the HTML Collections and clears out the Xs and Os
  // @TODO, Your code here: make sure to reset the array of arrays to empty for a new game
  board =
    ['', '', ''],
    ['', '', ''],
    ['', '', ''];
  console.log("the board was cleared!")
  const squares = document.getElementsByTagName("TD")
  for (i = 0; i < squares.length; i++) {
    console.log(squares[i]);
    squares[i].innerHTML = "";
    location.reload();
    return false;
  }

  //*******Added location.reload() to solve a bug where the letters of the board would clear, but
  //the values from the previous game were retained, meaning the game would still end at the same 
  //time, or would get stuck in a "X won the game!" loop.
  //Now the whole page reloads on restart. */

};

const addMarker = (id) => {
  // @TODO, Mix & Match. 
  // You will need the following pieces:
  // = currentMarker
  // .getElementById(id)
  // document
  // .innerHTML 
  // Arrange the above pieces into one a single line of code
  // to add an X or O to the board to the DOM so it can be seen on the screen.

  console.log(`*** The current marker is:  ${currentMarker}. ***`);
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`, row, column);
  document.getElementById(id).innerHTML = currentMarker;
  checkForWin();
  document.getElementById("player-turn").innerHTML = "It's " + currentMarker + "'s turn!";
}

// passes the element's id attribute from HTML to be used
const updateBoard = (id) => {
  // parses the id string into a number then captures the first and last part the newly create number as row & column
  // @TODO, Your code here: use the above information to change the board variable(array of arrays)
  // HINT: in your browser open up the dev tools -> console
  const row = parseInt(id.charAt(0));
  const column = parseInt(id.charAt(2));
  console.log(`you clicked the sq at ${row} and ${column}`);
  console.log(board);
};


const checkForWin = () => {
  // calls each checkForWin possibility and if any are true gives a page alert,
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    // **BONUS** you could make the dismissal of this alert window reset the board....
    // if no win, change the marker from X to O, or O to X for the next player.
    window.alert(`Player ${currentMarker} won!`);
    endGame === true;
    resetBoard();
  } else {
    changeMarker()
  }
}

const horizontalWin = () => {
  // @TODO, Your code here: to check for horizontal wins
  for (let row = 0; row < 3; row++) {
    if (board[row][0] === currentMarker && board[row][1] === currentMarker && board[row][2] === currentMarker) {
      return true;
    }
  }
};

const verticalWin = () => {
  // @TODO, Your code here: to check for vertical wins
  for (let column = 0; column < 3; column++) {
    if (board[0][column] === currentMarker && board[1][column] === currentMarker && board[2][column] === currentMarker) {
      return true;
    }
  }
};

const diagonalWin = () => {
  // @TODO, Your code here: to check for diagonal wins
  if (board[0][0] === currentMarker && board[1][1] === currentMarker && board[2][2] === currentMarker ||
    board[2][0] === currentMarker && board[1][1] === currentMarker && board[0][2] === currentMarker)
    return true;
};

const changeMarker = () => {
  if (currentMarker === "X") {
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
};

// **BONUSES**

// 1. Display the current player's turn // Done!
// 2. Count number of wins for each player and display them
// 3. Reset the number of wins
// 4. Clear the board on alert window dismissal // Done!
// 5. Add players names and display who wins, i.e. "Congrats Emily, you won with Os!"
