// Computer choice : return randomly one of three strings 
const getComputerChoice = () => {
    const arrayChoices = ["rock", "paper", "scissors"];
    let choices = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];
    return choices;
}

//Outcomes for one round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie ! You both picked ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win ! Rock beat Scissors"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose ! Paper beats Rock"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win ! Scissors beats Paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose ! Rock beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win ! Paper beat Rock"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose ! Scissors beats Paper"
    }
}

//Loop the game for five rounds maximum
function game() {
    for (let i = 0; i <5; i++) {
        let playerSelection = prompt("Choose between: Rock, Paper or Scissors").toLocaleLowerCase();
        let computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()