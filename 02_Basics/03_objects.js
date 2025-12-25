const mySym = Symbol("hey1")
const jsUser = {
    name: "anish",
    age: 18,
    location:"Hyd",
    email: "anish@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    "full name": "anish kumar",
    [mySym]:"hehe"

}
// console.log(jsUser["full name"])
// console.log(jsUser["email"])

jsUser.greeting = function(){
    console.log(`hai ${this.name}`);
}
console.log(jsUser.greeting())

//Object.create // forms singleton 