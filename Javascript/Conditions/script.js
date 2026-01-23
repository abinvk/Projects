//1. Check if a number is positive

let number = 10;

if(number > 0){
    console.log("number is positive");
}else{
    console.log("numer is negative");
};

// 2. Check if a number is negative

let num = -5;

if(num < 0 ){
    console.log("number is negative");
}else{
    console.log("number is positive");
};

//3. Check if a number is zero

let numb = 0;

if (numb === 0){
    console.log("number is zero");
}else{
    console.log("number is not zero");
};

//4. Check if a number is even

let even = 6;

if (even % 2 == 0){
    console.log("Number is even");
}else{
    console.log("Number is not even");
};

//5. Check if a number is odd

let odd = 7;

if (odd % 2 !== 0){
    console.log("Number is odd");
}else{
    console.log("Number is not odd");
};

//6. Check if age is above 18

let age = 19;

if( age > 18){
    console.log("age is 18 above");
}else{
    console.log("age is not 18");
};

//7. Check if age is below 18

let belw = 12;

if(belw < 18 ){
    console.log("age is below 18");
} else{
    console.log("greater than 18");
};

//8. Check if two numbers are equal.

let numer = 2;
let nube  = 2;

if(numer === nube){
    console.log("number is equal");
}else{
    console.log("number is not equal");
};

//9. Check if first number is greater

let fist1 = 20;
let fist2 = 10;

if ( fist1 > fist2){
    console.log("1st number is big");
}else{
    console.log("2st number is big");
}

//10. Check if second number is greater

let st1 = 20;
let st2 = 30;

if (st2 > st1){
    console.log("second number is greater");
}else{
    console.log("second number is not greater");
}

//11. Check if a number is greater than 100

let ter = 170;

if( ter > 100){
    console.log("Number is greater 100")
}else{
    console.log("Number is 100 less")
}

//12. Check if a number is less than 50

let less = 35;

if (less < 50){
    console.log("number is less 50");
}else{
    console.log("Number not less 50");
}

//13. Check if a value is true

let value = true;

if (value === true) {
  console.log("Value is true");
} else {
  console.log("Value is false");
}

//14. Check if a value is false

let val = false;

if (val === false) {
    console.log("value is false");
}else{
    console.log("value is true");
}

//15. Check if a string is empty

let text = "";

if (text === "") {
  console.log("String is empty");
} else {
  console.log("String is not empty");
}

//16. Check if a string is not empty

let tet = "Hello";

if (tet !== "") {
  console.log("String is not empty");
} else {
  console.log("String is empty");
}

//17. Check if balance is zero

let balance = 0;

if (balance === 0) {
    console.log("Balance is zero");
}else{
    console.log("Balance is not zero");
}

//18. Check if balance is not zero

let balnce = 19000;

if (balnce === 0) {    // !==
    console.log("Balance is zero");
}else{
    console.log("Balance is not zero");
}

//19. Check if temperature is above 30

let tem = 45;

if (tem > 30){
    console.log("tem 30 above");
}else{
    console.log("tem 30 below");
}

//20. Check if temperature is below 0

let temp = -12;

if (temp < 0){
    console.log("temp below is 0")
}else{
    console.log("temp is 0 above")
}

//21. Check pass or fail

let mark = 25

if(mark >= 35){
    console.log("your pass");
}else{
    console.log("your fail");
}

//22. Check eligible to vote

let vote = 23;

if (vote >= 18){
    console.log("your eligible to vote")
}else{
    console.log("not eligible")
}

//23. Check salary greater than 20000

let salary = 35000;

if(salary > 20000){
    console.log("Your salary is high")
}else{
    console.log("Your salary is very low")
}

//24. Check number divisible by 5

let nym = 25;

if (nym % 5 === 0) {
  console.log("Number is divisible by 5");
} else {
  console.log("Number is not divisible by 5");
}

//25. Check if a number is divisible by 10

let net = 20;

if(net % 10 === 0) {
    console.log("Number is divisible by 10");
}else{
    console.log("Number is not divisible by 10")
}

//Check if a number is divisible by 20

let nat = 200;

if(nat % 20 === 0) {
    console.log("Number is divisible by 20");
}else{
    console.log("Number is not divisible by 20");
}

//26. Check login success or fail

let password = "1234";

if (password === "1234") {
  console.log("Login success");
} else {
  console.log("Login failed");
}

//27. Check password correct or wrong

let passwrd = "abcd";

if (passwrd === "acd") {
  console.log("Password correct");
} else {
  console.log("Password wrong");
}

//28. Check speed exceeds limit

let speedLimit = 178;

if (speedLimit > 140 ){
    console.log("speed is limit over");
}else{
    console.log("Speed is done");
}

//29. Check if year is leap year

let year = 2024;

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}

//30. Check working day or holiday

let day = "Sunday";

if (day === "Saturday" || day === "Sunday") {
  console.log("Holiday");
} else {
  console.log("Working day");
}

//31. Check even or odd using if-else

let numu = 3;

if (numu % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

//32. Check profit or loss

let costPrice = 500;
let sellingPrice =1250;

if (sellingPrice > costPrice) {
  console.log("Profit");
} else {
  console.log("Loss");
}

//33. Check positive, negative or zero

let nume = -2;

if (nume > 0) {
  console.log("Positive number");
} else if (nume < 0) {                      // items add = positive , negative , zero
  console.log("Negative number");
} else {
  console.log("Zero");
}

//34. Check child or adult

let gae = 23

if (gae > 18 ){
    console.log("aduit")
}else{
    console.log("Child")
}

//35. Check valid age

let ages = 25;

if (ages > 0 && ages <= 120) {
  console.log("Valid age");
} else {
  console.log("Invalid age");
}


//36. Check account active or inactive

let isActive = true;

if (isActive === true) {
  console.log("Account is active");
} else {
  console.log("Account is inactive");
}

//37. Check item in stock.

let stock = 5;

if (stock > 5) {
  console.log("Item is in stock");
} else {
  console.log("Item is out of stock");
}

//38. Check user is logged in

let isLoggedIn = true;

if (isLoggedIn === true) {
  console.log("User is logged in");
} else {
  console.log("User is not logged in");
}

//39. Check result pass or fail

let marks = 45;

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

//40. Check score above average

let score = 75;

if (score > 50) {
  console.log("Score is above average");
} else {
  console.log("Score is average or below");
}

//41. Print grade based on marks

let mrks = 85;

if (mrks >= 90) {
  console.log("Grade A");
} else if (mrks >= 80) {
  console.log("Grade B");
} else if (mrks >= 70) {
  console.log("Grade C");
} else if (mrks >= 60) {
  console.log("Grade D");
} else {
  console.log("Fail");
}

//42. Check age group (child/adult/senior)

let ageGroup = 68;

if (ageGroup <= 12) {
  console.log("Child");
} else if (ageGroup <= 59) {
  console.log("Adult");
} else {
  console.log("Senior");
}
