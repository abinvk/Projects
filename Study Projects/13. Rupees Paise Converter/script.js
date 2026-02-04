function convertMoney() {

  let rupees = Number(document.getElementById("rupees").value);

  if (isNaN(rupees)) {
    document.getElementById("result").innerText =
      "Please enter a valid number";
    return;
  }

  let paise = rupees * 100;

  document.getElementById("result").innerText =
    "Result: " + paise + " paise";
}
