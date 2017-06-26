//Puedes contar cuantas letras tiene tu nombre?
// console.log(myName) // My Name has 4 letters 

var myName = 'Toni';
var sentence = 'My name has ' + myName.length + ' letters';
console.log(sentence);

// Añade tu apellido e indica en que posición se encuentra
var myName = 'Toni Ruiz';
var firstLetterLastName = 'R';
var startPositionLastName = myName.indexOf(firstLetterLastName);

console.log('Your first last name starts on position ' + startPositionLastName);

//Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.

var myName = 'Toni Ruiz';
var onlyName = myName.split(' ')[0];
console.log('My name is ' + onlyName);

//Ahora, solo tu apellido.

var myName = 'Toni Ruiz';
var lastName = myName.split(' ')[1];
console.log('My last name is ' + lastName);

// Iguala el resultado a una variable nueva e imprímela por pantalla

var myName = 'Toni Ruiz';
var newString = lastName;
console.log(myName + ', ' + newString);

//Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.

var myName = 'Toni Ruiz';

function replaceName(name){
	var lastName = name.split(' ')[1];
	console.log('Hello, Mr. ' + lastName);
}
replaceName(myName);

//Selecciona tu apellido y transfórmalo a MAYÚSCULAS.

function lastNameToUpperCase(name) {
	var lastName = name.split(' ')[1];
	lastName = lastName.toUpperCase();
	console.log('My last name is ' + lastName);
}
lastNameToUpperCase('Toni Ruiz');

/*Ahora declara una variable nueva e igualala 
a la anterior variable sumándole, además, un mensaje.*/

function myAwesomeName(name) {
	var something = name + ' is awesome';
	console.log(something);
}

myAwesomeName('Toni');

/*Ahora, puedes seleccionar la inicial 
de tu nombre y apellido y mostrarlas por pantalla?*/

function myFirstLetter(name) {
	var firstLetterName = name.split(' ')[0][0];
	var firstLetterLastName = name.split(' ')[1][0];
	console.log(firstLetterName + '.' + firstLetterLastName);
}

myFirstLetter('Toni Ruiz');

/*Declara tu nombre completo en una array y 
muéstralo por pantalla separando cada letra por "/"*/

function myNameinArray(name) {
	var nameToUpper = name.toUpperCase();
	console.log(nameToUpper.split('').join('/'));
}

myNameinArray('Toni Ruiz');

//Ahora solo selecciona tu apellido y muestra cada letra separada por "|"

function slashLastName(name) {
	var lastName = name.split(' ')[1];
	lastName = lastName.toUpperCase();
	var arrayToString = lastName.split('').join('|');
	console.log(arrayToString);
}

slashLastName('Toni Ruiz');

/*Ahora muestra cada 
letra de tu nombre con su posición (necesitarás un bucle for)*/

function positionLetterName(name) {
	var name = name.toUpperCase();
	var positionAndName = '';
	for ( var i = 0; i < name.length; i++ ) {
		if ( i == name.length - 1 ) {
			positionAndName += i + 'º' + ' ' + name[i];
		}
		else {
			positionAndName += i + 'º' +  ' ' + name[i] + ',';
		}
	}
	console.log(positionAndName);
}

positionLetterName('Toni');

//Como en el ejercicio anterior, pero seleccionando tu apellido

function positionLetterLastName(name) {
	var name = name[0].toUpperCase();
	var positionAndName = '';
	for ( var i = 0; i < name.length; i++ ) {
		if ( i == name.length - 1 ) {
			positionAndName += i + 'º' + ' ' + name[i];
		}
		else {
			positionAndName += i + 'º' +  ' ' + name[i] + ', ';
		}
	}
	console.log(positionAndName);
}

positionLetterLastName(['Ruiz']);


/*Puedes indicarme las iniciales de tu nombre 
y apellido? Como en el ejercicio h de la sección de strings*/

function firstLetterNameAndLastName(array) {
  var firstLetterName = array[0][0];
  var firstLetterLastName = array[1][0];
  console.log(firstLetterName + '.' + firstLetterLastName);
}

firstLetterLastName(['Toni','Ruiz']);

/*Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. 
Muestra por pantalla solo tu nombre y tu edad en un solo mensaje*/

function showNameAndAge(array) {
	var nameToUpper = array[0].toUpperCase();
	var age = array[2];
	console.log( 'My name is ' + nameToUpper + ' and I\'m ' + age + ' years old');
}

showNameAndAge(['Toni','Ruiz',29]);

/*Prepara una función para añadir tu City a la array, 
muestra un mensaje mostrando el contenido de toda la array, 
así aseguraremos los cambios.*/

function showData(array) {
    var city = addCity('Barcelona');
    array.push(city);
    var arrayToString = array.toString();
    console.log(arrayToString);
}

function addCity(city) {
	return city;
}

showData(['Toni','Ruiz',29]);

/*Crea ahora, una funcion 
para eliminar la variable City y asegura los cambios.*/
function myCityDelete(array) {
	 array.pop();
	 console.log(array);
}

/*Quiero volver a introducir mi nombre pero si lo introduzco 
utilizando push() estará en la última posición, 
como podria hacer para introducirlo en la primera posición*/

function addNameFirstPosition(array,name) {
	array.splice(0,1,name);
	return array;
}

addNameFirstPosition(['Toni','Ruiz',29],'Ruben');

/*Ahora, declara una array con 
los números del 0 a 10 y muestra cada número multiplicado por dos.*/

function returnElementArray() {
	var array = [];
	for ( var i = 0; i <= 10; i++ ) {
		array.push(i);
	}
	var multByTwo =  array.map(function(element) {
		return element * 2;
	});
	return multByTwo;
}

returnElementArray();

/*Reformula la función para que puedas 
especificar por cual número debería multiplicar cada elemento de la array.*/

function returnElementArray(number) {
	var array = [];
	for ( var i = 0; i <= 10; i++ ) {
		array.push(i);
	}
	var multByNumber =  array.map(function(element) {
		return element * number;
	});
	return multByNumber;
}

returnElementArray(3);

/*Podrías mostrarlos en el orden inverso?*/

function returnElementArrayReversed(number) {
	var array = [];
	for ( var i = 0; i <= 10; i++ ) {
		array.push(i);
	}
	var multByNumber =  array.map(function(element) {
		return element * number;
	});

	var reversedArray = multByNumber.sort(sortElement);
	return reversedArray;	

	function sortElement(elementA,elementB){
		if ( elementA > elementB) {
			return -1;
		}
		else if ( elementA < elementB ) {
			return 1;
		}
		else {
			return 0;
		}
	}
}

returnElementArrayReversed(3);

/*
numbers 
*/

//Que hora es? Declara la hora como número y devuelvela como String

function whatTimeIsIt() {
	var timeNow = new Date();
	var hour = timeNow.getHours().toString();
	var minutes = timeNow.getMinutes().toString();
	var timeOfTheDay = '';
	if ( hour < 12 ) {
		timeOfTheDay = 'morning';
	}
	else {
		timeOfTheDay = 'evening';
	}
	var showTime = 'It\'s ' + hour + ':' + minutes + ' of ' + timeOfTheDay;
	console.log(showTime);
}

whatTimeIsIt();

//Nono, que hora exactamente? Dime la hora sin minutos

function whatTimeIsItWithoutMin() {
	var timeNow = new Date();
	var hour = timeNow.getHours().toString();
	var timeOfTheDay = '';
	if ( hour < 12 ) {
		timeOfTheDay = 'morning';
	}
	else {
		timeOfTheDay = 'evening';
	}
	var showTime = 'It\'s ' + hour + ' of ' + timeOfTheDay;
	console.log(showTime);
}

whatTimeIsItWithoutMin();

//  Ahora, declara tu hora y muéstrala redondeada. --> 10.34 mostrar 11
 
function roundHour(hour) {
   var hourToString = hour.toString();
   var arrayHour = hourToString.split('.');
   var min = Number(arrayHour[1]);
   var hourT = Number(arrayHour[0]);
   if ( min > 30 ) {
   	return hourT + 1;
   }
   else {
   	return hourT;
   }
}

roundHour(10.30);

/*d) Hagamos una calculadora. Primero, la suma.
We can do a calculator, so let's do it! first, do a sum with two numbers

console.log(sum) //The sum of 7+3 is 10
d1) Añade la resta...

console.log(sum + rest) // The sum and rest of 7 and 3 is 10 and 4 
d2) Y la multiplicación

console.log(sum + rest + mult) // 10, 4 and 21
d3) Por ultimo, la división

console.log(sum + rest + mult + div) // 10, 4, 21 and 2.3
d4) Ahora, intenta multiplicar un número por una string, que devuelve?  NaN

console.log(10*"hour") // ....?!*/

function sum(n1,n2){
  return n1 + n2;
}
function rest(n1,n2){
  return n1 - n2;
}
function div(n1,n2){
  return n1 / n2;
}
function mult(n1,n2){
  if ( isNumber(n1) && isNumber(n2) ) {
    return n1 * n2;
  }
  else{
    return undefined;
  }
  function isNumber(n){
    if ( typeof n == 'number') {
      return true;
    }
    else{
      return false;
    }
  }
}

console.log(sum(7,2) + rest(7,2) + div(7,2));















