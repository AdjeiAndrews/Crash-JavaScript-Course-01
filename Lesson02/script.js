function calculateAge(){
    const birthdate = new Date(document.getElementById("birthdate").value);

    const today = new Date();

    if(isNaN(birthdate.getTime())){
        document.getElementById("result").innerHTML = 'Please enter a valid date.';
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    let monthDiff = today.getMonth() - birthdate.getMonth();
    let dayDiff = today.getDate() - birthdate.getDate();


    // Adjust age if birthday hasn't occured yet

    if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)){
        age--;
        monthDiff +=12;
    }

    //Adjust month and days

    if(dayDiff < 0){
        monthDiff--;
        dayDiff += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    //Print data on the result element

    let resultHTML = `
    <div class="result-item">Age:<span>${age} years</span></div>
    <div class="result-item">Months:<span>${monthDiff} months</span></div>
    <div class="result-item">Days:<span>${dayDiff} days</span></div>`;

    document.getElementById('result').innerHTML = resultHTML;
}