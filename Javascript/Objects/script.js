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

// 8. Get all values using Object.values()

let abbc = {
    name : "Abin",
    agem : 21,
    city : "Alleppey"
};

let values = Object.values(abbc);

console.log(values);

// 9. Get key-value pairs using Object.entries()

let abbcc = {
    name : "Abin",
    agem : 21,
    city : "Alleppey"
};

let entries = Object.entries(abbcc);

console.log(entries);

// 10. Count number of properties

let abbbcc = {
    name : "Abin",
    agem : 21,
    city : "Alleppey",
    local: "malmuri"
};
let count = Object.keys(abbbcc).length;

console.log(count); 

// 11. Loop through object using for...in

let abbbccc = {
    name : "Abin",
    agem : 21,
    city : "Alleppey",
    local: "malmuri"
};

for (let key in abbbccc) {
    console.log(key, abbbccc[key]);
}

// 12. Create nested object.

let person1 = {
    name: "Abin",
    age: 21,
    address: {
        city: "Alleppey",
        state: "Kerala"
    }
};
console.log(person1);

// 13. Access nested object value

let person2 = {
    name: "Abin",
    age: 21,
    address: {
        city: "Alleppey",
        state: "Kerala"
    }
};
console.log(person2.address.city);
console.log(person2.address.state);

// 14. Update nested value.

let person3 = {
    name: "Abin",
    age: 21,
    address: {
        city: "Alleppey",
        state: "Kerala"
    }
};
person3.address.city = "Kochi";

console.log(person3.address.city);

// 15. Add object inside object

let person4 = {
    name: "Abin",
    age: 21,
    address: {
        city: "Alleppey",
        state: "Kerala"
    }
};
person4.address.zip = "688001";
console.log(person4.address);

// 16. Copy object using spread operator

let student = {
    name: "Abin",
    age: 21
};

// Copy object using spread operator

let newStudent = { ...student };

console.log(newStudent);

// More Method

let studenta = {
    name: "Abin",
    address: {
        city: "Malappuram"
    }
};

let newStudenta = { ...studenta };

newStudenta.address.city = "Kozhikode";

console.log(studenta.address.city);