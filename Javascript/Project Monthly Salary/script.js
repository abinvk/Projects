function calculateMonthlySalary(){
    let monthly = (document.getElementById("monthlysalary").value);
    let salary = monthly * 31;

    document.getElementById("result").innerText =
    "Monthly Salary: ₹" + salary;
}