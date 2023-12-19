// async function abc() {
//     return "Hi";
// }

// abc().then(
//     function(value) {console.log(value);}
// )




// async function abc(){
//     let pro = new Promise(function(resolve, reject) {
//         setTimeout(function() {resolve("Hi I am abc")}, 2000)
//     });
//     console.log(await pro);
//     console.log("ki");
// }

// abc()
// console.log("kio");


class Vehicle {
    constructor(engine, no_of_wheels){
        this.engine = engine
        this.no_of_wheels = no_of_wheels
    }

    get_details(engine){
        this.engine = engine
        console.log(this.engine);
        console.log(this.no_of_wheels);
    }
}
class Car extends Vehicle{
    constructor(){
        super("v8",4)
        this.engine = "io"
        this.no_of_wheels = 8
    }
}

const v = new Car();
v.get_details("v11");


















