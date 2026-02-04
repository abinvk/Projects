function convertKm() {

  let km = Number(document.getElementById("km").value);

  if (isNaN(km)) {
    document.getElementById("result").innerText =
      "Please enter a valid number";
    return;
  }

  let meters = km * 1000;

  document.getElementById("result").innerText =
    "Result: " + meters + " meters";
}
