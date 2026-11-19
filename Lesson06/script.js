document.addEventListener("DOMContentLoaded", function(){

    const investmentInput = document.getElementById("investment");
    const investmentRateInput = document.getElementById("interest-rate");
    const timePeriodInput = document.getElementById("time-period");

    investmentInput.addEventListener("input", function(){
        updateInvestmentValue(this.value);
    })
    interestRateInput.addEventListener("input", function(){
        updateInterestRateValue(this.value);
    })
    timePeriodInput.addEventListener("input", function(){
        updateTimePeroidValue(this.value);
    })
})