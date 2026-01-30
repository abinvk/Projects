function total(){
    let salary = Number(document.getElementById("salary").value)
    let overtime = Number(document.getElementById("overtime").value)

    if (isNaN(salary) || isNaN(overtime)){
        document.getElementById("Result").innerText = 
        "Please enter valid numbers";
        return;
    }

    let totals = salary + overtime;

    document.getElementById("Result").innerText =
    "Total Salary: ₹" + totals;
}