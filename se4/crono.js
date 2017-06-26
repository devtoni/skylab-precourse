function initializeTime(id) {
    var endTime = 130;
    document.getElementById("btn").value = "Parar";
    var clock = document.getElementById(id);
    if (clock.textContent === "") {
        timeinterval = setInterval(function() {

            clock.textContent = endTime;
            endTime--;
            if (endTime <= 0) {
                //endGame();
                clearInterval(timeinterval);
            } else {

            }
        }, 1000);
    } else {
        document.getElementById("btn").value = "Iniciar";
        clock.textContent = "";
        resetTime();
       
    }



}


function resetTime() {
    clearInterval(timeinterval);
}
