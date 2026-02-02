const display = document.getElementById("display");

    function append(value) {
        if (display.textContent === "0" || display.textContent === "hello, world") {
        display.textContent = value;
        } else {
        display.textContent += value;
        }
    }

    function calculate() {
        display.textContent = "i miss you!";
    }

    function clearDisplay() {
        display.textContent = "0";
    }