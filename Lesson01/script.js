document.addEventListener("DOMContentLoaded",()=>{

    const color1 = document.querySelector(".c1");
    const color2 = document.querySelector(".c2");

    const gradientCont = document.querySelector("#gradient-cont");
    const btn = document.querySelector(".randomColorBtn");
    const copyBtn = document.querySelector(".copyBtn");
    const cssCode = document.getElementById(".cssCode");


    function makeColor(){
        let randomcolor = Math.floor(Math.random() * 16777215).toString(16);
        return randomcolor.padStart(6, '0');
    }

    function setGradient(){
        gradientCont.style.background = `linear-gradient(${color1.value}, ${color2.value})`;

    }

    function generateGradient(){
        color1.value = "#" + makeColor();
        color2.value = "#" + makeColor();
        setGradient();

    }

    function copyToClipboard(){

    }

    generateGradient();

    color1.addEventListener("input", setGradient);
    color2.addEventListener("input", setGradient);

    btn.addEventListener("click, generateGradient");
    copyBtn.addEventListener("click", copyToClipboard);

})

