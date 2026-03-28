                                       // JavaScript Objects – 200 Practice Questions //
                                
//     LEVEL 1: BASICS (1–40)    //

// 1. Create an object with name and age

let person = {
    name: "Abin",
    age: 21
};
console.log(person.name); // Abin
console.log(person.age);  // 21

// 2. Access object properties using dot notation

let persons = {
    name: "Abin",
    age: 21
};

console.log(persons.name);
console.log(persons.age );

// 3. Access using bracket notation

let personss = {
    name: "Abin",
    age: 21
};

console.log(personss["name"]);
console.log(personss["age"]);

// 4. Add a new property to an object

let prson = {
    name: "Abin",
    age: 21
};

// add new property

prson.city = "Alleppey";

console.log(prson);

// 5. Delete a property

let delt = {
    name: "Abin",
    age: 21,
    city: "Alleppey"
};

// delete property

delete delt.age;

console.log(delt);

// 6. Check if a property exists (in operator)

let personw = {
    name: "Abin",
    age: 21
};

console.log("name" in personw);
console.log("city" in personw);

// 7. Get all keys using Object.keys()

let abb = {
    name : "Abin",
    agem : 21,
    city : "Alleppey"
};

let keys = Object.keys(abb);

console.log(keys);