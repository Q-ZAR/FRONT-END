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
    var result=0;

    function getResult() {
        return this.result;
    }

    function add(x) {
        if (Utils.isNumber(x)) {
            this.result = this.result + x;
        } else {
            throw new Error();
        }

        return this;
    }

    function subtract(x) {
        if (Utils.isNumber(x)) {
            this.result = this.result - x;

        } else {
            throw new Error();
        }
        return this;
    }

    function multiply(x) {
        if (Utils.isNumber(x)) {
            this.result = this.result * x;

        } else {
            throw new Error();
        }
        return this;
    }

    function divide(x) {
        if (Utils.isNumber(x)) {
            this.result = this.result / x;

        } else {
            throw new Error();
        }
        return this;
    }

    function reset() {
        this.result = 0;
        return this;
    }

    //server
    function serverReq(state) {
        this.result = state;
        //return this;
    }

    //callback
    function getInitialState(callback) {
        // Setting timeout to emulate a request to a server
        var that = this;

        setTimeout(function () {
            // Set calculator state here
            serverReq.call(that, 5);
            callback();
        }, 5000);
    }

    return {
        getResult: getResult,
        add: add,
        substract: subtract,
        multiply: multiply,
        divide: divide,
        reset: reset,
        serverReq: serverReq,
        getInitialState: getInitialState,
    };

} (Utils));


Calculator.getInitialState(function () {
    //practice
    console.log(Calculator.getResult());
    console.log(Calculator.add(3).divide(3).multiply(7).getResult());
});


