function calculateLove(){

    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;


    if(!name1 || !name2){
        alert("Please enter both names");
        return;
    }

    const lovePercentage = Math.floor(Math.random() * 101);
    const result = document.getElementById("result");
    result.innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}%`;


    if(lovePercentage <= 50){
        result.innerHTML += "<br> Not a great Math. Keep Looking!";
    }
    else if(lovePercentage < 70){
        result.innerHTML += "<br> There's potential. Give a shot!";
    }
    else {
        result.innerHTML += "<br> Great Match. Love is in the Air!";
    }
}