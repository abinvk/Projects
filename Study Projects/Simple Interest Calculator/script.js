function calculateSI() {
  let P = Number(document.getElementById("principal").value);
  let R = Number(document.getElementById("rate").value);
  let T = Number(document.getElementById("time").value);
  let result = document.getElementById("result");

  // validation
  if (isNaN(P) || isNaN(R) || isNaN(T) || P < 0 || R < 0 || T < 0) {
    result.innerText = "Please enter valid values";
    return;
  }

  let simpleInterest = (P * R * T) / 100;

  result.innerText = "Simple Interest = ₹ " + simpleInterest;
}
