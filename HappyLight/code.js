function updateBackground()
{
	let numRed = document.getElementById("redSlider").value;
	numRed = parseInt(numRed);
	let numGreen = document.getElementById("greenSlider").value;
	numGreen = parseInt(numGreen);
	let numBlue = document.getElementById("blueSlider").value;
	numBlue = parseInt(numBlue);
	document.body.style.backgroundColor = "rgb("+numRed+", "+numGreen
		+", "+numBlue+")";
}
let flowTimer = null;
startFlow();
function startFlow()
{
	endFlow();
	flowTimer = setInterval(colorShift, 50);
}
function endFlow()
{
	if (flowTimer != null)
		clearInterval(flowTimer);
}
function colorShift()
{
	let r = document.getElementById("redSlider");
	let g = document.getElementById("greenSlider");
	let b = document.getElementById("blueSlider");
	
	if (r.value < 255 && g.value == 0 && b.value == 255)
		r.value ++;
	else if (r.value == 255 && g.value == 0 && b.value > 0)
		b.value --;
	else if (r.value == 255 && g.value < 255 && b.value == 0)
		g.value ++;
	else if (r.value > 0 && g.value == 255 && b.value == 0)
		r.value --;
	else if (r.value == 0 && g.value == 255 && b.value < 255)
		b.value ++;
	else if (r.value == 0 && g.value > 0 && b.value == 255)
		g.value --;
	else
	{
		r.value ++;
		g.value --;
		b.value --;
	}
	updateBackground();
	
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
