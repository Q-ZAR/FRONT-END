'use strict';

function Book(image, title, autor, stars) { /*конструктор библиотеки книг*/
    this.image = image; //фото
    this.title = title; //название книги
    this.autor = autor; //автор книги
    this.stars = stars; //звездность книги
}

var booksState = [
    new Book('book-pics/pic-1.jpg', "Jewels of Nizam", "Geeta Devi", "4"),
    new Book('book-pics/pic-2.jpg', "Cakes &amp; Bakes", "Sanjeev Kapoor", "5"),
    new Book('book-pics/pic-3.jpg', "Jamie's Kitchen", "Jamie Oliver", "3"),
    new Book('book-pics/pic-4.jpg', "Inexpensive Family Meals", "Simon Holst", "0"),
    new Book('book-pics/pic-5.jpg', "Paleo Slow Cooking", "Chrissy Gower", "1"),
    new Book('book-pics/pic-6.jpg', "Cook Like an Italian", "Tobie Puttock", "1"),
    new Book('book-pics/pic-7.jpg', "Suneeta Vaswani", "Geeta Davi", "0"),
    new Book('book-pics/pic-8.jpg', "Jamie Does", "Jamie Oliver", "0"),
    new Book('book-pics/pic-9.jpg', "Jamie's italy", "Jamie Oliver", "0"),
    new Book('book-pics/pic-10.jpg', "Vegetables Cookbook", "Matthew Biggs", "0")
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
    result += "<div class='book-stars'>";
    result += addStar(book, i);
    result += "</div>";
    result += "</div>";

    return result;
    //} else {
    // throw new Error('');
    //}
}

function addStar(book, i) {
    var bookNum = i;
    var starNum;
    var starNumb = +book.stars;
    var resultStar = '';
    for (var j = 0; j < 5; j++) {
        starNum = j;
        if (starNumb > 0) {
            resultStar += "<div class='star star-full' onclick='addStars(" + bookNum + "," + starNum + ");'></div>";
            starNumb--;
        } else {
            resultStar += "<div class='star' onclick='addStars(" + bookNum + "," + starNum + ");'></div>";
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
    //var clickPlace = document.getElementById(event.target.id);
    //clickPlace.classList.add(" small-menu__item__link--active");
    removeChildren($books);
    for (var i = 0; i < arr.length; i++) {
        if (+arr[i].stars > 3) {
            $books.innerHTML += createBook(arr[i], i);
        }
    }
}

//добавление новой книги
function addNewBook(arr) {
    var form = document.forms["addNewBook"];
    var formAutor = form.elements["addAutor"];
    var formTitle = form.elements["addTitle"];
    var newBook = new Book("book-pics/pic-special.jpg", formTitle.value, formAutor.value, "0");
    arr.push(newBook);
    //вызов
    showBooks(arr);
    addNews(formAutor, formTitle);
    formTitle.value="";
    formAutor.value="";
}

//создание новостей
function News(text, date) { /*конструктор библиотеки новостей*/
    this.text = text; //текст
    this.date = date; //дата
}

var news = [
    new News("You added <span>Fight Club</span> by <span>Chuck Palahnuik</span> to your <span>Must Read Item</span>", { day: 11, month: 11, year: 2016, hour: 14, minutes: 30 }),
    new News("You added <span>The Trial</span> by <span>Franz Kafka</span> to your <span>Must Read Titles</span>", { day: 11, month: 11, year: 2016, hour: 14, minutes: 54 }),
];

var $news = document.getElementById("newsBlock");

//выводит новость в блок на странице
function showNews(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        $news.innerHTML += createNews(arr[i]);
    }
}

showNews(news);

//делает текст для вставки
function createNews(arr) {
    var showDate = "12.12.12";
    var showDate = arr.date.day + "." + arr.date.month + "." + arr.date.year + "  " + arr.date.hour + ":" + arr.date.minutes;
    var result = "<div class='nav-item'><p>" + arr.text + "</p><p>" + showDate + "</p></div>";
    return result;
}

//добавляет новую новость в массив
function addNews(formAutor, formTitle) {
    removeChildren($news);
    var text = "You added <span>" + formTitle.value + "</span> by <span>" + formAutor.value + "</span> to your <span>Must Read Item</span>";
    var newDate = new Date();
    var date = { day: newDate.getDay(), month: newDate.getMonth() + 1, year: newDate.getFullYear(), hour: newDate.getHours(), minutes: newDate.getMinutes() };
    var newNews = new News(text, date);
    news.push(newNews);
    showNews(news);
}


//добавление звезды при клике
function addStars(bookNum, starNum) {
    library[bookNum].stars = starNum + 1;
    var changBook = document.getElementById("part" + bookNum);
    //createBook(bookNum, i);
    showBooks(library);
}

//подсветка звезд при наведении

//поиск по сайту
var input = document.getElementById("searchItem");
var searchLibrary = [];

//console.log(input);

input.oninput = function () {
    var searchWord = searchItem.value;
    console.log(searchWord);
    for (var i = 0; i < library.length; i++) {
        var a=library[i].autor;
        var place = a.indexOf(searchWord);
        console.log(a);
        console.log(place);
        if (place !==-1) {
            searchLibrary.push(library[i]);
            //delete searchLibrary[i];
            //searchLibrary.splice(i, 1,'no');
        }
    }
    console.log(searchLibrary);
    showBooks(searchLibrary);
    searchLibrary = [];
};