function add(a,b=9){
    return a+b
}

console.log(add(5,null));

function xyz(a,b, ...c){
    console.log('a ki value ' + a);
    console.log('b ki value ' + b);
    console.log('c ki value ' + c);
}

xyz(4,5,7.8,8,9,'a');

n = (a,b) => {return a+b}
console.log(n(4,5))

n = function() {
    console.log("hi")
}
n()