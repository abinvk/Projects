let inventory = [];

function addItem() {
    let name = document.getElementById("name").value;
    let qty = parseInt(document.getElementById("qty").value);
    let price = parseFloat(document.getElementById("price").value);

    if (!name || isNaN(qty) || isNaN(price)){
        alert("Enter Valid Data");
        return;
    }

    let item = {
        id: Date.now(),
        name,
        qty,
        price
    };

    inventory.push(item);
    render();
}

function render() {
    let list = document.getElementById("list");
    list.innerHTML ="";

    let totalValue = 0;

    inventory.forEach(item => {
        let total = item.qty * item.price;
        totalValue += total;

        list.innerHTML += `
            <tr>
                
                <td>${item.name}</td>
                <td>${item.qty}</td>
                <td>${item.price}</td>
                <td>${total}</td>
                <td>
                    <button onclick="increase(${item.id})">+</button>
                    <button onclick="decrease(${item.id})">-</button>
                    <button onclick="removeItem(${item.id})">Delete</button>
                </td>
            </tr>
        `;
    });

    document.getElementById("totalValue").innerText = totalValue;

}

function increase(id) {
    let item = inventory.find(i => i.id === id);
    item.qty++;
    render();
}

function decrease(id) {
    let item = inventory.find(i => i.id === id);
    if (item.qty > 1) {
        item.qty--;
    }
    render();
}

function removeItem(id) {
    inventory = inventory.filter(i => i.id !== id);
    render();
}