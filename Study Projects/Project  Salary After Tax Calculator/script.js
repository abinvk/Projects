function calculateTax() {
    let salary = Number(document.getElementById("salary").value);
    let tax = Number(document.getElementById("tax").value);

    if (isNaN(salary) || isNaN(tax) || salary < 0 || tax < 0){
        document.getElementById("result").innerText =
        "Please enter valid numbers"
        return;
    }

    let taxAmount = (salary * tax) / 100;
    let finalSalary = salary - taxAmount;

    document.getElementById("result").innerText=
    "Tax $" + taxAmount + " | Salary After Tax: $" + finalSalary;
}