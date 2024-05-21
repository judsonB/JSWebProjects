//Get HTML Elements
let buttons = document.querySelectorAll('.button');
let startButton = document.getElementById('start-btn');
//Add additional Game Variables
let gameSequence = [];
let playerSequence = [];
let level = 1;
let sequenceIndex = 0;
let intervalId = null;
//Add Start/Restart event listener
startButton.addEventListener('click', startGame);
//Event Listeners
function selectColor(e)
{
  console.log(e.target)
  let button = e.target;
  let color = button.id;
  playerSequence.push(color);
  checkSequence();
}
function startGame(e) {
  
  //Add button event listeners
  buttons.forEach(button => {
    button.addEventListener('click', selectColor);
  });
  //Resets all importanve variables.
  e.target.innerHTML = "Restart";
  gameSequence.length = 0;
  playerSequence.length = 0;
  sequenceIndex = 0;
  level = 1;
  //Generates the 1st pattern.
  generateSequence();
}
//Additional Functions
function generateSequence() 
{
  //Get a random button
  let randomIndex = Math.floor(Math.random() * buttons.length);
  //Add button ID to back of gameSequence
  gameSequence.push(buttons[randomIndex].id);
  //Play the sequence
  playSequence();
}
function playSequence()
{
  sequenceIndex = 0;
  clearInterval(intervalId);
  intervalId = setInterval(lightNextBtn, 1000);
}
function lightNextBtn()
{
  if (sequenceIndex < gameSequence.length) {
    const button = document.getElementById(gameSequence[sequenceIndex]);
    button.classList.add('active');
    setTimeout(unLightBtn, 500 ,button);
    sequenceIndex++;
  } 
  else 
  {
    sequenceIndex = 0;
    clearInterval(intervalId);
  }
}
function unLightBtn(button)
{
  button.classList.remove('active');
}

function checkSequence() {
  console.log()
    if (playerSequence[playerSequence.length-1] !== gameSequence[playerSequence.length-1]) {
        alert('Game Over! Try Again.');
        playerSequence.length = 0;
        playSequence();
        return;
    }

    if (playerSequence.length === gameSequence.length) {
        setTimeout(nextLevel, 1000);
    }
}
function nextLevel()
{
  console.log("generatinig new sequence")
  level++;
  sequenceIndex = 0;
  playerSequence.length = 0;
  generateSequence();
}
