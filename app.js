function randomize() {
    let quantity = parseInt(document.getElementById("quantity").value);
    let from = parseInt(document.getElementById("from").value);
    let to = parseInt(document.getElementById("to").value);

    if (isNaN(quantity) || isNaN(from) || isNaN(to)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    if (from > to) {
        alert("The 'From' value must be less than or equal to 'To'.");
        return;
    }

    let rangeSize = to - from + 1;
    if (quantity > rangeSize) {
        alert(`You cannot draw ${quantity} unique numbers in a range of ${rangeSize}.`);
        return;
    }

    let sorted = [];
    while (sorted.length < quantity) {
        let number = getRandomNumber(from, to);
        if (!sorted.includes(number)) {
            sorted.push(number);
        }
    }

    renderResults(sorted);
    document.getElementById("btn-restart").disabled = false;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderResults(numbers) {
    let list = document.getElementById("result-list");
    let empty = document.querySelector(".result__empty");

    list.innerHTML = "";
    numbers.forEach((n) => {
        let li = document.createElement("li");
        li.textContent = n;
        list.appendChild(li);
    });

    list.hidden = false;
    empty.hidden = true;
}

function restart() {
    document.getElementById("quantity").value = "";
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";

    let list = document.getElementById("result-list");
    list.innerHTML = "";
    list.hidden = true;

    document.querySelector(".result__empty").hidden = false;
    document.getElementById("btn-restart").disabled = true;
}
