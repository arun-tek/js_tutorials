// callbacks are those functions who are pass as an argument in other funtion.

function sum(a,b){
    return a+b
}

function printRes(a,b,callback){
    console.log(callback(a,b))
}

printRes(5,6,sum);