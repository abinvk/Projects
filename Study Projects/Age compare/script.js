function compareAge(){
    let age1 = Number(document.getElementById("age1").value);
    let age2 = Number(document.getElementById("age2").value);
     let result = document.getElementById("result");

    if(isNaN(age1) || isNaN(age2) || age1 < 0 || age2 < 0){
        result.innerText = "Please enter valid ages";
        return;
    }

    if (age1 > age2){
        result.innerText = "First person is older";
    }else if (age1 < age2){
         result.innerText = "Second person is older";
    }else{
        result.innerText = "Both are of same age";
    }
       
}

