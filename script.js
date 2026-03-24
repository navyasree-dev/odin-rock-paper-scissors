let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.random();

    if (random < 0.33) {
        return "rock";
    } else if (random < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper or scissors:");
    return choice;
}

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    } 
    else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

function playGame() {

    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("Final Score:");
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);

    if (humanScore > computerScore) {
        console.log("🎉 You won the game!");
    } else if (computerScore > humanScore) {
        console.log("💻 Computer won the game!");
    } else {
        console.log("🤝 It's a tie game!");
    }
}

playGame();
