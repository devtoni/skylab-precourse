/* a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)
console.log(something, somethingMore, somethingMoreAndMore)  => name, class, id*/

function heroes(obj) {
    for (var key in obj) {
        console.log(key);
    }
}

var avenger = {
    name: "Tony",
    class: "VII",
    id: 1
};

heroes(avenger);

/* b) Ahora, crea una función que liste solo los valores de las propiedades.
console.log(somethingThatShowsThings)  = > Tony, VII, 01 */

function heroes(obj) {
    for (var key in obj) {
        console.log(obj[key]);
    }
}

var avenger = {
    name: "Tony",
    class: "VII",
    id: 1
};

heroes(avenger);

/* c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.
console.log(property.ThisProperty) //new class = XI */

function changeValue(obj, key, value) {
    obj[key] = value;
    console.log(obj[key]);
}

var avenger = {
    name: "Tony",
    class: "VII",
    id: 1
};

changeValue(avenger, 'class', 'XI');

/* d) Ahora, elimina la propiedad ID y asegura los cambios.
console.log(property.ThisProperty) */

function deleteProperty(obj, key) {
    if (obj.hasOwnProperty(key)) {
        delete obj[key];
    }
    console.log(obj[key]);
}

var avenger = {
    name: "Tony",
    class: "VII",
    id: 1
};

deleteProperty(avenger, 'class');

/* e) Añade una nueva propiedad, por ejemplo city y dale un valor.
e1) Asegura los cambios solo imprimiendo esa nueva propiedad.*/

function addProperty(obj, key, value) {
    if (!obj.hasOwnProperty(key)) {
        obj[key] = value;
    } else {
        obj[key] = value;
    }
    console.log(obj[key]);
}

var avenger = {
    name: "Tony",
    class: "VII",
    id: 1
};

addProperty(avenger, 'city', 'Badalona');

/*Lista el numero de propiedades que contiene el objeto.
console.log() // There are 4 info fields */

function countProperties(obj) {
    var c = 0;
    for (var i in obj) {
        c++;
    }
    console.log(c);
}

var avenger = {
    name: "Tony",
    class: "VII",
    id: 1,
    city: 'Badalona'
}

countProperties(avenger);

/*Cambia la propiedad name por fullName.
Asegura los cambios.
console.log(fullName) // Tony Stark*/

function changePropertyName(obj, key, newNameKey, value) {
    if (obj.hasOwnProperty(key)) {
        obj[newNameKey] = obj[key]; // le asignas la referencia
        delete obj[key]; // borras el anterior
        obj[newNameKey] = value; // le asignas nuevo valor
        console.log(obj[newNameKey]);
    } else {
        console.log(undefined);
    }
}

var avenger = {
    name: "Tony",
    class: "VII",
    id: 1,
    city: 'Badalona'
}

changePropertyName(avenger, 'njme', 'fullName', 'Tony Stark');

/*Lista todas las propiedades del objeto a través de un console.log()
console.log(...) // "Hi there, I'm Tony Stark..."*/

var avenger = {
    name: "Tony",
    class: "VII",
    id: 1,
    city: 'Badalona'
}

function changePropertyName(obj, key, newNameKey, value) {
    if (obj.hasOwnProperty(key)) {
        obj[newNameKey] = obj[key]; // le asignas la referencia
        delete obj[key]; // borras el anterior
        obj[newNameKey] = value; // le asignas nuevo valor
        console.log(obj[newNameKey]);
    } else {
        console.log(undefined);
    }
}

changePropertyName(avenger, 'name', 'fullName', 'Tony Stark');

function listProperties(obj) {
    console.log('Hi I\'m ' + obj.fullName + ', ' + obj.class + ' class heroe id:' + obj.id + ' and living in ' + obj.city);
}


listProperties(avenger);

/*Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)

http://www.w3schools.com/js/js_object_definition.asp

Example:

function avenger(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
console.log(tonyStark)
j) Crea otro objeto y imprime sus propiedades por pantalla.

var otherAvenger = new Avenger...
console.log(otherAvenger) // Hulk...
k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia. . Example of property:

...
...
...
this.listProperties: function(){
    console.log(this.name + ", " + this.class) 
};
}*/

function Avenger(fullName, classRoom, city, job, studies, markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job = job;
    this.studies = studies;
    this.markAv = markAv;
    Avenger.prototype.description = function() {
        return this.fullName + ' / ' + this.classRoom + ' / ' + this.city + ' / ' + this.job + ' / ' + this.studies;
    };
}

var tonyStark = new Avenger("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10);
var hulk = new Avenger('Hulk', 'X', 'Barcelona', 'Monster', 'Harvard', 5);
var blackPanther = new Avenger('Black Panther', 'W', 'Madrid', 'Columbia', 4);
//console.log(hulk);
console.log(hulk.description());

/*l) Ahora, crea una función que solo liste los nombres de los objetos instanciados
console.log(someFunction) // Tony Stark, Hulk, Thor...*/

function Avenger(fullName, classRoom, city, job, studies, markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job = job;
    this.studies = studies;
    this.markAv = markAv;
    Avenger.prototype.description = function() {
        return this.fullName + ' / ' + this.classRoom + ' / ' + this.city + ' / ' + this.job + ' / ' + this.studies;
    };
}

var tonyStark = new Avenger("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10);
var hulk = new Avenger('Hulk', 'X', 'Barcelona', 'Monster', 'Harvard', 5);
var blackPanther = new Avenger('Black Panther', 'W', 'Madrid', 'Columbia', 4);

/*l) Ahora, crea una función que solo liste los nombres de los objetos instanciados
console.log(someFunction) // Tony Stark, Hulk, Thor...*/

function printNameAvengers(array) {
    var names = array.map(function(obj) {
        return obj.fullName;
    });
    console.log(names.toString());
}

var avengerCharacters = [tonyStark, hulk, blackPanther];

printNameAvengers(avengerCharacters);

/*m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.

console.log(myFunction) // Are 3 avengers living in NYC: Tony, Hulk, Hawkeye*/

function Avenger(fullName, classRoom, city, job, studies, markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job = job;
    this.studies = studies;
    this.markAv = markAv;
    Avenger.prototype.description = function() {
        return this.fullName + ' / ' + this.classRoom + ' / ' + this.city + ' / ' + this.job + ' / ' + this.studies;
    };
}
var tonyStark = new Avenger("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10);
var hulk = new Avenger('Hulk', 'X', 'Barcelona', 'Monster', 'Harvard', 5);
var blackPanther = new Avenger('Black Panther', 'W', 'Madrid', 'Programmer', 'Columbia', 4);
var goku = new Avenger('Son Goku', 'N', 'Tokyo', 'Heroe', 'Columbia', 4);
var gon = new Avenger('gon from Hunter X', 'S', 'Madrid', 'Hunter', 'Columbia', 4);
var l = new Avenger('L from Death Note', 'L', 'Madrid', 'Inspector', 'Columbia', 4);
var toni = new Avenger('L from Death Note', 'L', 'Madri', 'Inspector', 'Columbia', 4);



function printAvengersFromSameCity(array) {
    var repeated = [];
    var c = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (i !== j && array[i].city === array[j].city) {
                repeated.push(array[i]);
                break;
            }
        }
    }
    return repeated;
}

var avengerCharacters = [tonyStark, hulk, blackPanther, goku, gon, l, toni];
printAvengersFromSameCity(avengerCharacters);


// Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.



function medianMarkAv(array) {
    var markAvValues = array.map(function(obj) {
        return obj.markAv;
    });
    var sum = markAvValues.reduce((a, b) => a + b);
    var median = sum / markAvValues.length;
    return median;
}

medianMarkAv(avengerCharacters);


/* ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario 
que tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.*/


/* ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario 
que tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.*/

function vsAvenger(array) {
    var newAr = [];
    for (var i = 0; i < array.length; i += 2) {
        newAr.push(array.slice(i, i + 2));
    }
    newAr.forEach(function(pairChar) {
        var left = pairChar[0];
        var right = pairChar[1];
        if (left.markAv > right.markAv) {
            console.log(left.fullName + ' vs ' + right.fullName + ' => ' + left.fullName + ' is better!!');
        } else {
            console.log(left.fullName + ' vs ' + right.fullName + ' => ' + right.fullName + ' is better!!');
        }
    });
}

vsAvenger(avengerCharacters);
