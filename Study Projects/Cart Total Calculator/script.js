function calculateTotal() {
  let price = Number(document.getElementById("price").value);
  let quantity = Number(document.getElementById("quantity").value);
  let result = document.getElementById("result");

  // validation
  if (isNaN(price) || isNaN(quantity) || price < 0 || quantity < 0) {
    result.innerText = "Please enter valid price and quantity";
    return;
  }

  let total = price * quantity;

  result.innerText = "Cart Total = ₹ " + total;
}
