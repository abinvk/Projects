function calculateTotal() {
  let salary = Number(document.getElementById("salary").value);
  let bonus  = Number(document.getElementById("bonus").value);

  if (isNaN(salary) || isNaN(bonus)) {
    document.getElementById("result").innerText =
      "Please enter valid numbers";
    return;
  }

  let total = salary + bonus;

  document.getElementById("result").innerText =
    "Total Salary: ₹" + total;
}
