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
