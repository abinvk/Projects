function compareAge(){
    let age1 = Number(document.getElementById("age1").value);
    let age2 = Number(document.getElementById("age2").value);
     let result = document.getElementById("result");

    if(isNaN(age1) || isNaN(age2) || age1 < 0 || age2 < 0){
        result.innerText = "Please enter valid ages";
        return;
    }
}