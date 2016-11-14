//View.updateView([]);
var Main = (function (View,NotificationStorage) {

    'use strict';

    function updateView() {
        //загрузка библиотеки и новостей
        View.showBooks(View.library);
        View.showNews(NotificationStorage.news);
        //очистка полей ввода
        window.document.querySelector("#addTitle").value = "";
        window.document.querySelector("#addAutor").value = "";
        window.document.querySelector("#searchItem").value = "";
    }

    return {
        updateView: updateView,
    };

} (View,NotificationStorage));

Main.updateView();