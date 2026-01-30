function calculateTax(){
    let salary = Number(document.getElementById("salary").value);
    let tax = Number(document.getElementById("tax").value);

    if (isNaN(salary) || isNaN(tax) || salary < 0 || tax < 0){
        document.getElementById("reslut").innerText =
        "Please enter valid numbwers"
        return;
    }

    let taxAmount = (salary * tax) / 100;
    let finalSalary = salary - taxAmount;

    document.getElementById("reslut").innerText=
    "Tax $" + taxAmount + " | Salary After Tax: $" + finalSalary;
}