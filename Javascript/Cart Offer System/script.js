let cart = [ 
    { name: "Shirt", price: 400 }, 
    { name: "Shoes", price: 600 }, 
    { name: "Watch", price: 500 }, 
    { name: "Bag", price: 500 } 
];
function renderCart() {
    let cartDiv = document.getElementById("reslt");
    cartDiv.innerHTML = "";

    cart.forEach(item => {
        cartDiv.innerHTML += `
            <div class="item">
                <span>${item.name}</span>
                <span>₹${item.price}</span>
            </div>
        `;
    });
}
function findPairs(cart, target) {
    let result = [];

    for (let i = 0; i < cart.length; i++) {
        for (let j = i + 1; j < cart.length; j++) {
            if (cart[i].price + cart[j].price === target) {
                result.push(cart[i].name + " + " + cart[j].name);
            }
        }
    }
    return result;
}
function checkOffers() {
    let pairs = findPairs(cart, 1000);
    let resultDiv = document.getElementById("result");

    if (pairs.length === 0) {
        resultDiv.innerHTML = "No offers available ❌";
    } else {
        resultDiv.innerHTML = "<b>Offers Applied:</b><br>" + pairs.join("<br>");
    }
}