function calculateDiscount() {
    let price = Number(document.getElementById("price").value);
    let discount = Number(document.getElementById("discount").value);
    
    if (isNaN(price) || isNaN(discount) || price < 0 || discount < 0){
        document.getElementById("result").innerText =
        "Please enter valid values";
        return;
    }

    let discountAmount = (price * discount) / 100;
    let finalPrice = price - discountAmount;

    document.getElementById("result").innerText =
    "Discount: " + discountAmount + " | Final Price: " + finalPrice;
}