var Controller = (function () {
    'use strict';

    function Controller() {}

    Controller.prototype.add = function (value) {
        var newItem = new Model(value, 'active', new Date());
        Storage.unshift(newItem);
        View.show(Storage);
    }

    Controller.prototype.perform = function (arr, i) {
        var elem = event.target.nextElementSibling;
        var a = arr[i];
        arr.splice(i, 1);
        a.status = false;
        arr.push(a);
        View.show(arr);
    }

    Controller.prototype.del = function (arr, i) {
        var elem = event.target.nextElementSibling;
        var a = arr[i];
        arr.splice(i, 1);
        View.show(arr);
    }

    return new Controller();
} ());