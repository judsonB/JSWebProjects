let marqBox = document.getElementById("output");
let inputBox = document.getElementById("input");
let leftBtn = document.getElementById("left");
let stopBtn = document.getElementById("stop");
let rightBtn = document.getElementById("right");

inputBox.addEventListener("keyup", changeText);
leftBtn.addEventListener("click", slideLeft);
rightBtn.addEventListener("click", slideRight);
stopBtn.addEventListener("click", stop);

timer = null;
speed = Math.floor(1000/5);
function changeText(e)
{
    if(e.key == "Enter")
    {
        let text = inputBox.value;
        inputBox.value = "";
        text = text.replaceAll(" ", "\u00A0");
        let len = 30-text.length;
        for(let i = 0; i < len; i++)
        {
            text = "\u00A0"+text+"\u00A0";
        }
        text = "\u00A0"+text+"\u00A0";
        console.log(text);
        marqBox.innerText = text;
    }
}
function slideLeft(e)
{
    clearInterval(timer);
    timer = setInterval(shiftLeft, speed)
}
function shiftLeft()
{
    text = marqBox.innerText;
    text = text.substring(1)+text.substring(0,1);
    console.log(text);
    marqBox.innerText = text;
}
function slideRight(e)
{
    clearInterval(timer);
    timer = setInterval(shiftRight, speed)
}
function shiftRight()
{
    text = marqBox.innerText;
    text = text.substring(text.length-1)+text.substring(0, text.length-1);
    console.log(text);
    marqBox.innerText = text;
}
function stop(e)
{
    clearInterval(timer);
}