var Model = (function (){
    'use strict';

    function Model(text, status, date) {
        this.text = text;
        this.status = status;
        this.date = date;
    }

    return Model;
}());