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

  // If computer choice and player choice the same: 
    // it's a tie
  if (player === computer) {
    console.log('It\'s a tie')
  }
  else if (computer === 'rock'){
    if (player === 'paper'){
      console.log(`Player wins, they chose: ${player} and computer chose: ${computer}`)
    }
    else {
      console.log(`Player loses, they chose: ${player} and computer chose: ${computer}`)
    }
  }
  else if (computer === 'paper'){
    if (player === 'scissors'){
      console.log(`Player wins, they chose ${player} and computer chose: ${computer}`)
    }
    else {
      console.log(`Player lost they chose ${player}, computer chose: ${computer}`)
    }
  }
  else{
    if (player === 'rock'){
      console.log(`Player wins they chose: ${player}, computer chose: ${computer}`)
    }
    else {
      console.log(`Player lost they chose: ${player}, computer chose: ${computer}`)
    }
  }
  // If comptuer chose rock:
    // If player chose paper - player wins
    // Else if player chose rock - tie
    // Else player loses

  // Else if computer chose paper: 
    // If player chose scissors - player wins
    // Else if player chose scissors - tie
    // Else player loses

  // Else: 
    // if player chose rock player wins
    // else if player chose scissor's it's a tie
    // else: player looses
}
const playerChoice = playerSelection()
const computerChoice = getComputerChoice()
console.log(`This should be player's choice: ${playerChoice}`)
console.log(`This should be computer's choice: ${computerChoice}`)
playRound(playerChoice, computerChoice)


// function playRound(playerSelection, computerSelection) {
    // code goes hers

// }
// const playerSlection = 'rock';
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection))

// function takes Player's selection and computer's selection
// Declares winner with something like 'You Lose! Paper beatss Rock' 

// Function called game that has playRound inside of it 
// Play a 5 round game that keeps the score
// Report a winner or loser at the end 
// Make sure to be returning from all functions

