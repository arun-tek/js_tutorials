// let a = 90;
// if(a==5){
//     console.log("sahi h");
// } else if(a<10){
//     console.log("second");
// } else {
//     console.log("third");
// }
// day = 2
// switch (day) {
//     case 1: 
//         console.log("Monday");
//         break;
//     case 2: 
//         console.log("Tuesday");
//         break;
//     default: 
//         console.log("XYZ");
//         break;
// }
// let a=90;
// a == 90 ? console.log("sahi h") : console.log("galat h");
// let b = 2;
// for(let i =1; i<=10; i++){
//     console.log(`${b}*${i} = ${b*i}`);
// }
// i=1
// while(i<11){
//     console.log(`${b}*${i} = ${b*i}`);
//     i++;
// }

// let obj = {
//     a: 9,
//     b: 10,
//     c: 900,
//     z: 97
// }
// for (i in obj){
//     console.log(`key of obj is ${i} and value of obj is ${obj[i]}`);
// }
// for in loop
// arr = [9,3,2,1]
// for (i in arr){
//     console.log(`index of array is ${i} and value of array in this index is ${arr[i]}`);
// }

// // for of loop
// let arr = [4,3,1,2,7]
// for (x of arr){
//     console.log(x);
// }
sum = 0
let arr = [5,6,2,13,4];
y = arr.map(fun);

function fun(x, i, arr){
    return x%2 == 0;
}
console.log(y);









