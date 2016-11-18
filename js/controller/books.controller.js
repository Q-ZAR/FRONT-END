var Controller = (function (Utils, View, BookModel, NotifController) {
    'use strict';

    var $books = document.querySelector("#cnt");

    /* ----------- 
       filters 
    ----------- */
    function showAll(arr) {
        Utils.removeChildren($books);
        View.showBooks(arr);
    }

    function showMostPopular(arr) {
        Utils.removeChildren($books);
        for (var i = 0; i < arr.length; i++) {
            if (+arr[i].stars > 3) {

                $books.innerHTML += View.createBook(arr[i], i);
            }
        }
    }

    function showMostRecent(arr) {
        Utils.removeChildren($books);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].time > new Date(2016, 9, 12, 13, 20)) {
                $books.innerHTML += View.createBook(arr[i], i);
            }
        }
    }

    /* ----------- 
       search
    ----------- */
    var searchLibrary = [];

    function oninput() {
        var searchWord = searchItem.value;

        for (var i = 0; i < View.library.length; i++) {
            var a = View.library[i].autor;
            var b = View.library[i].title;
            var placeA = a.indexOf(searchWord);
            var placeB = b.indexOf(searchWord);

            if (placeA !== -1 || placeB !== -1) {
                searchLibrary.push(View.library[i]);
            }
        }
        View.showBooks(searchLibrary);
        searchLibrary = [];
    };

    /* ----------- 
  stars hover and click
    ----------- */
    function addStars(bookNum, starNum) {
        View.library[bookNum].stars = starNum + 1;
        var changBook = document.querySelector("#part" + bookNum);
        View.addStar(View.library[bookNum], bookNum);
        NotifController.newStarsOnBook(starNum + 1, View.library[bookNum].title);
    }

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

    function hovStarsOut(bookNum, starNum) {
        var starsBlock = event.target;
        var starsBlockMom = starsBlock.parentElement;
        returnStars(starsBlockMom, bookNum);
    }

    function returnStars(place, i) {
        var block = place;
        Utils.removeChildren(block);
        var text = View.addStar(View.library[i], i);
        block.innerHTML = text;
    }


    /* ----------- 
    + add new book
    ----------- */
    function addNewBook(arr) {
        var form = document.forms["addBtn"];
        var formAutor = form.elements["addAutor"];
        var formTitle = form.elements["addTitle"];
        var formPic = form.elements["addPic"];
        var formPicPic = formPic.value.slice(12);
        formPicPic = "assets/book-pics/" + formPicPic;
        var newBook = new BookModel.Book(formPicPic, formTitle.value, formAutor.value, "0", new Date());
        arr.push(newBook);
        View.showBooks(arr);
        NotifController.addNews(formAutor, formTitle);
        formTitle.value = "";
        formAutor.value = "";
    }

    return {
        showAll: showAll,
        showMostPopular: showMostPopular,
        showMostRecent: showMostRecent,
        oninput: oninput,
        addStars: addStars,
        hovStars: hovStars, 
        hovStarsOut: hovStarsOut, 
        addNewBook: addNewBook,
    };

} (Utils, View, BookModel, NotifController))