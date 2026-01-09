let number = [3,44,55,56,89];

let highest = Math.max(...number);
let sum = 0;

for(let i = 0; i < number.length; i++){
    sum += number[i];
}
console.log("Highest Number: " + highest);