


const startMinutes = 10;
let time = startMinutes*60;


setInterval(udateCounter,1000);

const countDownEl = document.getElementById('time-display');

function udateCounter(){
    const minutes = Math.floor(time / 60);
    let seconds = time %60;
    countDownEl.innerHTML = `${minutes}: ${seconds}`
    time --;
}

start.addEventListener("click", function () {
udateCounter();

}); 


