function calculateTotal() {

  let item1 = Number(document.getElementById("item1").value);
  let item2 = Number(document.getElementById("item2").value);
  let item3 = Number(document.getElementById("item3").value);

  if (isNaN(item1) || isNaN(item2) || isNaN(item3)) {
    document.getElementById("result").innerText =
      "Please enter valid prices";
    return;
  }

  let total = item1 + item2 + item3;

  document.getElementById("result").innerText =
    "Total Amount: ₹" + total;
}
