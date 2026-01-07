const birthdayEl = document.getElementById("birthday");
const btnEl = document.getElementById("btn");
const reslutEl = document.getElementById("result");

function calculateAge(){
    const birthdayValue = birthdayEl.value;
    if(birthdayValue === "") {
        alert("Please enter your birthday");
    }else{
        const age = getAge(birthdayValue);
        reslutEl.innerText = `Your age is ${age} ${age > 1 ? "years": "year"} old`;
    }
}