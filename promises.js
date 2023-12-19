let promiseOne = new Promise((resolve, reject) => {
	setTimeout(function(){
		console.log("Async task is complete");
	}, 1000)
})

promiseOne.then(() => {
	console.log('promise consumed')
})

const promiseTwo = new Promise((resolve, reject) => {
	setTimeout(function(){
		console.log("Async 2 task")
		resolve()
	}, 1000)
})

promiseTwo.then(() => {
	console.log('promise 2 consumed')
})

const promiseThree = new Promise((resolve, reject) => {
	setTimeout(() => {resolve({id: 1, name: "arun"})}, 1000)
})

promiseThree.then((user)=>{
	console.log(user)
})

const promiseFourth = new Promise((resolve, reject) => {
	setTimeout(()=>{
		error = false
		if(error){
			reject("Error: You did wrong")
		} else {
			resolve({id: 1, name: "arun"})
		}
	},1000)
})

promiseFourth.then((user) => {
	return user.name
}).then((name)=>{
	console.log(name)
}).catch((error) => {
	console.log(error)
}).finally(() => {
	console.log('chal gaya')
})

const promiseFive = new Promise((resolve, reject) => {
	setTimeout(()=>{
		error = true
		if(error){
			reject("Error: You did wrong")
		} else {
			resolve('kukur')
		}
	},1000)
})

async function consumeFivePromise(){
	try{
		const response = await promiseFive
		console.log(response)
	} catch(error) {
		console.log(error)
	}
}

consumeFivePromise()

async function getAllUsers(){
	try{
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		data = await response.json();
		console.log(data);
	} catch(error){
		console.log(error);
	}
}

setTimeout(() => {getAllUsers()}, 1000)

// const sixPromise = fetch('https://jsonplaceholder.typicode.com/users')

setTimeout(() => {fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
	return response.json()
}).then((data) =>{
	console.log(data[0])
}).catch((error) => {
	console.log(error)
}).finally(() => {
	console.log("har case m run hoga")
})}, 1200)

