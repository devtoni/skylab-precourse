var interactions = (function() {

	var green = 0;
	var red = 0;
	var blue = 27;

    "use strict";
    var display = function(element) {
        element.style.display = "flex";
        element.style.visibility = "visible";
        element.style.opacity = "1";
    };

    var hide = function(element) {
        element.style.display = "none";
        element.style.visibility = "hidden";
        element.style.opacity = "0";
    };

    var showTable = function() {
        var table = document.getElementById("table");
        var tableBox = document.getElementById("tableBox");
        var userData = user.userData;
        for (var i = 0; i < userData.length; i++) {
            var row = table.insertRow(i + 1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = (i + 1) + "º";
            cell2.innerHTML = userData[i].user;
            cell3.innerHTML = userData[i].points;
        }
        display(tableBox);
    };

    var eraseText = function(element) {
        if (element.value) {
            element.value = "";
        } else {
            element.innerHTML = "";
        }
    };

    var focusElement = function(element) {
        element.focus();
    };

    var changeColor = function(element, color) {
        element.className = color;
    }


    var addClassLetter = function(target, color) {
        target = target.toUpperCase();
        var letters = document.querySelectorAll(".circle-of-words a");
        for (let i = 0; i < letters.length; i++) {
            var letter = letters[i];
            if (letter.dataset.letter === target) {
            	removeClass(letter,['red','blue','green']);
                letter.className += " " + color;
            }
        }
    }

    var removeClass = function(element, classList) {
        classList.forEach(classEl => {
            if (element.classList.contains(classEl)) {
                element.classList.remove(classEl);
            }
        });

    }


    var uploadState = function(g,r,b) {
    	green += g;
    	red += r;
    	blue -= b;
    	writePoints();
    }

    var writePoints = function() {
    	var aciertos = document.getElementById("aciertos");
    	aciertos.innerHTML = green;
    	var fallos = document.getElementById("fallos");
    	fallos.innerHTML = red;
    	var restante = document.getElementById("restante");
    	restante.innerHTML = blue;
    }

    var restartPoints = function() {
    	green = 0;
    	red= 0;
    	blue = 27;
    	writePoints();
    }
    return {
    	restart: restartPoints,
    	upload: uploadState,
        foco: focusElement,
        erase: eraseText,
        showTable: showTable,
        display: display,
        hide: hide,
        addClass: addClassLetter,
        removeClass: removeClass
    };


})();
