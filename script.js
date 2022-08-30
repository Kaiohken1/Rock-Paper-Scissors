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
        return "You win ! rock beat scissors"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose ! paper beats rock"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win ! scissors beats paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose ! rock beats scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win ! paper beat rock"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose ! scissors beats paper"
    }
}

//Loop the game for five rounds maximum
function game() {
    for (let i = 0; i <5; i++) {
        let playerSelection = prompt("Choose between: rock, paper or scissors").toLocaleLowerCase();
        let computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()