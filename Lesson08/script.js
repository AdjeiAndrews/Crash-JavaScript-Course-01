let outputCode = getElementById("css-code");

let sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(slider){
    sliders.addEventListener("input", createBlob)
});

let inputs = document.querySelectorAll("input[type='number']");
inputs.forEach(function(input){
    input.addEventListener("change", createBlob)
});

function createBlob(){}