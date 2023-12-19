arr = [7,8,3,2,1]
arr1 = ['7', 'op']

arr2 = [ ...arr, ...arr1 ] // spread operator

console.log(arr2);

// check a value is present in array

console.log(arr2.includes('op'));

console.log(arr2.includes('oppo')); 
// includes is case sensitive