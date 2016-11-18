var BookStorage = (function (BookModel) {
    'use strict';

    var booksState = [
        new BookModel.Book('assets/book-pics/pic-1.jpg', "Jewels of Nizam", "Geeta Devi", "4", new Date(2015, 10, 12, 13, 20)),
        new BookModel.Book('assets/book-pics/pic-2.jpg', "Cakes &amp; Bakes", "Sanjeev Kapoor", "5", new Date(2016, 10, 12, 13, 20)),
        new BookModel.Book('assets/book-pics/pic-3.jpg', "Jamie's Kitchen", "Jamie Oliver", "3", new Date(2016, 10, 12, 13, 20)),
        new BookModel.Book('assets/book-pics/pic-4.jpg', "Inexpensive Family Meals", "Simon Holst", "0", new Date(2016, 10, 12, 13, 20)),
        new BookModel.Book('assets/book-pics/pic-5.jpg', "Paleo Slow Cooking", "Chrissy Gower", "1", new Date(2016, 9, 12, 13, 20)),
        new BookModel.Book('assets/book-pics/pic-6.jpg', "Cook Like an Italian", "Tobie Puttock", "1", new Date(2016, 9, 12, 13, 20)),
        new BookModel.Book('assets/book-pics/pic-7.jpg', "Suneeta Vaswani", "Geeta Davi", "0", new Date(2016, 10, 12, 13, 20)),
        new BookModel.Book('assets/book-pics/pic-8.jpg', "Jamie Does", "Jamie Oliver", "0", new Date(2016, 7, 12, 13, 20)),
        new BookModel.Book('assets/book-pics/pic-9.jpg', "Jamie's italy", "Jamie Oliver", "0", new Date(2016, 10, 12, 13, 20)),
        new BookModel.Book('assets/book-pics/pic-10.jpg', "Vegetables Cookbook", "Matthew Biggs", "0", new Date(2016, 4, 12, 13, 20))
    ];

    return {
        booksState: booksState,
    }
} (BookModel));