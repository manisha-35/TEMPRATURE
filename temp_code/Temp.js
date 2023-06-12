let celci = document.getElementById("cel")
let fahren = document.getElementById("far")
let kelvin = document.getElementById("kel")

celci.addEventListener('input',function(){
    // console.log("celci changed")
    let c1 = this.value;
    let f1 = (c1 * 9/5) + 32;
    if(  !(Number.isInteger(f1)) ){
        f1 = f1.toFixed(4) //here we are displaying 4 digit after decimal point
    }
    fahren.value = f1;
    let k1 = (f1 - 32) * 5/9 + 273.15
    if(  !(Number.isInteger(k1)) ){
        k1 = k1.toFixed(4) //here we are displaying 4 digit after decimal point
    }
    kelvin.value = k1;

});
fahren.addEventListener('input',function(){
    // console.log("far changed")
    let f2 = this.value;
    let c2 = (f2 - 32) * 5/9;
    if(  !(Number.isInteger(c2)) ){
        c2 = c2.toFixed(4) //here we are displaying 4 digit after decimal point
    }
    celci.value = c2;
    let k2 = (f2 - 32) * 5/9 + 273.15
    if(  !(Number.isInteger(k2)) ){
        k2 = k2.toFixed(4) //here we are displaying 4 digit after decimal point
    }
    kelvin.value = k2;
});
kelvin.addEventListener('input',function(){
    let k3 = this.value;
    let c3 = k3 - 273.15; 
    if(  !(Number.isInteger(k3)) ){
        c3 = c3.toFixed(4) //here we are displaying 4 digit after decimal point
    }
    celci.value =c3;
    let f3 = (k3 - 273.15) * 9/5 + 32
    if(  !(Number.isInteger(f3)) ){
        f3 = f3.toFixed(4) //here we are displaying 4 digit after decimal point
    }

    fahren.value = f3;
});