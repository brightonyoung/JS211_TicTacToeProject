let currentMarker = 'X'
let board = [
  ['','',''],
  ['','',''],
  ['','','']
];
let gameover = false;
let move = false;


const handleClick = (element) => {
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
    move = false;
    setTimeout(()=> {
        computerTurn();
    }, 600)
  }
}

const computerTurn = () => {
    if (gameover === false) {
        computerLogic();
        while (move === false) {
            let row = Math.floor(Math.random()*3)
            let col = Math.floor(Math.random()*3)
            if (board[row][col] === '') {
                addMarker(row + '-' + col);
                move = true;
            }
        }
    }
}

const computerLogic = () => {
  //column win
  if (move === false) {
    let colOfX = 0;
    for(let i = 0; i < 3; i++) {
      if ((board[0][i] === 'O' && board[1][i] ==='O') || (board[1][i] === 'O' && board[2][i] ==='O') || (board[0][i] === 'O' && board[2][i] ==='O')) {
        colOfX = i;
        for(let x = 0; x < 3; x++) {
        let col = colOfX;
        if (board[x][col] === '') {
          addMarker(x + '-' + col);
          move = true;
          }
        }
      }
    }
  }  
  //row win
  if (move === false) {
    let rowOfX = 0;
    for(let i = 0; i < 3; i++) {
      if ((board[i][0] === 'O' && board[i][1] ==='O') || (board[i][1] === 'O' && board[i][2] ==='O') || (board[i][0] === 'O' && board[i][2] === 'O')) {
        rowOfX = i;
        for(let x = 0; x < 3; x++) {
        let row = rowOfX;
        if (board[row][x] === '') {
          addMarker(row + '-' + x);
          move = true;
          }
        }
      }
    }
  }  
  //diagonal win
    if (move === false) {
    if ((board[0][0] === 'O' && board[1][1] ==='O') || (board[1][1] === 'O' && board[2][2] ==='O') || (board[0][0] === 'O' && board[2][2] ==='O')) {
      for (let i = 0; i < 3; i++) {
        if (board[i][i] === '') {
          addMarker(i + '-' + i);
          move = true;
          }
        }
     }
    } 
    if (move === false) {
      if ((board[2][0] === 'O' && board[1][1] ==='O') || (board[1][1] === 'O' && board[0][2] ==='O') || (board[2][0] === 'O' && board[0][2] ==='O')) {
           let y = 2;
           for (let i = 0; i < 3; i++) {
             if (board[y][i] === '') {
             addMarker(y + '-' + i);
             move = true;
           }
           y = y - 1;
         }
      }
    }
       
  //column block
  if (move === false) {
    let colOfX = 0;
    for(let i = 0; i < 3; i++) {
      if ((board[0][i] === 'X' && board[1][i] ==='X') || (board[1][i] === 'X' && board[2][i] ==='X') || (board[0][i] === 'X' && board[2][i] ==='X')) {
        colOfX = i;
        for(let x = 0; x < 3; x++) {
        let col = colOfX;
        if (board[x][col] === '') {
          addMarker(x + '-' + col);
          move = true;
          }
        }
      }
    }
  }  
  //row block
  if (move === false) {
    let rowOfX = 0;
    for(let i = 0; i < 3; i++) {
      if ((board[i][0] === 'X' && board[i][1] ==='X') || (board[i][1] === 'X' && board[i][2] ==='X') || (board[i][0] === 'X' && board[i][2] === 'X')) {
        rowOfX = i;
        for(let x = 0; x < 3; x++) {
        let row = rowOfX;
        if (board[row][x] === '') {
          addMarker(row + '-' + x);
          move = true;
          }
        }
      }``
    }
  }  
  //diagonal block
  if (move === false) {
    if ((board[0][0] === 'X' && board[1][1] ==='X') || (board[1][1] === 'X' && board[2][2] ==='X') || (board[0][0] === 'X' && board[2][2] ==='X')) {
      for (let i = 0; i < 3; i++) {
        if (board[i][i] === '') {
          addMarker(i + '-' + i);
          move = true;
         }
      }
    }
  }
  if (move === false) {
    if ((board[2][0] === 'X' && board[1][1] ==='X') || (board[1][1] === 'X' && board[0][2] ==='X') || (board[2][0] === 'X' && board[0][2] ==='X')) {
          let y = 2;
          for (let i = 0; i < 3; i++) {
            if (board[y][i] === '') {
            addMarker(y + '-' + i);
            move = true;
          }
          y = y - 1;
        }
    }
  } 
}

const addMarker = (id) => {
    console.log(`We'll place a mark on square: ${id}`)
    document.getElementById(id).innerHTML = currentMarker;
    const row = parseInt(id.charAt(0))
    const column = parseInt(id.charAt(2)) 
    board[row][column] = currentMarker
    console.log(board)
    checkForWin()
}

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    // **BONUS** you could make the dismissal of this alert window reset the board...
    gameover = true;
    setTimeout(()=> {
        window.alert(`Player ${currentMarker} won!`)
    }, 400)
    } else if (tieGame()) {
      gameover = true;
      setTimeout(()=> {
        window.alert('It\'s a tie!')
      }, 400)
    } else {
    changeMarker()
  }
}

const horizontalWin = () => {
    if((board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') || 
    (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') ||
    (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') || 
    (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') ||
    (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') || 
    (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O')){ 
      return true;
    }
}

const verticalWin = () => {
if((board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') || 
    (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') ||
    (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') || 
    (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') ||
    (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') || 
    (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O')){
    return true;
    } 
}

const diagonalWin = () => {
if((board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') || 
    (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') ||
    (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') || 
    (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O')){
    return true;
    } 
}

const tieGame = () => {
  if((board[0][0] === 'X' || board[0][0] === 'O') && 
    (board[0][1] === 'X' || board[0][1] === 'O') &&
    (board[0][2] === 'X' || board[0][2] === 'O') &&
    (board[1][0] === 'X' || board[1][0] === 'O') &&
    (board[1][1] === 'X' || board[1][1] === 'O') &&
    (board[1][2] === 'X' || board[1][2] === 'O') &&
    (board[2][0] === 'X' || board[2][0] === 'O') &&
    (board[2][1] === 'X' || board[2][1] === 'O') &&
    (board[2][2] === 'X' || board[2][2] === 'O')){
    return true;
    } 
}
  
const changeMarker = () => {
  // ternary operator: if it's an X make it an O, if O make it an X
  currentMarker = currentMarker === 'X' ? 'O' : 'X'
}

const resetBoard = () => {
  const squares = document.getElementsByTagName('TD')
  
  for (i=0; i<squares.length; i++) {
    console.log(squares[i])
    squares[i].innerHTML = null
  }
  move = false;
  gameover = false;
  board = [
    ['','',''],
    ['','',''],
    ['','','']
  ];
}

// **BONUSES**

// 1. Display the current player's turn
// 2. Count number of wins for each player and display them
// 3. Reset the number of wins
// 4. Clear the board on alert window dismissal
// 5. Add players names and display who wins, i.e. 'Congrats Emily, you won with 0s!'