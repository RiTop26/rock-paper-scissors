// Set up the function to get the computer choice
function getComputerChoice() {
    // Generate random numbers
    const computerGuess = Math.random()
    // randomly return "rock" if computerChoice is between 0 and 0.33
    // randomly return "paper" if computerChoice is between 0.33 and 0.66
    // randomly return "scissors" if computerChoice is between 0.66 and 1
    if (computerGuess <= 0.33) {
        return "rock";
    }
    else if (computerGuess > 0.33 && computerGuess <= 0.66) {
        return "paper";
    }
    else if (computerGuess > 0.66 && computerGuess <= 1) {
        return "scissors";
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {
        itsChoice(computerChoice)
        yourChoice(humanChoice)
        
        // Rock beats scissors, scissors beat paper, and paper beats rock
        if (computerChoice == "rock" && humanChoice == "scissors") {
            computerScore += 1;
            roundVerdict("You lose! Rock beats Scissors");

            scoreboard("You " + humanScore + " : " + computerScore + " Computer");
        }

        else if (computerChoice == "scissors" && humanChoice == "paper") {
            computerScore += 1;
            roundVerdict("You lose! Scissors beats Paper");

            scoreboard("You " + humanScore + " : " + computerScore + " Computer");
        }

        else if (computerChoice == "paper" && humanChoice == "rock") {
            computerScore += 1;
            roundVerdict("You lose! Paper beats rock");

            scoreboard("You " + humanScore + " : " + computerScore + " Computer");
        }

        else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            roundVerdict("You win! Rock beats Scissors");
            
            scoreboard("You " + humanScore + " : " + computerScore + " Computer");
        }

        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
            roundVerdict("You win! Scissors beats Paper");
            
            scoreboard("You " + humanScore + " : " + computerScore + " Computer");
        }

        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
            roundVerdict("You win! Paper beats rock");

            scoreboard("You " + humanScore + " : " + computerScore + " Computer");
        }

        else if ((computerChoice == "rock" && humanChoice == "rock") || 
        (computerChoice == "scissors" && humanChoice == "scissors") || 
        (computerChoice == "paper" && humanChoice == "paper")) {
            roundVerdict("Tie")

            // Display the runnind score
            scoreboard("You " + humanScore + " : " + computerScore + " Computer");
        }

        // Announce a winner of the game once a player reaches 5 points
        if (computerScore === 5) {
            finalVerdict("You lose the game!");

            // Stop the game once a player reaches 5 points
            document.querySelector("#one").disabled = true;
            document.querySelector("#two").disabled = true;
            document.querySelector("#three").disabled = true;
        }
        else if (humanScore === 5) {
            finalVerdict("You win the game!");

            // Stop the game once a player reaches 5 points
            document.querySelector("#one").disabled = true;
            document.querySelector("#two").disabled = true;
            document.querySelector("#three").disabled = true;
        }

    }

    // All the following buttons return the human choices

   // Rock button
  const rockButton = document.querySelector("#one");

  // Add an event listener to rock button
  rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });
  
  // Paper button
  const paperButton = document.querySelector("#two");

  // Add an event listener to paper button
  paperButton.addEventListener("click", () =>  {
    playRound("paper", getComputerChoice())
  });

  // Scissors button
  const scissorsButton = document.querySelector("#three");

  // Add an event listener to scissors
  scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
  });

  // add div for displaying human choice
  const humanDisplay = document.querySelector("#human");

  // change all the human's choice console.log into DOM methods
  function yourChoice (yourMessage) {
    humanDisplay.textContent = yourMessage;
  }

  // add div for displaying computer's choice
  const computerDisplay = document.querySelector("#computer"); 

  // change all the computer's choice console.log into DOM methods
  function itsChoice (text) {
    computerDisplay.textContent = text;
  }

  // add div for displaying result message
  const displayResult = document.querySelector("#result") 

  // change all the console.log's messages into DOM methods
  function roundVerdict(message) {
    displayResult.textContent = message;
  }

  // add div for displaying scores update
  const scoreDisplay = document.querySelector("#score");

  // change all the scores console.log into DOM methods
  function scoreboard (scoreUpdate) {
    scoreDisplay.textContent = scoreUpdate;
  }

  // add div for displaying final message
  const finalDisplay = document.querySelector("#final"); 

  // change all the final result console.log into DOM methods
  function finalVerdict (finalresult) {
    finalDisplay.textContent = finalresult;
  }


}
playGame()

