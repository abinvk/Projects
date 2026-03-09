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