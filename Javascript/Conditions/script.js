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

//43. Check temperature (cold/warm/hot)

let tempe = 48;

if (tempe <= -10){
  console.log("Cold");
} else if (tempe <= 45){
  console.log("Warm");
} else {
  console.log("Hot");
}

//44. Electricity bill slab

let units = 250;
let bill = 0;

if (units <= 100) {
  bill = units * 3;
} else if (units <= 200) {
  bill = (100 * 3) + ((units - 100) * 5);
} else {
  bill = (100 * 3) + (100 * 5) + ((units - 200) * 8);
}
console.log("Electricity Bill: ₹" + bill);

//45. Salary tax slab

let saary = 750000;
let tax = 0;

if (saary <= 250000) {
  tax = 0;
} else if (saary <= 500000) {
  tax = (saary - 250000) * 0.05;
} else if (saary <= 1000000) {
  tax = (250000 * 0.05) + ((saary - 500000) * 0.20);
} else {
  tax = (250000 * 0.05) + (500000 * 0.20) + ((saary - 1000000) * 0.30);
}
console.log("Tax Amount: ₹" + tax);

//46. Discount based on price

let price = 6000;
let discount = 0;
let finalPrice = 0;

if (price < 1000) {
  discount = 0;
} else if (price < 5000) {
  discount = price * 0.10;
} else {
  discount = price * 0.20;
}

finalPrice = price - discount;

console.log("Discount: ₹" + discount);
console.log("Final Price: ₹" + finalPrice);


//47. BMI category

let weight = 70;   // kg
let height = 1.75; // meter

let bmi = weight / (height * height);

if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi < 25) {
  console.log("Normal");
} else if (bmi < 30) {
  console.log("Overweight");
} else {
  console.log("Obese");
}

console.log("BMI:", bmi.toFixed(2));


//Weight = 80kg, Height = 1.80m → BMI (2 decimal)

//BMI = weight / (height × height)
  // = 80 / (1.80 × 1.80)
  // = 80 / 3.24
  // = 24.691358...


  //48. Traffic light instruction

let signal = "Red";

if (signal === "Red") {
  console.log("Stop");
} else if (signal === "Yellow") {
  console.log("Get Ready");
} else if (signal === "Green") {
  console.log("Go");
} else {
  console.log("Invalid Signal");
}

//49. Exam result classification

let mars = 72;

if (mars < 40) {
  console.log("Fail");
} else if (mars < 60) {
  console.log("Pass");
} else if (mars < 80) {
  console.log("First Class");
} else if (mars <= 100) {
  console.log("Distinction");
} else {
  console.log("Invalid Marks");
}

//50. Rating (bad/average/good/excellent)

let rating = 9.99;

if (rating <= 3.99) {
  console.log("Bad");
} else if (rating <= 5.99) {
  console.log("Average");
} else if (rating <= 7.99) {
  console.log("Good");
} else if (rating <= 9.99) {
  console.log("Excellent");
} else {
  console.log("Invalid");
}

//51. Time of day (morning/afternoon/night)

let hour = 22; // 0 to 23

if (hour >= 5 && hour <= 11) {
  console.log("Morning");
} else if (hour >= 12 && hour <= 16) {
  console.log("Afternoon");
} else if (hour >= 17 && hour <= 20) {
  console.log("Evening");
} else if ((hour >= 21 && hour <= 23) || (hour >= 0 && hour <= 4)) {
  console.log("Night");
} else {
  console.log("Invalid Time");
}

//52. Speed categor

let speed = 85; // km/h

if (speed < 40) {
  console.log("Slow");
} else if (speed < 80) {
  console.log("Normal");
} else if (speed < 120) {
  console.log("Fast");
} else {
  console.log("Over Speed");
}

//53. Attendance status

let attendance = 82; // percentage

if (attendance < 75) {
  console.log("Not Eligible");
} else if (attendance < 90) {
  console.log("Eligible");
} else if (attendance <= 100) {
  console.log("Excellent Attendance");
} else {
  console.log("Invalid Attendance");
}

//55. Weather condition

let temperature = 32; // in Celsius

if (temperature < 15) {
  console.log("Cold");
} else if (temperature < 30) {
  console.log("Normal");
} else if (temperature < 40) {
  console.log("Hot");
} else {
  console.log("Very Hot");
}

//56. Student performance level

let scre = 68;

if (scre < 40) {
  console.log("Poor");
} else if (scre < 60) {
  console.log("Average");
} else if (scre < 80) {
  console.log("Good");
} else if (scre <= 100) {
  console.log("Excellent");
} else {
  console.log("Invalid Score");
}

//57. Loan eligibility

let cibil =  900;

if(cibil <= 610){
  console.log("Not Eligibil");
}else if(cibil <= 670){
  console.log("Fair")
}else if(cibil <= 710){
  console.log("Not Problen Ok")
}else if(cibil <= 790){
  console.log("Good")
}else if(cibil <= 860){
  console.log("Excellent")
}else{
  console.log("Good Profile Person")
}

//58. Password strength

let passwor = "abc123456789";

if (passwor.length < 6) {
  console.log("Weak Password");
} else if (passwor.length < 10) {
  console.log("Medium Password");
} else {
  console.log("Strong Password");
}

//59. Internet speed level

let sped = 35; // Mbps

if (sped < 5) {
  console.log("Very Slow");
} else if (sped < 20) {
  console.log("Slow");
} else if (sped < 50) {
  console.log("Average");
} else {
  console.log("Fast");
}

//60. Delivery charge slab

let orderAmount = 450;
let deliveryCharge = 0;

if (orderAmount < 500) {
  deliveryCharge = 50;
} else if (orderAmount < 1000) {
  deliveryCharge = 30;
} else {
  deliveryCharge = 0;
}

console.log("Delivery Charge: ₹" + deliveryCharge);

//61. Fuel level status

let fuel = 25; // percentage

if (fuel < 10) {
  console.log("Empty");
} else if (fuel < 30) {
  console.log("Low");
} else if (fuel < 60) {
  console.log("Medium");
} else if (fuel <= 100) {
  console.log("Full");
} else {
  console.log("Invalid Fuel Level");
}

//62. Experience level (junior/mid/senior)

let experience = 3; // years

if (experience < 2) {
  console.log("Junior");
} else if (experience < 5) {
  console.log("Mid");
} else {
  console.log("Senior");
}
