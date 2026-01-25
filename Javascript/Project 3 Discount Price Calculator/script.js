function calculate(){
    let price = Number(document.getElementById("price").value);
    let discount = Number(document.getElementById("discount").value);

    let discountAmount = price * discount / 100;
    let finalPrice = price - discountAmount;

    document.getElementById("result").innerText =
    "Fainal Amount: $" + finalPrice;
}