const marks = {
    abin : 85,
    bbin : 92,
    ccin : 78,
    ddin : 90,
    edin : 88
}

//find Highest Marks


let highestMarks = -Infinity;
let name ="";

for( let name in marks){
    if(marks[name]> highestMarks){
        highestMarks = marks[name];
        name = name;
    };
}
console.log("highestMarks: ",+ highestMarks);