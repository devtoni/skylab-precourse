/*var pasapalabra = (function() {
  var ranking = [];
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
  // checks if the word is answered or not
  function checkStatus(question) {
    return (question.status === 0) ? true : false;
  }
  // it changes the status word in the questions collection
  function checkAnswer(word, question) {
    word = word.toLower();
    question.answer = question.answer.toLower();
    if (word === 'pasapalabra') {
      question.status = 0;
    } else if (word === question.answer) {
      question.status = 1;
    } else {
      question.status = 2;
    }
  }
  // iterates throw the collection of questions and call for the checks and asks of the questions
  function askMeQuestions() {
    collection.forEach(function(question) {
      var questionNotAnswered = checkStatus(question);
      if (questionNotAnswered) {
        var questionDescription = question.question;
        var answer = prompt(questionDescription);
        checkAnswer(answer, question);
      }
    });
  }
  // sumPoints filter by status value to 1, and return the length 
  function sumPoints() {
    const wins = question => question.status == 1;
    return collection.filter(wins).length;
  }
  // it turns the status of the questions to 0
  function resetQuestions() {
    collection.forEach(question => question.status = 0);
  }
  // adds to ranking array the name and points
  function addToRanking(name, points) {
    ranking.push({
      name: name,
      points: points
    });
  }
  // play is still working while there is some question not answered
  function play() {
    const notAnswered = question => question.status === 0;
    var name = prompt("Bienvenido a pasapalabra!, ¿Cómo te llamas?");
    var remains = collection.some(notAnswered);
    while (remains) {
      askMeQuestions();
      remains = collection.some(notAnswered);
    }
    var points = sumPoints();
    var game = confirm("Quieres volver a jugar?");
    while (game) {
      resetQuestions();
      play();
      game = false;
    }
    addToRanking(name, points);
  }
  // sorts the user by points achieved
  function sort() {
    ranking.sort((a, b) => a.points < b.points);
  }
  // it show the final results
  function showResults() {
    sort(); // first we sort the users per points achieved
    ranking.forEach(function(user) { // formatted output
      var numberQuestions = collection.length;
      console.log(user.name + ' ha acertado ' + user.points + ' y fallado ' + (numberQuestions - user.points));
    });
  }
  //finally the function returns the method init that allows to start the playing
  return {
    _init: function() {
      play();
      showResults();
    }
  };

})();

pasapalabra._init();




// pro version

function questionRepository() {

  function CreateWord(letter, answer, question) {
    return {
      letter: letter,
      answer: answer,
      status: 0,
      question: question
    };
  }

  function createQuestion(letter) {
    var alertF = "With the letter: " + letter + "\nWrite down the question with the following format: " + "\n(letter-answer-question)";
    var writeQ = prompt(alertF);
    writeQ = writeQ.split("-");
    var question = CreateWord(writeQ[0], writeQ[1], writeQ[2]);
    return question;
  }

  function createCollection() {
    var collection = [];
    var nTimes = prompt("Number");
    nTimes = parseInt(nTimes, 10);
    if (nTimes < 1 || nTimes === 1) {
      for (var i = 1; i <= 26; i++) {
        var letter = String.fromCharCode(64 + i);
        var question = createQuestion(letter);
        collection.push(question);
      }
    } else {
      for (var j = 1; j <= 26; j++) {
        var letter = String.fromCharCode(64 + j);
        var questions = createQuestions(letter, nTimes);
        collection.push(questions);
      }
    }
    return collection;
  }

  function createQuestions(letter, numberTimes) {
    var questions = [];
    for (var j = 1; j <= numberTimes; j++) {
      var alertF = j + '/' + numberTimes + "With the letter: " + letter + "\nWrite down the question with the following format: " + "\n(letter-answer-question)";
      var writeQ = prompt(alertF);
      writeQ = writeQ.split("-");
      var question = CreateWord(writeQ[0], writeQ[1], writeQ[2]);
      questions.push(question);
    }
    return questions;
  }
  return createCollection();
}

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

function pasapalabra() {
  var questions = confirm("Quieres crear un nuevo set de preguntas? S/N");
  if (questions) {
    questions = questionRepository();
  } else {
    questions = collection;
  }
}

pasapalabra();*/



//if length of every array is bigger than 1, then it should iterate and generate a random number for every question, else if should call play()



/*

1. Pregunta si quiere utilizar set genérico o crear uno nuevo.
2. Si el nuevo contiene mas de un array entonces debe generar un aleatorio.
3. Cuando empiece el programa debe tener una cuenta atras de X segundos.
4. Si finaliza el tiempo se acaba el juego y muestra resultados en ranking.
5. Si decide acabar antes no muestra ranking pero sí resultados.



*/









////////////////////
// PRO VERSION 
///////////////////



    // CRONO

    

  var ranking = [];
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
  // checks if the word is answered or not
  var timeinterval;
  // play is still working while there is some question not answered
  function play() {
     resetTime();
     initializeTime("clock");
 }


