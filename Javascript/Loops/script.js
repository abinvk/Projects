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