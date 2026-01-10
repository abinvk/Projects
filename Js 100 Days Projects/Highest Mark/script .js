const marks = {x: 12, y: 45, z: 67, a: 34, b: 78};

let highestMark = -Infinity;
let name = "";

for (let key in marks){
    if (marks[key] > highestMark){
        highestMark = marks[key];
        name = key;
    }

}
console.log("Highest :",name, highestMark);