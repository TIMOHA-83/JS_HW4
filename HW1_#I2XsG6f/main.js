//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangle(a, b){
    return a*b;
}
let a=+prompt('enter a')
let b=+prompt('enter b')

let s = rectangle(a, b);
console.log(s);