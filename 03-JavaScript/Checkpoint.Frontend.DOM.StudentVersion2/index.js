// Write all your code in this file
const myP = document.getElementById("dd");

function setBlueBorder() {
    myP.style.border = "solid 5px blue";

}

function setRedBorder() {
    myP.style.border = "solid 5px red";
}

let click = 0;
function toggleMintBackground() {
    colorArr = ["#aaf0d1", "#0033ff", "#00ccff", "#330000", "#33ffcc", "#660000", "#660066", "#990066", "#990000", "#cc99cc", "	#ff0099", "#ff99ff", 
    "#ffcccc", "#ffccff", "	#ffff66"];
    
    let randomNumber = Math.floor(Math.random() * colorArr.length);
    click == 0 ? myP.style.backgroundColor = "#aaf0d1" : myP.style.backgroundColor = colorArr[randomNumber];
    click++;
}

    const myDiv = document.getElementById("ee");
    const btnRotateCounter = document.createElement("button");
    const btnRotateClock = document.createElement("button");
    btnRotateCounter.innerText = "<<";
    btnRotateClock.innerText = ">>";
    myDiv.appendChild(btnRotateCounter);
    myDiv.appendChild(btnRotateClock);

    let degreesRotated = 0;

    btnRotateCounter.onclick = function () {
        myP.style.transform = `rotate(${degreesRotated - 45}deg)`;
        degreesRotated = degreesRotated - 45;
    }

    btnRotateClock.onclick = function () {
        myP.style.transform = `rotate(${degreesRotated + 45}deg)`;
        degreesRotated = degreesRotated + 45;
    }