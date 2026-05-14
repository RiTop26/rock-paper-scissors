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

// Create a function that return the human choice
function getHumanChoice() {
    // Prompt the user for input
    const humanPick = window.prompt("Pick Your Choice: rock, paper, scissors: ")
    let myChoice = humanPick.toLowerCase();
    if (myChoice == "rock" || myChoice == "paper" || myChoice == "scissors") {
        return myChoice;
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {
        console.log(computerChoice)
        console.log(humanChoice)
        // Rock beats scissors, scissors beat paper, and paper beats rock
        if (computerChoice == "rock" && humanChoice == "scissors") {
            computerScore += 1;
            console.log("You lose! Rock beats Scissors")
        }

        else if (computerChoice == "scissors" && humanChoice == "paper") {
            computerScore += 1;
            console.log("You lose! Scissors beats Paper")
        }

        else if (computerChoice == "paper" && humanChoice == "rock") {
            computerScore += 1;
            console.log("You lose! Paper beats rock")
        }

        else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            console.log("You win! Rock beats Scissors")
        }

        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
            console.log("You win! Scissors beats Paper")
        }

        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
            console.log("You win! Paper beats rock")
        }

        else if ((computerChoice == "rock" && humanChoice == "rock") || 
        (computerChoice == "scissors" && humanChoice == "scissors") || 
        (computerChoice == "paper" && humanChoice == "paper")) {
            console.log("Tie")
        }

    }

   
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection)
        
        console.log("Your Score: ", humanScore)
        console.log("Computer's Score: ", computerScore)
    }

    if (computerScore > humanScore) {
        console.log("You lose!")
    }
    else if (humanScore > computerScore) {
        console.log("You win!")
    }
    else {
        console.log("Tie")
    }
}
playGame()