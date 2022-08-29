const showTime = document.getElementById('time');
const greeting = document.getElementById('greeting');
const date = document.getElementById('date')
time = () => {
    let d = new Date();
    let day = d.toDateString();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    if (s < 10) {
        s = "0" + s;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (h < 10) {
        h = "0" + h;
    }

    if (h === 0 || h < 7) {
        greeting.innerText = "Good Night"
    } else if (h >= 7 && h < 13) {
        greeting.innerText = "Good Morning"
    } else if (h >= 13 && h < 19) {
        greeting.innerText = "Good Afternoon"
    } else {
        greeting.innerText = "Good Evening"
    }

    date.innerHTML = day
    showTime.textContent = h + ":" + m + ":" + s;
}
time();
setInterval(time, 1000);