document.addEventListener("DOMContentLoaded",()=>{

    const color1 = document.querySelector(".c1");
    const color2 = document.querySelector(".c2");

    const gradientCont = document.querySelector("#gradient-cont");
    const btn = document.querySelector(".randomColorBtn");
    const copyBtn = document.querySelector(".copyBtn");
    const cssCode = document.getElementById("cssCode");


    function makeColor(){
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return randomColor.padStart(6,'0');
    }

    function generateGradient(){
        color1.value = "#" + makeColor();
        color2.value = "#" + makeColor();
        setGradient();

    }

     function setGradient(){
        gradientCont.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
        cssCode.textContent = `background: linear-gradient(${color1.value}, ${color2.value});`;

    }

    function copyToClipboard(){
        const cssText = cssCode.textContent;
        navigator.clipboard.writeText(cssText).then(()=>{
            alert("css code copied to clipboard!");
        })
        .catch(err=>{
            console.error("Failed to copy", err);
        })
    }

    generateGradient();

    color1.addEventListener("input", setGradient);
    color2.addEventListener("input", setGradient);

    btn.addEventListener("click", generateGradient);
    copyBtn.addEventListener("click", copyToClipboard);

})

