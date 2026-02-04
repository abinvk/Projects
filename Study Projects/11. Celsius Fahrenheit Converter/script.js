function convertTemp() {

  let celsius = Number(document.getElementById("celsius").value);

  if (isNaN(celsius)) {
    document.getElementById("result").innerText =
      "Please enter a valid number";
    return;
  }

  let fahrenheit = (celsius * 9 / 5) + 32;

  document.getElementById("result").innerText =
    "Result: " + fahrenheit + " °F";
}
