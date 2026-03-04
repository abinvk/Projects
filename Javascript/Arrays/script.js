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
    if(faa > 10){
        console.log(faahaa);
    }
}