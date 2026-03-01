// JavaScript Function – 200+ Practice Questions //

//  1. Create a function that prints 'Hello World

function printHelloWorld() {
    console.log('Hello World');
}
printHelloWorld(); // Output: Hello World

//2. Create a function that prints your name.

function myName(){
    console.log('My name is John');
}
myName(); // Output: My name is John

// 3. Create a function that adds two numbers.

function addNumbers(a, b) {
    console.log(a + b);
}
addNumbers(10, 15); // Output: 25

// 4. Subtract two numbers.

function addNumbersq(a, b) {
    console.log(a - b);
}
addNumbersq(10, 5); // Output: 5

// 5. Multiply two numbers.

function addNumbersa(a, b) {
    console.log(a * b);
}
addNumbersa(10, 5);  // Output: 50

//6. Divide two numbers.

function addNumbersaa(a, b) {
    console.log(a / b);
}
addNumbersaa(10, 5); // Output: 2

// 7. Find the remainder of two numbers.

function findRemainder(a, b) {
  console.log(a % b);
}
findRemainder(17, 4);  // Output: 1

//8. Square a number.

function squareNumber(num) {
    console.log(num * num);     // Square two item
}
squareNumber(5); // Output: 25

// 9. Cube a number.

function cubeNumber(num) {
    console.log(num * num * num);    // Cube three item
}
cubeNumber(3); // Output: 27

// 10. Convert Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
    console.log((celsius * 9/5) + 32);   // Celsius to Fahrenheit formula      // 25 × 9 = 225
}                                                                             // 225 ÷ 5 = 45
celsiusToFahrenheit(25); // Output: 77                                        // 45 + 32 = 77

//11. Convert Fahrenheit to Celsius

function fahrenheitToCelsius(f) {
  console.log((f - 32) * 5/9);        // Fahrenheit to Celsius formula      // 68 - 32 = 36
}                                                                            // 36 × 5 = 180
fahrenheitToCelsius(68);  // Output : 20                                     // 180 ÷ 9 = 20

// 12. Convert km to meters

function kmeter(km) {
    console.log(km * 1000);    
}
kmeter(5); // Output: 2000

// 13. Convert rupees to paise.

function rupeesToPaise(rupees) {
    console.log(rupees * 100);
}
rupeesToPaise(10); // Output: 1000

// 14. Check even or odd.

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(num + ' is even');
    } else {
        console.log(num + ' is odd');
    }
}
checkEvenOdd(7); // Output: 7 is odd
checkEvenOdd(10); // Output: 10 is even

// 15. Check positive or negative

function checkNumber(n){
    if(n > 0){
        console.log(n + ' is positive');
    } else if(n < 0){
        console.log(n + ' is negative');
    } else {
        console.log(n + ' is zero');
    }
}
checkNumber(-5); // Output: 5 is positive
checkNumber(0); // Output: 0 is zero
checkNumber(10); // Output: 10 is positive

// 16. Find largest of two numbers

function findLargest(a, b) {
    if (a > b) {
        console.log(a + ' is larger than ' + b);
    } else if (b > a) {
        console.log(b + ' is larger than ' + a);
    } else {
        console.log(a + ' and ' + b + ' are equal');
    }
}
findLargest(10, 20); // Output: 20 is larger than 10
findLargest(15, 5); // Output: 15 is larger than 5
findLargest(7, 7); // Output: 7 and 7 are equal


// MORE METHOD //

function findLargestQ(a, b) {
  if (a > b) {
    console.log(a + " is largest");
  } else if (b > a) {
    console.log(b + " is largest");
  } else {
    console.log("Both numbers are equal");
  }
}
findLargestQ(10, 25);

// 17. Find smallest of two numbers.

function findSmallest(a, b) {
  if (a < b) {
    console.log(a + " is smallest");
  } else if (b < a) {
    console.log(b + " is smallest");
  } else {
    console.log("Both numbers are equal");
  }
}
findSmallest(10, 25);

// 18. Find largest of three numbers.

function findLargestOfThree(a, b, c) {
    if (a > b && a > c) {              // A ROUND
        console.log(a + ' is the largest');
    } else if (b > a && b > c) {            // B ROUND
        console.log(b + ' is the largest');
    } else if (c > a && c > b) {            // C ROUND
        console.log(c + ' is the largest');
    } else {
        console.log('There is a tie for the largest number');
    }
}
findLargestOfThree(25, 20, 15); // Output: 25 is the largest

// 19. Swap two numbers

function swapNumbers(a, b) {
  console.log("Before swapping: a =", a, "b =", b);
  let temp = a;
  a = b;
  b = temp;
  console.log("After swapping: a =", a, "b =", b);
}
swapNumbers(10, 20);

// More method //

function swapNumbersz(a, b) {
  let temp = a;
  a = b;
  b = temp;

  console.log("After swap:");
  console.log("a =", a);
  console.log("b =", b);
}
swapNumbersz(5, 10);


// 20. Return absolute value

function absoluteValue(num) {
    if (num < 0) {
        return -num;
    } else {

        return num;
    }
}
console.log(absoluteValue(-5)); // Output: 5
console.log(absoluteValue(12)); // Output: 10


//21. Check if number > 100.

function chNum(num){
    if(num > 100){
        console.log(num + ' is greater than 100');
    } else {
        console.log(num + ' is not greater than 100');
    }
}
chNum(150); // Output: 150 is greater than 100
chNum(50); // Output: 50 is not greater than 100

// 22. Check if number divisible by 3.

function checkDivisibleByThree(num) {
    if (num % 3 === 0) {
        console.log(num + ' is divisible by 3');
    } else {
        console.log(num + ' is not divisible by 3');
    }
}
checkDivisibleByThree(12); // Output: 12 is divisible by 3
checkDivisibleByThree(10); // Output: 10 is not divisible by 3

//23. Check if divisible by 5.

function checkDivisibleByFive(num) {
    if (num % 5 === 0) {
        console.log(num + ' is divisible by 5');
    } else {
        console.log(num + ' is not divisible by 5');
    }
}
checkDivisibleByFive(25); // Output: 25 is divisible by 5
checkDivisibleByFive(22); // Output: 22 is not divisible by 5

// 24. Check divisible by both 3 and 5.

function checkDivisibleByThreeAndFive(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num + ' is divisible by both 3 and 5');
    } else {
        console.log(num + ' is not divisible by both 3 and 5');
    }
}
checkDivisibleByThreeAndFive(15); // Output: 15 is divisible by both 3 and 5
checkDivisibleByThreeAndFive(12); // Output: 12 is not divisible by both 3 and 5

// 25. Print numbers from 1 to N.

function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
printNumbers(5); // Output: 1, 2, 3, 4, 5

// 26. Print N to 1.

function printNumbers(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}
printNumbers(5);

//27. Print multiplication table of a number.

function printMultiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num + ' x ' + i + ' = ' + (num * i));
  }
}
printMultiplicationTable(5); // Output: 5 x 1 = 5, 5 x 2 = 10, ..., 5 x 10 = 50


function printMultiplicationTablea(num) {
    for(let i =0; i <=10; i++){
        console.log(num + ' x ' + i + ' = ' + (num * i));

    }
}
printMultiplicationTablea(7); // Output: 7 * 0 = 0, 7 * 1 = 7, ..., 7 * 10 = 70

//28. Find factorial.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // Output: 120

// More method //

function factoriala(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  console.log(result);
}
factoriala(5);

// 29. Sum from 1 to N.

function sumFromOneToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumFromOneToN(5)); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)

// 30. Count digits in number.

function countDigits(num) {
    let count = 0;
    while (num !== 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}
console.log(countDigits(12345)); // Output: 5


// More method //

function countDigits(n) {
  let count = 0;

  n = Math.abs(n); // negative case handle ചെയ്യാൻ

  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }

  console.log(count);
}

countDigits(12345);

//31. Reverse a number

function reverseNumber(num) {
  let reversed = 0;
  while (num !== 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
}
console.log(reverseNumber(12345)); // Output: 54321

// 32. Check palindrome number.

function isPalindrome(num) {
    let original = num;
    let reversed = 0;
    while (num !== 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return original === reversed;
}
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(12345)); // Output: false

// More method //

function checkPalindromea(n) {
  let original = n;
  let reversed = 0;

  n = Math.abs(n);

  while (n > 0) {
    let digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
  }

  if (original === reversed) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }
}

checkPalindromea(121);

//33. Find power (a^b).

function power(a, b) {
    let result = 1;
    for (let i = 1; i <= b; i++) {
        result *= a;
    }
    return result;
}
console.log(power(2, 3)); // Output: 8 (2^3 = 8)

// More method //

function power(a, b) {
  let result = 1;

  for (let i = 1; i <= b; i++) {
    result = result * a;
  }

  console.log(result);
}

power(2, 3);

// 34. Check leap year.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
isLeapYear(2020); // Output: 2020 is a leap year
isLeapYear(2021); // Output: 2021 is not a leap year


// 35. Generate random number between 1–10.

function generateRandom() {
  let random = Math.floor(Math.random() * 10) + 1;
  console.log(random);
}

generateRandom();

// 36. Find maximum of 4 numbers

function findMaxOfFour(a, b, c, d) {
    let max = a;

    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    if (d > max) {
        max = d;
    }
    return max;
}
console.log(findMaxOfFour(10, 20, 5, 15)); // Output: 20

// more method //

function findMax(a, b, c, d) {
  let max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  if (d > max) {
    max = d;
  }

  console.log("Maximum =", max);
}

findMax(10, 45, 32, 25);

// 37. Calculate simple interest.

function calculateSimpleInterest(principal, rate, time) {
    let interest = (principal * rate * time) / 100;
    return interest;
}
console.log(calculateSimpleInterest(1000, 5, 2)); // Output: 100 (Simple Interest = (1000 * 5 * 2) / 100 = 100)



// 38. Calculate percentage


function calculatePercentage(obtained, total) {
  if (total === 0) {
    console.log("Total cannot be zero");
    return;
  }
  let percentage = (obtained / total) * 100;
  console.log("Percentage =", percentage + "%");
}
calculatePercentage(450, 500);

//39. Convert minutes to seconds.

function minutesToSeconds(minutes) {
    let seconds = minutes * 60;
    return seconds;
}
console.log(minutesToSeconds(5)); // Output: 300 (5 minutes = 5 * 60 seconds = 300 seconds)

// 40. Convert hours to minutes.

function hoursToMinutes(hours) {
    let minutes = hours * 60;
    return minutes;
}
console.log(hoursToMinutes(2)); // Output: 120 (2 hours = 2 * 60 minutes = 120 minutes)




// !!   LEVEL 2 – Functions with Loops & Arrays (41–90) !! //



// 41. Sum of array.

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfArray([1, 2, 3, 4, 5])); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)


// 42. Average of array.

function averageOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    return average;
}
console.log(averageOfArray([1, 2, 3, 4, 5])); // Output: 3 (Average = (1 + 2 + 3 + 4 + 5) / 5 = 15 / 5 = 3)

// 43. Find largest element in array.

function findLargestInArray(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargestInArray([10, 5, 20, 15])); // Output: 20 (Largest element is 20)

// 44. Find smallest element in array.

function findSmallestInArray(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
console.log(findSmallestInArray([10, 5, 20, 15])); // Output: 5 (Smallest element is 5)

// 45. Count even numbers in array.

function countEvenNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
}
    }
    return count;
}   
console.log(countEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 3 (Even numbers are 2, 4, and 6)

// 46. Count odd numbers.

function countOddNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
}
    }
    return count;
}
console.log(countOddNumbers([1, 2, 3, 4, 5, 6])); // Output: 3 (Odd numbers are 1, 3, and 5)

//47. Count positive numbers

function postiveNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count;
}
console.log(postiveNumbers([-1, 2, -3, 4, -5, 6])); // Output: 3 (Positive numbers are 2, 4, and 6)

// 48. Count negative numbers.

function negativeNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}
console.log(negativeNumbers([-1, 2, -3, 4, -5, 6]));

// 49. Count zeros in array.

function countZeros(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++;
        }
    }
    return count;
}
console.log(countZeros([0, 1, 0, 2, 0, 3])); // Output: 3 (There are three zeros in the array)

// 50. Find index of value

function findIndexOfValue(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1; // Return -1 if value is not found
}
console.log(findIndexOfValue([10, 20, 30, 40], 30)); // Output: 2 (Value 30 is at index 2)

// 51. Check if value exists in array.

function valueExists(arr, value) {
    for (let i = 0; i <arr.length; i++){
        if (arr[i] === value){
            return true;
        }
    }

    return false;
}

console.log(valueExists([10, 20, 40, 80, 100], 100));

// 52. Reverse array without reverse().

function reverseArray(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

console.log(reverseArray([10, 20, 30, 40]));

// In-place version (modifies the original array)

function reverseArrayInPlace(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        i++;
        j--;
    }
    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
const arrExample = [10, 20, 30, 40];
console.log(reverseArrayInPlace(arrExample)); // Output: [40, 30, 20, 10]


// 53. Remove duplicates

// Return a new array with duplicates removed (preserves first occurrence order)

function removeDuplicates(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Fast version using Set
function removeDuplicatesWithSet(arr) {
    return Array.from(new Set(arr));
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1,2,3,4,5]
console.log(removeDuplicatesWithSet([10, 20, 10, 30, 20])); // Output: [10,20,30]

// More method //

function removeDuplicates(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log(removeDuplicates([10, 20, 10, 30, 20]));

// 54. Find second largest

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array too small";
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}
console.log(findSecondLargest([10, 40, 20, 50, 30]));

// 55. Find second smallest.

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Array too small";
  }

  let smallest = Infinity;
  let SecondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      SecondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < SecondSmallest && arr[i] !== smallest) {
      SecondSmallest = arr[i];
    }
  }
  return SecondSmallest;
}
console.log(findSecondSmallest([10, 40, 20, 50, 30]));

// 56. Count frequency of element.

function countFrequency(arr, value) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}
console.log(countFrequency([10, 20, 10, 30, 10], 10));

// 57. Sort ascending manually.

function sortAscending(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(sortAscending([5, 2, 9, 1]));

//58. Sort descending manually.

function sortdescending(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(sortdescending([5, 2, 9, 1]));

// 59. Sum of only even numbers

function sumOfEven(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum = sum + arr[i];
    }
  }

  return sum;
}
console.log(sumOfEven([1, 2, 3, 4, 5, 6]));

//60. Sum of only odd numbers

function sumOfEven(arr){
    let sum = 0;

for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0){
        sum = sum + arr[i];
    }
}
return sum;
}
console.log(sumOfEven([1,2,3,4,5,6,7,8,9,]));

// 61. Check if array is palindrome.

function isPalindrome(arr){
    let left = 0;
    let right = arr.length -1;

    while (left < right){
        if (arr[left] !== arr[right]){

            return false;
    }

    left++;
    right--;
}
return true;
}
console.log(isPalindrome([1,2,3,2,1]));

// 62. Flatten 2D array

function flattenArray(arr) {
  let flat = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flat.push(arr[i][j]);
    }
  }
  return flat;
}
console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));

// 63. Count vowels in string

function countVowels(str){
    let count = 0;
    let vowels = "aeiouAEIOU";

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
     return count;
}
console.log(countVowels("Hello World"));

// 64. Count consonants

function countConsonants(str) {
  let count = 0;
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (
      ch >= 'a' && ch <= 'z' &&   // letter check
      !"aeiou".includes(ch)       // vowel അല്ലെങ്കിൽ
    ) {
      count++;
    }
  }

  return count;
}

console.log(countConsonants("Hello World"));

//65. Reverse string

function revers(str){
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--){
        reversed = reversed +str[i];
    }
    return reversed;
}
console.log(revers("Abin"))

//66. Check palindrome string.

function isPalindrome(str) {
  
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
console.log(isPalindrome("madam"));

// 67. Remove spaces from string.

function removeSpaces(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }

  return result;
}

console.log(removeSpaces("Hello World"));

//68. Count words.

function countWords(str) {
  str = str.trim(); // starting & ending spaces remove ചെയ്യുന്നു
  
  if (str === "") return 0;

  let words = str.split(/\s+/); // one or more spaces split ചെയ്യുന്നു
  return words.length;
}

console.log(countWords("Hello world from JavaScript"));

//69. Find longest word.

function findLongestWord(str) {
  let words = str.trim().split(/\s+/);
  let longest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

console.log(findLongestWord("JavaScript is very powerful"));

//70. Find shortest word

function findShortestWord(str) {
  let words = str.trim().split(/\s+/);

  if (words.length === 0) return "";

  let shortest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortest.length) {
      shortest = words[i];
    }
  }

  return shortest;
}
console.log(findShortestWord("JavaScript is very powerful"));

//71. Capitalize first letter.

function capitalizFirst(str){
    if (str.length === 0) return str;

    return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalizFirst("abin"));

// 72. Convert string to uppercase manually.

function toUpperCaseManual(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    // check if lowercase letter

    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(toUpperCaseManual("hello World"));

// 73. Convert string to lowercase manually

function toLowerCaseManual(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    // check if uppercase letter
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += str[i];
    }
  }

  return result;
}
console.log(toLowerCaseManual("HELLO World 123"));

// 74. Count occurrences of character.

function countOccurrences(str, ch) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      count++;
    }
  }

  return count;
}
console.log(countOccurrences("banana", "a"));
console.log(countOccurrences("skwskjkwxsquxqsuxuqwhxuqwussscxcdssddcvsscdc", "s"));


//75. Remove specific character.


function removeCharacter(str, ch) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ch) {
      result += str[i];
    }
  }

  return result;
}
console.log(removeCharacter("banana", "a"));

// 76. Generate Fibonacci up to N.

function generateFibonacci(n) {   // Variable creation    [n limt = 10]
    let a = 0;   //  Fibonacci rule
    let b = 1;  //  Fibonacci rule

    console.log(a);   // first 0 print
    console.log(b);  // second 1 print

    for (let i = 2; i <= n; i++) {   // loop start  
        let next = a + b;    // main part this question   [ loop this line work]
        console.log(next);

        a = b;
        b = next;
    }
}

generateFibonacci(10);   // out put = 55
  
// 77. Check prime number.

function checkPrime(n) {

    if (n <= 1) {
        console.log("Not Prime");
        return;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {  // Main Prime Finding Line
            console.log("Not Prime");
            return;
        }
    }

    console.log("Prime");
}

checkPrime(7);  // prime number
checkPrime(4);  // not prime number

//78. Count primes between 1–100.

function countPrimes() {
    let count = 0;

    for (let num = 2; num <= 100; num++) {

        let isPrime = true;

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {      // Main Prime Finding Line
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            count++;
        }
    }

    console.log("Total Prime Numbers:", count);
}
countPrimes();

//79. Generate first N primes.

function generatePrimes(n) {

    let count = 0;      // എത്ര prime കിട്ടിയെന്ന് count
    let num = 2;        // prime checking start from 2

    while (count < n) {

        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num);
            count++;
        }

        num++;
    }
}
generatePrimes(5);

// 80. Find GCD of two numbers.

function findGCD(a, b) {

    let gcd = 1;

    for (let i = 1; i <= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }

    console.log("GCD:", gcd);
}

findGCD(12, 18);


// More method !!

function findGCD(a, b) {

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    console.log("GCD:", a);
}

findGCD(12, 18);

//81. Find LCM of two numbers

function findLCM(a, b) {

    let max = (a > b) ? a : b;

    while (true) {
        if (max % a === 0 && max % b === 0) {
            console.log("LCM:", max);
            break;
        }
        max++;
    }
}

findLCM(12, 18);

//82. Print pattern using function.


function printPattern(n) {

    for (let i = 1; i <= n; i++) {

        let row = "";

        for (let j = 1; j <= i; j++) {
            row = row + "* ";
        }

        console.log(row);
    }
}
printPattern(4);

// 83. Generate star pyramid.

function printPyramid(n) {

    for (let i = 1; i <= n; i++) {

        let row = "";

        // spaces
        for (let s = 1; s <= n - i; s++) {
            row = row + " ";
        }

        // stars
        for (let j = 1; j <= (2 * i - 1); j++) {
            row = row + "*";
        }

        console.log(row);
    }
}
printPyramid(4);

// 84. Print hollow square.
 
function printHollowSquare(n) {

    for (let i = 1; i <= n; i++) {

        let row = "";

        for (let j = 1; j <= n; j++) {

            if (i === 1 || i === n || j === 1 || j === n) {
                row = row + "*";
            } else {
                row = row + " ";
            }

        }

        console.log(row);
    }
}
printHollowSquare(5);

// 85. Print diamond pattern

function printDiamond(n) {

    // Upper Pyramid
    for (let i = 1; i <= n; i++) {

        let row = "";

        // spaces
        for (let s = 1; s <= n - i; s++) {
            row += " ";
        }

        // stars
        for (let j = 1; j <= (2 * i - 1); j++) {
            row += "*";
        }

        console.log(row);
    }

    // Lower Inverted Pyramid
    for (let i = n - 1; i >= 1; i--) {

        let row = "";

        // spaces
        for (let s = 1; s <= n - i; s++) {
            row += " ";
        }

        // stars
        for (let j = 1; j <= (2 * i - 1); j++) {
            row += "*";
        }

        console.log(row);
    }
}

printDiamond(4);

// 86. Sum of digits

function sumOfDigits(n) {

    let sum = 0;

    while (n > 0) {

        let digit = n % 10;   // last digit
        sum = sum + digit;    // add to sum
        n = Math.floor(n / 10); // remove last digit

    }

    console.log("Sum:", sum);
}

sumOfDigits(1234);

// 87. Armstrong number check

function checkArmstrong(n) {

    let original = n;
    let sum = 0;

    let digits = n.toString().length;

    while (n > 0) {

        let digit = n % 10;
        sum = sum + Math.pow(digit, digits);

        n = Math.floor(n / 10);
    }

    if (sum === original) {
        console.log("Armstrong Number");
    } else {
        console.log("Not Armstrong Number");
    }
}
checkArmstrong(153);
checkArmstrong(1513);

//88. Perfect number check.

function checkPerfect(n) {

    let sum = 0;

    for (let i = 1; i <= n / 2; i++) {

        if (n % i === 0) {
            sum = sum + i;
        }

    }

    if (sum === n) {
        console.log("Perfect Number");
    } else {
        console.log("Not Perfect Number");
    }
}
checkPerfect(6);


//89. Find factors of number.

function findFactors(n) {

    for (let i = 1; i <= n; i++) {

        if (n % i === 0) {
            console.log(i);
        }

    }
}

findFactors(12);

//90. Count factors.

function countFactors(n) {

    let count = 0;

    for (let i = 1; i <= n; i++) {

        if (n % i === 0) {
            count++;
        }

    }

    console.log("Total Factors:", count);
}
countFactors(12);




//  LEVEL 3 – Real-World Logic Functions (91–140)  




//91. Create login attempt limit (max 3 tries).

let correctUser = "abin";
let correctPass = "1234";

let attempts = 0;
let maxAttempts = 3;

function login(user, pass){
  if(attempts >= maxAttempts){
    console.log("Blocked");
    return;
  }

  if (user === correctUser && pass === correctPass){
    console.log("Login Succecsful")
  }else{
    attempts++;
    console.log("Wron");
  
    if(attempts >= maxAttempts){
      console.log("Account Blocked")
  }
}
}
login("abin","1234")
login("abin","sjsh")
login("abin","sjsdsh")
login("abin","sjsdsh")


// 92. Create OTP retry system.

let correctOTP = "4567";
let attemptsq = 0;
let maxAttemptsq = 3;

function verifyOTP(userOTP) {

    if (attemptsq >= maxAttemptsq) {
        console.log("OTP Blocked");
        return;
    }

    if (userOTP === correctOTP) {
        console.log("OTP Verified Successfully");
    } else {
        attemptsq++;
        console.log("Wrong OTP");

        if (attemptsq >= maxAttemptsq) {
            console.log("OTP Blocked");
        }
    }
}
// Test
verifyOTP("1111");
verifyOTP("2222");
verifyOTP("4567");


//93. Generate 4-digit OTP

function generateOTP() {

    let otp = Math.floor(1000 + Math.random() * 9000);

    console.log("Generated OTP:", otp);
}
generateOTP();

// 94. Validate OTP.

let generatedOTP = Math.floor(1000 + Math.random() * 9000);
console.log("Generated OTP:", generatedOTP);

function validateOTP(userOTP) {

    if (!userOTP) {
        console.log("OTP Required");
        return;
    }

    if (parseInt(userOTP) === generatedOTP) {
        console.log("OTP Verified Successfully");
    } else {
        console.log("Invalid OTP");
    }
}
// Example test
validateOTP("1234");

// 95. Check password strength

function checkPasswordStrength(password) {

    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSpecial = false;

    if (password.length < 8) {
        console.log("Weak Password (Too Short)");
        return;
    }

    for (let i = 0; i < password.length; i++) {

        let ch = password[i];

        if (ch >= 'A' && ch <= 'Z') {
            hasUpper = true;
        } else if (ch >= 'a' && ch <= 'z') {
            hasLower = true;
        } else if (ch >= '0' && ch <= '9') {
            hasNumber = true;
        } else {
            hasSpecial = true;
        }
    }

    if (hasUpper && hasLower && hasNumber && hasSpecial) {
        console.log("Strong Password");
    } else {
        console.log("Medium / Weak Password");
    }
}

checkPasswordStrength("Abin@123");

//96. Validate email format.

function validateEmail(email) {

    if (!email.includes("@") || !email.includes(".")) {
        console.log("Invalid Email");
        return;
    }

    let atIndex = email.indexOf("@");
    let dotIndex = email.lastIndexOf(".");

    if (
        atIndex > 0 &&
        dotIndex > atIndex + 1 &&
        dotIndex < email.length - 1
    ) {
        console.log("Valid Email");
    } else {
        console.log("Invalid Email");
    }
}
validateEmail("abin@gmail.com");
validateEmail("abin@gmail");

// 97. Calculate cart total

function calculateTotal(cart){

  let total = 0;

  for(let i = 0; i < cart.length; i++){

    let price = cart[i].price;
    let quantity = cart[i].quantity;

    total = total + (price*quantity);
  }

  console.log("Cart Total", total);
}

let cartItems =[
{ name: "Shirt", price: 500, quantity: 2 },
{ name: "Shoes", price: 1000, quantity: 1 },
{ name: "Watch", price: 1500, quantity: 1 }
];
calculateTotal(cartItems);

//98. Apply discount

function applyDiscount(total, discountPercent) {    // [Total = 2000  /  Discount Price = 10%]

    let discountAmount = (total * discountPercent) / 100;
    let finalAmount = total - discountAmount;

    console.log("Original Total:", total);
    console.log("Discount:", discountPercent + "%");
    console.log("Discount Amount:", discountAmount);
    console.log("Final Amount:", finalAmount);
}

applyDiscount(2000, 10);

//99. Apply GST.

function applyGst(total, gstA){ 

    let gst = (total * gstA)/100
    let fainalAmount = total + gst;

    console.log("FinalAmount", fainalAmount);
}
applyGst(1000 ,18);

//100. Calculate final bill

function calculateFainalBill(cart, discountPercent, gstPercent){

    let subtotal = 0;

     // Step 1: Calculate subtotal

     for(let i = 0; i < cart.length; i++){
        subtotal += cart[i].price * cart[i].quantity;
     }

     // Step 2: Apply discount

     let discountAmount = (subtotal * discountPercent) / 100;
     let afterDiscount = subtotal + discountAmount;

     //// Step 3: Apply GST

     let gstAmount = (afterDiscount * gstPercent) / 100;
     let finalAmount  = afterDiscount + gstAmount;

    console.log("Subtotal:", subtotal);                 // Subtotal: 2000
    console.log("Discount:", discountAmount);           // Discount: 200
    console.log("After Discount:", afterDiscount);      // After Discount: 2200
    console.log("GST:", gstAmount);                     // GST: 396
    console.log("Final Bill:", finalAmount.toFixed(2)); // Final Bill: 2596.00
} 
let cartItemsa = [
    { name: "Shirt", price: 500, quantity: 2 },
    { name: "Shoes", price: 1000, quantity: 1 }
];
calculateFainalBill(cartItemsa, 10, 18);

 //101. Salary after tax.

 function salaryAfterTax(grossSalary, taxPercent) {

    let taxAmount = (grossSalary * taxPercent) / 100;
    let netSalary = grossSalary - taxAmount;

    console.log("Gross Salary:", grossSalary);         // 50000
    console.log("Tax:", taxAmount);                    // 5000
    console.log("Net Salary:", netSalary.toFixed(2));  // 45000
}

salaryAfterTax(50000, 10);

// 102. Bonus calculation

function bonus(salary, tax, bonus){

    let taxS = (salary * tax) / 100;        // tax Amount
    let taxSalary = (salary - taxS);        // tax after salary
    let totalSalary = (taxSalary + bonus);  // final salary 


     console.log("Tax Amount: ", taxS);
     console.log("Tax After Salary: ", taxSalary);
     console.log("Bouns included Salary: " ,totalSalary);

}
bonus(50000, 10, 1000);

//103. EMI calculator

function calculateEMI(principal, annualRate, years) {

    let monthlyRate = annualRate / 12 / 100;
    let totalMonths = years * 12;

    let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) 
              / (Math.pow(1 + monthlyRate, totalMonths) - 1);

    console.log("Monthly EMI: " + emi.toFixed(2));
}

calculateEMI(500000, 10, 5);

//104. Electricity bill calculation.

function calculateBill(units) {

    let bill = 0;

    if (units <= 100) {
        bill = units * 3;
    }
    else if (units <= 200) {
        bill = (100 * 3) + ((units - 100) * 5);
    }
    else {
        bill = (100 * 3) + (100 * 5) + ((units - 200) * 7);
    }

    console.log("Total Bill: ₹" + bill);
}

calculateBill(250);

//105. Attendance percentage

function calculateAttendance(totalClasses, attendedClasses) {

    if (totalClasses === 0) {
        console.log("Total classes cannot be zero");
        return;
    }

    let percentage = (attendedClasses / totalClasses) * 100;

    console.log("Attendance Percentage: " + percentage.toFixed(2) + "%");
}

calculateAttendance(100, 85);

// 106. Grade calculation

function calculateGrade(mark) {

    if (mark < 0 || mark > 100) {
        console.log("Invalid Marks");
        return;
    }

    if (mark >= 90) {
        console.log("Grade: A");
    }
    else if (mark >= 80) {
        console.log("Grade: B");
    }
    else if (mark >= 70) {
        console.log("Grade: C");
    }
    else if (mark >= 60) {
        console.log("Grade: D");
    }
    else if (mark >= 50) {
        console.log("Grade: E");
    }
    else {
        console.log("Grade: F");
    }
}
calculateGrade(85);

// 107. Find most ordered product

let products = [
  { name: "Burger", quantity: 12 },
  { name: "Pizza", quantity: 25 },
  { name: "Shawarma", quantity: 18 },
  { name: "Sandwich", quantity: 30 }
];
function findMostOrdered(products) {

    if (products.length === 0) {
        console.log("No products available");
        return;
    }

    let mostOrdered = products[0];

    for (let i = 1; i < products.length; i++) {

        if (products[i].quantity > mostOrdered.quantity) {
            mostOrdered = products[i];
        }

    }

    console.log("Most Ordered Product: " + mostOrdered.name);
    console.log("Quantity: " + mostOrdered.quantity);
}

findMostOrdered(products);

//108. Find least ordered product.

let productsa = [
  { name: "Burger", quantity: 12 },
  { name: "Pizza", quantity: 25 },
  { name: "Shawarma", quantity: 18 },
  { name: "Sandwich", quantity: 5 }
];

function findLeastOrdered(productsa) {

    if (productsa.length === 0) {
        console.log("No products available");
        return;
    }

    let leastOrdered = productsa[0];

    for (let i = 1; i < productsa.length; i++) {

        if (productsa[i].quantity < leastOrdered.quantity) {
            leastOrdered = productsa[i];
        }

    }

    console.log("Least Ordered Product: " + leastOrdered.name);
    console.log("Quantity: " + leastOrdered.quantity);
}

findLeastOrdered(productsa);


//109. Generate invoice ID.

let invoiceCounter = 1;

function generateInvoiceID() {

    let year = new Date().getFullYear();

    let paddedNumber = invoiceCounter.toString().padStart(4, "0");

    let invoiceID = "INV-" + year + "-" + paddedNumber;

    invoiceCounter++;
    return invoiceID;
}
console.log(generateInvoiceID());
console.log(generateInvoiceID());

//110. Track stock after sale.

function updateStock(currentStock, soldQuantity) {

    if (soldQuantity > currentStock) {
        console.log("Not enough stock available");
        return;
    }

    let remainingStock = currentStock - soldQuantity;

    console.log("Remaining Stock: " + remainingStock);
}

updateStock(50, 10);

//111. Check expired products

let productss = [
  { name: "Milk", expiry: "2026-02-10" },
  { name: "Bread", expiry: "2026-01-15" },
  { name: "Juice", expiry: "2026-03-05" }
];

function checkExpired(productss) {

    let today = new Date();

    for (let i = 0; i < productss.length; i++) {

        let expiryDate = new Date(productss[i].expiry);

        if (expiryDate < today) {
            console.log(productss[i].name + " is Expired");
        }
        else {
            console.log(productss[i].name + " is Not Expired");
        }
    }
}

checkExpired(productss);

//112. Filter eligible voters

let people = [
  { name: "Rahul", age: 16 },
  { name: "Anu", age: 21 },
  { name: "Vivek", age: 18 },
  { name: "Meera", age: 15 }
];

function filterEligibleVoters(people) {

    let eligible = [];

    for (let i = 0; i < people.length; i++) {

        if (people[i].age >= 18) {
            eligible.push(people[i]);
        }

    }
    console.log("Eligible Voters:");
    console.log(eligible);
}

filterEligibleVoters(people);

//113. Count failed payments

let paymentsww = [
  { id: 1, amount: 500, status: "Success" },
  { id: 2, amount: 1200, status: "Failed" },
  { id: 3, amount: 750, status: "Success" },
  { id: 4, amount: 300, status: "Failed" }
];

function countFailedPayments(paymentsww) {

    let failedCount = 0;

    for (let i = 0; i < paymentsww.length; i++) {

        if (paymentsww[i].status === "Failed") {
            failedCount++;
        }

    }

    console.log("Failed Payments: " + failedCount);
}

countFailedPayments(paymentsww);

//114. Count successful transactions

let transactions = [
  { id: 1, amount: 1000, status: "Success" },
  { id: 2, amount: 500, status: "Failed" },
  { id: 3, amount: 2000, status: "Success" },
  { id: 4, amount: 700, status: "Success" }
];

function countSuccessfulTransactions(transactions) {

    let successCount = 0;

    for (let i = 0; i < transactions.length; i++) {

        if (transactions[i].status === "Success") {
            successCount++;
        }

    }

    console.log("Successful Transactions: " + successCount);
}
countSuccessfulTransactions(transactions);

//115. Find highest scorer.

let students = [
  { name: "Arjun", mark: 75 },
  { name: "Meera", mark: 92 },
  { name: "Rahul", mark: 88 },
  { name: "Anu", mark: 95 }
];

function findHighestScorer(students) {

    if (students.length === 0) {
        console.log("No students available");
        return;
    }

    let highest = students[0];

    for (let i = 1; i < students.length; i++) {

        if (students[i].mark > highest.mark) {
            highest = students[i];
        }

    }

    console.log("Highest Scorer: " + highest.name);
    console.log("Mark: " + highest.mark);
}

findHighestScorer(students);

//116. Rank students.

let studentsq = [
  { name: "Arjun", mark: 75 },
  { name: "Meera", mark: 92 },
  { name: "Rahul", mark: 88 },
  { name: "Anu", mark: 95 }
];

function rankStudents(studentsq) {

    // Step 1: Sort descending

    studentsq.sort(function(a, b) {
        return b.mark - a.mark;
    });

    // Step 2: Assign rank

    for (let i = 0; i < studentsq.length; i++) {
        studentsq[i].rank = i + 1;
    }

    console.log(studentsq);
}
rankStudents(studentsq);

//117. Leaderboard system

let players = [
  { name: "Arjun", score: 150 },
  { name: "Meera", score: 220 },
  { name: "Rahul", score: 180 },
  { name: "Anu", score: 220 }
];

function createLeaderboard(players) {

    // Step 1: Sort by score descending

    players.sort(function(a, b) {
        return b.score - a.score;
    });

    // Step 2: Assign rank

    for (let i = 0; i < players.length; i++) {
        players[i].rank = +1 ;
    }

    console.log(players);
}
createLeaderboard(players);

// 118. Game life counter

let lives = 3;

function loseLife() {

    if (lives > 0) {
        lives--;
        console.log("Remaining Lives: " + lives);
    }

    if (lives === 0) {
        console.log("Game Over!");
    }
}
function resetGame() {
    lives = 3;
    console.log("Game Reset. Lives: " + lives);
}

// Test
loseLife();
loseLife();

//119. Level progression system

function calculateLevel(score) {

    if (score < 0) {
        console.log("Invalid Score");
        return;
    }

    let level = Math.floor(score / 100) + 1;

    console.log("Score: " + score);
    console.log("Level: " + level);
}

calculateLevel(550);

//120. Timer countdown logic

function startCountdown(seconds) {

    let timer = seconds;

    let interval = setInterval(function () {

        console.log(timer);

        timer--;

        if (timer < 0) {
            clearInterval(interval);
            console.log("Time's Up!");
        }

    }, 1000);
}
//startCountdown(5);

//121. Shopping cart remove item.

let cart = [
  { id: 1, name: "Shirt", price: 800 },
  { id: 2, name: "Shoes", price: 1500 },
  { id: 3, name: "Watch", price: 2000 }
];

function removeItem(itemId) {
  cart = cart.filter(function(item) {
    return item.id !== itemId;
  });
}

removeItem(2);

console.log(cart);

// 122.Add item to cart

let carts = [
  { id: 1, name: "Shirt", price: 800, quantity: 1 },
  { id: 2, name: "Shoes", price: 1500, quantity: 1 }
];

function addItem(newItem) {

  // Check if item already exists

  let existingItem = carts.find(function(item) {
    return item.id === newItem.id;
  });

  if (existingItem) {
    existingItem.quantity += 1;   // Increase quantity
  } else {
    carts.push(newItem);           // Add new item
  }
}

addItem({ id: 3, name: "Watch", price: 2000, quantity: 1 });
console.log(carts);

// 123. Update item quantity

let cartw = [
  { id: 1, name: "Shirt", price: 800, quantity: 1 },
  { id: 2, name: "Shoes", price: 1500, quantity: 2 }
];

function updateQuantity(itemId, newQuantity) {

  // Find item

  let item = cartw.find(function(product) {
    return product.id === itemId;
  });

  // If item found

  if (item) {

    // Prevent negative quantity

    if (newQuantity > 0) {
      item.quantity = newQuantity;
      console.log("Quantity Updated Successfully");
    } else {
      console.log("Invalid Quantity");
    }

  } else {
    console.log("Item Not Found");
  }

}
updateQuantity(1, 3);
console.log(cartw);

//124. Search product by name

let productsq = [
  { id: 1, name: "Shirt", price: 800 },
  { id: 2, name: "Shoes", price: 1500 },
  { id: 3, name: "Watch", price: 2000 },
];

function searchProduct(productName) {

  let result = productsq.find(function(item) {
    return item.name === productName;
  });

  if (result) {
    console.log("Product Found:", result);
  } else {
    console.log("Product Not Found");
  }
}
searchProduct("Shoes");

// 125. Filter products by price.

let productswq = [
  { id: 1, name: "Shirt", price: 800 },
  { id: 2, name: "Shoes", price: 1500 },
  { id: 3, name: "Watch", price: 2000 },
  { id: 4, name: "Cap", price: 400 }
];

let result = productswq.filter(function(item) {
  return item.price < 1000;
});
console.log(result);

// 126. Calculate shipping charge.

let totalAmount = 850;

function calculateShipping(totalAmount) {

  let shippingCharge;

  if (totalAmount >= 1000) {
    shippingCharge = 0;
  } else {
    shippingCharge = 100;
  }

  return shippingCharge;
}

let resulta = calculateShipping(850);
console.log("Shipping Charge:", resulta);

// 127. Check free delivery eligibility.

let totalAmounta = 1200;

function checkFreeDelivery(totalAmounta) {

  if (totalAmounta >= 1000) {
    return "Eligible for Free Delivery";
  } else {
    return "Not Eligible for Free Delivery";
  }

}
let resultz = checkFreeDelivery(1200);
console.log(resultz);

// 128. Compare two arrays.

let arr1 = [10, 20, 30];
let arr2 = [10, 20, 30];

function compareArrays(a, b) {

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

console.log(compareArrays(arr1, arr2));

//  More method

function compareUnordered(a, b) {

  if (a.length !== b.length) {
    return false;
  }

  let sortedA = [...a].sort();
  let sortedB = [...b].sort();

  for (let i = 0; i < sortedA.length; i++) {
    if (sortedA[i] !== sortedB[i]) {
      return false;
    }
  }

  return true;
}

// 129. Merge two arrays

// Method 1

let arry1 = [1, 2, 3];
let arry2 = [4, 5, 6];

let mergedArray = arry1.concat(arry2);

console.log(mergedArray);

// Method 2

let arrq1 = [1, 2, 3];
let arrq2 = [4, 5, 6];

let mergedArrayq = [...arrq1, ...arrq2];

console.log(mergedArrayq);

// Method 3

let arre1 = [1, 2, 3];
let arre2 = [4, 5, 6];

let mergedArraye = [];   // Step 1 → Empty array create cheyyuka

for (let i = 0; i < arre1.length; i++) {
  mergedArraye.push(arre1[i]);  // Step 2 → arr1 values push cheyyuka
}

for (let i = 0; i < arre2.length; i++) {
  mergedArraye.push(arre2[i]); // Step 3 → arr2 values push cheyyuka
}

console.log(mergedArraye); // Step 4 → Final merged array kittum

// 130. Find intersection of arrays

let arru1 = [1, 2, 3, 4];
let arru2 = [3, 4, 5, 6];

let intersection = arru1.filter(function(value) {
  return arru2.includes(value);
});

console.log(intersection);

// 131. Remove null values.

let arr = [1, null, 2, null, 3, 4, null];

let cleanedArray = arr.filter(function(value) {
  return value !== null;
});

console.log(cleanedArray);

// Method 2

let arre = [1, null, 2, null, 3, 4, null];

let cleanedArraye = arre.filter(function(value) {
  return value != null;
});

// 132. Remove undefined values

let arrc = [1, undefined, 2, undefined, 3];

let cleanedArrayc = arrc.filter(function(value) {
  return value !== undefined;
});

console.log(cleanedArrayc);

//133. Check if object key exists.

let user = {
  name: "Abin",
  age: 22,
  city: "Kochi"
};

console.log("age" in user);     // true
console.log("salary" in user);  // false

// 134. Count object properties.

// Method 1

let userf = {
  name: "Abin",
  age: 22,
  city: "Kochi"
};

let count = Object.keys(userf).length;

console.log(count);

// Method 2

let usero = {
  name: "Abin",
  age: 22,
  city: "Kochi"
};

let counto = 0;

for (let key in usero) {
  counto++;
}

console.log(counto);


// More example

let product = {
  id: 1,
  name: "Shoes",
  price: 1500,
  stock: 10,
  brand: "Nike"
};

let countr = 0;

for(let key in product){
    countr++;
}
console.log(countr);

// 135. Convert object to array

let useri = {
  name: "Abin",
  age: 22,
  city: "Calicut"
};

let resulti = Object.values(useri);

console.log(resulti);

//136. Convert array to object.

let arrx = ["Abin", 22, "Calicut"];

let obj = Object.assign({}, arrx);

console.log(obj);

//137. Deep copy object.

let user1 = {
  name: "Abin",
  address: {
    city: "Calicut"
  }
};

let user2 = user1;

user2.address.city = "Kochi";

console.log(user1.address.city);

//138. Calculate total marks from object list.

let studentsh = [
  { name: "Abin", mark: 80 },
  { name: "Rahul", mark: 75 },
  { name: "Nimal", mark: 90 }
];

let total = 0;

for (let i = 0; i < studentsh.length; i++) {
  total = total + studentsh[i].mark;
}

console.log("Total Marks:", total);

//139. Validate user input.

//let name = document.getElementById("nameInput").value;

//if (name === "") {
 // console.log("Name cannot be empty");
//} else {
 // console.log("Valid name");
//}

// 140. Create reusable calculator function.





// !  LEVEL 4 – Advanced & MERN-Level Functions ! //




// 141. Implement map manually


let numbersa = [1, 2, 3, 4];

let doubled = myMap(numbersa, function(num) {
  return num * 2;
});

console.log(doubled);


function myMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let newValue = callback(arr[i], i, arr);
    result.push(newValue);
  }

  return result;
}

// More  method


let numbers = [1, 2, 3, 4];

let naNumbers = numbers.map((number) => number * 3);

console.log(naNumbers);

// More metod !!

let aNumber = [1, 2, 3, 10, 20, 30, 40, 50];

let resultf = aNumber
                .filter((number) => number > 5)
                .map((number) => number + 10);
                
console.log(resultf);


//142. Implement filter manually.

let filNumber = [1, 2, 3, 4, 5, 6];

let reslutg = filNumber.filter((number) => number % 2 === 0);

console.log(reslutg);


// More method

let numbersw = [1, 2, 3, 4, 5, 6];

let evens = myFilter(numbersw, function(num) {
  return num % 2 === 0;
});

console.log(evens);

function myFilter(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}


// 143. Implement reduce manually.


function myReduce(arr, callback, initialValue) {

  let accumulator = initialValue;

  for (let i = 0; i < arr.length; i++) {                                                 //Step 1
    accumulator = callback(accumulator, arr[i], i, arr);                                // 0 + 1 = 1
  }                                                                                     // step 2                                                                    
  return accumulator;                                                                   // 1 + 2 = 3.....etc
}

// Example

let numbersy = [1, 2, 3, 4];

let sum = myReduce(numbersy, function(acc, num) {
  return acc + num;
}, 0);

console.log(sum);

// 144. Create custom forEach.