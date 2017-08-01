// Create a Sign-up Button

// Create a Sign-in Button
// onClick Button brings up an input form to verify the user

// Function to take image and place in grid
// Make sure can not enter another time
// Player 1 goes
let playerOneTurn = true

const playerOneImage = function () {
  alert('Player 1 Click on your placement choice')
  if (playerOneTurn === true) {
    document.getElementById('cell').append('deadLogo')
  } else {
    playerOneTurn = false
    let playerTwoTurn = true
  }
  playerOneImage()
}
  const playerTwoImage = function () {
    alert('Player 1 Click on your placement choice')
    if (playerTwoTurn === true) {
      document.getElementById('cell').append('buffetLogo')
    } else {
    }
    playerOneTurn = false
  }
  playerTwoImage()
}

// Player 2 goes

// Check for winer time
const playerOneWins = 0
const playerOneWins = 0

const winner = function (){


// counter to track wins/losses/ties
// after images are placedin td cells
const winner = function () {
// check rows
  if(#one_one === #one_two === #one_three) {return true}
  if(#two_one === #two_two === #two_three) {return true}
  if(#three_one === #three_two === #three_three) {return true}

//check columns
  if(#one_one === #two_one === #three_one) {return true}
  if(#one_two === #two_two === #three_two) {return true}
  if(#one_three === #two_three === #three_three) {return true}

// check diagnolas
 if(#one_one === #two_#two === #three_three) {return true}
 if(#one_three === #two_#two) === #three_one) {return true}
 else{return false}

// return playerOneWins + 1
// return playerTwoWins + 1
}
// Reset button
