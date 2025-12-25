const myArr=[1,2,3,4]
const newArray = new Array(1,23,23,4)
console.log(myArr)
console.log(newArray)
console.table([typeof myArr, typeof newArray])

myArr.push(213)
myArr.unshift(343)
myArr.shift()

console.log(myArr)