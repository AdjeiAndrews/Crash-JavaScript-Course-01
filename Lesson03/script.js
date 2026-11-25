function calculateLove(){

    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();


    if(!name1 || !name2){
        alert("Please enter both names");
        return;
    }

    const lovePercentage = Math.floor(Math.random() * 101);
    const result = document.getElementById("result");
    result.textContent = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}%`;


    let message;
    if(lovePercentage <= 50){
        message = "Not a great match. Keep looking!";
    }
    else if(lovePercentage < 70){
        message = "There's potential. Give it a shot!";
    }
    else {
        message = "Great match. Love is in the air!";
    }

    result.append(document.createElement("br"), message);
}
