var user = (function() {
    "use strict";
    var startDiv = document.getElementById("startGame");
    var userData = [];
    var userName = "";
    var points = 0;


    var start = function() {
        startDiv.addEventListener("click", displayName, false);
    };

    var displayName = function() {
        //   this.value = "FIN";
        startDiv.removeEventListener("click", displayName, false);
        //  startDiv.addEventListener("click",finish,false);
        var nameBox = document.getElementById("box");
        var name = document.getElementById("name");
        interactions.erase(name);
        interactions.display(nameBox);
        interactions.foco(name); // mostramos caja
        name.addEventListener("keydown", function(e) { // cuando presionemos enter en el text input 
            if (e.keyCode === 13) {
                userName = e.target.value;
                interactions.hide(nameBox);
                writeQuestion();
            }
            preventDef(e);
        });
    }
    var addPoints = function() {
        points++;
    }

    var resetPoints = function() {
        points = 0;
    }
    var addResults = function() {
        userData.push({
            user: userName,
            points: points
        });
    }

    /* var finish = function() {
         fin();
     }*/
    start();

    return {
        resetPoints: resetPoints,
        addPoints: addPoints,
        results: addResults,
        userData: userData,
        start: displayName
    };
})();
