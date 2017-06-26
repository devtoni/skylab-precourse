//Exercises:

//a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.

function  sayHello(myName){
    console.log('hello ' + myName);//output: 'hello myName'
}



//b) Intenta retornar los valores en lugar de usar console.log

function sayHello2(myName){
    return 'hello ' + myName; // output: 'hello myName'
}

//c) Ahora, añade tu edad y concaténala al return

function sayHelloAndAge(name,age) {
    return 'Hello my name is ' + name + ' and my age is ' + age;
}

sayHelloAndAge('Toni',29);

//Cual es la diferencia entre console.log() & return?  // console.log es un efecto secundario, y return devuelve

//Read this => http://stackoverflow.com/questions/21020608/difference-between-console-log-and-return-in-javascript
//d) Iguala tu función a una variable y ejecútala

function sayHelloAndAge(name,age) {
    return 'Hello my name is ' + name + ' and my age is ' + age;
}

var myFunction = sayHelloAndAge; //output: 'hello myName, you're myAge years old.'
myFunction('Toni',29);




/*e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, 
intenta imprimir sus dos resultados concatenados Now, 
try to declare other function and assign it result to 
other variable called myAge, and try to print the result of both functions in one line.*/

function myName(name) {
    return name;
}

function myAge(age){
    return age;
}

var nameS = myName;
var age = myAge;

nameS('Toni ') + age(29);
"Toni 29"


//myName() + myAge() //output: IronMan 40

//e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.

function myAge(age){
    return age;
}

function sumAgeAndRandom(){
    var age = myAge(29);
    var rndN = Math.floor((Math.random() * 10) + 1);
    var sum = age + rndN;
    return sum.toString();
}

myName('Toni') + ' ' + sumAgeAndRandom();

//myName() + (myAge() + myRandomNumber).toString()//output: IronMan 45
/*f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.

var...
var...
myName(param1) + myAge(param2) //output: IronMan 43*/

var name = 'Toni';
var age = 29;

function myName(name) {
    return name;
}

function myAge(age) {
    return age;
}

myName(name) + ' ' + myAge(age);



//g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas

function main() {
    var name = function() {
        return 'Toni';
    };
    var age = function(){
        return 29;
    }; 
    return name() + ' ' + age();
}

/*h) Haz otra función hija que solo devuelva un número random, 
ese número random será el argumento que se pasará como parámetro a la función age()

return x + y // output: IronMan 6457689
http://www.w3schools.com/jsref/jsref_random.asp*/

function main(){

  var name = function() {
        return 'Toni';
    };
  var rndN = function() {
     var n = Math.floor((Math.random() * 10000) + 1);
     return n;
  };
   return name() + ' ' + rndN();
}

main();

/*i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50

return x + y // output: IronMan 3...Sure you're Tony Stark?*/

function main(){

  var name = function() {
        return 'Toni';
    };
  var rndNF = function() {
     var n = Math.floor((Math.random() * 50) + 1);
     return n;
  };
  var rndN = rndNF();
  var myName = name();
  if (rndN < 20) {
    console.log(myName + ' ' + rndN + '...Sure you\'re Tony Ruiz?');
  } else if (rndN > 20 && rndN < 50) {
    console.log('Hi ' + myName + ' ' + rndN);
  }
}

main();


//j) Al return de la función name(), concaténale otro mensaje
//return x + y // output: Tony Stark...aka IRONMAN, 34...Sure you're Tony Stark? 



function main(){

  var name = function() {
        return 'Toni' + '...AKA Son Goku';
    };
  var rndNF = function() {
     var n = Math.floor((Math.random() * 50) + 1);
     return n;
  };
  var rndN = rndNF();
  var myName = name();
  if (rndN < 20) {
    console.log(myName + ' ' + rndN + '...Sure you\'re Tony Ruiz?');
  } else if (rndN > 20 && rndN < 50) {
    console.log('Hi ' + myName + ' ' + rndN);
  }
}

main();
//k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable

function main(){

  var name = function() {
        return 'Toni' + '...AKA Son Goku';
    };
  var rndNF = function() {
     var n = Math.floor((Math.random() * 50) + 1);
     return n;
  };
  var rndN = rndNF();
  var myName = name();
  var x = '';
  var y = myName;
  if (rndN < 20) {
    x = rndN + '...Sure you\'re Tony Ruiz?';
  } else if (rndN > 20 && rndN < 50) {
    x = 'Hi ' + myName + ' ' + rndN;
  }
  return x + y;
}

main();

//return x + y // output: The first function returns: 'Tony Stark...aka IRONMAN', The second function returns: '34...Sure you're Tony Stark?' 
//l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada

function main(name,age) {

    var nameF = function() {
        return (name === 'Toni') ? 'Hi ' + name : name + '...You\'re not IRONMAN!';
    };
    var myAgeF = function() {
        return age;
    };

    var myName = nameF();
    var myAge = myAgeF();
    if (myName) { 
      return myName + ' ' + myAge;
    } else {
      return myName;
    }
    
}

main('Batman',29);




//return x + y // output: "The first function returns: Hulk... You're not IRONMAN!"
/*m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.

function GenerateRandom(){
    ...
    return randomNumber.
}

function father(){
    var numR = GenerateRandom()
    return ...numR()...
}*/

function generateRandom() {
    var rnd = Math.floor((Math.random() * 1000) + 1);
    return rnd;
}

function main() {
    var randomN = generateRandom();
    return randomN;
}

main();


/*n) Refactorizemos nuestro código dejando todas las funciones separadas del padre, 
éste último se encargará de llamarlas todas y mostrar sus resultados.

function father(){
    myFunction();
    myOtherFunction();
    myOtherVarFunction();
    return...
}*/








/*ñ) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, muestra los resultados de esta array como siempre.

o) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.

p) 🔞 👊🏼 Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, mostrando un mensaje indicando cual es mayor. El nombre pasado por parámetro también deberá ser random entre una array de nombres, con lo cual, también deberás refactorizar las funciones hijas.

function gandFather(){
    var names = ['hulk', 'ironMan', '...']
    var selectedName...
    var selectedName2...
    if(father(selectedName) > father(selectedName2))
        ...
    else
        ...
    return father(selectedName).push().join()...
}
p1) En lugar de retornar los valores como una array, prepara tus funciones para que devuelvan los resultados como OBJECTS. Muestra por pantalla los objetos sin estilizar el output.*/

//p2) Muestra los resultados de los OBJECTS recorriendolos y mostrando los valores de una forma amigable.*/