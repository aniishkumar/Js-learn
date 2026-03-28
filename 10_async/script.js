//generate a random color

const randomColor=function(){
    
    
    const Hex= "0123456789ABCDEF"
    let color='#'
    for(let i = 0 ; i<6;i++){
        const randomNumber=Math.floor(Math.random()*16);
        console.log(randomNumber);
        color+=Hex[randomNumber];
    }
    console.log(color);
    return color;
}
let hehe;

displayRandomColors=function(){
    if(hehe!=null){
        document.body.style.backgroundColor= randomColor();
    }
}

displayRandomColorsAuto=function(){
     hehe = setInterval(displayRandomColors,1000);
}
document.querySelector("#start").addEventListener("click",displayRandomColorsAuto);

document.querySelector("#stop").addEventListener("click",function(){
    console.log("stopped running");
    clearInterval(hehe);
    hehe=null;
})


