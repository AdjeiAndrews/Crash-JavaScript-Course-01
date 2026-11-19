document.addEventListener("DOMContentLoaded", function(){

    const investmentInput = document.getElementById("investment");
    const interestRateInput = document.getElementById("interest-rate");
    const timePeriodInput = document.getElementById("time-period");

    investmentInput.addEventListener("input", function(){
        updateInvestmentValue(this.value);
    })
    interestRateInput.addEventListener("input", function(){
        updateInterestRateValue(this.value);
    })
    timePeriodInput.addEventListener("input", function(){
        updateTimePeriodValue(this.value);
    })

    updateInvestmentValue(investmentInput.value);
    updateInterestRateValue(interestRateInput.value);
    updateTimePeriodValue(timePeriodInput.value);

    function updateInvestmentValue(value){
    document.getElementById("investment-value").innerText = new Intl.NumberFormat("en-GH", {
        style: "currency",
        currency: "GHS",
        maximumFractionDigits: 0
    }).format(Number(value));
}

function updateInterestRateValue(value){
    document.getElementById("interest-rate-value").innerText = `${Number(value)}%`;
}

function updateTimePeriodValue(value){
    document.getElementById("time-period-value").innerText = `${Number(value)} years`;
}
});

