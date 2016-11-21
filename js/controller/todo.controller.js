var Controller = (function () {
    'use strict';

    function Controller() {

        this.add = function (arr) {
            var formItem = window.document.querySelector("#newItem");
            if (confirm("Are you sure you want to add new ToDo item: "+formItem.value+"?")) {
                var newItem = new Model(formItem.value, 'active', new Date());
                arr.unshift(newItem);
                //вызов
                View.show(arr);
            }
        }


        this.perform = function (arr, i) {
            var elem = event.target.nextElementSibling;
            //elem.classList.toggle("input-group-addon-text--finished");
            var a = arr[i];
            arr.splice(i, 1);
            a.status = false;
            arr.push(a);
            View.show(arr);
        }

        this.del = function (arr, i) {
            var elem = event.target.nextElementSibling;
            var a = arr[i];
            arr.splice(i, 1);
            View.show(arr);
        }
    }
    return new Controller;
} ());