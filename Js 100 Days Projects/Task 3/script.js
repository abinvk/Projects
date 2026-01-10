const marks = {
    abin : 85,
    bbin : 92,
    ccin : 78,
    ddin : 90,
    edin : 88
}

// find passed students

let passCount = 0;


for (let student in marks) {
    if (marks[student] >= 80) {
        passCount++;
    }
}
console.log("Number of students who passed:", passCount);