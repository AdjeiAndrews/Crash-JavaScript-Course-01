document.addEventListener("DOMContentLoaded",()=>{

    const days = [
        {day: 'Sunday', quote: 'It is time to chillax!'},
        {day: 'Monday', quote: 'Work time, busy day'},
        {day: 'Tuesday', quote: 'Busy life goes on!'},
        {day: 'Wednesday', quote: 'Two more days to the weekend.'},
        {day: 'Thursday', quote: 'the weekend is almost here!'},
        {day: 'Friday', quote: 'Weekend is here!'},
        {day: 'Saturday', quote: 'It is Sabbath!!!'}
    ];

    const today = days[new Date().getDay()];
    console.log(today);

    document.getElementById('weekday').textContent = today.day;
    document.getElementById('phrase').textContent = today.quote;

});