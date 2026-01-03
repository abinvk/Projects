const btn =
document.getElementById('btnJs');

btn.addEventListener('click',function(){

    const name =
    document.getElementById('nameJs').value

    const password =
    document.getElementById('passJs').value;

    if (name === "Abin" && password ===
     "A12B8005"){
        alert("Correct");
     }else{
        alert("Error");
     }
});