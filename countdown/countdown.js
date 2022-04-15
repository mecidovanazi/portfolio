const startingMinutes = 10;
let time = startingMinutes * 60

const buttonStart = document.getElementById("start")
const buttonStop  = document.getElementById("stop")
const buttonReset = document.getElementById("Resrt")

const countdownEL = document.getElementById ('second')
const  countEl = document.getElementById('tens')

setInterval( updateSecond, 10);
function updateSecond(){
    const minutes = Math.floor(time/60)
    let second = time % 60;
    
    updateSecond.innerHTML =`${second}: ${tens}`;
    time--;
}
