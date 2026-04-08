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

// 17. Copy object using Object.assign()

let studentb = {
    name: "Abin",
    age: 21
};

// Copy object using Object.assign()

let newStudentb = Object.assign({}, studentb);

console.log(newStudentb);

// 18. Compare two objects (basic)

let obj1 = {
    name: "Abin",
    age: 21
};

let obj2 = {
    name: "Abin",
    age: 21
};

let areEqual = JSON.stringify(obj1) === JSON.stringify(obj2);

console.log(areEqual);

// 19. Freeze an object

let person5 = {
    name: "Abin",
    age: 21
};
Object.freeze(person5);

person5.age = 22; 

console.log(person5.age); 

// 20. Seal an object

let person6 = {
    name: "Abin",
    age: 21
};

Object.seal(person6);
person6.age = 22;

console.log(person6.age);

// 21. Check if object is frozen


let person7 = {
    name: "Abin",
    age: 21
};
Object.freeze(person7);

console.log(Object.isFrozen(person7));

// 22. Convert object to JSON

let person8 = {
    name: "Abin",
    age: 21
};
let jsonString = JSON.stringify(person8);

console.log(jsonString);

// 23. Convert JSON to object

let jsonString2 = '{"name":"Abin","age":21}';

let person9 = JSON.parse(jsonString2);

console.log(person9);

// 24. Create object using constructor function

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.city = "Alleppey";
}
let person10 = new Person("Abin", 21 , "Alleppey");

console.log(person10);

// 25. Create object using class

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.city = "Alleppey";
    }
}
let person11 = new PersonClass("Abin", 21 , "Alleppey");

console.log(person11);

// 26. Use this keyword

let person12 = {
    name: "Abin",
    age: 22,
    
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person12.greet();

// 27. Add method inside object

let person13 = {
    name: "Abin",
    age: 22,
    city: "Alleppey"
};

person13.greet = function() {
    console.log("Hello, my name is " + this.name);
};

person13.greet();

// 28. Call object method

let person14 = {
    name: "Abin",
    age: 22,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
person14.greet();

// 29. Use dynamic property name

let propName = "age";

let person15 = {
    name: "Abin",
    [propName]: 22
};
console.log(person15.age);

//30. Rename a key

let person16 = {
    name: "Abin",
    age: 22
};
person16.fullName = person16.name;

delete person16.name;

console.log(person16);

// 31. Remove all properties

let person17 = {
    name: "Abin",
    age: 22,
    city: "Alleppey"
};
for (let key in person17) {
    delete person17[key];
}
console.log(person17);

// 32. Merge two objects

let objA = {
    name: "Abin",
    age: 22
};

let objB = {
    city: "Alleppey",
    country: "India"
};

let mergedObj = { ...objA, ...objB };

console.log(mergedObj);

// 33. Find property with specific value

let obj = {
    name: "Abin",
    age: 22,
    city: "Alleppey"
};

let propertyWithValue = Object.keys(obj).find(key => obj[key] === "Alleppey");

console.log(propertyWithValue);

// 34. Sort object keys

let objToSort = {
    name: "Abin",
    age: 22,
    city: "Alleppey"
};
let sortedKeys = Object.keys(objToSort).sort();
console.log(sortedKeys);

// 35. Convert object to array

let objToArray = {
    name: "Abin",
    age: 22,
    city: "Alleppey"
};
let arrayFromObject = Object.entries(objToArray);

console.log(arrayFromObject);

// 36. Convert array to object

let arrayToObject = [
    ["name", "Abin"],
    ["age", 22],
    ["city", "Alleppey"]
];
let objFromArray = Object.fromEntries(arrayToObject);
console.log(objFromArray);
