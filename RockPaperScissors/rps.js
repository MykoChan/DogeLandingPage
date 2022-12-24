const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return `Tie! Both players chose ${playerSelection}!`;
    }
    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    return false;
}

const buttons = document.querySelectorAll("button");
const resultDiv = document.querySelector(".results");

let playerWins = 0;
let computerWins = 0;

buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        let result = playRound(btn.innerText, getComputerChoice());

        if (result.includes("win")) {
            playerWins++;
        } else if (result.includes("lose")) {
            computerWins++;
        }

        result += ` Score: ${playerWins}-${computerWins}`;
        paragraph.textContent = result;
        resultDiv.appendChild(paragraph);

        if (playerWins >= 5) {
            const winnerParagraph = document.createElement("p");
            winnerParagraph.textContent = "You win! Resetting score to 0-0.";
            resultDiv.appendChild(winnerParagraph);
            playerWins = 0;
            computerWins = 0;
        } else if (computerWins >= 5) {
            const winnerParagraph = document.createElement("p");
            winnerParagraph.textContent =
                "Computer wins! Resetting score to 0-0.";
            resultDiv.appendChild(winnerParagraph);
            playerWins = 0;
            computerWins = 0;
        }
    })
);
