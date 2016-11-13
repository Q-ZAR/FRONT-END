'use strict';

//Модуль дополнительных функций для упрощения жизни
var Spec = (function () {

    'use strict';

    function removeChildren(elem) {
        while (elem.lastChild) {
            elem.removeChild(elem.lastChild);
        }
    }

    return {
        removeChildren: removeChildren
    };
} ());

//модуль создания БД книг и создания блока кода для нее
var BookDB = (function (Spec) {

    'use strict';

    /*конструктор библиотеки книг*/
    function Book(image, title, autor, stars, time) {
        this.image = image; //фото
        this.title = title; //название книги
        this.autor = autor; //автор книги
        this.stars = stars; //звездность книги
        this.time = time; //время добавления книги
    }

    /*библиотека книг - ее не трогать!*/
    var booksState = [
        new Book('book-pics/pic-1.jpg', "Jewels of Nizam", "Geeta Devi", "4", new Date(2015, 10, 12, 13, 20)),
        new Book('book-pics/pic-2.jpg', "Cakes &amp; Bakes", "Sanjeev Kapoor", "5", new Date(2016, 10, 12, 13, 20)),
        new Book('book-pics/pic-3.jpg', "Jamie's Kitchen", "Jamie Oliver", "3", new Date(2016, 10, 12, 13, 20)),
        new Book('book-pics/pic-4.jpg', "Inexpensive Family Meals", "Simon Holst", "0", new Date(2016, 10, 12, 13, 20)),
        new Book('book-pics/pic-5.jpg', "Paleo Slow Cooking", "Chrissy Gower", "1", new Date(2016, 9, 12, 13, 20)),
        new Book('book-pics/pic-6.jpg', "Cook Like an Italian", "Tobie Puttock", "1", new Date(2016, 9, 12, 13, 20)),
        new Book('book-pics/pic-7.jpg', "Suneeta Vaswani", "Geeta Davi", "0", new Date(2016, 10, 12, 13, 20)),
        new Book('book-pics/pic-8.jpg', "Jamie Does", "Jamie Oliver", "0", new Date(2016, 7, 12, 13, 20)),
        new Book('book-pics/pic-9.jpg', "Jamie's italy", "Jamie Oliver", "0", new Date(2016, 10, 12, 13, 20)),
        new Book('book-pics/pic-10.jpg', "Vegetables Cookbook", "Matthew Biggs", "0", new Date(2016, 4, 12, 13, 20))
    ];

    //с ней буду работать
    var library = booksState.slice();

    //определение места-вставки (flexbox)
    var $books = document.getElementById("cnt");

    //формируем блок кода
    function showBooks(arr) {
        if (Array.isArray(arr)) {
            Spec.removeChildren($books);
            for (var i = 0; i < arr.length; i++) {
                $books.innerHTML += createBook(arr[i], i);
            }
        } else {
            throw new Error('');
        }
    }

    //создание первой части кода (без звезд)
    function createBook(book, i) {
        //if (book instanceof Book) {
        var result = "<div class='book-item' id='part" + i + "'>";
        result += "<a href='http://yandex.ru'><img src='" + book.image + "' alt='book1' />";
        result += "<div class='book-name'>" + book.title + "</div></a>";
        result += "<div class='book-autor'> by " + book.autor + "</div>";
        result += "<div class='book-stars' id='starsBlock" + i + "'>";
        result += addStar(book, i);
        result += "</div>";
        result += "</div>";

        return result;
        /*} else {
         throw new Error('');
        }*/
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
                resultStar += "<div class='star star-full' onmouseout='HoverClickStars.hovStarsOut(" + bookNum + "," + starNum + ")' onmouseover='HoverClickStars.hovStars(" + bookNum + "," + starNum + ")' onclick='HoverClickStars.addStars(" + bookNum + "," + starNum + ");'></div>";
                starNumb--;
            } else {
                resultStar += "<div class='star ' onmouseout='HoverClickStars.hovStarsOut(" + bookNum + "," + starNum + ")' onmouseover='HoverClickStars.hovStars(" + bookNum + "," + starNum + ")' onclick='HoverClickStars.addStars(" + bookNum + "," + starNum + ");'></div>";
            }
        }
        return resultStar;
    }



    return {
        Book: Book, //конструктор
        library: library, //БД
        booksState: booksState,
        showBooks: showBooks, //код блока книг
        createBook: createBook,
        addStar: addStar, //код звезд
    };
} (Spec));


//var $popular = document.getElementById("MostPopular");




//Модуль фильтров для вывода
var Filters = (function (Spec, BookDB) {

    'use strict';

    var $books = document.getElementById("cnt");

    //показать все
    function showAll(arr) {
        Spec.removeChildren($books);
        BookDB.showBooks(arr);
    }

    //показать только популярные
    function showMostPopular(arr) {
        Spec.removeChildren($books);
        for (var i = 0; i < arr.length; i++) {
            if (+arr[i].stars > 3) {
                $books.innerHTML += BookDB.createBook(arr[i], i);
            }
        }
    }

    //показать самые новые
    function showMostRecent(arr) {
        Spec.removeChildren($books);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].time > new Date(2016, 9, 12, 13, 20)) {
                $books.innerHTML += BookDB.createBook(arr[i], i);
            }
        }
    }

    return {
        showAll: showAll,
        showMostPopular: showMostPopular,
        showMostRecent: showMostRecent
    };
} (Spec, BookDB));


//Модуль работы с БД новостей
var NewsDB = (function () {

    'use strict';

    //создание новостей
    function News(text, date) { /*конструктор библиотеки новостей*/
        this.text = text; //текст
        this.date = date; //дата
    }

    var news = [
        new News("You added <span>Fight Club</span> by <span>Chuck Palahnuik</span> to your <span>Must Read Titles</span>", new Date(2016, 10, 12, 13, 20)),
        new News("You added <span>The Trial</span> by <span>Franz Kafka</span> to your <span>Must Read Titles</span>", new Date(2016, 10, 12, 13, 30)),
    ];

    var $news = document.getElementById("newsBlock");

    //выводит новость в блок на странице
    function showNews(arr) {
        for (var i = arr.length - 1; i >= 0; i--) {
            $news.innerHTML += createNews(arr[i]);
        }
    };

    showNews(news);

    //делает текст для вставки
    function createNews(arr) {
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
    }

    return {
        News: News, //конструктор
        news: news, //БД новостей (вот ее можно трогать)
        showNews: showNews, //показать новости на странице
    };
} ());



//Модуль для добавления книги и новости из полей ввода
var Posting = (function (BookDB, Spec, NewsDB) {

    'use strict';

    var $news = document.getElementById("newsBlock");

    //добавление новой книги
    function addNewBook(arr) {
        var form = document.forms["addNewBook"];
        var formAutor = form.elements["addAutor"];
        var formTitle = form.elements["addTitle"];
        var newBook = new BookDB.Book("book-pics/pic-special.jpg", formTitle.value, formAutor.value, "0", new Date());
        arr.push(newBook);
        //вызов
        BookDB.showBooks(arr);
        addNews(formAutor, formTitle);
        formTitle.value = "";
        formAutor.value = "";
    }

    //добавляет новую новость в массив
    function addNews(formAutor, formTitle) {
        Spec.removeChildren($news);
        var text = "You added <span>" + formTitle.value + "</span> by <span>" + formAutor.value + "</span> to your <span>Must Read Titles</span>";
        var date = new Date();
        var newNews = new NewsDB.News(text, date);
        NewsDB.news.push(newNews);
        NewsDB.showNews(NewsDB.news);
    }

    return {
        addNewBook: addNewBook,
        addNews: addNews,
    };

} (BookDB, Spec, NewsDB));








//Модуль для работы со звездами (наведение и клик)
var HoverClickStars = (function (BookDB, Spec) {

    'use strict';

    //добавление звезды при клике
    function addStars(bookNum, starNum) {
        BookDB.library[bookNum].stars = starNum + 1;
        var changBook = document.getElementById("part" + bookNum);
        BookDB.addStar(BookDB.library[bookNum], bookNum);
    }

    //подсветка звезд при наведении
    function hovStars(bookNum, starNum) {
        var starsBlock = event.target;
        var starsBlockMom = starsBlock.parentElement;

        for (var i = 0; i < 5; i++) {
            starsBlockMom.children[i].classList.remove('star-full');
        }

        var k = 0;
        while (starsBlockMom.children[k] !== event.target) {
            starsBlockMom.children[k].classList.add('star-full');
            k++;
        }
        event.target.classList.add('star-full');
    }

    //выставление по-умолчанию звезд
    function hovStarsOut(bookNum, starNum) {
        var starsBlock = event.target;
        var starsBlockMom = starsBlock.parentElement;
        returnStars(starsBlockMom, bookNum);
    }

    function returnStars(place, i) {
        var block = place;
        Spec.removeChildren(block);
        var text = BookDB.addStar(BookDB.library[i], i);
        block.innerHTML = text;
    }

    return {
        addStars: addStars, //функция onclick
        hovStars: hovStars, //функция onmouseover
        hovStarsOut: hovStarsOut, //функция onmouseout
    }
} (BookDB, Spec));




//Модуль поиска по сайту
var SearchMod = (function (BookDB) {

    'use strict';

    //поиск по сайту
    //var input = document.getElementById("searchItem");
    var searchLibrary = [];

    function oninput() {
        var searchWord = searchItem.value;
        //var searchWord = event.target.value;

        for (var i = 0; i < BookDB.library.length; i++) {
            var a = BookDB.library[i].autor;
            var b = BookDB.library[i].title;
            var placeA = a.indexOf(searchWord);
            var placeB = b.indexOf(searchWord);

            if (placeA !== -1 || placeB !== -1) {
                searchLibrary.push(BookDB.library[i]);
            }
        }
        BookDB.showBooks(searchLibrary);
        searchLibrary = [];
    };

    return {
        oninput: oninput,
    }
} (BookDB));


