const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const millisecondsLabel = document.getElementById("milliseconds");

const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");
const pauseButton = document.getElementById("pauseBtn");
const resetButton = document.getElementById("resetBtn");

const lapList = document.getElementById("lapList");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerInterval;
let isRunning = false;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timerInterval = setInterval(updateTimer, 10);
    startButton.disabled = true;
}

function stopTimer() {

    clearInterval(timerInterval);
    if (isRunning || minutes || seconds || milliseconds) {
        addToLapList();
    }
    isRunning = false;
    resetTimerData();
    startButton.disabled = false;
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    startButton.disabled = false;

}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    resetTimerData();
    startButton.disabled = false;
}

function updateTimer() {
    milliseconds ++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds ++;
        if (seconds === 60) {
            seconds = 0;
            minutes ++;
        }
    }

    displayTimer();
}

function displayTimer() {
    millisecondsLabel.textContent = padTime(milliseconds);
    secondsLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);
}

function padTime(time) {
    return time.toString().padStart(2, "0");
}

function resetTimerData() {
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayTimer();
}

function addToLapList() {
    const lapTime = `${padTime(minutes)}: ${padTime(seconds)}: ${padTime(milliseconds)}`;

    const listItem = document.createElement("li");
    listItem.textContent = `Lap ${lapList.childElementCount + 1}: ${lapTime}`;
    lapList.appendChild(listItem);
}
