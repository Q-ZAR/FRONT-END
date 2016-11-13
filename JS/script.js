'use strict';

function Book(image, title, autor, stars, time) { /*конструктор библиотеки книг*/
    this.image = image; //фото
    this.title = title; //название книги
    this.autor = autor; //автор книги
    this.stars = stars; //звездность книги
    this.time = time; //время добавления книги
}

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

//формируем кусок кода
function showBooks(arr) {
    if (Array.isArray(arr)) {
        removeChildren($books);
        for (var i = 0; i < arr.length; i++) {
            $books.innerHTML += createBook(arr[i], i);
        }
    } else {
        throw new Error('');
    }
}

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

function addStar(book, i) {
    var bookNum = i;
    var starNum;
    var starNumb = book.stars;
    var resultStar = '';
    for (var j = 0; j < 5; j++) {
        starNum = j;
        if (starNumb > 0) {
            resultStar += "<div class='star star-full' onmouseout='hovStarsOut(" + bookNum + "," + starNum + ")' onmouseover='hovStars(" + bookNum + "," + starNum + ")' onclick='addStars(" + bookNum + "," + starNum + ");'></div>";
            starNumb--;
        } else {
            resultStar += "<div class='star ' onmouseout='hovStarsOut(" + bookNum + "," + starNum + ")' onmouseover='hovStars(" + bookNum + "," + starNum + ")' onclick='addStars(" + bookNum + "," + starNum + ");'></div>";
        }
    }
    return resultStar;
}

var $popular = document.getElementById("MostPopular");

function removeChildren(elem) {
    while (elem.lastChild) {
        elem.removeChild(elem.lastChild);
    }
}
//показать все
function showAll(arr) {
    removeChildren($books);
    showBooks(arr);
}

//показать только популярные
function showMostPopular(arr) {
    removeChildren($books);
    for (var i = 0; i < arr.length; i++) {
        if (+arr[i].stars > 3) {
            $books.innerHTML += createBook(arr[i], i);
        }
    }
}

//показать самые новые
function showMostRecent(arr) {
    removeChildren($books);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].time > new Date(2016, 9, 12, 13, 20)) {
            $books.innerHTML += createBook(arr[i], i);
        }
    }
}

//добавление новой книги
function addNewBook(arr) {
    var form = document.forms["addNewBook"];
    var formAutor = form.elements["addAutor"];
    var formTitle = form.elements["addTitle"];
    var newBook = new Book("book-pics/pic-special.jpg", formTitle.value, formAutor.value, "0", new Date());
    arr.push(newBook);
    //вызов
    showBooks(arr);
    addNews(formAutor, formTitle);
    formTitle.value = "";
    formAutor.value = "";
}

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
    if (showDate >= 60 && showDate <1440) {
        showDate = (showDate / 60).toFixed(0);
        result = "<div class='nav-item'><p>" + arr.text + "</p><p>" + showDate + "  hours ago" + "</p></div>";
    }
    if (showDate >= 1440) {
        showDate = (showDate / 60 / 24).toFixed(0);
        result = "<div class='nav-item'><p>" + arr.text + "</p><p>" + showDate + "  days ago" + "</p></div>";
    }

    return result;
}

//добавляет новую новость в массив
function addNews(formAutor, formTitle) {
    removeChildren($news);
    var text = "You added <span>" + formTitle.value + "</span> by <span>" + formAutor.value + "</span> to your <span>Must Read Titles</span>";
    var date = new Date();
    var newNews = new News(text, date);
    news.push(newNews);
    showNews(news);
}


//добавление звезды при клике
function addStars(bookNum, starNum) {
    library[bookNum].stars = starNum + 1;
    var changBook = document.getElementById("part" + bookNum);
    addStar(library[bookNum], bookNum);
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
    removeChildren(block);
    var text = addStar(library[i], i);
    block.innerHTML = text;
}

//поиск по сайту
var input = document.getElementById("searchItem");
var searchLibrary = [];

input.oninput = function () {
    var searchWord = searchItem.value;

    for (var i = 0; i < library.length; i++) {
        var a = library[i].autor;
        var b = library[i].title;
        var placeA = a.indexOf(searchWord);
        var placeB = b.indexOf(searchWord);

        if (placeA !== -1 || placeB !== -1) {
            searchLibrary.push(library[i]);
        }
    }
    showBooks(searchLibrary);
    searchLibrary = [];
};