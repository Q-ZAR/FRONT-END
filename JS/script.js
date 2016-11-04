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

    var Work = {
        result: 0,


        getResult: function getResult() {
            return this.result;
        },

        add: function add(x) {
            if (Utils.isNumber(x)) {
                this.result = this.result + x;
            } else {
                throw new Error();
            }

            return this;
        },

        substract: function subtract(x) {
            if (Utils.isNumber(x)) {
                this.result = this.result - x;

            } else {
                throw new Error();
            }
            return this;
        },

        multiply: function multiply(x) {
            if (Utils.isNumber(x)) {
                this.result = this.result * x;

            } else {
                throw new Error();
            }
            return this;
        },

        divide: function divide(x) {
            if (Utils.isNumber(x)) {
                this.result = this.result / x;

            } else {
                throw new Error();
            }
            return this;
        },

        reset: function reset() {
            this.result = 0;
            return this;
        },

    } // end Work

    return {
        getResult: Work.getResult,
        result: Work.result,
        add: Work.add,
        subtract: Work.subtract,
        divide: Work.divide,
        multiply: Work.multiply,
        reset: Work.reset
    };

} (Utils));

//practice
console.log(Calculator.getResult());
Calculator.add(3).divide(2).multiply(4);
console.log(Calculator.getResult());
