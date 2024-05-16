let fishBox = document.getElementById("pond");
let fishLeftBox = document.getElementById("fishLeft");
let outputBox = document.getElementById("output");
let btn1 = document.getElementById("one");
let btn2 = document.getElementById("two");
let btn3 = document.getElementById("three");
let timeDelay = 2000;

btn1.addEventListener("click", removeFish);
btn2.addEventListener("click", removeFish);
btn3.addEventListener("click", removeFish);

let numFish = 21;
updateFish();

function removeFish(e)
{

    var btn = e.target.id;
    console.log("Removing "+btn);
    if(btn == "one")
        numFish-=1;
    else if (btn == "two")
        numFish-=2;
    else if (btn == "three")
        numFish-=3;
    disableButtons()
    updateFish();
    if(numFish > 0)
    {
        setTimeout(computerMove, timeDelay);
        outputBox.innerHTML = "Now it's my turn... hmmm."
    }
    else
    {
        outputBox.innerHTML = "What? You've bested me?!?! Fine. Begone, peasant.";
    }
}
function updateFish()
{
    fishBox.innerHTML = "";
    for(let i = 0; i < numFish; i++)
    {
        fishBox.innerHTML += "<img src='Files/Fish.png' class = 'fish'>"
    }
    fishLeftBox.innerHTML = numFish;
}
function computerMove()
{
    let take = numFish % 4;
    if(take == 0)
        take = Math.floor(Math.random() * 3)+1;
    outputBox.innerHTML = "I will take - "+take;
    numFish -= take;
    updateFish();
    if(numFish > 0)
        enableButtons();
    else
    {
        setTimeout(compWins, timeDelay);
    }
}
function compWins()
{
    outputBox.innerHTML = "I win. Now, your soul is mine!";
}
function disableButtons()
{
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
}
function enableButtons()
{
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
}