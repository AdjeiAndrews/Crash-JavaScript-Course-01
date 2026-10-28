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
}