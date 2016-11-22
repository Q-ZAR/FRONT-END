var Controller = (function () {
    'use strict';

    function Controller() { 
        this.searchLibrary = [];
    }

    Controller.prototype.add = function (value) {
        var newItem = new Model(value, 'active', new Date());
        Storage.unshift(newItem);
        View.show(Storage);
    }

    Controller.prototype.perform = function (i) {
        var a = Storage[i];
        Storage.splice(i, 1);
        a.status = false;
        Storage.push(a);
        View.show(Storage);
    }

    Controller.prototype.del = function (i) {
        Storage.splice(i, 1);
        View.show(Storage);
    }

    Controller.prototype.oninput = function (searchWord) {
        for (var i = 0; i < Storage.length; i++) {
            var a = Storage[i].text.toLowerCase();
            var placeA = a.indexOf(searchWord);
            if (placeA !== -1) {
                this.searchLibrary.push(Storage[i]);
            }
        }
        View.show(this.searchLibrary);
        this.searchLibrary = [];
    };

    return new Controller();
} ());