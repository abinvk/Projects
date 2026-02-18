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