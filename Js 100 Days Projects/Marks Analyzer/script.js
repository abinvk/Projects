let marks = [40,50,60,70,80,90,100]

let highest = Math.max(...marks);
let lowest = Math.min(...marks);

let sum = 0;
for (let i =0; i < marks.length; i++){
    sum += marks[i];
}
let average = sum / marks.length;

console.log("Highest Mark: " + highest);
console.log("Lowest Mark: " + lowest);
console.log("Average Mark: " + average);
