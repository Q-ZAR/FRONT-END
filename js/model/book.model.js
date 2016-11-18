var BookModel = (function (){

    'use strict';

    function Book(image, title, autor, stars, time) {
        this.image = image;
        this.title = title;
        this.autor = autor; 
        this.stars = stars || 0;
        this.time = time;
    }

    return {
        Book:Book,
    }
}());