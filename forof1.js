arr = [8,7,90,87]

for(a of arr){
    console.log(a);
}

map = new Map()
map.set('id', 1)
map.set('name', "Arun")

for(const [key, value] of map){
    console.log(`${key}'s value is ${value}`);
}

// iss for of ko obj m nhi use kar sakte h