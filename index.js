let forms = ["Rock", "Paper", "Scissor"];
let player = 0;
let computer = 0;

let computerPlay = () => {
    let rand = Math.floor(Math.random() * forms.length);
    return forms[rand];
};

let playRound = (playerSelection, computerSelection) => {

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    return rules(computerSelection, playerSelection);
};

let rules = (computerSelection, playerSelection) => {

    const playerWin = `Player Wins!, ${playerSelection} beats ${computerSelection}.`;
    const computerWin = `Computer Wins!, ${computerSelection} beats ${playerSelection}`;

    if(computerSelection === playerSelection) {
        return "Tie, go again!";
    }

    if(computerSelection === "ROCK") {
        
        if(playerSelection === "PAPER") {
            player++;
            return playerWin;
        }

        if(playerSelection === "SCISSOR") {
            computer++;
            return computerWin;
        }

    }

    if(computerSelection === "SCISSOR") {

        if(playerSelection === "ROCK") {
            player++;
            return playerWin;
        }

        if(playerSelection === "PAPER") {
            computer++;
            return computerWin;
        }

    }

    if(computerSelection === "PAPER") {

        if(playerSelection === "ROCK") {
            computer++;
            return computerWin;
        }

        if(playerSelection === "SCISSOR") {
            player++;
            return playerWin;
        }

    }
}

let game = () => {
    let rounds = 5;

    for (let i = 1; i <=5; i++) {
        console.log(`Round ${i} - Player ${player} : ${computer} Computer`);

        let playerSelection = prompt("Choose from Rock, Paper, or Scissor");

        console.log(playRound(playerSelection, computerPlay()));
    }

    console.log("Game Over!");
    console.log(`Player ${player} : ${computer} Computer`);
    if(player > computer) {
        console.log("Player Wins");
    } else {
        console.log("Computer Wins!");
    }

    if(player == computer) {
        console.log("Its a Tie!");
    }
}

// game();