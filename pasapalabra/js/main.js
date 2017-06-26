
var collection = [
    { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
    { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
];

var num = 0;
var pregunta = document.getElementById("pregunta");
var answer = collection[num].answer;
var resp = document.getElementById("answer");
var points = 0;



// checking the num 
function checkNum() {

    if (num <= collection.length - 1) {
        checkStat();
    } else {
        var com = completed();
        if (com) {
            fin();
        } else {
            num = 0;
            checkStat();
        }
    }
}

// then check the stat
function checkStat() {
    if (collection[num].status === 0) {
        writeQuestion();
    } else {
        num++;
        checkNum();
    }
}

// write question
function writeQuestion() {
    pregunta.innerHTML = collection[num].question;
    resp.value = "";
   // getAnswer();
    
}

// check if we answered all the questions
function completed() {
    return collection.every((el) => el.status !== 0);
}

// get the answer typped by the user

    resp.addEventListener("keydown", function(e) {
        if (e.keyCode == 13) {
            var val = e.target.value;
            sendAnswer(val);
           preventDef(e);
        }
    }, false);


// we prevent the default behaviour because if we don't do that the next description don't appear
function preventDef(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
    } else {
        return true;
    }
}

// send answer normalize the answer to lower case and call check answer
function sendAnswer(val) {
    val = val.toLowerCase();
    checkAnswer(val);
}

// checking the answer
function checkAnswer(ans) {
answer = collection[num].answer;
    if (ans === answer) {
        collection[num].status = 1;
        num++;
        points++;
        checkNum();
    }
    else if (ans === 'pasapalabra') {
        collection[num].status = 0;
        num++;
        checkNum();
    }
    else {
        collection[num].status = 2;
        num++;
        checkNum();
    }
}

//results push the user name and points to the array userData.
function resultados() {
     userData.push([{
        nameU: userName,
        pointsU: points
    }]);
}


function fin() {
    resultados();
    var volver = confirm("volver a jugar?");
    if (volver) {
        restart();
    } else {
        showTable();
    }
}

function restart() {
    // turn to 0 the status and other variables
    for (var i = 0; i < collection.length; i++) {
        collection[i].status = 0;
    }
    num = 0;
    points = 0;
    userName = "";
    displayName();
    writeQuestion();  // call again for the first letter

}

