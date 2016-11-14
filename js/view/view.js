var View = (function (BookStorage, Utils, BookModel, NotificationModel, NotificationStorage) {

    'use strict';

    //с ней буду работать
    var library = BookStorage.booksState.slice();

    //определение места-вставки
    var $books = document.querySelector("#cnt");
    var $news = document.querySelector("#newsBlock");


    /* ----------- 
       ДЛЯ КНИГ
    ----------- */
    //формируем блок кода
    function showBooks(arr) {
        if (Array.isArray(arr)) {
            Utils.removeChildren($books);
            for (var i = 0; i < arr.length; i++) {
                $books.innerHTML += createBook(arr[i], i);
            }
        } else {
            throw new Error('Error, not an array');
        }
    }

    showBooks(library);

    //создание первой части кода (без звезд)
    function createBook(book, i) {
        if (book instanceof BookModel.Book) {
            var result = "<div class='book-item' id='part" + i + "'>";
            result += "<a href='http://yandex.ru'><img src='" + book.image + "' alt='book1' />";
            result += "<div class='book-name'>" + book.title + "</div></a>";
            result += "<div class='book-autor'> by " + book.autor + "</div>";
            result += "<div class='book-stars' id='starsBlock" + i + "'>";
            result += addStar(book, i);
            result += "</div>";
            result += "</div>";

            return result;
        } else {
            throw new Error('Error, book isn\'t found');
        }
    }

    //создание второй части кода (звезды)
    function addStar(book, i) {
        var bookNum = i;
        var starNum;
        var starNumb = book.stars;
        var resultStar = '';
        for (var j = 0; j < 5; j++) {
            starNum = j;
            if (starNumb > 0) {
                resultStar += "<div class='star star-full' onmouseout='Controller.hovStarsOut(" + bookNum + "," + starNum + ")' onmouseover='Controller.hovStars(" + bookNum + "," + starNum + ")' onclick='Controller.addStars(" + bookNum + "," + starNum + ");'></div>";
                //resultStar += "<div id='star"+bookNum+starNum+"' class='star star-full'></div>";
                starNumb--;
            } else {
                resultStar += "<div class='star ' onmouseout='Controller.hovStarsOut(" + bookNum + "," + starNum + ")' onmouseover='Controller.hovStars(" + bookNum + "," + starNum + ")' onclick='Controller.addStars(" + bookNum + "," + starNum + ");'></div>";
                //resultStar += "<div id='star"+bookNum+starNum+"' class='star '></div>";
            }
        }
        return resultStar;
    }


    /* ----------- 
     ДЛЯ НОВОСТЕЙ
    ----------- */
    //выводит новость в блок на странице
    function showNews(arr) {
        if (Array.isArray(arr)) {
            for (var i = arr.length - 1; i >= 0; i--) {
                $news.innerHTML += createNews(arr[i]);
            }
        } else {
            throw new Error('Error, not an array');
        }
    };

    showNews(NotificationStorage.news);

    //делает текст для вставки
    function createNews(arr) {
        if (arr instanceof NotificationModel.News) {
            var currentDate = new Date();
            var showDate = currentDate.valueOf() - arr.date.valueOf();
            showDate = showDate / 1000 / 60;
            showDate = showDate.toFixed(0);
            var result;

            if (showDate < 60) {
                result = "<div class='nav-item'><p>" + arr.text + "</p><p>" + showDate + " minutes ago" + "</p></div>";
            }
            if (showDate >= 60 && showDate < 1440) {
                showDate = (showDate / 60).toFixed(0);
                result = "<div class='nav-item'><p>" + arr.text + "</p><p>" + showDate + "  hours ago" + "</p></div>";
            }
            if (showDate >= 1440) {
                showDate = (showDate / 60 / 24).toFixed(0);
                result = "<div class='nav-item'><p>" + arr.text + "</p><p>" + showDate + "  days ago" + "</p></div>";
            }

            return result;
        } else {
            throw new Error('Error, news isn\'t found');
        }
    }

    return {
        library: library,
        showBooks: showBooks, //код блока книг
        createBook: createBook,
        addStar: addStar, //код звезд
        showNews: showNews, //показать новости на странице
    }

} (BookStorage, Utils, BookModel, NotificationModel, NotificationStorage));