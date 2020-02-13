function moveThoseArms(){
    var now = new Date();  
    var hr = now.getHours(); 
    var min = now.getMinutes(); 
    var sec = now.getSeconds();
    var tick = 360/60;


        var HOURHAND = document.querySelector('#hour');
        var MINUTEHAND = document.querySelector('#minute');
        var SECONDHAND = document.querySelector('#second');


    var deltaSec = sec*tick;
    var deltaMin = min*tick + sec/60*tick;
    var deltaHr = hr*tick*5 + min/60*5*tick; 

    setInterval(function(){
        deltaSec += tick;
        deltaMin += tick/60;
        deltaHr += tick/60/60;
    
        HOURHAND.style.transform = 'rotate(' + deltaHr + 'deg)';
        MINUTEHAND.style.transform = 'rotate(' + deltaMin + 'deg)';
        SECONDHAND.style.transform = 'rotate(' + deltaSec + 'deg)';
    }, 1000);
}

function ready(fn) {
    if (document.readyState != 'loading')
    fn();
    else if (document.addEventListener)
        document.addEventListener('DOMContentLoaded', fn);
    else
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState != 'loading')
                fn();
        });
}
moveThoseArms();

