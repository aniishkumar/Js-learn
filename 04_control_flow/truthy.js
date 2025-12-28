const userEmail = "anish@ai"

if(userEmail){
    console.log("got user email");
}
else {
    console.log("dont have user email")
}

const emptyObj={}

if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty")
}

// nullish coalescing operator (??): null undefined (checking the safety of null)
let val ;
val1= null??10

console.log(val1)

//ternary operator 

const hehe = true 
hehe =true ?console.log("yay"):console.log("no")