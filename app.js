console.log("Hello World")

// Get computer choice 
function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors']
  const compChoice = Math.floor(Math.random() * 3)
  console.log(`Should be random: ${compChoice}`)
  console.log(`Computer's choice: ${options[compChoice]}`)
  // Randomly return 'Rock', 'Paper' or 'Scissors'
  return options[compChoice]
}

// Get player choice: 
function playerSelection() {
  // prompt player for selection
  const playerChoice = prompt("Rock, Paper or Scissors?")
  console.log(`Player's choice: ${playerChoice}`)
  // Should be case insensitive  
  const lowerChoice = playerChoice.toLowerCase()
  console.log(`Choice to lower: ${lowerChoice}`)
  // Check it's one of the following or return invalid
  if (lowerChoice !== 'rock' && lowerChoice !== 'paper' && lowerChoice !== 'scissors') {
    console.log(`We have an invalid choice: ${lowerChoice}`)
  }
  else {
    console.log(`Player selection: ${lowerChoice} is valid`)
    return lowerChoice
  }

}

// Play a round 
function playRound(playerSelection, getComputerChoice) {
  const player = playerSelection
  const computer = getComputerChoice
  console.log(`In round player: ${player}`)
  console.log(`In round computer: ${computer}`)

  // It's a tie if computer and player choice the same
  let winner = null;
  if (player === computer) {
    console.log('It\'s a tie')
    winner = 'TIE'
  }

  // Paper beats rock 
  else if (computer === 'rock'){
    if (player === 'paper'){
      console.log(`Player wins, they chose: ${player} and computer chose: ${computer}`)
      winner = 'You won!'
    }
    else {
      winner = 'You lost'
      console.log(`Player loses, they chose: ${player} and computer chose: ${computer}`)
    }
  }

  // Scissors beat paper 
  else if (computer === 'paper'){
    if (player === 'scissors'){
      winner = 'You won'
      console.log(`Player wins, they chose ${player} and computer chose: ${computer}`)
    }
    else {
      winner = 'You lost'
      console.log(`Player lost they chose ${player}, computer chose: ${computer}`)
    }
  }

  // Rock beatus scissors 
  else{
    if (player === 'rock'){
      winner = 'You won' 
      console.log(`Player wins they chose: ${player}, computer chose: ${computer}`)
    }
    else {
      winner = 'You lost'
      console.log(`Player lost they chose: ${player}, computer chose: ${computer}`)
    }
  }

  console.log(`We have a decision: ${winner}`)

}
const playerChoice = playerSelection()
const computerChoice = getComputerChoice()
console.log(`This should be player's choice: ${playerChoice}`)
console.log(`This should be computer's choice: ${computerChoice}`)
playRound(playerChoice, computerChoice)


// function takes Player's selection and computer's selection
// Declares winner with something like 'You Lose! Paper beatss Rock' 

// Function called game that has playRound inside of it 
// Play a 5 round game that keeps the score
// Report a winner or loser at the end 
// Make sure to be returning from all functions

