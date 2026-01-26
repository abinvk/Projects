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

