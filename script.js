let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (guess,target) => guess >= target ? guess - target : target - guess;

function compareGuesses(user,computer,target){
  if(user > 9  || user < 0 ){
    alert('Your number is out of range!');
  }
  let userGuessDifference = getAbsoluteDistance(user,target);
  let computerGuessDifference = getAbsoluteDistance(computer,target);

  if (userGuessDifference <= computerGuessDifference) {
    return true;
  } else {
    return false;
  }
}

function updateScore(player) {
  if (player === 'human') {
    humanScore++ ;
  } else if (player === 'computer') {
    computerScore ++;
  }
}

function advanceRound() {
  currentRoundNumber ++;
}