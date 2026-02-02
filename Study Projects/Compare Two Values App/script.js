function compareValues() {
  let a = document.getElementById("value1").value;
  let b = document.getElementById("value2").value;
  let result = document.getElementById("result");

  // empty check
  if (a === "" || b === "") {
    result.innerText = "Please enter both values";
    return;
  }

  // convert to number if possible
  let numA = Number(a);
  let numB = Number(b);

  let output = "";

  // greater than / less than
  if (!isNaN(numA) && !isNaN(numB)) {
    if (numA > numB) {
      output += "First value is greater than second\n";
    } else if (numA < numB) {
      output += "First value is less than second\n";
    } else {
      output += "Both values are equal (by value)\n";
    }
  }

  // == comparison
  if (a == b) {
    output += "a == b → true (value comparison)\n";
  } else {
    output += "a == b → false\n";
  }

  // === comparison
  if (a === b) {
    output += "a === b → true (value + type same)";
  } else {
    output += "a === b → false (type or value different)";
  }

  result.innerText = output;
}
