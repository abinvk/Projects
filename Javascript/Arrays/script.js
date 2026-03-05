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