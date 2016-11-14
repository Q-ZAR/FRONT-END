var BookModel = (function (){

    'use strict';

     /*конструктор библиотеки книг*/
    function Book(image, title, autor, stars, time) {
        this.image = image; //фото
        this.title = title; //название книги
        this.autor = autor; //автор книги
        this.stars = stars; //звездность книги
        this.time = time; //время добавления книги
    }

    return {
        Book:Book,
    }
}());