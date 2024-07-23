const hourEl = document.getElementById("Hours");
const minutsEl = document.getElementById("Minuts");
const secondEl = document.getElementById("Seconds");
const MiliEl = document.getElementById("Mili");

const ampmEl = document.getElementById("ampm");

function updateClock() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let mi = now.getMilliseconds();

    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    } else if (h === 0) {
        h = 12;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    mi = mi < 100 ? (mi < 10 ? "00" + mi : "0" + mi) : mi; // Ensure three digits

    hourEl.innerHTML = h;
    minutsEl.innerHTML = m;
    secondEl.innerHTML = s;
    MiliEl.innerHTML = mi;
    ampmEl.innerHTML = ampm;

    setTimeout(updateClock, 1);
}

updateClock();
