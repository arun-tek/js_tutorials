const promise = new Promise(function(resolve, reject){
	setTimeout(() => {
		if(true){
			resolve({id: 1, name: "hvbu"});
		} else {
			reject("Error Galat H")
		}
	}, 2000);
})

promise.then((data) => {
	return data.name
}).then((name)=>{
	console.log(name);
} ).catch((error) => {
	console.log(error);
})