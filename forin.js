vehicle = {
    id: 1,
    name: "iuhoi"
}
console.log("object keys");
// for keys
for(let v in vehicle) {
    console.log(v);
}

console.log("object values");
// for values
for(let v in vehicle){
    console.log(vehicle[v]);
}

console.log("array keys")
arr = [78, 90]

for(let v in arr){
    console.log(v);
}

console.log("array values")
arr = [78, 90]

for(let v in arr){
    console.log(arr[v]);
}