let even = [12,7,9,20,15,8];

let count =0;
for (let  i = 0 ; i < even.length; i++){
    if (even[i] % 2 === 0){
        console.log(even[i] + " is an even number.");
        count++;
    
    }
}
console.log("Total Even Numbers: " + count);
