var Controller = (function () {
    'use strict';

    function Controller() {

        this.add = function (arr) {
            var formItem = window.document.querySelector("#newItem");
            var newItem = new Model(formItem.value, 'active', new Date());
            arr.unshift(newItem);
            //вызов
            View.show(arr);
        }


        this.perform = function (arr,i) {
            var elem = event.target.nextElementSibling;
            //elem.classList.toggle("input-group-addon-text--finished");
            var a = arr[i];
            arr.splice(i,1);
            a.status=false;
            arr.push(a);
            View.show(arr);
            
        }
    }
    var controller = new Controller();
    return controller;
} ());