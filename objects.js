const affrica = {
    id: 8,
    name: "Joker",
    id_name: function() {
        return this.id + " " + this.name
    }
}

console.log(affrica.id);
console.log(affrica["name"]);
console.log(affrica.id_name());
// get all keys in object
console.log(Object.keys(affrica));
// get all values in object
console.log(Object.values(affrica));
//check key present in object
console.log(affrica.hasOwnProperty("name"));
console.log(affrica.hasOwnProperty("name1"));
//check value present in object
console.log(Object.values(affrica).includes(8));
console.log(Object.values(affrica).includes(80));

// just like ruby has & js have ?
console.log(affrica.names?.id_name);