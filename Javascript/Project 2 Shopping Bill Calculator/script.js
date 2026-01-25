function calculateTotal(){
    let  price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);

    let total = price * quantity;

    document.getElementById("result").innerText =
     "Total Amount: $" + total;
}