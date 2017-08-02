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
// BEFORE USING ABOVE BUTTONS TO INITIATE THE GAME JUST GET IT Working
// Continue creating variables & functions individually => nest

$(document).ready(function (){
  const x = 'X' // X=Player2//if get this working add image
  const o = 'O' //O=Player2
  let turns = 0
  $('table td').on('click', function(){
    // console.log('something') - seems to be working - move on
  })
})

// Function to take image and place in grid
// Make sure can not enter another time
// Player 1 goes
let playerOneTurn = true

const playerOneImage = function () {
  if (playerOneTurn === true) {
    alert('Player 1 Click on your placement choice')
    $( ".cell" ).on('click', function() {
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


// Player 2 goes

// Check for winer times
const playerOneWins = 0
const playerTwoWins = 0

const winner = function (){

}
// counter to track wins/losses/ties
// after images are placedin td cells
const one_one =$('#one-one')
const one_two =$('#one_two')
const one_three =$('#one_three')
const two_one =$('#two_one')
const two_two =$('#two_two')
const two_three =$('#two_three')
const three_one =$('#three_one')
const three_two =$('#three_two')
const three_three =$('#three_three')

$('td').on('click', function () {
 // if logic works place above nested in the first function
}
// check rows
  if(#one_one.hasClass('0') && #one_two.hasClass('0') && #one_three.hasClass('0')) || // {return true}
    (#two_one.hasClass('0') && #two_two.hasClass('0') && #two_three.hasClass('0')) || // {return true}
    (#three_one.hasClass('0') && #three_two.hasClass('0') && #three_three.hasClass('0')) // {return true}

//check columns
    (#one_one.hasClass('0') && #two_one.hasClass('0') && #three_one.hasClass('0')) ||// {return true}
    (#one_two.hasClass('0') === #two_two.hasClass('0') === #three_two.hasClass('0')) || // {return true}
    (#one_three.hasClass('0') === #two_three.hasClass('0') === #three_three.hasClass('0')) || // {return true}

// check diagnolas
    (#one_one.hasClass('0') === #two_#two.hasClass('0') === #three_three.hasClass('0')) || // {return true}
    (#one_three.hasClass('0') === #two_#two.hasClass('0')) === #three_one.hasClass('0')) {// {return true}
      alert('Winner is Player 1')
      // need to not allow another entry ??removeClass?? - look at documentation
      $('table td').text('+')
      $('table td').removeClass('disable')
      $('table td').removeClass('O')
      $('table td').removeClass('X')
      }
  else if
    (#one_one.hasClass('X') && #one_two.hasClass('X') && #one_three.hasClass('X')) || // {return true}
    (#two_one.hasClass('X') && #two_two.hasClass('X') && #two_three.hasClass('X')) || // {return true}
    (#three_one.hasClass('X') && #three_two.hasClass('X') && #three_three.hasClass('X')) // {return true}
    (#one_one.hasClass('X') && #two_one.hasClass('X') && #three_one.hasClass('X')) ||// {return true}
    (#one_two.hasClass('X') === #two_two.hasClass('X') === #three_two.hasClass('X')) || // {return true}
    (#one_three.hasClass('X') === #two_three.hasClass('X') === #three_three.hasClass('X')) || // {return true}
    (#one_one.hasClass('X') === #two_#two.hasClass('X') === #three_three.hasClass('X')) || // {return true}
    (#one_three.hasClass('X') === #two_#two.hasClass('X')) === #three_one.hasClass('X')) {// {return true}
      alert('Winner is Player 2'){
    // need to not allow another entry ??removeClass?? - look at documentation
    $('table td').text('+')
    $('table td').removeClass('disable')
    $('table td').removeClass('O')
    $('table td').removeClass('X')
 }
 else if
    (turns === 9) { // {return false}
      alert('Cat\'s Game: A Tie!')
      $('table td').text('+')
      $('table td').removeClass('disable')
      $('table td').removeClass('O')
      $('table td').removeClass('X')
}
// return playerOneWins + 1
// return playerTwoWins + 1

// Reset button - end of all code
$('reset').on('click', function () {
  $('table td').text('+')
  $('table td').removeClass('disable')
  $('table td').removeClass('O')
  $('table td').removeClass('X')
  let turns = 0
})
