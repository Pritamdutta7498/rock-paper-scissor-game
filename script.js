let result = "";
function playerMoves(playerMove) {
  let computerMove = computerMoves(); 
  if (playerMove === "rock") {

    // console.log('player move is rock')

    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "Loss";
    } else if (computerMove === "scissor") {
      result = "Win";
    }
    console.log("result is: you", result);
  } else if (playerMove === "paper") {
  } else if (playerMove === "scissor") {
  }
  return playerMove;
}

// function for computerMoves

function computerMoves() {
  let computerMove;
  let randomNum = Math.random();
  // console.log(randomNum)
  if (randomNum > 0 && randomNum < 1 / 3) {
    computerMove = "rock";
    console.log(computerMove);
  } else if (randomNum > 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
    console.log(computerMove);
  } else if (randomNum > 2 / 3 && randomNum < 1) {
    computerMove = "scissor";
    console.log(computerMove);
  }

  return computerMove;
}
