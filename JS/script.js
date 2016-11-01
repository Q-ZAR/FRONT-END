function calculateSome(){
    //начальное значение
    var result=0;

    //получить результат
    return {
        getResult: function(){
            return result;
        },
        //сложение v.1
        /*add: function(x){
            result=result+x;
        },*/
        //сложение v.2
        add: function(x){
            return function(y){
                x=x+y;
                return x;
            },
            result=result+x;
        },

        //вычитание
        subtract: function(x){
            result=result-x;
        },
        //умножение
        multiply: function(x){
            result=result*x;
        },
        //деление
        divide: function(x){
            result=result/x;
        },
        //сброс
        reset : function(){
            result=0;
        }
    };
}

var calc = calculateSome();

console.log(calc.getResult());

calc.add(3);
console.log(calc.getResult());

calc.subtract(1);
console.log(calc.getResult());

calc.multiply(4);
console.log(calc.getResult());

calc.divide(2);
console.log(calc.getResult());

calc.add(3,1);
console.log(calc.getResult());

calc.reset();
console.log(calc.getResult());