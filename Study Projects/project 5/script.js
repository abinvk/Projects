const button = 
document.getElementById('addBtn');
const message =
document.getElementById('msg')

button.addEventListener('click',() =>{
    message.textContent = 'Item added to cart';
});