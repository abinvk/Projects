const students = {
    abin: 78,
    bella: 85,
    charlie: 92,
    diana: 88,
    ethan: 76
};
let topperName = "";
let highestMarks = -Infinity;

for (let name in students) {
  if (students[name] > highestMarks) {
    highestMarks = students[name];
    topperName = name;
  }
}

console.log("Topper:", topperName);
console.log("Marks:", highestMarks);
