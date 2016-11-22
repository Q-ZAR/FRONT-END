var View = (function () {
    'use strict';

    function View() {

        this.$list = document.querySelector("#container");
        //Event
        this.$addBtn = window.document.querySelector('.btn');

        this.$addBtn.addEventListener('click', function btn() {
            var formItem = window.document.querySelector("#newItem");
            if (confirm("Are you sure you want to add new ToDo item: " + formItem.value + "?")) {
                Controller.add(formItem.value);
                event.preventDefault();
            }
            //reset input field
            formItem.value = '';
        });
    }

    //show all tasks from database
    View.prototype.show = function (arr) {
        if (Array.isArray(arr)) {
            this.$list.innerHTML = "";

            for (var i = 0; i < arr.length; i++) {
                this.$list.innerHTML += this.create(arr, i);
            }
        } else {
            throw new Error('Error, not an array');
        }
    };

    //create code for task
    View.prototype.create = function (arr, i) {
        if (arr[i] instanceof Model) {
            var result = "<div class='row'><div class='col-lg-12'><div class='input-group'><span class='input-group-addon'>";

            if (arr[i].status) {
                result += "<input type='checkbox' onchange='Controller.perform(Storage," + i + ");'><span class='input-group-addon-text' onclick='Controller.del(Storage," + i + ");'> " + arr[i].text + "</span></span></div></div></div>"
            } else {
                result += "<input type='checkbox' onchange='Controller.perform(Storage," + i + ");' checked><span class='input-group-addon-text input-group-addon-text--finished' onclick='Controller.del(Storage," + i + ");'>" + arr[i].text + "</span></span></div></div></div>";
            }

            return result;
        } else {
            throw new Error('Error, incorrect content');
        }
    };

    return new View();
} ());

