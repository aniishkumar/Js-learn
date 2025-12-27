function sayMyName(){
    console.log("my name is anish")
}

function addTwoNumbers(a,b){
    if(isNaN(a) && isNaN(b)){
        return a +b ;
    }
    else {
        return -1;
    }
}

function userLoginUserName(username =" hehe "){
    if(!undefined){
        return "please enter the username"
    }
    else{
    return `${username} just logged in`
    }
}

let c = userLoginUserName()

function calculateCartPrice(...nums){
    return nums
}

console.log(calculateCartPrice(1,2,3,4))