function displayTime() {
    let clock = document.querySelector("#clock");
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let min;
    if(m < 10) { min = "0" + m.toString(); } else {min = m.toString();}
    let time = h.toString() + ":" + min;
    clock.textContent = time;
}

function displayDate() {
    let cal = document.querySelector("#date");
    let today = new Date();
    cal.textContent = today.toLocaleDateString();
}

function topbarInit(){
    displayTime();
    setInterval(displayTime, 1000);
    displayDate();
    setInterval(displayDate, 1000);
}