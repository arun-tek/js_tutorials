const arr = [2,3,4,5,6,7]
const g =arr.map(function(item){
    return item%2 == 0
})

console.log(g)

const h =arr.map(abc)

function abc(item, index, arr){
    return item*2;
}

console.log(h)