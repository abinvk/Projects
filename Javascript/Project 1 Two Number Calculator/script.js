let resultText = document.getElementById("result");

function add(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    resultText.innerText = "Result: " + (a+b);
}

function sub(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    resultText.innerText = "Result: " + (a-b);
}

function mul(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    resultText.innerText = "Result: " + (a*b);
}

function div(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    resultText.innerText = "Result: " + (a/b);
}