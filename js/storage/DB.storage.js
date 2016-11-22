var Storage = (function () {
    'use strict';

    var myStorage = [
        new Model('Buy a coffee', true, new Date(2016, 10, 15, 13, 20)),
        new Model('Go to the zoo', true, new Date(2016, 10, 15, 13, 30)),
        new Model('Cook dinner', true, new Date(2016, 10, 15, 13, 33)),
        new Model('Play with dog', true, new Date(2016, 10, 15, 14, 40)),
        new Model('Wake up', false, new Date(2016, 10, 12, 14, 40)),
    ];

    return myStorage;
} ());