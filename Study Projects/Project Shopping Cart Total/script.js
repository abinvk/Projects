function calculateTotal(){
    let item1 = Number(document.getElementById("item1").value);
    let item2 = Number(document.getElementById("item2").value);
    let item3 = Number(document.getElementById("item3").value);

    if (

        NaN(item1) || NaN(item2) || NaN(item3) || 
        item1 < 0 || item2 < 0 || item3 < 0

    ) {

        document.getElementById("result").innerText =
        "Please enter valid prices";
        return;
    }

    let total = item1 + item2 + item3;

    document.getElementById("result").innerText =
    "Total Amount: " + total;
}