let  number = [1,2,3,4,5,6,7,8,9,10];



let sum = 0;    

for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 1) {
        sum += number[i];
    }
}
console.log("Odd Numbers: ",  sum);