var Storage = (function (Model) {
    'use strict';

    /*function DB(list) {
        this.toDoList = list || [];
    }*/

    var myStorage = [
        new Model('Item 1', true, new Date(2016, 10, 15, 13, 20)),
        new Model('Item 2', true, new Date(2016, 10, 15, 13, 30)),
        new Model('Item 3', true, new Date(2016, 10, 15, 13, 33)),
        new Model('Item 4', true, new Date(2016, 10, 15, 14, 40)),
        new Model('Item 0', false, new Date(2016, 10, 12, 14, 40)),
    ];

    return myStorage;
} (Model));