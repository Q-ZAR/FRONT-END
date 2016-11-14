var NotifController = (function (NotificationStorage, View, NotificationModel, Utils) {

    'use strict';

    var $news = document.querySelector("#newsBlock");

    //добавляет новую новость в массив
    function addNews(formAutor, formTitle) {
        Utils.removeChildren($news);
        var text = "You added <span>" + formTitle.value + "</span> by <span>" + formAutor.value + "</span> to your <span>Must Read Titles</span>";
        var date = new Date();
        var newNews = new NotificationModel.News(text, date);
        NotificationStorage.news.push(newNews);
        View.showNews(NotificationStorage.news);
    }

    return {
        addNews: addNews,
    }

} (NotificationStorage, View, NotificationModel, Utils));