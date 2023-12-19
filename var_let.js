// let having block scope
let a = 90;

if(true) {
    let a = 45;
    console.log(a);
}
console.log(a);

// var having global scope
var b = 90;

if(true) {
    var b = 45;
    console.log(a);
}
console.log(a);