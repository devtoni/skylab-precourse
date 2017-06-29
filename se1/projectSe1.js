// Simple version

function calculator(n1, n2) {
    var result;
    result = returnCalculations(n1, n2);
    if ((isNumber(n1) && isNumber(n2))) {
        printResult(result, n1, n2);
    } else if (isNumber(n1) && n2 === undefined) {
        console.log('The square root of ' + n1 + ' is ' + result[4]);
    } else {
        console.log(NaN);
    }
}
// function to check if it is a number;

function isNumber(n) {
    var isANumber = typeof n === 'number' ? true : false;
    return isANumber;
}

// function to return result
function returnCalculations(n1, n2) {
    var result = [];
    var sum = n1 + n2;
    var rest = n1 - n2;
    var div = n1 / n2;
    div = round(div);
    mult = n1 * n2;
    var sqrt = Math.sqrt(n1);
    sqrt = round(sqrt);
    result.push(sum, rest, div, mult, sqrt);
    return result;
}

// function that prints the result
function printResult(result, n1, n2) {
    console.log('Numbers: ' + n1 + ', ' + n2 + '.' +
        '\nThe sum is ' + result[0] +
        '\nThe rest is ' + result[1] +
        '\nThe division is ' + result[2] +
        '\nThe multiplication is ' + result[3]);
}

// function that reduces the decimals
function round(n) {
    n = n.toString();
    n = Number(parseFloat(n).toFixed(3));
    return n;
}

calculator(59);

// Pro version

function calculator() {

    var numbers = prompt('Insert numbers separated by commas');
    checkNumbers(numbers);
    var moreNumbers = confirm('Would you like to compute more operations?');
    while (moreNumbers) {
        numbers = prompt('Insert numbers separated by commas');
        checkNumbers(numbers);
        moreNumbers = confirm('More numbers?');
    }

    function checkNumbers(listNumbers) {
        listNumbers = listNumbers.split(',');
        var convertToNumbers = listNumbers.map((element) => 1 * element);
        var areNumbers = convertToNumbers.every(isNumber);
        if (areNumbers) {
            if (listNumbers.length === 1) {
                computeSqrt(convertToNumbers);
            } else {
                computeOperations(convertToNumbers);
            }
        } else {
            console.log('You tip some wrong numbers. (' + listNumbers + ')');
        }
    }

    function computeSqrt(sqr) {
        var result = Math.sqrt(sqr);
        result = round(result);
        printResult(result, sqr);
    }

    function computeOperations(listNumbers) {
        var result = [];
        var sum = listNumbers.reduce((a, b) => a + b);
        var rest = listNumbers.reduce((a, b) => a - b);
        var div = listNumbers.reduce((a, b) => a / b);
        div = round(div);
        var mult = listNumbers.reduce((a, b) => a * b);
        result.push(sum, rest, div, mult);
        printResult(result, listNumbers);
    }

    function printResult(result, numbers) {
        if (isNumber(result)) {
            console.log('The square root of ' + numbers + ' is ' + result);
        } else {
            numbers = numbers.toString();
            console.log('Numbers: ' + numbers +
                '\nThe sum is ' + result[0] +
                '\nThe rest is ' + result[1] +
                '\nThe division is ' + result[2] +
                '\nThe multiplication is ' + result[3]);
        }
    }

    function isNumber(n) {
        n = (typeof n === 'number' && !isNaN(n)) ? true : false;
        return n;
    }

    function round(n) {
        n = n.toString();
        n = Number(parseFloat(n).toFixed(3));
        return n;
    }
}
calculator();
