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