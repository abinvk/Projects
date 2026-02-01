function totalAmount(){
    let amount = Number(document.getElementById("amount").value);
    let gst = Number (document.getElementById("gst").value);

    if (isNaN(amount) || isNaN(gst) || amount < 0 || gst < 0){
        document.getElementById("rselut").innerHTML =
        "Please enter valid values";
        return;
    }
    let gstAmount = (amount * gst) / 100;
    let fainalAmount = amount + gstAmount;

      document.getElementById("result").innerText =
    "GST: ₹" + gstAmount + " | Final Amount: ₹" + fainalAmount;
}