var NotificationModel = (function () {
    'use strict';

    function News(text, date) { 
        this.text = text;
        this.date = date;
    }

    return {
        News: News
    }
} ());