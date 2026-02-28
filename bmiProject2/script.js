console.log("JS Loaded")
let form = document.getElementById("bmiForm");
let result =document.querySelector(".result");

function bmichecker(index){
    if(index<18.6){
        return "you are underWeight";
    }
    if(index>=18.6 && index <24.9){
        return "you are in the normal range";
    }
    else{
        return "you are overWeight";
    }
}



//add remove the feature of default submit button so that it dosent refresh

form.addEventListener("submit",function(e){
    e.preventDefault();

    console.log("form submitted");
    let height=Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);

    console.log(height);
    console.log(weight);

    let bmi = (weight) *(10000)/((height * height));
    console.log(bmi)
    let remark = bmichecker(bmi);
    result.className = "result";

if(bmi < 18.6){
    result.classList.add("under");
}
else if(bmi >= 18.6 && bmi < 24.9){
    result.classList.add("normal");
}
else{
    result.classList.add("over");
}

    result.textContent=`your bmi is ${bmi.toFixed(2)} \n ${remark}`;


})
