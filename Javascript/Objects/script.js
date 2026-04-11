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

// 37. Clone deeply (simple case)

let original = {
    name: "Abin",
    age: 22,
    address: {
        city: "Alleppey",
        state: "Kerala"
    }
};
let clone = JSON.parse(JSON.stringify(original));
console.log(clone);

// 38. Prevent extension

let person18 = {
    name: "Abin",
    age: 22
};
Object.preventExtensions(person18);
person18.city = "Alleppey";
console.log(person18.city); // undefined

// 39. Check extensible

console.log(Object.isExtensible(person18)); // false

// 40. Get property descriptor

let person19 = {
    name: "Abin",
    age: 22
};
let descriptor = Object.getOwnPropertyDescriptor(person19, "name");
console.log(descriptor);

//    LEVEL 2: INTERMEDIATE   //

// 41. Count frequency of elements using object

let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

let frequency = {};
for (let item of arr) {
    frequency[item] = (frequency[item] || 0) + 1;
}
console.log(frequency);

// 42. Find duplicate values

let arr2 = ["apple", "banana", "apple", "orange", "banana", "grape"];
let duplicates = {};
 
for (let item of arr2) {
    if (duplicates[item]) {
        duplicates[item].push(item);
    } else {
        duplicates[item] = [item];
    }
}
let duplicateValues = Object.values(duplicates).filter(group => group.length > 1).map(group => group[0]);

console.log(duplicateValues);

// 43. Group array of objects by property

let people = [
    { name: "Abin", city: "Alleppey" },
    { name: "Amit", city: "Kochi" },
    { name: "Abin", city: "Kozhikode" }
];
let groupedByName = people.reduce((acc, person) => {
    if (!acc[person.name]) {
        acc[person.name] = [];
    }
    acc[person.name].push(person);
    return acc;
}, {});

console.log(groupedByName);

// 44. Sum values of object

let objToSum = {
    a: 10,
    b: 20,
    c: 30
};

let sum = Object.values(objToSum).reduce((acc, val) => acc + val, 0);
console.log(sum);

// More Method

function sumObjectValues(obj) {
    let sum = 0;

    for (let key in obj) {
        sum += obj[key];
    }

    return sum;
}

// Example
let data = { a: 10, b: 20, c: 30 };
console.log(sumObjectValues(data));

//45. Filter object properties

let objToFilter = {
    name: "Abin",
    age: 22,
    city: "Alleppey"
};
let filteredObj = Object.fromEntries(
    Object.entries(objToFilter).filter(([key, value]) => typeof value === "string")
);
console.log(filteredObj);

// 46. Map object values

let objToMap = {
    a: 1,
    b: 2,
    c: 3
};
let mappedObj = Object.fromEntries(
    Object.entries(objToMap).map(([key, value]) => [key, value + 2])
);
console.log(mappedObj);

// 47. Invert keys and values 

let objToInvert = {
    name: "Abin",
    age: 22,
    city: "Alleppey"
};
let invertedObj = Object.fromEntries(
    Object.entries(objToInvert).map(([key, value]) => [value, key])
);
console.log(invertedObj);

// more model

const datas = {
  abin: "JS",
  rahul: "Python",
  arjun: "Java"
};

const result = Object.fromEntries(
  Object.entries(datas).map(([key, value]) => [value, key])
);
console.log(result);

// 48. Find max value in object

let objToFindMax = {
    a: 10,
    b: 20,
    c: 30
};
let maxValue = Math.max(...Object.values(objToFindMax));
console.log(maxValue);

// 49. Find min value in object

let objToFindMin = {
    a: 10,
    b: 20,
    c: 30
};
let minValue = Math.min(...Object.values(objToFindMin));
console.log(minValue);

// 50. Convert object to query string

let objToQueryString = {
    name: "Abin",
    age: 22,
    city: "Alleppey"
};
let queryString = Object.entries(objToQueryString)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
console.log(queryString);

// more method

const params = {
  name: "abin",
  age: 22
};

const queryStrings = new URLSearchParams(params).toString();
console.log(queryStrings);

// 51. Parse query string to object

const queryStringToParse = "name=Abin&age=22&city=Alleppey";
const parsedObj = Object.fromEntries(new URLSearchParams(queryStringToParse));
console.log(parsedObj);

// more method

const query = "name=abin&age=22";
const obja = Object.fromEntries(new URLSearchParams(query));

console.log(obja);

// 52. Flatten nested object

let nestedObj = {
    name: "Abin",
    age: 22,
    address: {
        city: "Alleppey",
        state: "Kerala"
    }
};
function flattenObject(obj, parentKey = "", result = {}) {
    for (let key in obj) {
        let newKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof obj[key] === "object" && obj[key] !== null) {
            flattenObject(obj[key], newKey, result);
        } else {
            result[newKey] = obj[key];
        }
    }
    return result;
}
let flattenedObj = flattenObject(nestedObj);
console.log(flattenedObj);


// 53. Deep merge objects

function deepMerge(target, source) {
    for (let key in source) {
        if (source[key] && typeof source[key] === "object") {
            if (!target[key] || typeof target[key] !== "object") {
                target[key] = {};
            }
            deepMerge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}
let objToMerge1 = {
    name: "Abin",
    address: {
        city: "Alleppey"
    }
};
let objToMerge2 = {
    age: 22,
    address: {
        state: "Kerala"
    }
};

let deepMergedObj = deepMerge(objToMerge1, objToMerge2);
console.log(deepMergedObj);

// 54. Remove undefined values

let objWithUndefined = {
    name: "Abin",
    age: undefined,
    city: "Alleppey"
};
let cleanedObj = Object.fromEntries(
    Object.entries(objWithUndefined).filter(([key, value]) => value !== undefined)
);
console.log(cleanedObj);


// 55. Remove null values

let objWithNull = {
    name: "Abin",
    age: null,
    city: "Alleppey"
};
let cleanedObjNull = Object.fromEntries(
    Object.entries(objWithNull).filter(([key, value]) => value !== null)
);
console.log(cleanedObjNull);

// 56. Sort object by values

let objToSortByValues = {
    a: 30,
    b: 10,
    c: 20
};
let sortedByValues = Object.fromEntries(
    Object.entries(objToSortByValues).sort(([, valueA], [, valueB]) => valueA - valueB)
);
console.log(sortedByValues);

// more method

const datass = {
  abin: 45,
  rahul: 67,
  arjun: 80
};

const sorted = Object.fromEntries(
  Object.entries(datass).sort((a, b) => a[1] - b[1])
);
console.log(sorted);

// 57. Find common keys between objects

let objA2 = {
    name: "Abin",
    age: 22,
    city: "Alleppey"
};
let objB2 = {
    name: "Amit",
    age: 22,
    country: "India"
};
let commonKeys = Object.keys(objA2).filter(key => key in objB2);
console.log(commonKeys);

// 58. Find missing keys

let missingKeys = Object.keys(objA2).filter(key => !(key in objB2));
console.log(missingKeys);


// 59. Compare two objects deeply


function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
        return false;
    }
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}
let objC = {
    name: "Abin",
    age: 22,
    address: {
        city: "Alleppey",
        state: "Kerala"
    }
};
let objD = {
    name: "Abin",
    age: 22,
    address: {
        city: "Alleppey",
        state: "Kerala"
    }
};
console.log(deepEqual(objC, objD)); // true

//60. Validate object structure

function validateObjectStructure(obj, structure) {
    for (let key in structure) {
        if (!(key in obj) || typeof obj[key] !== structure[key]) {
            return false;
        }
    }
    return true;
}
let objToValidate = {
    name: "Abin",
    age: 22,
    city: "Alleppey"
};
let structure = {
    name: "string",
    age: "number",
    city: "string"
};
console.log(validateObjectStructure(objToValidate, structure)); // true

// more method

function validateUser(user) {
    if (typeof user !== "object" || user === null) {
        return false;
    }

    if (typeof user.name !== "string") {
        return false;
    }

    if (typeof user.age !== "number") {
        return false;
    }

    if (typeof user.isActive !== "boolean") {
        return false;
    }

    return true;
}

// Test
let user1 = { name: "Abin", age: 22, isActive: true };
let user2 = { name: "Abin", age: "22", isActive: true };

console.log(validateUser(user1)); // true
console.log(validateUser(user2)); // false


// 61. Create object from array

let arrToObject = [
    ["name", "Abin"],
    ["age", 22],
    ["city", "Alleppey"]
];
let objFromArr = Object.fromEntries(arrToObject);
console.log(objFromArr);

// more method

function createObject(keys) {
    let obj = {};

    for (let key of keys) {
        obj[key] = null;
    }

    return obj;
}

// Test
console.log(createObject(["name", "age"]));