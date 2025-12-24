let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myCreatedDate = new Date(2023,0,3)
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
console.log(myCreatedDate.getTime())

console.log(myDate.getDay())
console.log(myDate.getMonth())

myDate.toLocaleString('default',{
    weekday: "long"
})
console.log(myDate.getDay())