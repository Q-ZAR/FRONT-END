var Main = (function (View,NotificationStorage) {

    'use strict';

    function updateView() {
        View.showBooks(View.library);
        View.showNews(NotificationStorage.news);
        window.document.querySelector("#addTitle").value = "";
        window.document.querySelector("#addAutor").value = "";
        window.document.querySelector("#searchItem").value = "";
    }

    return {
        updateView: updateView,
    };

} (View,NotificationStorage));

Main.updateView();