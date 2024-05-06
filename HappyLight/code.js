let flowTimer = setInterval(colorShift, 50);
let r = 255;
let g = 0;
let b = 0;
let redLabel = document.getElementById("red");
let greenLabel = document.getElementById("green");
let blueLabel = document.getElementById("blue");
function colorShift()
{
	if (r < 255 && g == 0 && b == 255)
		r ++;
	else if (r == 255 && g == 0 && b > 0)
		b --;
	else if (r == 255 && g < 255 && b == 0)
		g ++;
	else if (r > 0 && g == 255 && b == 0)
		r --;
	else if (r == 0 && g == 255 && b < 255)
		b ++;
	else if (r == 0 && g > 0 && b == 255)
		g --;
	else
	{
		r ++;
		g --;
		b --;
	}
    document.body.style.backgroundColor = "rgb("+r+", "+g +", "+b+")";	
    redLabel.innerText = r;
    greenLabel.innerText = g;
    blueLabel.innerText = b;
}

/*
	Modal Box
*/
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



























/*function updateBackground()
{
	//document.body.style.backgroundColor = "red";
	redNum = document.getElementById("redSlider").value;
	redNum = parseInt(redNum);
	greenNum = document.getElementById("greenSlider").value;
	greenNum = parseInt(greenNum);
	blueNum = document.getElementById("blueSlider").value;
	blueNum = parseInt(blueNum);
	
	document.body.style.backgroundColor = "rgb("+redNum+", "+greenNum+", "+blueNum+")";
}
flowTimer = null;
function startFlow()
{
	endFlow();
	flowTimer = setInterval(colorShift, 20);
}
function colorShift()
{
	red = document.getElementById("redSlider");
	green = document.getElementById("greenSlider")
	blue = document.getElementById("blueSlider")
	if (red.value < 255 && green.value == 0 && blue.value == 255)
		red.value++;
	else if (red.value == 255 && green.value == 0 && blue.value > 0)
		blue.value--;
	else if (red.value == 255 && green.value < 255 && blue.value == 0)
		green.value ++;
	else if (red.value > 0 && green.value == 255 && blue.value == 0)
		red.value--;
	else if (red.value == 0 && green.value == 255 && blue.value < 255)
		blue.value ++;
	else if (red.value == 0 && green.value > 0 && blue.value == 255)
		green.value--;
	else
	{
		red.value++;
		green.value--;
		blue.value--;
	}
	updateBackground();
}
function endFlow()
{
	if(flowTimer != null)
		clearInterval(flowTimer)
}



*/











let countDownTimer = null;
let time = 0;
let timeLeftBox = null;

function startCountDown()
{
	time = document.getElementById("startTime").value;
	time = parseInt(time);
	timeLeftBox = document.getElementById("timeLeft");
	timeLeftBox.innerHTML =time;
	if (countDownTimer != null)
		clearInterval(countDownTimer);
	countDownTimer = setInterval(changeTime, 1000);
}
function changeTime()
{
	time--;	//Decrease time by 1
	timeLeftBox.innerHTML = time;
	if (time <= 0)
		clearInterval(countDownTimer);
}
