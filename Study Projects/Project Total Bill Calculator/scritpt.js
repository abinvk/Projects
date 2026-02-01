function calculateBill(){
    let price = Number(document.getElementById("price").value);
    let quantity  = Number(document.getElementById("quantity").value);

    if (isNaN(price) || isNaN(quantity) || price < 0 || quantity < 0){
        document.getElementsByClassName("result").innerText = 
        "Please enter valid values";
        return;
    }

    let total = price * quantity;

    document.getElementById("result").innerText =
    "Total Amount: $" + total;
}