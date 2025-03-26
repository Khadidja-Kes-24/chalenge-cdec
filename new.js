function clock() {
    var monthNames = ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان ", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نفمبر", "ديسمبر"];
    var dayNames = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
    
    var today = new Date();
    
    
    document.getElementById('date').innerHTML = 
        dayNames[today.getDay()] + " " + today.getDate() + " " + 
        monthNames[today.getMonth()] + " " + today.getFullYear();

        var hijriDate = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', { 
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
        }).format(today);
    
        document.getElementById('Date').innerHTML = hijriDate;
    
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


