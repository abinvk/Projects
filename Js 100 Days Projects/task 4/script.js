const pass = {
    abin:45,
    bbin:78,
    cbin:12,
    dbin:34,
    ebin:90
}

for (let key in pass) {
    if(pass[key] >= 30) {

        console.log("pass:",pass[key]);
}


}
