//Модуль для удаления всех детей внутри элемента
var Utils = (function () {

    'use strict';

    function removeChildren(elem) {
        while (elem.lastChild) {
            elem.removeChild(elem.lastChild);
        }
    }

    return {
        removeChildren: removeChildren
    };
} ());