const clock = document.querySelector(".clockbox");

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
} , 1000)

