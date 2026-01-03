let count = 0;

const btnJs = 
document.getElementById('btnJs');

const countDsplay = 
document.getElementById('count');

btnJs.addEventListener("click",() =>{
    count++;
    countDsplay.textContent = count;

});