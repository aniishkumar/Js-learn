const user = {
    username : "anish",
    price: 99,

    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website`)
        console.log(`${this.price}, is the price of the product`)
    }
}

function hehe(){
    let username = " hitesh"
    console.log(this.username)
}


const chai =() =>{
    let username = "anish"
    console.log(this)
}

const addtwo = ( one ,  two )=>{
    return one+two
}

console.log(addtwo(1,2))