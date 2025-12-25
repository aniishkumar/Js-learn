const marvel =["thor","ironman",'spiderman']
const dc =["joker","batman"]

//marvel.push(dc)
const all_new_heros = [...dc,...marvel]
// console.log(...dc)
// console.log(all_new_heros)
const hehe = [1,2,3,3,[2,3,3],[2,[3,3]]]
const newHehe = hehe.flat(Infinity)
console.log(newHehe)

console.log(Array.isArray("Anish"))
console.log(Array.from("Anish"))
console.log(Array.from({name:"anish"}))

let score1= 2343 
let score3= 23
let score2 = 43

console.log(Array.of(score1,score2,score3))
