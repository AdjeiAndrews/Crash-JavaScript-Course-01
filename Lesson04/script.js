const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn"); 
const resetBtn = document.getElementById("resetBtn");

function updateCounter(value) {
    const counterDisplay = document.getElementById("counterDisplay");
    counterDisplay.textContent = value;
}

let counterValue = 0;

increaseBtn.addEventListener("click", () => {
    counterValue++;
    updateCounter(counterValue);
});

decreaseBtn.addEventListener("click", () => {
    counterValue--;
    updateCounter(counterValue);
});

resetBtn.addEventListener("click", () => {
    counterValue = 0;
    updateCounter(counterValue);
}); 