var View = (function () {
    'use strict';

    function View() {

        var $list = document.querySelector("#container");

        //show all tasks from database
        this.show = function (arr) {
            if (Array.isArray(arr)) {
                $list.innerHTML = "";
                for (var i = 0; i < arr.length; i++) {
                    $list.innerHTML += this.create(arr, i);
                }
            } else {
                throw new Error('Error, not an array');
            }
        };

        //create code for task
        this.create = function (arr, i) {
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

        //Event
        var $addBtn = window.document.querySelector('.btn');

        $addBtn.addEventListener('click', function btn() {
            var elem = event.target;
            Controller.add(Storage);
            event.preventDefault();
            //reset input field
            newItem.value = '';
        });
    }


    return new View;
    // view.show(Storage);

} ());

