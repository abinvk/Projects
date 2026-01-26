function calculateYearlySalary(){
    let monthly = Number(document.getElementById("monthlySalary").value);
    let yearly = monthly*12;
    document.getElementById("result").innerText =
    "Yearly Salary: ₹" + yearly;
}