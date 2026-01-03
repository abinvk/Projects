const addJs =
document.getElementById('addJs');
const removeJs =
document.getElementById('removeJs');
const msg =
document.getElementById('mesg');

addJs.addEventListener('click', () => {
    msg.textContent = 'added';
});
removeJs.addEventListener('click',() => {
    msg.textContent = 'you left';
});

