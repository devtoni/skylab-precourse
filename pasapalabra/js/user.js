
var start = document.getElementById("startGame");
// cuando le de click a boton empezar
start.addEventListener("click",displayName,false);
var userData = [];
var userName = "";

function displayName() {
	// deshabilitamos el boton empezar
	start.removeEventListener("click",displayName,false);
	var nameBox = document.getElementById("box");
	var name = document.getElementById("name");
	display(nameBox);  // mostramos caja
    name.addEventListener("keydown", function(e) {  // cuando presionemos enter en el text input 
    	if ( e.keyCode === 13 ) {
    		userName = e.target.value;
    		console.log(userName);
    		hide(nameBox);
    	}
    });
    writeQuestion();
}


// tendremos guardado el nombre del usuario.

