console.log("Welcome to rock paper scissors")

// Get computer choice 
function getComputerChoice() {
  console.log("Just a moment, the computer is choosing")
  const options = ['rock', 'paper', 'scissors']
  const compChoice = Math.floor(Math.random() * 3)
  // Randomly return 'Rock', 'Paper' or 'Scissors'
  return options[compChoice]
}

// Get player choice: 
function playerSelection() {
  console.log('Your turn');
  const yourTurn = document.createElement('p');
  console.log(`Your turn: ${yourTurn}`)
  const turn = document.querySelector('.container');
  console.log(`turn: ${turn}`)
  yourTurn.textContent = "Your turn";
  turn.append(yourTurn);
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert(button.id);
      const playerChoice = button.id;
      console.log(`Player's choice: ${playerChoice}`);
      return playerChoice;
    })
  })
  
  // prompt player for selection
  // const playerChoice = prompt("Rock, Paper or Scissors?")
  // Should be case insensitive  
  // const lowerChoice = playerChoice.toLowerCase()
  // return lowerChoice 

}

// Play a round 
function playRound(playerSelection, getComputerChoice) {
  const player = playerSelection
  const computer = getComputerChoice
  
  // It's a tie if computer and player choice the same
  let winner = null;
  if (player === computer) {
    console.log('It\'s a tie')
    winner = 'Tie'
  }

  // Paper beats rock 
  else if (computer === 'rock'){
    if (player === 'paper'){
      winner = 'player'
      console.log(`You win ${player} beats chose: ${computer}`)
    }
    else {
      winner = 'computer'
      console.log(`You lost ${computer} beats ${player}`)
    }
  }

  // Scissors beat paper 
  else if (computer === 'paper'){
    if (player === 'scissors'){
      winner = 'player'
      console.log(`You win ${player} beats ${computer}`)
    }
    else {
      winner = 'computer'
      console.log(`You lost ${computer} beats ${player}`)
    }
  }

  // Rock beatus scissors 
  else{
    if (player === 'rock'){
      winner = 'player'
      console.log(`You won ${player} beats ${computer}`)
    }
    else {
      winner = 'computer'
      console.log(`You lost ${computer} beats ${computer}`)
    }
  }
  console.log(`Winner is: ${winner}`)
  return winner

}

// Play a 5 round game that keeps the score
function game() {
  // Set scores to 0
  let computerScore = 0
  let playerScore = 0
  let round = 0

  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  const playerChoice = playerSelection();
  console.log(playerChoice);
  let roundWinner = playRound(playerChoice, computerChoice);
  console.log(`Round winner in game: ${roundWinner}`);
  
  // This is the part that plays exactly 5 rounds
  // for (i = 1; i <= 5; i++){
  //   console.log(`Round: ${i}`)
  //   console.log(`Score so far: player has ${playerScore} points and computer has ${computerScore} points`)
  //   const playerChoice = playerSelection()
  //   const computerChoice = getComputerChoice()

    // Determine the round winner
  //   let roundWinner = playRound(playerChoice, computerChoice)
  //   console.log(`Round winner ${i} is ${roundWinner}`)
  //   // Increment scores 
  //   if (roundWinner === 'Tie'){
  //     computerScore += 0
  //     playerScore += 0
  //   }
  //   else if (roundWinner === 'player'){
  //     playerScore += 1
  //   }
  //   else{
  //     computerScore +=1
  //   }
  //   console.log(`End of round, here are the scores the player has ${playerScore} and the computer has: ${computerScore} points`)
  // }

  // Report a winner or loser at the end 
  // console.log(`End of game: Player got ${playerScore} computer got ${computerScore}`)
  // if (computerScore === playerScore){
  //   console.log(`It\'s a tie, you and the computer both got ${computerScore} and ${playerScore} points`)
  // }
  // else if (computerScore >= playerScore){
  //   console.log(`Computer won they got ${computerScore} and you got ${playerScore}`)
  // }
  // else{
  //   console.log(`You won! You got ${playerScore} points and the computer got ${computerScore} points`)
  // }
  console.log("End of game")
}

game()




