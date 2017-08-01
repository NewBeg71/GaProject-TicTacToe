'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// Create a Sign-up Button

// Create a Sign-in Button
// onClick Button brings up an input form to verify the user

// Function to take image and place in grid
// Make sure can not enter another time
// Player 1 goes
let playerOneTurn = true

const playerOneImage = function () {
  if (playerOneTurn === true) {
    alert('Player 1 Click on your placement choice')}
  if (playerOneTurn === true) {
    $( ".cell" ).click(function() {
      $('.cell').onCLick.append("<img src = './Images/deadlogo.jpg' />")
    } )
    } else {
      playerOneTurn = false
      let playerTwoTurn = true
    }
  }

console.log('something')
// playerOneImage()



  const playerTwoImage = function () {
    alert('Player 1 Click on your placement choice')
    if (playerTwoTurn === true) {
    $('.cell').onCLick.append("#buffetLogo")
    /* document.getElementById('cell').append('buffetLogo') */
    } else {
    }
    playerTwoTurn = false
    let playerOneTurn = true
  }
  playerTwoImage()
}

// Player 2 goes

// Check for winer time
const playerOneWins = 0
const playerOneWins = 0

const winner = function (){

}
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

// Reset button
 const reset = funtion () {

 }
