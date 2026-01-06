function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value;

    interstRateValue = document.getElementById("interst-rate").value;

    monthsToPayValue = document.getElementById("months-to-pay").value;

    interest = (loanAmountValue * (interstRateValue * 0.01)) / monthsToPayValue;
    
    monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);

    document.getElementById(
        "payment"
    ).innerHTML = `Monthly Payment: ${monthlyPayment}`;
}