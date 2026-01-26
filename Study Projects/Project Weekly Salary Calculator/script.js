function calculateWeeklySalary() {
  let monthly = Number(document.getElementById("monthlySalary").value);

  let weekly = monthly / 4;

  document.getElementById("result").innerText =
    "Weekly Salary: ₹" + weekly;
}
