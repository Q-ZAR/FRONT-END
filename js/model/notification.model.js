var NotificationModel = (function () {

    'use strict';

    //создание новостей
    function News(text, date) { /*конструктор библиотеки новостей*/
        this.text = text; //текст
        this.date = date; //дата
    }

    return {
        News: News,
    }
} ());