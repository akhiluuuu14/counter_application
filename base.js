
let counterElement = document.getElementById("counterValue");

function updateCounterColor(value) {
    if (value > 0) {
        counterElement.style.color = "green";
    } else if (value < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
}

function onIncrement() {
    let value = parseInt(counterElement.textContent, 10);
    counterElement.textContent = value + 1;
    updateCounterColor(value + 1);
}

function onDecrement() {
    let value = parseInt(counterElement.textContent, 10);
    counterElement.textContent = value - 1;
    updateCounterColor(value - 1);
}

function onReset() {
    counterElement.textContent = 0;
    updateCounterColor(0);
}
