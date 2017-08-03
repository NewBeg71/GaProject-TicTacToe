'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

require('./example')

// Create a Sign-up Button

// Create a Sign-in Button
// onClick Button brings up an input form to verify the user
// alert('something')

// console.log('something')

// const test = function () {
// console.log('something')
// }
// test()

$(document).ready(function () {
  const X = 'X' // X=Player2//if get this working add image
  const O = 'O' // O=Player1
  let turns = 0
  const one_one = $('#one_one')
  const one_two = $('#one_two')
  const one_three = $('#one_three')
  const two_one = $('#two_one')
  const two_two = $('#two_two')
  const two_three = $('#two_three')
  const three_one = $('#three_one')
  const three_two = $('#three_two')
  const three_three = $('#three_three')

  $('#boardContainer tr td').on('click', function () {
    if (one_one.hasClass('O') && one_two.hasClass('O') && one_three.hasClass('O') ||
        two_one.hasClass('O') && two_two.hasClass('O') && two_three.hasClass('O') ||
        three_one.hasClass('O') && three_two.hasClass('O') && three_three.hasClass('O') ||
        one_one.hasClass('O') && two_one.hasClass('O') && three_one.hasClass('O') ||
        one_two.hasClass('O') && two_two.hasClass('O') && three_two.hasClass('O') ||
        one_three.hasClass('O') && two_three.hasClass('O') && three_three.hasClass('O') ||
        one_one.hasClass('O') && two_two.hasClass('O') && three_three.hasClass('O') ||
        one_three.hasClass('O') && two_two.hasClass('O') && three_one.hasClass('O')) {
      alert('Winner is Player 1')
      $('#boardContainer tr td').text('+')
      $('#boardContainer tr td').removeClass('disable')
      $('#boardContainer tr td').removeClass('O')
      $('#boardContainer tr td').removeClass('X')
    } else if
    (one_one.hasClass('X') && one_two.hasClass('X') && one_three.hasClass('X') ||
        two_one.hasClass('X') && two_two.hasClass('X') && two_three.hasClass('X') ||
        three_one.hasClass('X') && three_two.hasClass('X') && three_three.hasClass('X') ||
        one_one.hasClass('X') && two_one.hasClass('X') && three_one.hasClass('X') ||
        one_two.hasClass('X') && two_two.hasClass('X') && three_two.hasClass('X') ||
        one_three.hasClass('X') && two_three.hasClass('X') && three_three.hasClass('X') ||
        one_one.hasClass('X') && two_two.hasClass('X') && three_three.hasClass('X') ||
        one_three.hasClass('X') && two_two.hasClass('X') && three_one.hasClass('X')) {
      alert('Winner is Player 2')
      $('#boardContainer tr td').text('+')
      $('#boardContainer tr td').removeClass('disable')
      $('#boardContainer tr td').removeClass('O')
      $('#boardContainer tr td').removeClass('X')
    } else if
    (turns === 9) {
      alert('Cat\'s Game: A Tie!')
      $('#boardContainer tr td').text('+')
      $('#boardContainer tr td').removeClass('disable')
      $('#boardContainer tr td').removeClass('O')
      $('#boardContainer tr td').removeClass('X')
    } else if
    ($(this).hasClass('disable')) {
      alert('This cell has already been selected!')
    } else if
    (turns % 2 === 0) {
      turns = turns + 1
      $(this).text(O)
      $(this).addClass('disable O')
      if (one_one.hasClass('O') && one_two.hasClass('O') && one_three.hasClass('O') ||
      two_one.hasClass('O') && two_two.hasClass('O') && two_three.hasClass('O') ||
      three_one.hasClass('O') && three_two.hasClass('O') && three_three.hasClass('O') ||
      one_one.hasClass('O') && two_one.hasClass('O') && three_one.hasClass('O') ||
      one_two.hasClass('O') && two_two.hasClass('O') && three_two.hasClass('O') ||
      one_three.hasClass('O') && two_three.hasClass('O') && three_three.hasClass('O') ||
      one_one.hasClass('O') && two_two.hasClass('O') && three_three.hasClass('O') ||
      one_three.hasClass('O') && two_two.hasClass('O') && three_one.hasClass('O')) {
        alert('Winner is Player 1')
        turns = 0
      }
    } else {
      turns = turns + 1
      $(this).text(X)
      $(this).addClass('disable X')
      if (one_one.hasClass('X') && one_two.hasClass('X') && one_three.hasClass('X') ||
      two_one.hasClass('X') && two_two.hasClass('X') && two_three.hasClass('X') ||
      three_one.hasClass('X') && three_two.hasClass('X') && three_three.hasClass('X') ||
      one_one.hasClass('X') && two_one.hasClass('X') && three_one.hasClass('X') ||
      one_two.hasClass('X') && two_two.hasClass('X') && three_two.hasClass('X') ||
      one_three.hasClass('X') && two_three.hasClass('X') && three_three.hasClass('X') ||
      one_one.hasClass('X') && two_two.hasClass('X') && three_three.hasClass('X') ||
      one_three.hasClass('X') && two_two.hasClass('X') && three_one.hasClass('X')) {
        alert('Winner is Player 2')
      }
    }
  })
  $('#reset').click(function () {
    $('#boardContainer tr td').text('+')
    $('#boardContainer tr td').removeClass('disable')
    $('#boardContainer tr td').removeClass('O')
    $('#boardContainer tr td').removeClass('X')
    turns = 0
  })
})
