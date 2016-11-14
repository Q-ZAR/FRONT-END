var NotificationStorage = (function (NotificationModel) {

    'use strict';

    var news = [
        new NotificationModel.News("You added <span>Fight Club</span> by <span>Chuck Palahnuik</span> to your <span>Must Read Titles</span>", new Date(2016, 10, 12, 13, 20)),
        new NotificationModel.News("You added <span>The Trial</span> by <span>Franz Kafka</span> to your <span>Must Read Titles</span>", new Date(2016, 10, 12, 13, 30)),
    ];
    return {
        news: news,
    }

} (NotificationModel));