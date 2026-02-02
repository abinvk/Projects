function checkType(){
    let value = document.getElementById("inputValue").value;
    let resultText = document.getElementById("result");

    if (value === ""){
        resultText.innerText = "Please enter a value";
        return;
    }

    if (!isNaN(value)){
        value = Number(value);
    }

    let type = typeof value;

    if (value === null){
        type = "null";
    }

    resultText.innerText = "Data Type: " + type;
}