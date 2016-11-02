//check number
var Utils = (function () {
    'use strict';

    function isNumber(x) {
        return !isNaN(parseFloat(x)) && isFinite(x);
    }
    return {
        isNumber: isNumber
    };
} ());

//library of Calculator
var Calculator = (function (Utils) {
    'use strict';
    /**
             */
    function Calculator() {
        // Initial value
        var result = 0;

        function getResult() {
            return result;
        }

        function add(x) {
            if (Utils.isNumber(x)) {
                result = result + x;
            } else {
                throw new Error();
            }

            return add;
        }
        //вычитание
        function subtract(x) {
            if (Utils.isNumber(x)) {
                result = result - x;
                
            } else {
                throw new Error();
            }
            return subtract;
        }

        //умножение
        function multiply(x) {
            if (Utils.isNumber(x)) {
                result = result * x;
                
            } else {
                throw new Error();
            }
            return multiply;
        }

        //деление
        function divide(x) {
            if (Utils.isNumber(x)) {
                result = result / x;
                
            } else {
                throw new Error();
            }
            return divide;
        }

        //сброс
        function reset() {
            result = 0;
        }

        return {
            getResult: getResult,
            add: add,
            subtract: subtract,
            multiply: multiply,
            divide: divide,
            reset: reset
        };
    }

    return new Calculator();
} (Utils));

//practice
console.log(Calculator.getResult());
Calculator.add(3);
console.log(Calculator.getResult());
Calculator.add(2)(1);
console.log(Calculator.getResult());
Calculator.subtract(2);
console.log(Calculator.getResult());
Calculator.multiply(3);
console.log(Calculator.getResult());
Calculator.divide(3);
console.log(Calculator.getResult());
Calculator.reset();
console.log(Calculator.getResult());