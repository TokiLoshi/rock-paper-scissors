function game() {
  // Set scores to 0
  let computerScore = 0
  let playerScore = 0
  let round = 0

  // Create a score board for the div 
  const gameBoard = document.querySelector('.game');
  const score = document.createElement('h3');
  const backdrop = document.createElement('div');
  score.textContent = "Score Board";
  score.setAttribute('style', 'border-bottom: 1px solid rgb(237, 215, 235); padding-bottom: 20px;');
  backdrop.setAttribute('style', 'color:  rgb(237, 215, 235); background: rgb(122, 64, 160); padding: 30px; margin: 30px; border-radius: 10px;');

  // Create roundPlaceholder
  const roundCounter = document.createElement('p');
  roundCounter.classList = 'roundcount';
  roundCounter.setAttribute('style', 'border: 1px dashed rgb(237, 215, 235); padding: 10px; border-radius: 10px;')
  roundCounter.textContent = 'Round: ' + round;
  
  // Create placeholder for computer 
  const computer = document.createElement('p');
  computer.classList = "compscore";
  computer.textContent = "👾: 0";

  // Create placeholder for player
  const player = document.createElement('p');
  player.classList = "playerscore";
  player.textContent = "You: 0";

  // Append everything to the board
  gameBoard.append(backdrop);
  backdrop.append(score, computer, player, roundCounter);

  // Listen for player's choices 
  buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const playerChoice = button.id

      // Now for the computer: 
      const computerChoice = getComputerChoice();
      
      // Play a round to see who won
      const playingRound = playRound(playerChoice, computerChoice);

      // Update winner's score 
      if (playingRound === 'computer'){
        computerScore++;
        const updatedComputer = document.querySelector('.compscore');
        updatedComputer.textContent = "👾: " + computerScore;
      }
      else if (playingRound === 'player'){
        playerScore++;
        const updatedPlayer = document.querySelector('.playerscore');
        updatedPlayer.textContent = "You: " + playerScore;
      }

      // Update Round: 
      const newRound = document.querySelector('.roundcount');
      round++;
      newRound.textContent = 'Round: ' + round;

      let gameOn = true;
      if (computerScore === 5) {
        const winner = document.querySelector('.choices');
        winner.textContent = "GAME OVER: COMPUTER WON 👾";
        gameOn = false;

      }
      else if (playerScore === 5) {
        const winner = document.querySelector('.choices');
        winner.textContent = "GAME OVER: YOU WIN! 🎉";
        gameOn = false;
      }
      
      // Toggle ability to press buttons
      if (gameOn === false){
        document.querySelector("#rock").remove()
        document.querySelector("#scissors").remove()
        document.querySelector("#paper").remove()

        // Allow users to start again
        const newGame = document.createElement('button')
        newGame.classList = 'newgame';
        newGame.textContent = 'New game';
        gameBoard.appendChild(newGame);

        const hints = document.querySelector('.hints');
        hints.remove()
        
        // handle option to start a new game and page reload
        const startgame = document.querySelector('.newgame');   
        startgame.addEventListener('click', () => {
          location.reload()
        });
      }
    })
  })
}


// Get computer choice 
function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors']
  // Generate random choice to return
  const compChoice = Math.floor(Math.random() * 3)
  return options[compChoice]
}


// Play a round 
function playRound(playerSelection, getComputerChoice) {
  const player = playerSelection
  const computer = getComputerChoice
  const winStatus = document.querySelector('.choices');
  
  // It's a tie if computer and player choice the same
  let winner = null;
  if (player === computer) {
    winStatus.textContent = `It\'s a tie 😮 you both chose ${player}`;
    winner = 'Tie';
  }

  // Paper beats rock 
  else if (computer === 'rock'){
    if (player === 'paper'){
      winner = 'player'
      winStatus.textContent = `You win ${player} beats ${computer} 🤩`;
    }
    else {
      winner = 'computer'
    }
  }

  // Scissors beat paper 
  else if (computer === 'paper'){
    if (player === 'scissors'){
      winner = 'player';
      winStatus.textContent = `You win ${player} beats ${computer} 🤩`;
    }
    else {
      winner = 'computer'
      winStatus.textContent = `You lost ${computer} beats ${player} 😔`;
    }
  }

  // Rock beats scissors 
  else{
    if (player === 'rock'){
      winner = 'player'
      winStatus.textContent = `You won ${player} beats ${computer} 🤩`;
    }
    else {
      winner = 'computer'
      winStatus.textContent = `You lost ${computer} beats ${player} 😔`;
    }
  }
  return winner

}

const start = document.querySelector('#start');
const container = document.querySelector('.container');
const gameContainer = document.querySelector('.game');
const credit = document.querySelector('.credit');
start.addEventListener('click', () => {
  
  // Remove start button and credit
  container.remove(start);
  credit.remove();


  const choices = document.createElement('div')
  choices.classList = "choices";
  choices.textContent = "Let the game begin! The first to five wins.";
  gameContainer.append(choices);

  const hints = document.createElement('p');
  hints.classList = "hints";
  hints.textContent = "Hint: Rock beats scissors. Paper beats rock. Scissors beats paper.";
  gameContainer.insertBefore(hints, choices)

  // Create rock
  const rock = document.createElement('button');
  rock.setAttribute('id', 'rock');
  rock.textContent = "🪨";
  
  // Create scissors
  const scissors = document.createElement('button');
  scissors.setAttribute('id', 'scissors');
  scissors.textContent = "✂️";

  // Create paper
  const paper = document.createElement('button');
  paper.setAttribute('id', 'paper');
  paper.textContent = "📜";
  gameContainer.append(rock, paper, scissors);

  // Start game
  game()
});




