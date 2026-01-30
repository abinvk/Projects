function calculate() {
  const rate   = Number(document.getElementById("rate").value);
  const hours  = Number(document.getElementById("hours").value);
  const salary = Number(document.getElementById("salary").value || 0);

  if (isNaN(rate) || isNaN(hours) || rate < 0 || hours < 0) {
    document.getElementById("result").innerText =
      "Please enter valid numbers";
    return;
  }

  const overtimePay = rate * hours;
  const totalSalary = salary + overtimePay;

  document.getElementById("result").innerText =
    `Overtime Pay: ₹${overtimePay} | Total Salary: ₹${totalSalary}`;
}
