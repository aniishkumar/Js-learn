// immediately invoked function expressions 

(function chai(){
    console.log(`DB`)
})();

(function anotherChai(){
    console.log("hai")
})();

(()=>{
    console.log("anish kumar")
})();

((name)=>{
    console.log(`my name is ${name}`)
})("anish")