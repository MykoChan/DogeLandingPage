const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return `Tie! Both players chose ${playerSelection}!`;
    }
    if ((playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")) 
    {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")) 
    {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
}

// for (let pc of choices) {
//     for (let cc of choices) {
//         console.log(playRound(pc, cc))
//     }
// }

// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerChoice = "";
//         while (!choices.includes(playerChoice.toLowerCase())) {
//             playerChoice = prompt("Rock, paper or scissors?");
//         }
//         console.log(playRound(playerChoice, getComputerChoice()));
//     }
// }

// game();

const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('.results')

let playerWins = 0;
let computerWins = 0;

buttons.forEach(btn => btn.addEventListener('click', () => {
    let paragraph = document.createElement("p");
    let result = playRound(btn.innerText, getComputerChoice());
    
    if (result.includes("win")) {
        playerWins++;
    } else if (result.includes("lose")) {
        computerWins++;
    }

    result += ` Score: ${playerWins}-${computerWins}`
    paragraph.textContent = result;
    resultDiv.appendChild(paragraph);

    if (playerWins >= 5) {
        let winnerParagraph = document.createElement("p");
        winnerParagraph.textContent = "You win! Resetting score to 0-0."
        resultDiv.appendChild(winnerParagraph);
        playerWins = 0;
        computerWins = 0;
    } else if (computerWins >= 5) {
        let winnerParagraph = document.createElement("p");
        winnerParagraph.textContent = "Computer wins! Resetting score to 0-0."
        resultDiv.appendChild(winnerParagraph);
        playerWins = 0;
        computerWins = 0;
    }
}));