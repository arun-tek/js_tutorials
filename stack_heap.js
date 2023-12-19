// Stack memory => stack memory me vo data types aate h jo a a copy hume variable me diye jaate h
let a = 90
let b = a

b = 78
console.log(b);
console.log(a);
// yaha par humne a m 90 rahka aur then b me a ki value daal di par b ki value again change karne par a ki value change nhi hui.

// Heap memory => heap memory v memory me vo datatypes aate h jo as refrence jaate h variable m.

let obj = {
    email: "abc@yopmail.com",
    name: "Arun", 
    age: function(){
        console.log(`${this.name}'s age is 24`);
    }
}

obj1 = obj

obj1['email'] = "def@yopmail.com"

console.log(obj1);
console.log(obj);
obj.age();

// iss example m obj1 m humne obj ki value rahi thi but jab humne obj1 ke emeil value ko change kiya to automatically obj m bi change ho gaya kyoki obj object bante time direct objectmemory m initialize hua aur uska reference dono variables obj and obj1 m gaya tha


// example Video - https://www.youtube.com/watch?v=7gwc-1czolw