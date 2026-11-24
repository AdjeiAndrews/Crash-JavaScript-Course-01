let outputCode = getElementById("css-code");

let sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(slider){
    sliders.addEventListener("input", createBlob)
});

let inputs = document.querySelectorAll("input[type='number']");
inputs.forEach(function(input){
    input.addEventListener("change", createBlob)
});

function createBlob(){

    let radiusOne = sliders[0].value;
    let radiusTwo = sliders[1].value;
    let radiusThree = sliders[2].value;
    let radiusFour = sliders[3].value;


    let blolbHeight = inputs[0].value;
    let blobWidth = inputs[1].value;


    let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100-radiusThree}% ${radiusThree}% /${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${radiusFour}`;
}



document.getElementById("copy").addEventListener("click", function(){

});