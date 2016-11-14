var Event = (function (Controller, View) {

    'use strict';

    //добавить книгу при submit
    var $placeBtn = window.document.querySelector('#addBtn');
    $placeBtn.addEventListener('submit', function btn() {
        Controller.addNewBook(View.library);
        event.preventDefault();
    });

    //фильтры для показа книг
    var $placeShowAll = window.document.querySelector('#allBook');
    $placeShowAll.addEventListener('click', function filter1() {
        Controller.showAll(View.library);
        event.preventDefault();
    });
    var $placeShowRec = window.document.querySelector('#recBook');
    $placeShowRec.addEventListener('click', function filter2() {
        Controller.showMostRecent(View.library);
        event.preventDefault();
    });
    var $placeShowPop = window.document.querySelector('#popBook');
    $placeShowPop.addEventListener('click', function filter3() {
        Controller.showMostPopular(View.library);
        event.preventDefault();
    });

    //поиск книг
    var $searchItem = window.document.querySelector('#searchItem');
    $searchItem.addEventListener('input', function filter4() {
        Controller.oninput();
        event.preventDefault();
    });

} (Controller, View));