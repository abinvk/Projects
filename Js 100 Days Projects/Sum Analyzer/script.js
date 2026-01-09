let number = [5,10,15,20];

let sum = 0;
for (let i = 0; i < number.length; i++){
    sum += number[i];
}
let average = sum / number.length;

console.log("Sum: " + sum);
console.log("Average: " + average);