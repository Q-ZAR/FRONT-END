// Number
// task 1 - проверка на число
console.log("----!Number!----");
console.log("----Число ли это?----");

function isNumber(numb) {
	return !isNaN(parseFloat(numb)) && isFinite(numb);
}

console.log(isNumber(123));
console.log(isNumber('road'));
console.log(isNumber(' '));

// Number
// task 2 - отрицательное
console.log("----Это отрицательное число?----");

function isNegative(numb) {
	if (isNumber(numb)) {
		return numb < 0;
	} else {
		throw new Error('not a number');
	}
}

//console.log(isNegative('road'));
console.log(isNegative(1233));
console.log(isNegative(-1233));


// Number
// task 3 - положительное
console.log("----Это положительное число?----");

function isPositive(numb) {
	if (isNumber(numb)) {
		return (numb > 0);
	} else {
		throw new Error('not a number');
	}
}

//console.log(isPositive('road'));
console.log(isPositive(1233));
console.log(isPositive(-1233));


// Number
// task 4 - факториал с рекурсией
console.log("----Факториал----");

function factorial(numb) {
	if (isNumber(numb)) {
		if (numb != 1) {
			return numb * factorial(numb - 1);
		} else {
			return 1;
		}
	}

	throw new Error('not a number');
}

console.log(factorial(5));

// Number
// task 5 - простое число
console.log("----Простое число?----");

function isPrime(numb) {
	if (isPositive(numb)) {

		if (numb == 1) {
			//return ("Это не простое число (число 1)"); 
			return false;
		}
		for (var i = 2; i < numb; i++) {
			if (numb % i == 0) {
				return false;
			}
		}
		return true;
	}
}

console.log(isPrime(1));
console.log(isPrime(11));
console.log(isPrime(12));

// String
// task 1 - проверка на строку
console.log("----!String!----");
console.log("----Строка ли это?----");

function isString(str) {
	return (typeof (str) === "string");
}

console.log(isString(123));
console.log(isString('road'));
console.log(isString(' '));

// String
// task 2 - преобразование в число
console.log("----Можно ли преобразовать в число?----");

function canParseToNumber(str) {
	var result;

	if (isString(str)) {
		var strNumb = +str;

		result = isFinite(strNumb);
	} 
	return result;
}

console.log(canParseToNumber("123"));
console.log(canParseToNumber('road'));

// String
// task 3 - длина строки
console.log("----Определить длину строки----");

function getStringLength(str) {
	if (isString(str)) {
		return str.length;
	} else {
		throw new Error('not a string');
	}
}

//console.log(getStringLength(123));
console.log(getStringLength('road'));
console.log(getStringLength(' '));

// String
// task 4 - длина строки
console.log("----Преобразовать в camel case----");

function camelize(str) {
	if (isString(str)) {
		var arr = str.split(" ");
		for (var i = 0; i < arr.length; i++) {
			arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
		}
		return str = arr.join("");
	}
}

console.log(camelize("java script"));
console.log(camelize("small Cat In the garden"));

// String
// task 5 - текст в capitalize
console.log("----Преобразовать в capitalize----");

function capitalize(str) {
	if (isString(str)) {
		str = str.replace(str[0], str[0].toUpperCase());
	}
	return str;
}

console.log(capitalize("small cat"));

// String
// task 6 - число вхождений элемента в строке

/*console.log("----Кол-во повторений элемента в строке----");
function findOccurrences(el,str){
	for (var i = 0; i < str.length; i++) {
		var n=str.indexOf(el,i);
		console.log(n);
	}
} 

test24 = findOccurrences("a","small cata");
console.log(test24); */

console.log("----Кол-во повторений элемента в строке----");

function findOccurrences(el, str) {
	var arr = str.split(el);

	return arr.length - 1;
}

console.log(findOccurrences("a", "small cat a"));


// Array
// task 1 - массив ли это?
console.log("----!Array!----");
console.log("----Массив ли это?----");

function isArray(array) {
	return array instanceof Array;
}

console.log(isArray([1, 2, 3]));
console.log(isArray([]));
console.log(isArray());
console.log(isArray(new Date));

// Array
// task 2 - Убираем элементы
console.log("----Убираем элементы----");

function cleanArr(array) {
	if (isArray(array)) {
		//console.log(array);
		for (var i = 0; i < array.length; i++) {
			if (!array[i]) {
				delete array[i];
			}
		}
		return array;
	}
}

console.log(cleanArr([1, 2, null, null, 3, 0, null, "0", false, 4, undefined, 5, NaN, NaN]));

// Array
// task 3 - максимальное значение в массиве
console.log("----Максимальное значение в массиве----");

function maxValue(array) {
	if (isArray(array)) {

		var max = array[0];

		for (var i = 1; i < array.length; i++) {
			if (array[i] >= max) {
				max = array[i];
			}
		}
	} else {
		throw new Error('not an array');
	}
	return max;
}

console.log(maxValue([1, 3, 6, 2, 0, 8, 10, 33, 3, 4]));
//console.log(maxValue("like array"));

// Array
// task 4 - минимальное значение в массиве
console.log("----Минимальное значение в массиве----");

function minValue(array) {
	if (isArray(array)) {
		var min = array[0];
		for (var i = 1; i < array.length; i++) {
			if (array[i] <= min) {
				min = array[i];
			}
		}
	} else {
		throw new Error('not a string');
	}
	return min;
}

console.log(minValue([1, 3, 6, 2, 8, 10, 33, 3, 4]));
//console.log(minValue("like array"));

// Array
// task 5 - строка в массив из слов
console.log("----Преобразовать строку в массив из слов----");

function stringToArray(str) {
	var array = str.split(" ");

	return array;
}

console.log(stringToArray("like array"));
console.log(stringToArray("little cat in the garden"));

// Array
// task 6 - наиболее частый элемент массива
console.log("----Найти наиболее частый элемент массива----");

function frequentItem(array) {
	if (isArray(array)) {

		var n = 0; // считает кол-во повторов
		var max = 0; // самое большое кол-во повторов
		var item; //повторяющееся число

		for (var i = 0; i < array.length; i++) {
			for (var j = 0; j < array.length; j++) {
				if (array[j] == array[i]) { n = n + 1; }
			}
			if (n > max) { max = n; item = array[i]; }
			//на всякий случай
			n = 0;
		}
		return item;
	}
}


console.log(frequentItem(["d", "s", "f", "f", "a", "d", "f"]));
console.log(frequentItem([1, 3, 3, 7, 10, 3, 71, 4]));

// Array
// task 7 - клон массива
console.log("----Клон массива----");

function cloneArr(array) {
	if (isArray(array)) {
		//console.log(array);

		var clone = array.slice();

		return clone;
	}
}

console.log(cloneArr([1, 2, 3, 4, 5]));

// Array
// task 8 - удалить дубликаты строк из массива (игнор чувств к рег)
console.log("----Удалить дубликаты строк----");

function delDubl(array) {
	if (isArray(array)) {

		var strLeng = array.length;
		var arrayResult = array; //массив, который будем сравнивать и редактировать

		for (i = 0; i < strLeng; i++) {
			for (j = 0; j < strLeng; j++) {
				if (array[i] == arrayResult[j] && i != j) {
					arrayResult.splice(j, 1); //удаляет повторный элемент
				}
			}
		}
	}
	return arrayResult;
}

console.log(delDubl([1, 2, 1, 4, 1]));
console.log(delDubl(["a", "a", "d", "f", "d", "j"]));
console.log(delDubl(["a", "A", "d", "A", "D", "j"]));

// Array
// task 9 - объединить 2 массива и удалить дубликаты
console.log("----Удалить дубликаты строк после суммирования массивов----");

function delDublInSum(array, array1) {
	if (isArray(array) && isArray(array1)) {
		array = array.concat(array1);

		var strLeng = array.length;
		var arrayResult = array; //массив, который будем сравнивать и редактировать

		for (i = 0; i < strLeng; i++) {
			for (j = 0; j < strLeng; j++) {
				if (array[i] == arrayResult[j] && i != j) {
					arrayResult.splice(j, 1); //удаляет повторный элемент
				}
			}
		}
	}
	return arrayResult;
}

console.log(delDublInSum([1, 2, 1, 4, 1], [1, 8, 9, 2, 10]));
console.log(delDublInSum(["cat", "fish", "rat"], ["cat", "dog", "bird"]));

// Array
// task 10 - удалить определенный элемент из массива
console.log("----Удалить определенный элемент из массива----");

function delSpecific(el, array) {
	if (isArray(array)) {
		for (var i = 0; i < array.length; i++) {
			if (el == array[i]) {
				array.splice(i, 1);
			}
		}
		return array;
	}
}

console.log(delSpecific("bird", ["cat", "dog", "bird"]));

// Array
// task 11 - сортировка массива элементов
console.log("----Сортировка массива элементов----");

var library = [
	{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
	{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
	{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

library.sort(function (a, b) {
	if (a.title > b.title) {
		return 1;
	}
	if (a.title < b.title) {
		return -1;
	}
	return 0;
});

console.log(library);

// Objects
// task 1 - длина объекта
console.log("----!Objects!----");
console.log("----Определение длины объекта----");

var book = { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254, some: "test" };
var keys = Object.keys(book);
console.log(keys.length);

// Objects
// task 2 - список свойств
console.log("----Вывести список свойств из объекта----");

var book = { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254, some: "test" };
for (var key in book) {
	console.log(book[key]);
}


//Date
//task 1 - разница между 2 датами в днях
console.log("----!Date!----");
console.log("----Разница между 2 датами----");

var now = new Date(); //сейчас
var past = new Date(1994, 9, 14, 21, 30, 0, 0);

function diffTime(time1, time2) {
	var time = time2.valueOf() - time1.valueOf();

	time = time / 1000 / 60 / 60 / 24;
	time = time.toFixed(0);
	return time;
}

console.log(diffTime(past, now));

//Date
//task 2 - отобразить дату и время в опред. формате
console.log("----Дата и время настоящая (спец формат)----");

var now = new Date();

function formatDate(date) {
	var day = date.getDate();
	var month = +(date.getMonth()) + 1;
	var hours = date.getHours();
	var minutes = date.getMinutes();
	
	return ("сейчас " + day + "." + month + " время " + hours + ":" + minutes);
}

console.log(formatDate(now));

//Date
//task 3 - получить текущую дату
console.log("----Получить текущую дату----");

function nowDate() {
	var past = new Date(1994, 9, 14, 21, 30, 0, 0);
	return formatDate(past);
}

console.log(nowDate());


