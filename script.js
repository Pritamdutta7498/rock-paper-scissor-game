let result = "";
function playerMoves(playerMove) {
  let computerMove = computerMoves();
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "Loss";
    } else if (computerMove === "scissor") {
      result = "Win";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "Win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissor") {
      result = "Loss";
    }
  } else if (playerMove === "scissor") {
    if (computerMove === "rock") {
      result = "Loss";
    } else if (computerMove === "paper") {
      result = "Win";
    } else if (computerMove === "scissor") {
      result = "Tie";
    }
  }
  console.log(`your Move: ${playerMove} | computer Move: ${computerMove} 
  \nresult is: ${result}
  `);

  return playerMove;
}

// function for computerMoves

function computerMoves() {
  let computerMove;
  let randomNum = Math.random();
  // console.log(randomNum)
  if (randomNum > 0 && randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum > 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
  } else if (randomNum > 2 / 3 && randomNum < 1) {
    computerMove = "scissor";
  }

  return computerMove;
}
