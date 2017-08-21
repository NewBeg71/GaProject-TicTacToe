'use strict'

const app = require('./app.js')

const signUpSuccess = (data) => {
  $('#signUp').modal('hide')
}

const signInSuccess = (data) => {
  app.user = data.user
  $('#signedInUser').text(data.user.email)
  $('input').val('')
  $('#log-in-to-play').hide()
}

const signOutSuccess = () => {
  app.user = null
  // console.log(app)
  $('#signedInUser').text('')
  $('.game-board').hide()
  $('#log-in-to-play').show()
  $('#myAcct').modal('hide')
}

const changePasswordSuccess = () => {
  // console.log('Password Successfully Changed.')
  $('input').val('')
  $('#myAcct').modal('hide')
}

const gamePostSuccess = (data) => {
  $('.game-board').show()
  app.game = data.game
  app.game.id = data.game.id
}

const success = (data) => {
  // console.log(data)
}

const failure = (error) => {
  // console.log(error)
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpSuccess,
  gamePostSuccess
}
