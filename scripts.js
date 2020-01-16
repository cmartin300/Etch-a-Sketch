let container = document.querySelector('#container');
let blackButton = document.querySelector('#black');
let redButton = document.querySelector('#red');
let clearButton = document.querySelector('#clear');
let resizeButton = document.querySelector('#resize');

let number = prompt("How big would you like your grid to be?", '16');

createGrid(number);

function createGrid(number) {
    let area = number * number;

    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;

    resizeButton.addEventListener("click", function() {
        resize();
    });

    for (i = 0; i < area; i++) {
        let newDivs = document.createElement('div');
        newDivs.className = "newDivs";
        container.appendChild(newDivs);

        blackButton.addEventListener("click", function() {
            newDivs.addEventListener("mouseover", function() {
                newDivs.style.backgroundColor = "black";
            });
        });

        redButton.addEventListener("click", function() {
            newDivs.addEventListener("mouseover", function() {
                newDivs.style.backgroundColor = "red";
            });
        });

        clearButton.addEventListener("click", function() {
                newDivs.style.backgroundColor = "white";
        });
    }
}

function resize() {
    let divsDelete = document.getElementsByClassName("newDivs");
    while(divsDelete.length > 0) {
        divsDelete[0].parentNode.removeChild(divsDelete[0]);
    }

    number = prompt("How big would you like your grid to be?", '16');
    createGrid(number);
}