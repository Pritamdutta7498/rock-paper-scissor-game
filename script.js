// function for computerMoves

function computerMoves(computerMove) {
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
