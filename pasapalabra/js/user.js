var user = (function() {
    "use strict";
    var startDiv = document.getElementById("startGame");
    var userData = [];
    var userName = "";
    var points = 0;


    var start = function() {
        startDiv.addEventListener("click", displayName, false);
    };

    var displayName = function(e) {
        console.log(e);
        startDiv.removeEventListener("click", displayName, false);
        startDiv.addEventListener("click",core.finish,false);
        this.value = "FIN";
        var nameBox = document.getElementById("box");
        var name = document.getElementById("name");
        interactions.erase(name);
        interactions.display(nameBox);
        interactions.foco(name); // mostramos caja
        name.addEventListener("keydown", function(e) { // cuando presionemos enter en el text input 
            if (e.keyCode === 13) {
                userName = e.target.value;
                interactions.hide(nameBox);
                core.write();
            }
            core.prevent(e);
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

    var showUser = function() {
        var arr = [userName,points];
        return arr;
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
        start: displayName,
        show: showUser
    };
})();
