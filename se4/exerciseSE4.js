/*## Final Challenges (JS)!
a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, cada elemento de la pareja deberá estar multiplicada por 2.

function showNums(){

    var nums = [1,2,3,4,5,6,7,8,9]
    for(var i = 0; i < nums.length-1; i++){
        var pairs = []
        ...
    }
}
// output => 
//1ª pareja 2 - 4
//2ª pareja 4 - 6
//3ª pareja 6 - 8
//4ª pareja 8 - 10
//5ª pareja 10 - 12
//6ª pareja 12 - 14
//7ª pareja 14 - 16
//8ª pareja 16 - 18 
Hint: Métodos útiles => push() - join() - map()
*/

function pairs() {
    // generates an array 1-9
    var array = [];
    for (var i = 1; i <= 9; i++) {
        array.push(i);
    }
    // map an array 
    array = array.map((n) => n * 2);
    for (var j = 0; j < array.length - 1; j++) {
        console.log(j + 1 + 'ª pareja ' + array[j] + ' - ' + array[j + 1]);
    }
}
pairs();

/*a1) La funcion debería aceptar la array a tratar como argumento.

function showNums(1,2,3,4,5){
    var nums = arguments...
    nums.map(...)
}
// output => 
// 1ª pareja 2 - 4
// 2ª pareja 4 - 6
// 3ª pareja 6 - 8
//... 

*/

function pairs(array) {

    array = Array.prototype.slice.call(arguments);
    // map an array 
    array = array.map((n) => n * 2);
    for (var j = 0; j < array.length - 1; j++) {
        console.log(j + 1 + 'ª pareja ' + array[j] + ' - ' + array[j + 1]);
    }
}

pairs(1, 2, 3, 4, 5, 6);


/*a2) Pasa también el numero a multiplicar a la función como argumento

function showNums(1,2,3,4,5,...,12){ //<= el último número de arguments lo podemos tratar como el numero multiplicador...
} 
// output => 
// El numero escogido es: 12
// 1ª pareja 12 - 24
// 2ª pareja 24 - 36
// 3ª pareja 36 - 48
// 4ª pareja 48 - 60
// 5ª pareja 60 - 72 
// ...*/

function pairs(array) {

    array = Array.prototype.slice.call(arguments);
    var number = array.slice(-1)[0];
    array = array.slice(0, -1);
    // map an array 
    array = array.map((n) => n * number);
    for (var j = 0; j < array.length - 1; j++) {
        console.log(j + 1 + 'ª pareja ' + array[j] + ' - ' + array[j + 1]);
    }
}

pairs(1, 2, 3, 4, 5, 6);

/*a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.

function showNums(1,2,3,4,5,...,12, 3){ // <= ahora, el último numero lo podriamos tomar como el delimitador
} 
// output => 
// El numero escogido es: 12
// Se quieren mostrar las 3 primeras parejas
// 1ª pareja 12 - 24
// 2ª pareja 24 - 36
// 3ª pareja 36 - 48*/

function pairs() {

    var array = Array.prototype.slice.call(arguments);
    var number = array.slice(-2)[0];
    var delimit = array.slice(-1)[0];
    array = array.slice(0, -2);
    // map an array 
    array = array.map((n) => n * number);
    for (var j = 0; j < delimit; j++) {
        console.log(j + 1 + 'ª pareja ' + array[j] + ' - ' + array[j + 1]);
    }
}

pairs(1, 2, 3, 4, 5, 12, 3);


/*b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci? 
https://www.mathsisfun.com/numbers/fibonacci-sequence.html

function fibo(){}
// output: 0 1 1 2 3 5 8...*/

function fib1(n) {
    if (n === 0) {
        return 0;
    } else {
        var array = [];
        for (var i = 0; i <= n; i++) {
            array.push(i);
        }
        for (var j = 2; j <= n; j++) {
            array[j] = array[j - 1] + array[j - 2];
        }
        return array;
    }
}

fib1(6);

/*b2) Puedes añadir además, la posición de cada resultado?*/

function fib1(n) {
    if (n === 0) {
        return 0;
    } else {
        var array = [];
        for (var i = 0; i <= n; i++) {
            array.push(i);
        }
        for (var j = 2; j <= n; j++) {
            array[j] = array[j - 1] + array[j - 2];
        }
        return array.map(function(el, i, array) {
            return {
                position: i,
                num: el
            };
        });
    }
}

fib1(10)

/*b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.*/

function fib1(n) {
    if (n === 0) {
        return 0;
    } else {
        var array = [];
        for (var i = 0; i <= n; i++) {
            array.push(i);
        }
        for (var j = 2; j <= n; j++) {
            array[j] = array[j - 1] + array[j - 2];
        }
        array = array.map(function(el, i, array) {
            return {
                position: i,
                num: el
            };
        });
        array.forEach(function(element) {
            console.log('The position ' + element.position + ' contains the number ' + element.num);
        });
    }
}

fib1(10);

/*b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.

function fibo(10){}
//... 55 - pos 10º

*/
function fib1(n) {
    if (n === 0) {
        return 0;
    } else {
        var array = [];
        for (var i = 0; i <= n; i++) {
            array.push(i);
        }
        for (var j = 2; j <= n; j++) {
            array[j] = array[j - 1] + array[j - 2];
        }
        array = array.map(function(el, i, array) {
            return {
                position: i,
                num: el
            };
        });
        console.log(array[n]);
    }
}

fib1(10);


/*
b5) Ahora, muestra los resultados en forma piramidal:

function fiboPymamid(num){}
0 
0 1 
0 1 1
0 1 1 2
0 1 1 2 3
0 1 1 2 3 5
0 1 1 2 3 5 8 //To position. num
0 1 1 2 3 5 
0 1 1 2 3
0 1 1 2
0 1 1
0 1 
0

*/

function fib1(n) {
    if (n === 0) {
        return 0;
    } else {
        var array = [];
        for (var i = 0; i <= n; i++) {
            array.push(i);
        }
        for (var j = 2; j <= n; j++) {
            array[j] = array[j - 1] + array[j - 2];
        }
        return array.map(function(el, i, array) {
            return {
                position: i,
                num: el
            };
        });
    }
}

function printFiboPyramid(array) {
    // fibo pyramid
    var st = '';
    for (var m = 0; m < array.length; m++) {
        st = st + array[m].num + ' ';
        console.log(st);
    }
    st = '';
    for (var p = 0; p < array.length; p++) {
        st = st + array[p].num + ' ';
        console.log(st);
    }
}

var fiboNumbers = fib1(7);
printFiboPyramid(fiboNumbers);

/*

c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos 
en otro diferente con las posiciones de los dígitos cambiadas, creandio un nuevo código

var code = 3712;
function codeScript(code){}
//output:
 ⬇︎//First call to codeScript()
- 7123
 ⬇︎//Second call to codeScript()
- 1237
 ⬇︎//Third call to codeScript()
- 2371
// At Four call, should return the original value
El primer numero se traslada a la última posicion. El segundo, el tercero y el cuarto suben una posición.

*/

function codeScript(code1) {
    for (var i = 0; i < 4; i++) {
        code1 = code1.toString().split('');
        var first = code1.splice(0, 1);
        code1 = code1.join('') + first;
        console.log(code1);
    }
}
codeScript(7123);



/*c2) Ahora, el usuario debería poder introducir como parámetro dos códigos 
a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)
function codeScript(code1, code2){}

*/


function codeScript(code1, code2) {
    var numbers = Array.prototype.slice.call(arguments);
    var numbersLength = numbers.length;
    for (var i = 0; i < 4; i++) {
        numbers.forEach(function(number, j, array) {
            numbers[j] = numbers[j].toString().split('');
            var first = numbers[j].splice(0, 1);
            numbers[j] = numbers[j].join('') + first;
            console.log(numbers[j]);
        });
    }
}

codeScript(7123, 9856);
/*
c3) Ahora, vamos a añadir un nivel más de seguridad. 
Despues de cambiar la posición de los dígitos, multiplicaremos a cada miembro por un numero 
cuya multiplicación no sea superior a 10. (Si es superior a 10, conseguiremos una multplicación de 
dos digitos y el código ya no sería de 4 valores)
*/

function codeScript(code1, code2) {

}





/*
c4) Ahora, implementa en otra funcion aparte el decrypter(), 
que recibirá como argumento un código encriptado (y correspondientemente 
multiplicado en el apartado c3) y nos devuelva el código desencriptado.

c5) Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.

function codeScript(code1, code2){... codeDecrypt(code1Encrypt,code2Encrypt)}
*/

/*c6) El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.

var dictionary = {
    0: ['A', 'K', 'T'],
    1: ['B', 'L', 'U'],
    2: ['C', 'M', 'V'],
    3: ['D', 'N', 'W'],
    4: ['E', 'Ñ', 'X'],
    5: ['F', 'O', 'Y'],
    6: ['G', 'P', 'Z'],
    7: ['H', 'Q', '.'],
    8: ['I', 'R', ','],
    9: ['J', 'S', ' ']
}
function codeScript("HI  ", "WE  ", "NEED", "HELP"){}
"HI..." = "dictionary[7][0]+dictionary[8][0]+dictionary[9][2]+dictionary[9][2]..."*/

function codeScript() {
    var args = Array.prototype.slice.call(arguments);
    var dictionary = {
        0: ['A', 'K', 'T'],
        1: ['B', 'L', 'U'],
        2: ['C', 'M', 'V'],
        3: ['D', 'N', 'W'],
        4: ['E', 'Ñ', 'X'],
        5: ['F', 'O', 'Y'],
        6: ['G', 'P', 'Z'],
        7: ['H', 'Q', '.'],
        8: ['I', 'R', ','],
        9: ['J', 'S', ' ']
    };
    var string = '';
    args.forEach(function(str) {
        for (var i = 0; i < str.length; i++) {
            for (var key in dictionary) {
                var letters = dictionary[key];
                if (letters.indexOf(str[i]) !== -1) {
                    var pos = letters.indexOf(str[i]);
                    string += dictionary[key][pos];
                }
            }
        }
    });
    console.log(string);
}

codeScript('HI ', 'HOW ', 'ARE', ' YOU');


/*d) Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra SKYLAB, la palabra encriptada será SLKAYB. Si divides la palabra original en 2 grupos obtienes:

SKY
|-|-|
LAB Entonces, uniendo las primeras letras de cada grupo, las segundas y las terceras obtienes SLKAYB.
Entonces, el programa deberá recibir SKYLAB y retornar SLKAYB*/


function encrypt(str) {
    var lengthStr = str.length;
    var leftHalf = str.slice(0, lengthStr / 2);
    var rightHalf = str.slice(lengthStr / 2);
    var word = '';
    while (word.length < lengthStr) {
        word += leftHalf[0] + rightHalf[0];
        str = leftHalf.slice(1) + rightHalf.slice(1);
        leftHalf = str.slice(0, str.length / 2);
        rightHalf = str.slice(str.length / 2);
    }
    return word;
}

encrypt('SKYLAB');


/*d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.




Hint: for decrypt, only catch the pair words like: S L K A Y B , then, you get SKY, the next step 
is catch the odd words, S L K A Y B, group the two groups and you get the original word.*/



function decrypt(str) {
    var left = '';
    var right = '';
    for (var i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            left += str[i];
        } else {
            right += str[i];
        }
    }
    return left + right;
}

decrypt('SLKAYB');

/*d3) Agrupa la función Encrypt y decrypt en una unica función, de forma que introduzcas
 como parámetro SKYLAB y devuelva SKYLAB (con todas las transformaciones internas hechas y mostrando,
  entre medias, la transformación)*/

function encryptDecrypt(str) {
    var encrypt = function() {
        var lengthStr = str.length;
        var leftHalf = str.slice(0, lengthStr / 2);
        var rightHalf = str.slice(lengthStr / 2);
        var word = '';
        while (word.length < lengthStr) {
            word += leftHalf[0] + rightHalf[0];
            str = leftHalf.slice(1) + rightHalf.slice(1);
            leftHalf = str.slice(0, str.length / 2);
            rightHalf = str.slice(str.length / 2);
        }
        return word;
    };


    var decrypt = function(str) {
        var left = '';
        var right = '';
        for (var i = 0; i < str.length; i++) {
            if (i % 2 === 0) {
                left += str[i];
            } else {
                right += str[i];
            }
        }
        return left + right;
    };

    var encrypted = encrypt();
    var decrypted = decrypt(encrypted);
    console.log(encrypted);
    console.log(decrypted);
}

encryptDecrypt('SKYLAB');

//d4) Lo tienes? Prueba ahora con SKYLABCODERS. Cambia la función para que pueda aceptar palabras más largas.

/*e) Crea un programa al que le introduces un número como parámetro del 0 al 100 y devuelve el número transformado a alfabeto normal, es decir:

sayItWithWords(5) => //output Five
sayItWithWords(23) => //output twenty-three
sayItWithWords(71) => //output seventy-one
Hint:

var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
e2) Ahora, el output debería ser capaz de, aparte de devolver el número traducido, devolver también los números por los que está formado:

sayItWithWords(5) => //output Five, five / 5
sayItWithWords(23) => //output twenty-three, twenty + three / 20 + 3
sayItWithWords(71) => //output seventy-one, seventy + one / 70 + 1*/

var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function sayItWithWords(number) {
    if (number < 10) {
        console.log(units[number]);
    }
    if (number >= 10 && number <= 19) {
        number = number - 10;
        console.log(teens[number]);
    } else {
        unitsN = number % 10;
        tensN = Math.floor(number / 10);
        console.log(tens[tensN] + '-' + units[unitsN]);
    }
}

sayItWithWords(71);


/*e3) Cambia tu programa para que acepte cualquier número entre 0 y 1000.

sayItWithWords(500) => //output five hundred , five hundred  / 500
sayItWithWords(233) => //output two hundred thirty three, two hundred + thirty + three/ 200 + 30 + 3
sayItWithWords(498) => //output four hundred ninety eight, four hundred + ninety + eight/ 400 + 90 + 8*/


function sayItWithWords(number) {
    var strNumber = number.toString();
    var result = '';

    switch (true) {
        case (number === 1000):
            result = hundreds[10];
            break;
        case (number === 0):
            result = 'zero';
            break;
        case (number < 10 && number > 0):
            result = units[number];
            break;
        case (number >= 10 && number < 20):
            var n = number % 10;
            result = teens[n];
            break;
        case (number > 20 && number < 100):
            var tensN = strNumber[0];
            var unitsN = strNumber[1];
            result = tens[tensN] + '-' + units[unitsN];
            break;
        case (number > 100):
            hundredsN = strNumber[0];
            tensN = number % 100;
            if (tensN !== 0) {
                result = hundreds[hundredsN] + ' ' + sayItWithWords(tensN);
            } else {
                result = hundreds[hundredsN];
            }
    }
    return result;
}

sayItWithWords(500);
