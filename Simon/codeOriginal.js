//Get HTML Elements
let buttons = document.querySelectorAll('.button');
let startButton = document.getElementById('start-btn');
let roundNumBox = document.getElementById('roundNum');
let respBox = document.getElementById("response");
let blockBox = document.getElementById("blockage");
//Add additional Game Variables
let responses =
["Let's Go!", "You can do it!", "Well done!",  "Awesome!",  "Good work!",  "You're doing fantastic!",  "Excellent!",  "Superb!",
  "Outstanding!",  "Amazing!",  "Incredible!",  "Remarkable!",  "Impressive!",  "Bravo!",
  "Spectacular!",  "Phenomenal!",  "Marvelous!",  "Splendid!",  "Terrific!",  "Exceptional!",
  "Flawless!",  "Unbelievable!",  "Extraordinary!",  "Masterful!",  "Magnificent!",  "Stupendous!",
  "Majestic!",  "Breathtaking!",  "Mind-blowing!",  "Astounding!",  "Unstoppable!",  "Legendary!",
  "Supreme!",  "Epic!",  "Champion!",  "Genius level!",  "Perfection!",  "Virtuoso!",  "Grandmaster!",
  "Transcendent!",  "World-class!",  "Beyond compare!",  "Peerless!",  "Godlike!",  "Invincible!",
  "Unbeatable!",  "All-time great!",  "Monumental!",  "Iconic!",  "Celestial!",  "Simon's finest!"];
let gameSequence = [];
let playerSequence = [];
let level = 1;
let sequenceIndex = 0;
let intervalId = null;
//Add Start/Restart event listener
startButton.addEventListener('click', startGame);
//Add button event listeners
buttons.forEach(button => {
  button.addEventListener('click', selectColor);
});
//Event Listeners
function selectColor(e)
{
  let button = e.target;
  let color = button.id;
  playerSequence.push(color);
  
  //Check validity of sequence
  checkSequence();
}
function startGame(e) {
  
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
  let round = parseInt(roundNumBox.innerHTML)+1;
  roundNumBox.innerHTML = round;
  respBox.innerHTML = responses[round];
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
    blockBox.style.display = "none";
  }
}
function unLightBtn(button)
{
  button.classList.remove('active');
}

function checkSequence() {
    if (playerSequence[playerSequence.length-1] !== gameSequence[playerSequence.length-1]) {
        alert('Wrong Sequence! Watch, Then Try Again.');
        playerSequence.length = 0;
        playSequence();
        return;
    }

    if (playerSequence.length === gameSequence.length) {
        setTimeout(nextLevel, 1000);
        blockBox.style.display = "block";
    }
}
function nextLevel()
{
  level++;
  sequenceIndex = 0;
  playerSequence.length = 0;
  generateSequence();
}
