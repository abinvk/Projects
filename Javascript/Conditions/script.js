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

//63. Mobile battery status

let battery = 45; // percentage

if (battery < 10) {
  console.log("Very Low");
} else if (battery < 30) {
  console.log("Low");
} else if (battery < 80) {
  console.log("Normal");
} else if (battery <= 100) {
  console.log("Full");
} else {
  console.log("Invalid Battery Level");
}


//64. Shopping offer selection

let amount = 4200;
let offer = "";

if (amount < 1000) {
  offer = "No Offer";
} else if (amount < 3000) {
  offer = "5% Discount";
} else if (amount < 5000) {
  offer = "10% Discount";
} else {
  offer = "20% Discount";
}

console.log("Offer:", offer);

//65. Course eligibility

let percentage = 72;

if (percentage < 50) {
  console.log("Not Eligible");
} else if (percentage < 65) {
  console.log("Eligible for Diploma");
} else if (percentage < 80) {
  console.log("Eligible for Degree");
} else if (percentage <= 100) {
  console.log("Eligible for Professional Course");
} else {
  console.log("Invalid Percentage");
}

//66. Check age > 18 AND citizen

let agee = 20;
let isCitizen = true;

if (agee >= 18 && isCitizen === true) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}

//67. Check username AND password

let userName = "Abin" ;
let passWord = "1234";

if( userName === "Abin" && passWord === "1234"){
  console.log("Login Successful");
}else{
  console.log("logig Failed");
}

//68. Check salary > 30000 OR bonus exists

let saalary = 25000;
let bonusExists = true;
if (salary > 30000 || bonusExists === true) {   // OR → രണ്ടിൽ ഏതെങ്കിലും ഒന്ന് true ആണെങ്കിൽ whole condition true
  console.log("Eligible");                     //  false || true  =  true
} else {
  console.log("Not Eligible");
}

//69. Check number between 1 and 10

let nuum = 7;

if (nuum >= 1 && nuum <= 10) {
  console.log("Inside Range");
} else {
  console.log("Outside Range");
}

//70. Check number between 10 and 100

let nuaum = 700;

if (nuaum >= 10 && nuaum <= 100) {
  console.log("Inside Range");
} else {
  console.log("Outside Range");
}

//71. Check user is admin OR manager

let users ="Admin";

if (users === "Admin" || users ==="Manager"){
  console.log("Allowed")
}else{
  console.log("Not Allowed")
}

//72. Check password NOT empty

let passwordd ="asdfg";   // not empty

if (passwordd !== "") {
  console.log("Valid Password");
} else {
  console.log("Password is Empty");
}

//73. Check number NOT zero

let numebb = 10;

if(numebb !== 0){
  console.log("Not zero")
}else{
  console.log("Zero")
}

//74. Check phone number valid length

let phone = "9876543210";

if (phone.length === 10) {
  console.log("Valid Phone Number");
} else {
  console.log("Invalid Phone Number");
}

//75. Check student passed all subjects

let math = 45;
let science = 48;
let english = 62;

if (math >= 40 && science >= 40 && english >= 40) {
  console.log("Passed All Subjects");
} else {
  console.log("Failed");
}

//76. Check weather hot AND humid

let temperaturee = 62; // Celsius
let humidity = 80;    // Percentage

if (temperaturee >= 20 && humidity >= 60) {
  console.log("Hot and Humid");
} else {
  console.log("Not Hot and Humid");
}

//77. Check user logged in AND verified

let isLoggedIIn = true;
let isVerified = false;

if (isLoggedIIn === true && isVerified === true) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

//78. Check balance sufficient AND card valid

let balancee = 5000;
let amountt = 3000;
let cardValid = true;

if (balancee >= amountt && cardValid === true) {
  console.log("Payment Successful");
} else {
  console.log("Payment Failed");
}

//79. Check discount applicable

let amounttt = 1200;

if (amounttt >= 1000) {
  console.log("Discount Applicable");
} else {
  console.log("No Discount");
}

//80. Check weekend OR holiday

let isWeekend = false;
let isHoliday = true;

if (isWeekend === true || isHoliday === true) {
  console.log("Holiday");
} else {
  console.log("Working Day");
}

//81. Check age NOT below 18

let aage = 20;

if (aage >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}

//82. Check product available AND affordable

let inStock = true;
let pricee = 1500;
let budget = 2000;

if (inStock === true && pricee <= budget) {
  console.log("Can Buy Product");
} else {
  console.log("Cannot Buy Product");
}

//83. Check marks NOT less than pass mark

let markss = 45;
let passMark = 40;

if (markss >= passMark) {
  console.log("Pass");
} else {
  console.log("Fail");
}

//84. Check valid email AND password

let email = "abin";
let passs = "123456";

if(email === "abin" && passs === "123456"){
  console.log("Login Valid")
}else{
  console.log("Invalid")
}

// more Method

let emaill = "user@gmail.com";
let passworddd = "abc123";

if (emaill.includes("@") && emaill.includes(".") && passworddd.length >= 6) {
  console.log("Login Valid");
} else {
  console.log("Invalid Email or Password");
}

//85. Check job eligibility

let agge = 22;
let hasSkill = true;
let experiennce = 2; // years

if (agge >= 18 && hasSkill === true && experiennce >= 1) {
  console.log("Eligible for Job");
} else {
  console.log("Not Eligible for Job");
}

//86. Check file size valid

let fileSize = 4.2; // in MB
let maxSize = 5;   // max allowed size in MB

if (fileSize <= maxSize) {
  console.log("File Size Valid");
} else {
  console.log("File Too Large");
}

//87. Check login OR signup

let isLoggedInn = false;
let isSignedUp = true;

if (isLoggedInn === true || isSignedUp === true) {
  console.log("Access Allowed");
} else {
  console.log("Please Login or Sign Up");
}

//88. Check payment success

let paymentStatus = "success"; // "success" or "failed"

if (paymentStatus === "success") {
  console.log("Payment Successful");
} else {
  console.log("Payment Failed");
}

//89. Check offer applicable OR expired

let offerApplicable = false;
let offerExpired = true;

if (offerApplicable === true || offerExpired === true) {
  console.log("Offer Status Available");
} else {
  console.log("No Active Offer");
}

//90. Check number NOT negative

let nnum = 5;

if (nnum >= 0) {
  console.log("Not Negative");
} else {
  console.log("Negative");
}

//91. Print day name using number

let days = 3;

if (days === 1) {
  console.log("Monday");
} else if (days === 2) {
  console.log("Tuesday");
} else if (days === 3) {
  console.log("Wednesday");
} else if (days === 4) {
  console.log("Thursday");
} else if (days === 5) {
  console.log("Friday");
} else if (days === 6) {
  console.log("Saturday");
} else if (days === 7) {
  console.log("Sunday");
} else {
  console.log("Invalid Day");
}

//92. Print month name using number

let month = 5;

if (month === 1) {
  console.log("January");
} else if (month === 2) {
  console.log("February");
} else if (month === 3) {
  console.log("March");
} else if (month === 4) {
  console.log("April");
} else if (month === 5) {
  console.log("May");
} else if (month === 6) {
  console.log("June");
} else if (month === 7) {
  console.log("July");
} else if (month === 8) {
  console.log("August");
} else if (month === 9) {
  console.log("September");
} else if (month === 10) {
  console.log("October");
} else if (month === 11) {
  console.log("November");
} else if (month === 12) {
  console.log("December");
} else {
  console.log("Invalid Month");
}

//93. Simple calculator using switch

let num1 = 10;
let num2 = 5;
let operator = "*"; // "+", "-", "*", "/"

switch (operator) {
  case "+":
    console.log("Result:", num1 + num2);
    break;

  case "-":
    console.log("Result:", num1 - num2);
    break;

  case "*":
    console.log("Result:", num1 * num2);
    break;

  case "/":
    if (num2 !== 0) {
      console.log("Result:", num1 / num2);
    } else {
      console.log("Cannot divide by zero");
    }
    break;

  default:
    console.log("Invalid Operator");
}

//94. Traffic signal using switch

let signall = "Red"; // "Red", "Yellow", "Green"

switch (signall) {
  case "Red":
    console.log("Stop");
    break;

  case "Yellow":
    console.log("Get Ready");
    break;

  case "Green":
    console.log("Go");
    break;

  default:
    console.log("Invalid Signal");
}


//95. Menu item selection

let item = "porotta";

  switch(item) {
      case "biriyani":
        console.log("1-item");
    break;

      case "porotta":
        console.log("2-item");
      break;

      case "beef varatt":
        console.log("3-item");
      break;

      case "mandhi":
          console.log("4-item");
        break;

        default:
          console.log("Order cancel");
  }
// Correct Method

let choice = 2;

switch (choice) {
  case 1:
    console.log("Tea");
    break;

  case 2:
    console.log("Coffee");
    break;

  case 3:                                     // Correct Method
    console.log("Juice");
    break;

  case 4:
    console.log("Snacks");
    break;

  default:
    console.log("Invalid Choice");
}


//96. Language selection

let lang = "malayalam"; // "enlish", "malayalam", "hindi", "tamil"

switch (lang) {
  case "english":
    console.log("English");
    break;

  case "malayalam":
    console.log("Malayalam");
    break;

  case "hindi":
    console.log("Hindi");
    break;

  case "tamil":
    console.log("Tamil");
    break;

  default:
    console.log("Language Not Supported");
}

//97. User role display

let role = "manager"; // "admin", "manager", "user"

switch (role) {
  case "admin":
    console.log("Admin Dashboard");
    break;

  case "manager":
    console.log("Manager Panel");
    break;

  case "user":
    console.log("User Home");
    break;

  default:
    console.log("Guest Access");
}

//98. Game level selection

let level = 2; // 1, 2, 3

switch (level) {
  case 1:
    console.log("Easy Level");
    break;

  case 2:
    console.log("Medium Level");
    break;

  case 3:
    console.log("Hard Level");
    break;

  default:
    console.log("Invalid Level");
}

//99. ATM options menu

let selection = "Staitment Checking";    // "Balace Cheking", "Money Widrow", "Staitment Checking"

switch (selection){

  case "Balance Cheking":
    console.log("Your balance cheking");
    break;

    case "Money Widrow":
      console.log("your money widrow");
    break;

    case "Staitment Checking":
      console.log("Your staitment cheking");
      break;

      default:
      console.log("nothing");
}


//More Method


let option = 2; // 1, 2, 3, 4

switch (option) {
  case 1:
    console.log("Balance Check");
    break;

  case 2:
    console.log("Withdraw Money");
    break;

  case 3:
    console.log("Deposit Money");
    break;

  case 4:
    console.log("Mini Statement");
    break;

  default:
    console.log("Invalid Option");
}

//100. Grade using switch

let marksss = 85;

switch (true) {
  case (marksss >= 90 && marksss <= 100):
    console.log("Grade A");
    break;

  case (marksss >= 80):
    console.log("Grade B");
    break;

  case (marksss >= 70):
    console.log("Grade C");
    break;

  case (marksss >= 60):
    console.log("Grade D");
    break;

  default:
    console.log("Grade F");
}


//101. Weekday or weekend

let dayy = 6; // 1 = Monday, ..., 7 = Sunday

if (dayy >= 1 && dayy <= 5) {
  console.log("Weekday");
} else if (dayy === 6 || dayy === 7) {
  console.log("Weekend");
} else {
  console.log("Invalid Day");
}

//102. Weather type selection

let weather = "rainy"; // "sunny", "rainy", "cloudy", "snowy"

switch (weather) {
  case "sunny":
    console.log("Sunny Weather");
    break;

  case "rainy":
    console.log("Rainy Weather");
    break;

  case "cloudy":
    console.log("Cloudy Weather");
    break;

  case "snowy":
    console.log("Snowy Weather");
    break;

  default:
    console.log("Unknown Weather Type");
}


//103. Course selection menu

let qulification = "+2th"  // 10th, +2, Digree, Pg

switch(qulification){
  case "10th":
  console.log("PSC");
  break;

  case "+2":
    console.log("Diploma");
    break;

    case "Digree":
      console.log("PG");
      break;

      case "Pg":
        console.log("Higher Study");
        break;

        default:
        console.log("your life  fool")
}


//More method

let choicee = 3; // 1, 2, 3, 4

switch (choicee) {
  case 1:
    console.log("JavaScript Course");
    break;

  case 2:
    console.log("Python Course");
    break;

  case 3:
    console.log("MERN Stack Course");
    break;

  case 4:
    console.log("Java Course");
    break;

  default:
    console.log("Invalid Course Selection");
}

//104. Movie rating message

let ratingg = 4; // 1 to 5

switch (ratingg) {
  case 1:
    console.log("Very Bad Movie");
    break;

  case 2:
    console.log("Bad Movie");
    break;

  case 3:
    console.log("Average Movie");
    break;

  case 4:
    console.log("Good Movie");
    break;

  case 5:
    console.log("Excellent Movie");
    break;

  default:
    console.log("Invalid Rating");
}

//105. Food order system

let order = 2; // 1, 2, 3, 4

switch (order) {
  case 1:
    console.log("Burger - ₹120");
    break;

  case 2:
    console.log("Pizza - ₹250");
    break;

  case 3:
    console.log("Sandwich - ₹100");
    break;

  case 4:
    console.log("Juice - ₹60");
    break;

  default:
    console.log("Invalid Order");
}
// more method

let orders = 3;
                                                  
if (orders === 1) {
  console.log("Burger - ₹120");
} else if (orders === 2) {                           //(Beginner clear logic)
  console.log("Pizza - ₹250");
} else if (orders === 3) {
  console.log("Sandwich - ₹100");
} else if (orders === 4) {
  console.log("Juice - ₹60");
} else {
  console.log("Invalid Order");
}

//106. Payment method selection

let paymentMethod = 3; // 1, 2, 3, 4

switch (paymentMethod) {
  case 1:
    console.log("Payment by Cash");
    break;

  case 2:
    console.log("Payment by Card");
    break;

  case 3:
    console.log("Payment by UPI");
    break;

  case 4:
    console.log("Payment by Net Banking");
    break;

  default:
    console.log("Invalid Payment Method");
}

//107. Transport mode selection

let mode = 1; // 1, 2, 3, 4

switch (mode) {
  case 1:
    console.log("Travel by Bus");
    break;

  case 2:
    console.log("Travel by Train");
    break;

  case 3:
    console.log("Travel by Flight");
    break;

  case 4:
    console.log("Travel by Taxi");
    break;

  default:
    console.log("Invalid Transport Mode");
}

//108. Device type detection

let device = "mobile"; // "mobile", "tablet", "desktop", "laptop"

switch (device) {
  case "mobile":
    console.log("Mobile Device");
    break;

  case "tablet":
    console.log("Tablet Device");
    break;

  case "desktop":
    console.log("Desktop Device");
    break;

  case "laptop":
    console.log("Laptop Device");
    break;

  default:
    console.log("Unknown Device Type");
}

//109. Gender display

let gender = "F"; // "M", "F", "O"

switch (gender) {
  case "M":
    console.log("Male");
    break;

  case "F":
    console.log("Female");
    break;

  case "O":
    console.log("Other");
    break;

  default:
    console.log("Invalid Gender");
}

//110. Error code message

let errorCode = 404;

switch (errorCode) {
  case 400:
    console.log("Bad Request");
    break;

  case 401:
    console.log("Unauthorized");
    break;

  case 404:
    console.log("Not Found");
    break;

  case 500:
    console.log("Server Error");
    break;

  default:
    console.log("Unknown Error");
}


//111. Subscription plan

let plan = 3; // 1, 2, 3

switch (plan) {
  case 1:
    console.log("Free Plan - Limited Access");
    break;

  case 2:
    console.log("Basic Plan - Standard Access");
    break;

  case 3:
    console.log("Premium Plan - Full Access");
    break;

  default:
    console.log("Invalid Subscription Plan");
}
