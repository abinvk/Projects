let arr = [];
let score = 0;

function generate() {
    arr = [];
    score = 0;

    // generate random numbers
    for (let i = 0; i < 8; i++) {
        arr.push(Math.floor(Math.random() * 4) + 1);
    }

    render();
    checkCombo();
}
function render() {
    let grid = document.getElementById("grid");
    grid.innerHTML = "";

    arr.forEach((num, index) => {
        let div = document.createElement("div");
        div.className = "cell";
        div.innerText = num;
        div.id = "cell-" + index;
        grid.appendChild(div);
    });
}
function checkCombo() {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {

            document.getElementById("cell-" + i).classList.add("combo");
            document.getElementById("cell-" + (i + 1)).classList.add("combo");
            document.getElementById("cell-" + (i + 2)).classList.add("combo");

            score += 10;
        }
    }
    document.getElementById("score").innerText = "Score: " + score;
}

// auto run on load
generate();