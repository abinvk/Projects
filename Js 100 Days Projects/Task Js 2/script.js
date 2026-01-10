const marks = {
    abin : 85,
    bbin : 92,
    ccin : 78,
    ddin : 90,
    edin : 88
}


// find lowest Marks

let lowsetMarks = Infinity;
let name ="";

for( let name in marks){
    if(marks[name]< lowsetMarks){
        lowsetMarks = marks[name];
        name = name;
    };  
}
console.log("lowsetMarks: ",+ lowsetMarks);