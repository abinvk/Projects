function checkEvenOdd(){
    let num = document.getElementById("numberInput").value;

    if (num ===""){
        document.getElementById("result").innerText = "Please Enter a Number";
        return;
    }

    num = Number(num);

    if(num % 2 === 0){
        document.getElementById("result").innerText = num + " - Is Even";  // 2, 4, 6, 8, 10...etc....
    } else {
        document.getElementById("result").innerText = num + " - Is Odd";  // 1, 3, 5, 7, 9, 11...etc...
    }
} 