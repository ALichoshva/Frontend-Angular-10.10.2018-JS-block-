// задача 1
function minus(number1 = 0) {
    return function(number2 = 0) {
        return number1 - number2
    }
}

// задача 2
function multiplyMaker(number1) {
    let res = 1;

    res *= number1

    return function(number2) {
        return res = res * number2; 
    }
}

const multiply = multiplyMaker(2);

// задача 3
const strObj = (function() {
    let str = '';

    function setString(strInput) {
        if(strInput === undefined) {
            return str = '';
        } else if (typeof strInput === 'number') {
            return str = strInput.toString();
        } else {
            return str = strInput;
        }
    } 

    function getString() { return str; };

    function getStringLength() { return str.split('').length };

    function getStringReverse() { return str.split('').reverse().join('') }

    return {
        setString: setString,
        getString: getString,
        getStringLength: getStringLength,
        getStringReverse: getStringReverse
    }
})(); 

// задача 4
const calc = (function() {
    let res = 0;

    function setNumber(number) {
        res = number;
        return this;
    }

    function getMultiply(number) {
        res *= number;
        return this;
    };

    function getSum(number) {
        res += number;
        return this;
    };

    function getMinus(number) {
        res -= number;
        return this;
    };

    function getDivide(number) {
        res /= number;
        return this;
    };

    function getRaise(number) {
       res = Math.pow(res, number)

        return this;
    };

    function getValue() {
        return res = Math.round(res * 100) / 100 
    }

    return {        
        setNumber: setNumber,
        getSum: getSum,
        getMultiply: getMultiply,
        getMinus: getMinus,
        getDivide: getDivide,
        getRaise: getRaise,
        getValue: getValue
    }
})();

console.log(calc.setNumber(3).getRaise(4).getDivide(-3.765).getValue())
