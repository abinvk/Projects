// !  A. Basics – for / while / do…while
 
//1. Print numbers from 1 to 10

for(let i = 1; i <=10; i++){
    console.log(i);
}

//2. Print numbers from 10 to 1

for(let a = 10; a >=1; a--){
    console.log(a);
}

//3. Print first 20 natural numbers

for(let s = 1; s <= 20; s++){
    console.log(s);
}

//4. Print even numbers from 1 to 50

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//5. Print odd numbers from 1 to 50

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

//6. Print numbers divisible by 5 (1–100)

for (let i = 1; i <= 100; i++) {
    if(i % 5 === 0){
    console.log(i);
    }
  }

//7. Print multiples of 3 (1–30)

for (let i = 1; i <= 30; i++) {
  if (i %  3 === 0) {
    console.log(i);
  }
}

//8. Print numbers from 0 to n

let n = 20;
for (let i = 1; i <= n; i++) {
    console.log(i);
  
}

//9. Print numbers between two given numbers

let start = 5;
let end = 10;

for (let i = start +1 ; i < end; i++) {
  console.log(i);
}

//10. Print square of numbers 1–10

for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}

//11. Print cube of numbers 1–10

for (let i = 1; i <= 10; i++) {
  console.log(i * i * i);
}

//12. Print numbers except multiples of 3

for (let i = 1; i <= 10; i++){
    if (i % 3 !== 0){
        console.log(i);
    }
}

//13. Print first 10 even numbers

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

//14. Print first 10 odd numbers

for (let i = 1; i <= 19; i +=2 ){
    console.log(i)
}

//15. Print table of 2

for (let i =0; i <=10; i++){
    console.log(2*i);
}

//16. Print table of any number

let num = 5;
for (let i =0; i<=10;i++){
  console.log(num*i);
}

//17. Print numbers until value reaches 100

let i = 1;

while (i <= 100){
  console.log(i);
  i++;
  
}

//18. Print numbers using while loop

let a = 1;

while (a <= 10){
  console.log(a);
  a++;
  
}

//19. Print numbers using do…while loop

let s = 1;

do {
  console.log(s);
  s++;
} while (s <= 10);

//20. Print Hello 5 times

let aa = 1;

while(aa <=10){
  console.log("hello " + aa)
  aa++;
}

//21. Print alphabets a–z

for (let i = 97; i <= 122; i++) {                // a b c d e .......
  console.log(String.fromCharCode(i));
}

//22. Print alphabets A–Z

for (let i = 65; i <= 90; i++) {                //A B C D F G H ......
  console.log(String.fromCharCode(i));
}

//23. Print numbers skipping 5

for (let i = 1; i <= 10; i++){
  if(i === 5){  // skip code
    continue;
  }
  console.log(i);
}

//24. Print numbers in steps of 2

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

//25. Print numbers in steps of 5

for (let i = 5; i <= 50; i += 5) {
  console.log(i);
}

//26. Print numbers less than 50

for (let i = 1; i < 50; i++ ){
  console.log(i);

}

//27. Print numbers greater than 50

for (let i = 50; i <= 100; i++ ){
  console.log(i);

}

//28. Print numbers between 1 and 100 except 50

for (let i = 1; i <= 100; i++ ){
  if(i === 50){
   continue;
  }
    console.log(i);
}

//29. Print 1 to 100 using one loop

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

//30. Print reverse even numbers from 50

for (let i = 50; i >=2; i -= 2) {
  console.log(i);
}

for (let i = 50; i >= 1; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// !  B. Sum / Count / Math Logic

//31. Find sum of numbers from 1 to 10

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}

console.log(sum);

//32. Find sum of numbers from 1 to n

let na = 10;
let summ = 0;

for (let i = 1; i <= na; i++) {
  summ = summ + i;
}
console.log(summ);

//33. Find sum of even numbers (1–100)

let suam = 0

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
     suam = suam + i;
  }
}
console.log(suam);

//34. Find sum of odd numbers (1–100)

let susm = 0

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
     susm = susm + i;
  }
}
console.log(susm);

//35. Count numbers from 1 to 100

//let count = 0;

//for(let i = 1; i = 100; i++){
 // count++;
//}
//console.log(count);

//36. Count even numbers

let count = 0

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
     count++;
  }
}
console.log(count);

//37. Count odd numbers

let countt = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
     countt++;
  }
}
console.log(countt);

//38. Count numbers divisible by 5

let counttt = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
     counttt++;
  }
}
console.log(counttt);

//39. Find sum of multiples of 3

let suma = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    suma = suma + i;
  }
}

console.log(suma);


//40.Find average of numbers 1–10

let summm = 0
let countttt = 0;

for (let i = 1; i <= 10; i++){

  summm = summm + i;
  countttt++;
}

let average = summm / countttt
console.log(average);

//41. Find factorial of a number

let ba =5;
let fact = 1;

for(let i = 1; i<=ba; i++){
  fact = fact * i;
}
console.log(fact);

//42. Find factorial using while loop

let nc = 5;
let factt = 1;
let ia = 1;

while (ia <= nc) {
  factt = factt * ia;
  ia++;
}
console.log(factt);

//43. Find factorial using for loop

let nv = 10;
let facta = 1;

for (let i = 1; i <= nv; i++) {
  facta = facta * i;
}

console.log(facta);

//44. Check factorial of 0

let nk = 0;
let factc = 1;

for (let i = 1; i <= nk; i++) {
  factc = factc * i;
}

console.log(factc);

//45. Find power of a number (an)

let ab = 2;
let an = 3;
let result = 1

for(let i =1; i<=an; i++){
  result = result * ab;
}
console.log(result)

// 46. Find sum of digits of a number

let numu = 1234;
let samu = 0;

while (numu > 0){
  let digit = numu % 10;
  samu = samu + digit;
  numu = Math.floor(numu / 10);
}
console.log(samu)

//47. Count digits of a number

let nam = 123456789;
let countq = 0;

while (nam > 0){
  countq++;
  nam = Math.floor(nam / 10)
}
console.log(countq);

//48. Reverse a number

let naber = 123456789;
let ever = 0;

while (naber > 0){
  let digit = naber % 10;
  ever = ever * 10 + digit;
  naber = Math.floor(naber / 10);
}
console.log(ever)

//49. Find product of numbers 1–5

let product = 1;

for (let i = 1; i <=5; i++){
  product = product * i ;
}

console.log(product);

//50. Find sum of squares

let ssum = 0;

for (let i = 1; i <= 5; i++) {
  ssum = ssum + (i * i);
}

console.log(ssum);

// MORE NUMBER 10

let sssum = 0;

for (let i = 1; i <= 10; i++) {
  sssum = sssum + (i * i);
}

console.log(sssum);

//51. Find sum of cubes

let sumsu = 0;

for (let i = 1; i <= 5; i++) {
  sumsu = sumsu + (i * i * i);
}
console.log(sumsu);

// NUMBER 10

let sumsua = 0;

for (let i = 1; i <= 10; i++) {
  sumsua = sumsua + (i * i * i);
}
console.log(sumsua);

//52. Count numbers greater than 50

let numbers = [10, 55, 23, 80, 50, 61, 42];
let counte = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 50) {
    counte++;
  }
}
console.log(counte);

//53. Count numbers less than 25

let numberss = [10, 55, 23, 80, 50, 61, 42];
let countee = 0;

for (let i = 0; i < numberss.length; i++) {
  if (numberss[i] < 25) {
    countee++;
  }
}
console.log(countee);

//54. Find sum until number becomes 0

let tnum = 1946;
let tsum = 0;

while (tnum > 0) {               //number 0 ആകുന്നത് വരെ
  let digit = tnum % 10;        //% 10 → last digit എടുക്കാൻ
  tsum = tsum + digit;          
  tnum = Math.floor(tnum / 10);  // 10 → last digit കളയാൻ  >  num-ലുള്ള അവസാന digit (last digit) നീക്കം ചെയ്യുക
}
console.log(tsum);

//56. Find total marks from array

let marks = [60, 70, 80, 90];
let total = 0;

for (let i = 0; i < marks.length; i++) {
  total = total + marks[i];
}
console.log(total);

//57. Find average marks from array

let markss = [60, 70, 80, 90];
let totals = 0;

for (let i = 0; i < markss.length; i++) {
  totals = totals + markss[i];
}
let averagea = totals / markss.length;

console.log(averagea);

//58. Count subjects passed

let markses = [40, 50 ,60, 80, 90];
let passMark = 45;
let passCount = 0;

for(let i = 0; i < markses.length; i++){
  if(markses[i]>=passMark){
    passCount = passCount +1;
  }
}
console.log(passCount);

//59. Count subjects failed

let marksess = [40, 50 ,60, 80, 90];
let passsMark = 45;
let failCount = 0;

for(let i = 0; i < marksess.length; i++){
  if(marksess[i]<=passsMark){
     failCount = failCount +1;
     
  }
}
console.log(failCount);

//60. Calculate total salary for 12 months

let monthlySalary = 20000;
let totalSalary = 0;

for (let month = 1; month <= 12; month++) {
  totalSalary = totalSalary + monthlySalary;
}

console.log(totalSalary);

// Common Method this Question

let monthlySalaryy = 15000;
let months = 12;

let totalSalaryy = monthlySalary * months;
console.log(totalSalary);


//. Conditions + Loops

//61. Print even numbers using if inside loop

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//62. Print odd numbers using if inside loop

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//63. Print numbers divisible by both 3 and 5

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

//64. Print numbers divisible by 3 or 5

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i);
  }
}

//65. Print prime numbers (1–50)

for (let num = 2; num <= 50; num++) {

  let isPrime = true; // prime aanu ennu assume cheyyunnu

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false; // divisible ayi → prime alla
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}

//66. Check if a number is prime

let numi = 7;
let isPrime = true;

if (numi <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < numi; i++) {
    if (numi % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Prime number");
} else {
  console.log("Not a prime number");
}

// 67. Count prime numbers (1–100)

let counto = 0;

for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    counto++;
  }
}

console.log(counto);

//68. Print non-prime numbers

for (let num = 1; num <= 50; num++) {

  if (num <= 1) {
    console.log(num);
    continue;
  }

  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (!isPrime) {
    console.log(num);
  }
}

//69. Print leap years between 2000–2050

for (let year = 2000; year <= 2050; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year);
  }
}

//70. Print numbers greater than average

let numbersa =[10, 20, 30, 40, 50];

let sam = 0;
for (let i = 0; i < numbersa.length; i++){
  sam = sam + numbersa[i];
}

let averageaa = sam / numbersa.length;

for (let i = 0; i < numbersa.length; i++){
  if(numbersa[i] > averageaa){
    console.log(numbersa[i]);
  }
}

//71. Print grades for marks array

let marksa = [95, 65, 40, 90, 87]

for(let i = 0; i < marksa.length; i++){
  let marksaa = marksa[i];
  let grade;
  
  if (marksaa >= 95){
    grade = "A";
  }else if (marksaa >= 80){
    grade = "B";
  }else if(marksaa >= 70){
    grade = "C";
  }else if (marksaa >=60){
    grade ="D"
  }else if (marksaa >= 30){
    grade = "E"
  }else{
    grade = "fail"
  }
   console.log(marksaa + " → Grade " + grade);
}

//72. Count pass/fail students

let markes = [95, 65, 40, 30, 87, 22];

let passCounte = 0;
let failCounte = 0;

for (let i = 0; i < markes.length; i++){
  if (markes[i] >= 40){
    passCount = passCount +1;
  } else {
    failCount = failCount +1;
  }
}
console.log("Pass students:", passCount);
console.log("Fail students:", failCount);

//73. Find highest mark

let markees = [95, 65, 40, 30, 87, 22];
let highest = markees[0];

for(let i =0; i < markees.length; i++){
  if (markees[i] > highest){
    highest = markees[i]
  }
}
console.log("Highest mark:", highest);

//74. Find lowest mark

let markeeas = [95, 65, 40, 30, 87, 22];
let lowest = markeeas[0];

for(let i =0; i < markeeas.length; i++){
  if (markeeas[i] < lowest){
    lowest = markeeas[i]
  }
}
console.log("Lowestmark:", lowest);

//75. Find second highest mark

let markzs = [95, 65, 40, 90, 87];

let highests = -Infinity;
let secondHighest = -Infinity;

for (let i = 0; i < markzs.length; i++) {
  if (markzs[i] > highests) {
    secondHighest = highests;
    highests = markzs[i];
  } else if (markzs[i] > secondHighest && markzs[i] < highests) {
    secondHighest = markzs[i];
  }
}

console.log("Second Highest Mark:", secondHighest);

// 76. Find maximum number in array

let arr = [12, 45, 7, 89, 23];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("Maximum number:", max);

//77. Find minimum number in array

let arra = [12, 45, 7, 89, 23];

let mini = arra[0];

for (let i = 1; i < arra.length; i++) {
  if (arra[i] < mini) {
    mini = arra[i];
  }
}
console.log("Maximum number:", mini);

//78. Print numbers until condition fails

let si = 1;

while (si <= 10) {
  console.log(si);
  si++;
}
// more

let numa = 1;

while (numa !== 7) {
  console.log(numa);
  numa++;
}

//79. Stop loop when number = 7

let ai = 1;

while (ai !== 7) {
  console.log(ai);
  ai++;
}

//80. Skip number 5 using continue

for (let i = 1; i <= 10; i++){
  if(i === 5){
    continue;
  }
  console.log(i);
}

//81. Break loop at number 10

for (let i = 1; i <= 20; i++){
  if(i === 10){
    break;
  }
  console.log(i);
}


//82. Count positives in array

let numbersw = [10, -5, 0, 7, -2, 3];

let countw = 0;

for (let i = 0; i < numbersw.length; i++) {
  if (numbersw[i] > 0) {
    countw++;
  }
}

console.log("Positive numbers count:", countw);

//83. Count negatives in array


let numbersww = [10, -5, 0, 7, -2, 3];

let countww = 0;

for (let i = 0; i < numbersww.length; i++) {
  if (numbersww[i] < 0) {
    countww++;
  }
}

console.log("Negatives numbers count:", countww);

//84. Count zeros in array

let numberswww = [10, -5, 0, 7, -2, 3, 0];

let countwww = 0;

for (let i = 0; i < numberswww.length; i++) {
  if (numberswww[i] === 0) {
    countwww++;
  }
}

console.log("Zero numbers count:", countwww);

//85. Find sum of positives only

let numbersx = [10, -5, 0, 7, -2, 3];

let sumx = 0;

for (let i = 0; i < numbersx.length; i++) {
  if (numbersx[i] > 0) {
    sumx = sumx + numbersx[i];
  }
}

console.log("Sum of positive numbers:", sumx);

//86. Find sum of negatives only

let numbersxg = [10, -5, 0, 7, -2, 3];

let sumxg = 0;

for (let i = 0; i < numbersxg.length; i++) {
  if (numbersxg[i] < 0) {
    sumxg = sumxg + numbersxg[i];
  }
}

console.log("Sum of negative numbers:", sumxg);

//87. Print age category for list of ages

let ages = [5, 16, 25, 45, 62];

for (let i = 0; i < ages.length; i++) {
  let age = ages[i];

  let category;

  if (age <= 12) {
    category = "Child";
  } else if (age <= 19) {
    category = "Teen";
  } else if (age <= 59) {
    category = "Adult";
  } else {
    category = "Senior";
  }

  console.log(age + " → " + category);
}

//88. Check eligibility for each user

let users = [
  { name: "Aju", age: 17 },
  { name: "Ravi", age: 22 },
  { name: "Meera", age: 18 },
  { name: "Anu", age: 15 }
];

for (let i = 0; i < users.length; i++) {
  let user = users[i];

  if (user.age >= 18) {
    console.log(user.name + " → Eligible");
  } else {
    console.log(user.name + " → Not Eligible");
  }
}

//89. Print discount applied or not

let price = 1200;

if (price >= 1000) {
  console.log("Discount Applied");
} else {
  console.log("No Discount");
}

//90. Print result pass/fail for each student

let students = [
  { name: "Aju", marks: 55 },
  { name: "Meera", marks: 38 },
  { name: "Ravi", marks: 72 },
  { name: "Anu", marks: 40 }
];

for (let i = 0; i < students.length; i++) {
  let student = students[i];

  if (student.marks >= 40) {
    console.log(student.name + " → Pass");
  } else {
    console.log(student.name + " → Fail");
  }
}

//  !!  D. Arrays + Loops

// 91. Print all array elements

let arrr = [10, 20, 30, 40, 50];

for (let i = 0; i < arrr.length; i++) {
  console.log(arrr[i]);
}

//92. Print array in reverse

let arrq = [10, 20, 30, 40, 50];

for (let i = arrq.length - 1; i >= 0; i--) {
  console.log(arrq[i]);
}

//93. Find array length using loop

let asrr = [10, 20, 30, 40, 50];
let counts = 0;

for(let i = 0 ; i < asrr.length; i++){
  counts++;
}
console.log(counts)

//94. Sum all array elements

let asrrs = [10, 20, 30, 40, 50];
let sumd = 0;

for(let i = 0 ; i < asrrs.length; i++){
  sumd = sumd + asrrs[i];
}
console.log(sumd);

//95. Find average of array
let saa = [10, 20, 30, 40, 50, 60];  // array line
let da  = 0;

for(let i = 0; i < saa.length; i++){  // loop line
  da = da + saa[i];    // sum line
}
let ava = da / saa.length;  // avarage calculate line
console.log(ava);

//96. Find largest element

let arre = [10, 25, 8, 40, 15];    // array line
let maxe = arr[0];

for (let i = 1; i < arre.length; i++) {
  if (arre[i] > maxe) {
    maxe = arre[i];
  }
}
console.log(maxe);

//97. Find smallest element

let sar = [10,30, 40, 55, 67, 89, 900, 1];
let min = sar[0];

for (let i = 0; i < sar.length; i++){
  if (sar[i] < min){
    min = sar[i];
  }
}
console.log(min);

//98. Count even elements

let drr = [8, 10, 7, 13, 14, 18, 22];
let zo = 0;

for(let i = 0; i < drr.length; i++){
  if(drr[i] % 2 === 0){
    zo++;
  }
}
console.log(zo);

//99. Count odd elements

let arrv = [10, 25, 8, 40, 15];
let countv = 0;

for (let i = 0; i < arrv.length; i++) {
  if (arrv[i] % 2 !== 0) {
    countv++;
  }
}
console.log(countv);

//100. Find index of value

let arri = [10, 25, 8, 40, 15];
let search = 40;
let index = -1;

for (let i = 0; i < arri.length; i++) {
  if (arri[i] === search) {
    index = i;
    break;
  }
}
console.log(index);

//101. Check value exists in array

let arrs = [10, 25, 8, 40, 15];
let searchs = 40;
let found = false;

for (let i = 0; i < arrs.length; i++) {
  if (arrs[i] === searchs) {
    found = true;
    break;
  }
}

if (found) {
  console.log("Value exists");
} else {
  console.log("Value not found");
}

//102. Remove duplicate elements

let arrd = [1,2,2,3,3,4,4,5,6,7,8,5,9];
let uniqueArr = [];

for (let i = 0; i < arrd.length; i++) {
  if (!uniqueArr.includes(arrd[i])) {
    uniqueArr.push(arrd[i]);
  }
}
console.log(uniqueArr);

//103. Count duplicates

let arrw = [1,2,3,1,3];
let uniqueArrs = [];
let duplicatCount = 0;

for (let i = 0; i < arrw.length; i++){
  if (uniqueArrs.includes(arrw[i])){
     duplicatCount++;
  } else {
    uniqueArrs.push(arrw[i]);
  }
}
console.log(duplicatCount);

//104. Merge two arrays using loop

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArr = [];

// arr1 elements add cheyyunnu
for (let i = 0; i < arr1.length; i++) {
  mergedArr.push(arr1[i]);
}

// arr2 elements add cheyyunnu
for (let i = 0; i < arr2.length; i++) {
  mergedArr.push(arr2[i]);
}
console.log(mergedArr);

//105. Copy array using loop

let cars = ["Bmw", "Benz", "Audi"];
let german = [];

for(let i = 0;  i < cars.length; i++){
  german.push(cars[i]);
}
console.log(german);

//106. Reverse array manually

let arry = [1, 2, 3, 4];
let reversedArr = [];

for (let i = arry.length - 1; i >= 0; i--) {
  reversedArr.push(arry[i]);
}

console.log(reversedArr);

//107. Sort array ascending (logic)

let arrn = [5, 2, 8, 1];
let temp;

for (let i = 0; i < arrn.length; i++) {
  for (let j = i + 1; j < arrn.length; j++) {
    if (arrn[i] > arrn[j]) {
      temp = arrn[i];
      arrn[i] = arrn[j];
      arrn[j] = temp;
    }
  }
}

console.log(arrn);

//108. Sort array descending (logic)

let arrnx = [5, 2, 8, 1];
let tempx;

for (let i = 0; i < arrnx.length; i++) {
  for (let j = i + 1; j < arrnx.length; j++) {
    if (arrnx[i] < arrnx[j]) {
      tempx = arrnx[i];
      arrnx[i] = arrnx[j];
      arrnx[j] = tempx;
    }
  }
}
console.log(arrnx);

//109. Count elements greater than 10

let arraz = [5, 12, 8, 20, 15, 3];
let countz = 0;

for (let i = 0; i < arraz.length; i++) {
  if (arraz[i] > 10) {
    countz++;
  }
}
console.log(countz);

//110. Multiply each element by 2

let arrm = [1, 2, 3, 4];

for (let i = 0; i < arrm.length; i++) {
  arrm[i] = arrm[i] * 2;
}
console.log(arrm);

//111. Create new array of squares

let arrp = [1, 2, 3, 4];
let squares = []; 

for (let i = 0; i < arrp.length; i++) {
  squares.push(arrp[i] * arrp[i]);
} 
console.log(squares);

//112. Create new array of cubes

let arrc = [1, 2, 3, 4];
let cubes = [];

for (let i = 0; i < arrc.length; i++) {
  cubes.push(arrc[i] * arrc[i] * arrc[i]);
}  
console.log(cubes);

//113. Filter even numbers

let arrf = [1, 2, 3, 4, 5, 6];
let evenNumbers = []; 

for (let i = 0; i < arrf.length; i++) {
  if (arrf[i] % 2 === 0) {
    evenNumbers.push(arrf[i]);
  } 
}
console.log(evenNumbers);

//114. Filter odd numbers

let arrfo = [1, 2, 3, 4, 5, 6];
let oddNumbers = [];  

for (let i = 0; i < arrfo.length; i++) {
  if (arrfo[i] % 2 !== 0) {
    oddNumbers.push(arrfo[i]);
  }   
}
console.log(oddNumbers);

//115. Filter positive numbers

let arrfp = [1, -2, 3, -4, 5, -6];
let positiveNumbers = [];

for (let i = 0; i < arrfp.length; i++) {
  if (arrfp[i] > 0) {
    positiveNumbers.push(arrfp[i]);
  } 
}
console.log(positiveNumbers);

//116. Filter negative numbers                                            !!

let arrfn = [1, -2, 3, -4, 5, -6];
let negativeNumbers = [];

for (let i = 0; i < arrfn.length; i++) {
  if (arrfn[i] < 0) {
    negativeNumbers.push(arrfn[i]);
  } 
}
console.log(negativeNumbers);

//117. Sum of prices in cart                                               !!

let cart = [
  { item: "Book", price: 10 },
  { item: "Pen", price: 5 },
  { item: "Notebook", price: 15 }
];
let totalPrice = 0;
for (let i = 0; i < cart.length; i++) { 
  totalPrice = totalPrice + cart[i].price;
} 
console.log("Total Price:", totalPrice);

//118. Total quantity in cart                                              !!

let quantities = [2, 1, 3, 4];
let totalQty = 0;

for (let i = 0; i < quantities.length; i++) {
  totalQty = totalQty + quantities[i];
}

console.log(totalQty);

//119. Find most expensive item                                           !!

let products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 800 }
];
let mostExpensive = products[0];  

for (let i = 1; i < products.length; i++) {
  if (products[i].price > mostExpensive.price) {
    mostExpensive = products[i];
  }
}
console.log("Most Expensive Item:", mostExpensive.name, "Price:", mostExpensive.price);

//120. Find cheapest item                                                                         !!

let productss = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 800 }
];
let cheapest = productss[0];

for (let i = 1; i < productss.length; i++) {
  if (productss[i].price < cheapest.price) {
    cheapest = productss[i];
  } 
}
console.log("Cheapest Item:", cheapest.name, "Price:", cheapest.price);

//121. Print square pattern

let nx = 5;
 let row = "";

for (let i = 1; i <= nx; i++) {    
  for (let j = 1; j <= nx; j++) {
    row += "* ";
  }   
  console.log(row);
}

  // More method  !!
 
let size = 4;
let pattern = "";

for (let i = 1; i <= size; i++) {
  for (let j = 1; j <= size; j++) {
    pattern = pattern + "* ";
  }
  pattern = pattern + "\n";
}

console.log(pattern);





