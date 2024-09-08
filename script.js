
showView();
function showView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1>Stoppeklokke</h1>
    <div id="display">0</div>

    <button onclick="start()">Start</button>
    <button onclick="lap()">Lap</button>
    <button onclick="reset()">Reset</button>
    <div id="lapTime"></div>
    `
}

const displayOutput = document.getElementById('display');
let lapTime = document.getElementById('lapTime');
let seconds = 0;


function start(){   //start button
    setInterval(count, 1000);
    console.log();
}

function count(){   //counting seconds
    displayOutput.innerHTML = seconds;
    seconds++;
}

function lap(){
    lapTime.innerHTML += `<li>${seconds-1}</li >`;
    seconds = 0;
}

function reset(){
    location.reload()
}