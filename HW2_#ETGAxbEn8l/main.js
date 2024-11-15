//- створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r){
    const p=3.14;
    return p*(r*r);
}

let r=+prompt('enter r');

let s = circle(r);
console.log(s);
