// 1. Create an array of 5 numbers.

let arr = [1,2,3,4,5];

console.log (arr);

// 2. Print first element.

let number = [1,2,3,4,3];

console.log(number[0]);

// 3. Print last element

let lastNumber = [1,2,3,4,3];

console.log(lastNumber[4]);

// More method 

let numbers = [10, 20, 30, 40, 50];

// Print last element

console.log(numbers[numbers.length - 1]);

//4. Find array length

let lengthNumber = [1,2,3,4,3];

console.log(lengthNumber.length);

// 5. Add element at end using push().

let addArray = [10,20,30,40,50];

console.log(addArray);

// Add element at end

addArray.push(60);

console.log(addArray);

// 6. Remove last element using pop().

let removeArray = [20,30,40,50,60];

console.log(removeArray);

// Remove last element

removeArray.pop();

console.log(removeArray);

// 7. Add element at beginning using unshift().

let unshiftArray = [20,40,60,80,]

console.log(unshiftArray);

//  add first unshift() - 

unshiftArray.unshift(10);

console.log(unshiftArray);

// 8. Remove first element using shift().

let shiftArray = [90,80,70,60,50,40,30]

console.log(shiftArray);

// shfit().

shiftArray.shift();

console.log(shiftArray);

// 9. Loop through array using for loop.

let loopArray = [10,20,30,40,50];

for (let i = 0; i < loopArray.length; i++) {
    console.log(loopArray[i]);
}

// 10. Loop using for...of.

let forArray = [10,70,80,90,50,60];

for (let num of forArray){
    console.log(num);
}

// 11. Print elements greater than 10.

let greterArray = [20,30,49,1,2,3,4,5]

for (let faahaa of greterArray){
    if(faahaa > 10){
        console.log(faahaa);
    }
}

// 12. Count total elements.

let countTotal = [10,20,30,40,50];

let count = countTotal.length;

console.log(count);

// 13. Sum all numbers


let sumNumbers = [10, 20, 30, 40, 50];

let sum = 0;

for (let num of sumNumbers) {
  sum = sum + num;
}
console.log(sum);


// 14. Find average of numbers.


let avaregeNumber = [10, 20, 30, 40, 50];

let sums = 0 ;

for (let ava of avaregeNumber){
    sums = sums + ava ;
}

let avarege = sums / avaregeNumber.length;

console.log(avarege);


// 15. Find largest number.

let largestNumer = [20,44,56,7,8,89,87,54];

let largest = largestNumer[0];

for (let gan of largestNumer){
    if(gan > largest){
        largest = gan;
    }
}
console.log(largest);

// 16. Find smallest number.

let  smallestNumber = [20,44,56,7,8,89,87,54];

let small = smallestNumber[0];

for (let han of smallestNumber){
    if(han < small){
        small = han;
    }
}
console.log(small);

// 17. Reverse array manually (without reverse()).

let reversArray = [1,2,3,4,5,7,8];

console.log(reversArray);

let revesed = [];

for (let i = reversArray.length - 1; i >= 0; i--){
    revesed.push(reversArray[i]);
}

console.log(revesed);

// 18. Copy array using loop.

let normelArray = [1,2,3,4,5]

console.log("NormelArray = " + normelArray);

let coppyArray = [];

for (let i = 0; i < normelArray.length; i++){
    coppyArray.push(normelArray[i]);
}

console.log("CoppyArray = " + coppyArray);

// 19. Check if value exists in array.

let checkArray = [10, 20, 30, 40, 50];

let searchValus = 40;

let found = false;

for (let i = 0; i < checkArray.length; i++){
    if (checkArray[i] === searchValus){
        found = true;
    }
}
console.log(found);

// 20. Count even numbers

let evenCheck = [1,2,3,4,5,6,7,8,9,10];

console.log("CheckArray = " + evenCheck);

let countt = 0;

for (let i = 0; i < evenCheck.length; i++){

    if ( evenCheck [i] % 2 === 0){
        countt++;
    }
}
console.log("EvenNumberCount = " + countt);

//21. Count odd numbers.


let oddCheck = [1,2,3,4,5,6,7,8,9,10];

console.log("CheckArray = " + oddCheck);
 
let counte = 0 ;

for (let i = 0; i < oddCheck.length; i++){
    if(oddCheck[i] %2 !== 0){
        counte++;
    };
}; 
console.log("OddoNumberCount = " + counte);

// 22. Multiply all numbers

let multiplyArray = [1,2,3,4,5];

let multi = 1;

for(let i = 0; i < multiplyArray.length; i++){

    multi = multi * multiplyArray[i];

}
console.log(multi);

// 23. Convert numbers to string.

let convertArray = [1,2,3,4,5];

let stringArray = [];

for (let i = 0; i < convertArray.length; i++){
    stringArray.push(String(convertArray[i]));
};

console.log(stringArray);

// 24. Create array from string

let text = "Hello";

let arra = [];

for (let i = 0; i < text.length; i++){
    arra.push(text[i]);
}
console.log(arra);

// 25. Join array into string

let letters = ["H","e","l","l","o"];

let reslut = "";

for (let i = 0; i <letters.length; i++){
    reslut = reslut + letters[i];
}
console.log(reslut);

// 26. Sort numbers ascending.

let sortArray = [9,1,8,2,7,3,4,6,5];

console.log(sortArray);

for (let i = 0; i < sortArray.length; i++){

    for (let j = 0; j < sortArray.length - 1; j++){

        if (sortArray[j] > sortArray[j + 1]){
             
            let temp = sortArray[j];
            sortArray[j] = sortArray[j + 1];
            sortArray[j + 1] = temp;
        }
    }
}
console.log(sortArray);

//27. Sort numbers descending.

let descendingArray = [9,1,8,2,7,3,6,4,5];

console.log(descendingArray);

for(let i = 0; i < descendingArray.length; i++){

    for (let j = 0; j < descendingArray.length - 1; j++){
        if (descendingArray[j] < descendingArray[j + 1]){

            let tem = descendingArray[j];
            descendingArray[j] = descendingArray[j + 1];
            descendingArray[j + 1] = tem;
        }
    }
}
console.log(descendingArray);


//28. Remove duplicate values.


let duplicate = [1,2,3,2,3,4,5];

console.log(duplicate);

let unique = [];

for (let i = 0; i < duplicate.length; i++){
    if(!unique.includes(duplicate[i])){
        unique.push(duplicate[i]);
    };
};
console.log(unique);


//29. Merge two arrays.


let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log(arr1,arr2);

let merged = [];

for (let i = 0; i < arr1.length; i++){
    merged.push(arr1[i]);
};

for (let i = 0; i < arr2.length; i++){
    merged.push(arr2[i]);
};

console.log(merged);

//30. Find index of element.

let numbersx = [10,20,30,40,50];
let target = 30;
let index = -1;

for(let i = 0; i < numbersx.length; i++){

    if(numbersx[i] === target){
        index = i;
        break;
    }

}
console.log(index);

// 31. Check if array is empty.

let eArray = [];

if (eArray.length === 0){
    console.log("Array is empty");
}else{
    console.log("Array is not empty");
}


// 32. Convert array to comma-separated string.


let fruits = ["apple","banana","mango"];

let result = "";

for(let i = 0; i < fruits.length; i++){

    result += fruits[i];

    if(i < fruits.length - 1){
        result += ",";
    }

}
console.log(result);

//33. Replace element at specific index

let nArray = [1,2,3,4,5];

let indexx = 3;
let newValue = 8005;

nArray[indexx] = newValue;

console.log(nArray);

// 34. Remove element at specific index.

let numbersw = [10,20,30,40,50];

let indexw = 2;

for(let i = indexw; i < numbersw.length - 1; i++){
    numbersw[i] = numbersw[i + 1];
}

numbersw.length = numbersw.length - 1;

console.log(numbersw);

//35. Insert element at specific index.

let numbersu = [10,20,30,40];

let indexu = 2;
let value = 25;

for(let i = numbersu.length; i > indexu; i--){
    numbersu[i] = numbersu[i - 1];
}

numbersu[indexu] = value;
console.log(numbersu);

//36. Print array in reverse order using loop.

let numberst = [10,20,30,40]; 
console.log(numberst);

for(let i = numberst.length - 1; i >= 0; i--){
    console.log(numberst[i]);
}

// 37. Create 2D array.

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matrix);  // 39

// 39. Find sum of 2D array.

let matrixc = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

let sumc = 0;

for(let i = 0; i < matrixc.length; i++){

    for(let j = 0; j < matrixc[i].length; j++){

        sumc += matrixc[i][j];
    }
}
console.log(sumc);

// 40. Flatten 2D array.

let matri = [
  [1,2],
  [3,4],
  [5,6]
];

let resut = [];

for(let i = 0; i < matri.length; i++){
    for(let j = 0; j < matri[i].length; j++){
        resut.push(matri[i][j]);
    }
}
console.log(resut);


// LEVEL 2 – MAP / FILTER / REDUCE

// 41. Double each number using map().

let each = [1,2,3,4];

let double = each.map(function(num){
    return num * 2;
});

console.log(double);

// 42. Square each number.

let squ = [1,2,3,4];

let ex = squ.map(function(nums){
    return nums * nums; 
});
console.log(ex);

// 43. Convert names to uppercase.

let names = ["abin","rahul","amal"];

console.log(names);

let upper = names.map(function(name){
    return name.toUpperCase();
});
console.log(upper);


// 44. Extract even numbers using filter().

let evv = [1,2,3,4];

let nam = evv.filter(function(eva){
    return eva %2 === 0;
});
console.log(nam);

//45. Extract odd numbers

let evva = [1,2,3,4];

let nama = evva.filter(function(evaa){
    return evaa %2 === 1;
});
console.log(nama);

//46. Filter numbers greater than 50.

let grea = [25,35,45,55,65,75];

let bers = grea.filter(function(grea){
    return grea >= 50;
});
console.log(bers);

//47. Filter strings longer than 5 characters.

let words = ["cat","elephant","dog","tiger","giraffe"];

let longWords = words.filter(function(word){
    return word.length > 5;
});

console.log(longWords);

// 48. Find total sum using reduce().

let numbersf = [10,20,30,40];

let total = numbersf.reduce(function(sum, num){
    return sum + num;
},0);

console.log(total);

//49. Find product using reduce().

let numberss = [2,3,4];

let product = numberss.reduce(function(result, num){
    return result * num;
},1);

console.log(product);

//50. Count occurrences of a value.

let numberso = [1, 2, 3, 2, 4, 2, 5];

let targeto = 2;
let counto = 0;

for(let i = 0; i < numberso.length; i++){

    if(numberso[i] === targeto){
        counto++;
    }

}

console.log(counto);

//51. Count vowels in array of words.

let wordsy = ["apple", "banana", "orange"];

let county = 0;

for(let i = 0; i < wordsy.length; i++){

    let wordy = wordsy[i];

    for(let j = 0; j < wordy.length; j++){

        let char = wordy[j];

        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            county++;
        }

    }

}
console.log(county);


// 52. Get unique values using filter.

let numbersi = [1,2,2,3,4,4,5];

let uniquei = numbersi.filter(function(value, index, array){

    return array.indexOf(value) === index;

});

console.log(uniquei);

// 53. Add GST to price array.

let prices = [100,200,300];

let gstprice = prices.map(function(prices){
    return prices + (prices * 18 / 100);
});
console.log(gstprice);

//54. Convert Celsius array to Fahrenheit.

let celsius = [0,10,20,30];

let fahrenheit = celsius.map(function(temp){

    return (temp * 9/5) + 32;

});
console.log(fahrenheit);

// 55. Add 10% bonus to salary array.

let salaries = [20000, 30000, 40000];

let newSalaries = salaries.map(function(salary){

    return salary + (salary * 10 / 100);

});
console.log(newSalaries);

// 56. Find max using reduce.

let numberse = [10, 25, 7, 40, 15];

let max = numberse.reduce(function(acc, num){

    if(num > acc){
        return num;
    }else{
        return acc;
    }

});
console.log(max);

// 57. Find min using reduce.

let numbersex = [10, 25, 7, 40, 15];

let maxx = numberse.reduce(function(acc, num){

    if(num < acc){
        return num;
    }else{
        return acc;
    }

});
console.log(maxx);

// 58. Group even and odd numbers

let numbersz = [1,2,3,4,5,6];

let resultz = numbersz.reduce(function(acc, num){

    if(num % 2 === 0){
        acc.even.push(num);
    }else{
        acc.odd.push(num);
    }

    return acc;

}, {even:[], odd:[]});
console.log(resultz);

// 59. Count words starting with letter A.

let wordsh = ["Apple", "Banana", "Avocado", "Mango", "Apricot"];

let counth = wordsh.reduce(function(acc, word){

    if(word[0] === "A"){
        acc++;
    }

    return acc;

}, 0);
console.log(counth);

// 60. Find longest word

let wordsq = ["cat", "elephant", "dog", "tiger"];

let longest = wordsq.reduce(function(acc, word){

    if(word.length > acc.length){
        return word;
    }else{
        return acc;
    }

});
console.log(longest);

// 61. Find shortest word.

let wordsqq = ["cat", "elephant", "dog", "tiger"];

let shortest = wordsqq.reduce(function(acc, word){

    if(word.length < acc.length){
        return word;
    }else{
        return acc;
    }

});

console.log(shortest);

// 62. Get first 3 elements.

let numbersaa = [10, 20, 30, 40, 50];

let resultaa = numbersaa.slice(0,3);

console.log(resultaa);

// 63. Get last 3 elements.

let numbersdd = [10, 20, 30, 40, 50];

let resultdd = numbers.slice(-3);

console.log(resultdd);

// 64. Remove negative numbers.

let numbersvv = [5, -3, 8, -2, 10, -7];

let resultvv = numbersvv.filter(function(num){
    return num >= 0;
});
console.log(resultvv);

//65. Replace negative numbers with 0.

let numbersww = [5, -3, 8, -2, 10];

let resultww = numbersww.map(function(num){

    if(num < 0){
        return 0;
    }else{
        return num;
    }

});
console.log(resultww);

// 66. Convert array of numbers to object.

let numbersgg = [10, 20, 30];

let resultgg = numbersgg.reduce(function(acc, num, index){

    acc[index] = num;

    return acc;

}, {});
console.log(resultgg);

//67. Convert object values to array.

let person = {
 name: "Abin",
 age: 22,
 city: "Kochi"
};

let resulta = Object.values(person);

console.log(resulta);

// 68. Create custom map function.

let numbersxx = [1,2,3];

let resultxx = numbersxx.map(num => num * 2);

console.log(resultxx);

//69. Create custom filter function.

let numberszz = [1,2,3,4,5];

let resultzz = numberszz.filter(num => num % 2 === 0);

console.log(resultzz);

//70. Create custom reduce function.

let numberskk = [1,2,3,4];

let sumkk = numberskk.reduce((acc,num)=> acc + num, 0);

console.log(sumkk);

//71. Remove null values

let arraa = [10, null, 20, null, 30];

let resultaaa = arraa.filter(function(value){
    return value !== null;
});

console.log(resultaaa);

// 72. Remove undefined values.

let arruu = [10, undefined, 20, undefined, 30];

let resultuu = arruu.filter(function(value){
    return value !== undefined;
});

console.log(resultuu);

// 73. Remove falsy values.

let arrpp = [0, "hello", false, 25, "", null, "JS"];

let resultpp = arrpp.filter(function(value){
    return Boolean(value);
});

console.log(resultpp);

// 74. Find intersection of two arrays.

let arr11 = [1,2,3,4];
let arr22 = [3,4,5,6];

let resultcc = arr11.filter(function(num){
    return arr22.includes(num);
});

console.log(resultcc);

// 75. Find difference between two arrays.

let arr111 = [1,2,3,4];
let arr222 = [3,4,5,6];

let resultw = arr111.filter(function(num){
    return !arr222.includes(num);
});

console.log(resultw);

// 76. Merge and remove duplicates.

let arr1111 = [1,2,3];
let arr2222 = [3,4,5];

let mergedq = [...new Set([...arr1, ...arr2])];

console.log(mergedq);

//77. Check if all numbers are positive.

let numbersl = [2,5,8,10];

let resultl = numbersl.every(function(num){
    return num > 0;
});

console.log(resultl);

//78. Check if any number is negative.

let numbersbb = [5, 8, -3, 10];

let resultbb = numbersbb.some(function(num){
    return num < 0;
});

console.log(resultbb);

//79. Find first number greater than 100.

let numbersp = [20, 50, 120, 80, 200];

let resultp = numbersp.find(function(num){
    return num > 100;
});

console.log(resultp);

// 80. Find index of first even number.

let numbersii = [3, 7, 9, 4, 6];

let resultii = numbersii.findIndex(function(num){
    return num % 2 === 0;
});
console.log(resultii);

// LEVEL 3 – ARRAY + OBJECTS

// 81. Create array of student objects.

let students = [
{
name: "Arun",
age: 20,
mark: 85
},
{
name: "Rahul",
age: 21,
mark: 90
},
{
name: "Anu",
age: 19,
mark: 88
}
];

//82. Print all student names.


let studentss = [
{
name: "Arun",
age: 20,
mark: 85
},
{
name: "Rahul",
age: 21,
mark: 90
},
{
name: "Anu",
age: 19,
mark: 88
}
];
for(let i = 0; i < studentss.length; i++) {
console.log(studentss[i].name);
};

// 83. Print students with marks greater than 50.

let studentse = [
{
name: "Arun",
mark: 45
},
{
name: "Rahul",
mark: 78
},
{
name: "Anu",
mark: 55
},
{
name: "Vishnu",
mark: 30
}
];
for(let i = 0; i < studentse.length; i++) {

if(studentse[i].mark > 50) {
console.log(studentse[i].name);
};
};

//84. Find topper student.

let studentsy = [
{
name: "Arun",
mark: 45
},
{
name: "Rahul",
mark: 78
},
{
name: "Anu",
mark: 92
},
{
name: "Vishnu",
mark: 60
}
];
let topper = studentsy[0];

for(let i = 1; i < studentsy.length; i++) {

if(studentsy[i].mark > topper.mark) {
topper = studentsy[i];
};
};
console.log(topper.name, topper.mark);

// 85. Find average mark.                                        // project

let studentso = [
{ name: "Arun", mark: 40 },
{ name: "Rahul", mark: 80 },
{ name: "Anu", mark: 60 },
{ name: "Vishnu", mark: 20 }
];

let totalr = 0;
for (let i = 0; i < studentso.length; i++) {
  totalr = total + studentso[i].mark;
}
let average = totalr / students.length;
console.log(average);

//86. Count failed students.                                     // project

let studentsu = [
{ name: "Arun", mark: 40 },
{ name: "Rahul", mark: 80 },
{ name: "Anu", mark: 35 },
{ name: "Vishnu", mark: 60 }
];

let countw = 0;

for (let i = 0; i < studentsu.length; i++) {
  if (studentsu[i].mark < 50) {
    countw++;
  }
}
console.log(countw);

//87. Sort students by marks.

let studentsp = [
{ name: "Arun", mark: 40 },
{ name: "Rahul", mark: 80 },
{ name: "Anu", mark: 60 },
{ name: "Vishnu", mark: 20 }
];
studentsp.sort(function(a, b) {
  return a.mark - b.mark;
});

console.log(studentsp);

//88. Sort students by name.

let studentspp = [
{ name: "Arun", mark: 40 },
{ name: "Rahul", mark: 80 },
{ name: "Anu", mark: 60 },
{ name: "Vishnu", mark: 20 }
];
studentspp.sort(function(a, b) {
  return a.name.localeCompare(b.name);
});
console.log(studentspp);

// 89. Add new student object.

let studentsx = [
{ name: "Arun", mark: 40 },
{ name: "Rahul", mark: 80 },
{ name: "Anu", mark: 60 }
];
studentsx.push({ name: "Vishnu", mark: 75 });
console.log(studentsx);

//90. Remove student by id.

let studentsc = [
  { id: 1, name: "Arun", mark: 70 },
  { id: 2, name: "Meera", mark: 85 },
  { id: 3, name: "Rahul", mark: 40 },
  { id: 4, name: "Anu", mark: 90 }
];
let removeId = 3;

studentsc = studentsc.filter(function(studentc){
  return studentc.id !== removeId;
});

console.log(studentsc);

//92. Find student by id.

let studentsaa = [
  { id: 1, name: "Arun", mark: 70 },
  { id: 2, name: "Meera", mark: 85 },
  { id: 3, name: "Rahul", mark: 40 },
  { id: 4, name: "Anu", mark: 90 }
];

let searchId = 2;
let studentaa = studentsaa.find(function(s){
  return s.id === searchId;
});

console.log(studentaa);

//93. Check if student exists.

let studentsqq = [
  { id: 1, name: "Arun", mark: 70 },
  { id: 2, name: "Meera", mark: 85 },
  { id: 3, name: "Rahul", mark: 40 },
  { id: 4, name: "Anu", mark: 90 }
];

let searchIdq = 8;
let exists = studentsqq.some(function(s){
  return s.id === searchIdq;
});

console.log(exists);

// 94. Group students by grade

let studentsr = [
  { id: 1, name: "Arun", mark: 70 },
  { id: 2, name: "Meera", mark: 85 },
  { id: 3, name: "Rahul", mark: 40 },
  { id: 4, name: "Anu", mark: 95 }
];

let groups = {
  A: [],
  B: [],
  C: [],
  F: []
};

studentsr.forEach(function(s){

  if(s.mark >= 90){
    groups.A.push(s);
  }

  else if(s.mark >= 75){
    groups.B.push(s);
  }

  else if(s.mark >= 50){
    groups.C.push(s);
  }

  else{
    groups.F.push(s);
  }

});
console.log(groups);

// 95. Calculate total salary from employee array.

let employees = [
  { id: 1, name: "Arun", salary: 25000 },
  { id: 2, name: "Meera", salary: 30000 },
  { id: 3, name: "Rahul", salary: 20000 },
  { id: 4, name: "Anu", salary: 35000 }
];

let totalSalary = 0;

employees.forEach(function(emp){
  totalSalary += emp.salary;
});

console.log(totalSalary);

// 96. Filter employees above 30 years.

let employeesx = [
  { id: 1, name: "Arun", age: 25 },
  { id: 2, name: "Meera", age: 32 },
  { id: 3, name: "Rahul", age: 40 },
  { id: 4, name: "Anu", age: 28 }
];

let resultx = employeesx.filter(function(emp){
  return emp.age > 30;
});

console.log(resultx);

// 97. Find employee with highest salary.

let employeesw = [
  { id: 1, name: "Arun", salary: 25000 },
  { id: 2, name: "Meera", salary: 30000 },
  { id: 3, name: "Rahul", salary: 20000 },
  { id: 4, name: "Anu", salary: 35000 }
];

let highest = employeesw[0];
employeesw.forEach(function(emp){
  if(emp.salary > highest.salary){
    highest = emp;
  };
});
console.log(highest);

// 98. Add bonus to all employees.

let employeesy = [
  { id: 1, name: "Arun", salary: 25000 },
  { id: 2, name: "Meera", salary: 30000 },
  { id: 3, name: "Rahul", salary: 20000 }
];
let bonus = 5000;

employeesy.forEach(function(emp){
  emp.salary = emp.salary + bonus;
});

console.log(employeesy);

// 99. Count employees in each department.

let employeeso = [
 { id:1, name:"Arun", department:"IT" },
 { id:2, name:"Meera", department:"HR" },
 { id:3, name:"Rahul", department:"IT" },
 { id:4, name:"Anu", department:"Sales" },
 { id:5, name:"John", department:"HR" }
];
let counts = {};

employeeso.forEach(function(emp){

  if(counts[emp.department]){
    counts[emp.department]++;
  }else{
    counts[emp.department] = 1;
  }

});
console.log(counts);

//100. Convert student array to id-name object.

let studentsrr = [
  { id: 1, name: "Rahul", marks: 80 },
  { id: 2, name: "Anu", marks: 65 },
  { id: 3, name: "Arjun", marks: 90 }
];

let resultrr = {};

studentsrr.forEach(studentsrr=> {
  resultrr[studentsrr.id] = studentsrr.name;
});

console.log(resultrr);

// 101. Find duplicate names.

let studentsm = [
 {id:1, name:"Rahul"},
 {id:2, name:"Anu"},
 {id:3, name:"Rahul"},
 {id:4, name:"Arjun"},
 {id:5, name:"Anu"}
];

let seen = {};
let duplicates = [];

studentsm.forEach(student => {

 if(seen[student.name]){
     duplicates.push(student.name);
 }else{
     seen[student.name] = true;
 }

});
console.log(duplicates);

// Find duplicate numbers

let numberstt = [1,2,3,4,2,5,3,6,1];

let seentt = {};
let duplicatestt = [];

numberstt.forEach(num => {

 if(seentt[num]){
     duplicatestt.push(num);
 }else{
     seentt[num] = true;
 }

});
console.log(duplicatestt);

// 102. Find second highest mark.

let studentsq = [
 {id:1, name:"Rahul", marks:80},
 {id:2, name:"Anu", marks:65},
 {id:3, name:"Arjun", marks:95},
 {id:4, name:"Meera", marks:90}
];
let marks = studentsq.map(s => s.marks);
marks.sort((a,b) => b-a);
let secondHighest = marks[1];
console.log(secondHighest);

// 103. Find most expensive product

let products = [
 {id:1, name:"Laptop", price:50000},
 {id:2, name:"Phone", price:30000},
 {id:3, name:"Tablet", price:20000},
 {id:4, name:"TV", price:60000}
];

let expensive = products[0];

products.forEach(product => {

 if(product.price > expensive.price){
     expensive = product;
 }

});
console.log(expensive);

// 104. Find least expensive product.

let productsa = [
 {id:1, name:"Laptop", price:50000},
 {id:2, name:"Phone", price:30000},
 {id:3, name:"Tablet", price:20000},
 {id:4, name:"TV", price:60000}
];

let cheapest = productsa[0];

products.forEach(product => {

 if(product.price < cheapest.price){
     cheapest = product;
 }

});
console.log(cheapest);

// 105. Track stock after sale.

let productss = {
 name: "Laptop",
 price: 50000,
 stock: 10
};

let sold = 3;

productss.stock = productss.stock - sold;

console.log(productss);

// 106. Filter expired products.

let productsx = [
 {name:"Milk", expiry:"2026-03-10"},
 {name:"Bread", expiry:"2026-04-01"},
 {name:"Butter", expiry:"2026-03-01"},
 {name:"Cheese", expiry:"2026-05-10"}
];

let today = new Date("2026-03-14");

let expired = productsx.filter(product => {
 return new Date(product.expiry) < today;
});

console.log(expired);

//107. Count successful transactions.

let transactions = [
 {id:1, amount:500, status:"success"},
 {id:2, amount:300, status:"failed"},
 {id:3, amount:700, status:"success"},
 {id:4, amount:200, status:"success"},
 {id:5, amount:400, status:"failed"}
];

let countd = 0;

transactions.forEach(t => {

 if(t.status === "success"){
     countd++;
 }

});

console.log(countd);

//108. Count failed transactions

let transactionss = [
 {id:1, amount:500, status:"success"},
 {id:2, amount:300, status:"failed"},
 {id:3, amount:700, status:"success"},
 {id:4, amount:200, status:"success"},
 {id:5, amount:400, status:"failed"}
];
let countds = 0;

transactionss.forEach(t => {

 if(t.status === "failed"){
     countds++;
 }

});
console.log(countds)

// 109. Calculate total cart value.          !! Mern interview question

let cart = [
  {name: "Laptop", price: 50000, quantity: 1},
  {name: "Mouse", price: 500, quantity: 2},
  {name: "Keyboard", price: 1500, quantity: 1}
];

let totals = 0;

cart.forEach(item => {
  totals += item.price * item.quantity;
});

console.log(totals);

// 110. Apply discount on cart.

let carts = [
 {name: "Laptop", price: 50000},
 {name: "Mouse", price: 500},
 {name: "Keyboard", price: 1500}
];

cart.forEach(item => {
 let discount = item.price * 0.10;
 let finalPrice = item.price - discount;

 console.log(item.name, finalPrice);
});

// 111. Apply GST on cart

let cartg = [
 {name: "Laptop", price: 50000},
 {name: "Mouse", price: 500},
 {name: "Keyboard", price: 1500}
];

cartg.forEach(item => {

 let gst = item.price * 0.18;
 let finalPrice = item.price + gst;

 console.log(item.name, finalPrice);
});

// 112. Check free delivery eligibility.

let cartd = [
 {name: "Laptop", price: 50000},
 {name: "Mouse", price: 500},
 {name: "Keyboard", price: 1500}
];

let totald = 0;

cartd.forEach(item => {
 totald += item.price;
});

if(total > 5000){
 console.log("Free Delivery Eligible");
}else{
 console.log("Delivery Charge Applied");
};

// 113. Remove product from cart.

let cartr = [
 {name: "Laptop", price: 50000},
 {name: "Mouse", price: 500},
 {name: "Keyboard", price: 1500}
];

let updatedCart = cartr.filter(item => item.name !== "Mouse");

console.log(updatedCart);

// 114. Update product quantity.

let cartu = [
 {name: "Laptop", price: 50000, quantity: 1},
 {name: "Mouse", price: 500, quantity: 2},
 {name: "Keyboard", price: 1500, quantity: 1}
];

cartu.forEach(item => {

 if(item.name === "Mouse"){
   item.quantity = 5;
 };

});
console.log(cartu);

// 115. Generate invoice ID list.

let transactionsi = [
 {invoiceId: "INV101", amount: 5000},
 {invoiceId: "INV102", amount: 3000},
 {invoiceId: "INV103", amount: 7000}
];

let invoiceList = transactionsi.map(item => item.invoiceId);

console.log(invoiceList);



// Group transactions by status                          M

// Find failed transactions                              E

// Calculate total transaction amount                    R

// Find highest transaction                              N




// 116. Merge two cart arrays.

let cart1 = [
 {name: "Laptop", price: 50000},
 {name: "Mouse", price: 500}
];

let cart2 = [
 {name: "Keyboard", price: 1500},
 {name: "Monitor", price: 12000}
];

let mergedCart = [...cart1, ...cart2];

console.log(mergedCart);

// 117. Find product with highest quantity

let carth = [
 {name: "Laptop", price: 50000, quantity: 1},
 {name: "Mouse", price: 500, quantity: 5},
 {name: "Keyboard", price: 1500, quantity: 3}
];

let highesth = carth[0];

carth.forEach(item => {

 if(item.quantity > highesth.quantity){
   highesth = item;
 }
});
console.log(highesth);

//118. Count products above 1000 price.

let cartA = [
 {name: "Laptop", price: 50000},
 {name: "Mouse", price: 500},
 {name: "Keyboard", price: 1500},
 {name: "Pen Drive", price: 800}
];

let countA = 0;

cartA.forEach(item => {

 if(item.price > 1000){            
   countA++;
 }

});

console.log(countA);


// Calculate total quantity of all products                  M

// Sort cart by price                                        E

// Find second highest price product                         R

// Group products by price range                             N



// 119. Sort products by price.

let cartS = [
 {name: "Laptop", price: 50000},
 {name: "Mouse", price: 500},
 {name: "Keyboard", price: 1500},
 {name: "Monitor", price: 12000}
];

cartS.sort((a,b) => a.price - b.price);

console.log(cartS);

// 120. Filter products between 500 and 1500.

let cartF = [
 {name: "Laptop", price: 50000},
 {name: "Mouse", price: 500},
 {name: "Keyboard", price: 1500},
 {name: "Pen Drive", price: 800},
 {name: "Monitor", price: 12000}
];

let filteredProducts = cartF.filter(item => item.price >= 500 && item.price <= 1500);

console.log(filteredProducts);

// 121. Create leaderboard system.

let players = [
 {name: "Arun", score: 120},
 {name: "Rahul", score: 300},
 {name: "Vishnu", score: 200},
 {name: "Ajay", score: 150}
];

players.sort((a,b) => b.score - a.score);

players.forEach((player,index) => {
 console.log(index + 1, player.name, player.score);
});

// 122. Rank students.

let studentsR = [
 {name: "Anu", marks: 85},
 {name: "Rahul", marks: 92},
 {name: "Meera", marks: 78},
 {name: "Arjun", marks: 88}
];

studentsR.sort((a,b) => b.marks - a.marks);

studentsR.forEach((student,index) => {
 console.log("Rank", index+1, student.name, student.marks);
});

// 123. Find second lowest salary

let employeesL = [
 {name: "Arun", salary: 50000},
 {name: "Rahul", salary: 30000},
 {name: "Vishnu", salary: 45000},
 {name: "Ajay", salary: 25000}
];

employeesL.sort((a,b) => a.salary - b.salary);

console.log(employeesL[1]);

// 124. Find most ordered product

let orders = [
 {name: "Laptop", quantity: 3},
 {name: "Mouse", quantity: 10},
 {name: "Keyboard", quantity: 6},
 {name: "Monitor", quantity: 4}
];

let mostOrdered = orders[0];

orders.forEach(item => {

 if(item.quantity > mostOrdered.quantity){
   mostOrdered = item;
 }

});

console.log(mostOrdered);

// 125. Find least ordered product


let ordersp = [
 {name: "Laptop", quantity: 3},
 {name: "Mouse", quantity: 10},
 {name: "Keyboard", quantity: 6},
 {name: "Monitor", quantity: 4}
];

let leastOrderedp = orders[0];

ordersp.forEach(item => {

 if(item.quantity < leastOrderedp.quantity){
   leastOrderedp = item;
 }

});
console.log(leastOrderedp);

// 126. Count unique users.

let users = ["Arun", "Rahul", "Arun", "Meera", "Rahul", "Ajay"];

let uniqueUsers = new Set(users);

console.log(uniqueUsers.size);

// 127. Find repeated emails

let usersa = [
  {name:"A", email:"a@gmail.com"},
  {name:"B", email:"b@gmail.com"},
  {name:"C", email:"a@gmail.com"},
  {name:"D", email:"d@gmail.com"},
  {name:"E", email:"b@gmail.com"}
];
let emailCount = {};
let repeatedEmails = [];
usersa.forEach(user => {
  if(emailCount[user.email]){
    emailCount[user.email]++;
  }else{
    emailCount[user.email] = 1;
  }
});
for(let email in emailCount){
  if(emailCount[email] > 1){
    repeatedEmails.push(email);
  }
}
console.log(repeatedEmails);

// 128. Convert array to JSON

let studentsA = [
  {id:1, name:"Arun", mark:80},
  {id:2, name:"Rahul", mark:60},
  {id:3, name:"Neha", mark:90}
];
let jsonData = JSON.stringify(studentsA);
console.log(jsonData);

// 129. Parse JSON to array.

let jsonDataA = '[{"id":1,"name":"Arun"},{"id":2,"name":"Rahul"},{"id":3,"name":"Neha"}]';

let arrayData = JSON.parse(jsonDataA);

console.log(arrayData);

// 130. Deep copy array of objects

let usersAA = [
 {id:1, name:"Arun"},
 {id:2, name:"Rahul"},
 {id:3, name:"Neha"}
];

let deepCopy = JSON.parse(JSON.stringify(usersAA));

console.log(deepCopy);

// LEVEL 4 – ADVANCED ARRAY LOGIC (131–180)

// 131. Rotate array left.

function rotateLeft(arr) {
    let first = arr.shift(); // remove first element
    arr.push(first);         // add it to end
    return arr;
}

let resultA = rotateLeft([1, 2, 3, 4, 5]);
console.log(resultA);

//132. Rotate array right.

function rotateRightA(arr) {
    let last = arr.pop();   // remove last element
    arr.unshift(last);      // add it to beginning
    return arr;
}

let resultAA = rotateRightA([1, 2, 3, 4, 5]);
console.log(resultAA);

//133. Check if array is palindrome.

function isPalindrome(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome([1,2,3,2,1])); // true

// 134. Find pair with given sum.

function findPair(arr, target){
    for (let i = 0; i < arr.length; i++){
        for ( let j = i + 1; j < arr.length; i++){
            if (arr[i] + arr[j] === target){
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}
console.log(findPair([2,7,11,15], 9));

// 135. Find all pairs with given sum.

function findAllPairs(arra, targeta){
    let result = [];

    for (let i = 0; i < arra.length; i++){
        for ( let j = i + 1; j < arra.length; j++){

            if (arra[i] + arra[j] === targeta){
                result.push([arra[i], arra[j]]);
            }
        }
    }
    return result;
}
console.log(findAllPairs([1,2,3,4,3], 6));

// 136. Find triplets with given sum.

function findTriplets(arrq,targetq) {
    let result = [];

    for(let i = 0 ; i < arr.length; i++){
        for(let j = i + 1; j < arrq.length; j++){
            for(let k = j + 1; k < arrq.length; k++){

                if(arrq[i] + arrq[j] + arrq[k] === targetq){
                    result.push([arrq[i], arrq[j], arrq[k]])
                }
            }
        }
    }
    return result;
}
console.log(findTriplets([1,2,3,4,5], 9));

// 137. Move all zeros to end

function moveZeros(arr) {
    let result = [];
    for (let num of arr) {
        if (num !== 0) {
            result.push(num);
        }
    }
    let zeroCount = arr.length - result.length;
    for (let i = 0; i < zeroCount; i++) {
        result.push(0);
    }
    return result;
}
console.log(moveZeros([0,1,0,3,12]));

// 138. Move negatives to beginning.

function moveNegatives(arrs) {
    let result = [];

    for (let i = 0; i < arrs.length; i++) {
        if (arrs[i] < 0) {
            result.unshift(arrs[i]);
        } else {
            result.push(arrs[i]);
        }
    }

    return result;
}
// Example usage
let arrs = [3, -1, 4, -2, 0, -5];
let output = moveNegatives(arrs);

console.log(output);

// 139. Find missing number in range 1-100.

function findMissing(arrq) {
    let n = 100;

    let totalSum = (n * (n + 1)) / 2;

    let arrSum = 0;

    for (let i = 0; i < arrq.length; i++) {
        arrSum += arrq[i];
    }

    return totalSum - arrSum;
}

// Example
let arrq = [1, 2, 3, 4, 6]; // assume rest present
console.log(findMissing(arrq));

// 140. Find duplicate number.

function findDuplicate(arrm) {
    let seen = new Set();

    for (let i = 0; i < arrm.length; i++) {
        if (seen.has(arrm[i])) {
            return arrm[i];
        }
        seen.add(arrm[i]);
    }
    return "No duplicate found";
}

let arrm = [1,2,3,2,3,4,2,3,4];
let resultq = findDuplicate(arrm);
console.log (resultq);

// 141. Find frequency of each element.

function findFrequency(arrZ) {
    let freq = {};

    for (let i = 0; i < arrZ.length; i++) {
        if (freq[arrZ[i]]) {   // already udoo ennu check cheyunnu 
            freq[arrZ[i]]++;   // undakkill count
        } else {
            freq[arrZ[i]] = 1; 
        }
    }

    return freq;
}


// Example
let arrZ = [1, 2, 2, 3, 1, 4, 2];

let resultZ = findFrequency(arrZ);

console.log(resultZ);

// 142. Sort array without using sort().

function sortArrayS(arrY) {
    let n = arrY.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {

            if (arrY[j] > arrY[j + 1]) {
                // swap
                let temp = arrY[j];
                arrY[j] = arrY[j + 1];
                arrY[j + 1] = temp;
            }

        }
    }

    return arrY;
}


// Example
let arrY = [5, 2, 8, 1, 3];

console.log(sortArrayS(arrY));