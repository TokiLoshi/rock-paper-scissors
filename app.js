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
    return playerSelection
  }

}
getComputerChoice()
playerSelection()

// Play a round 
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

