function calculateAge(){
    const value = document.getElementById("birthdate").value;
    const result = document.getElementById("result");

    if (!value) {
        result.textContent = 'Please enter your birthdate.';
        return;
    }

    // Parse the date as local calendar values so it is not shifted by timezone.
    const [year, month, day] = value.split('-').map(Number);
    const birthdate = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if(isNaN(birthdate.getTime())){
        result.textContent = 'Please enter a valid date.';
        return;
    }

    if (birthdate > today) {
        result.textContent = 'Birthdate cannot be in the future.';
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

    result.innerHTML = resultHTML;
}
