function calculateBill(){
    let units = Number(document.getElementById("units").value);
    let rate = Number(document.getElementById("rate").value);

    if (isNaN(units) || isNaN(rate) || units < 0 || rate < 0 ){
        document.getElementById("result").innerText =
        "plese enter valid unit";
    }

    let totalBill = units * rate;
    document.getElementById("result").innerText =
    "Total Bill Amount: " + totalBill; 

}