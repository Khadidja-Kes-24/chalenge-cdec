function clock() {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    var today = new Date();
    
    document.getElementById('date').innerHTML = 
        dayNames[today.getDay()] + " " + today.getDate() + " " + 
        monthNames[today.getMonth()] + " " + today.getFullYear();
    
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
    var period = h < 12 ? 'AM' : 'PM'; 
    h = h % 12 || 12;  
    
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;

    var periodElement = document.getElementById('period');
    if (periodElement) {
        periodElement.innerHTML = period;
    }
}

setInterval(clock, 400);

