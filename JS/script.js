// task 1
//какое число больше?!

var variabA = prompt("Введи первое число", "");
var variabB = prompt("Введи второе число", "");

function smallOrBig(a, b) {
	if (+variabA == +variabB) {
		return ("Эти числа равны ");
	} else if (+variabA > +variabB) {
		return (variabA + " больше " + variabB + "");
	} else {
		return (variabB + " меньше " + variabA + "");
	}
}

test8 = smallOrBig(variabA, variabB);
console.log(test8);

//выводит числа от 0 до 9 и проверяет их на четность
console.log("Я знаю, что... ");

function chet(numb) {
	for (var i = 0; i <= 9; i++) {
		if (isOdd(i)) {
			console.log("число " + i + " является четным ");
		} else {
			console.log("число " + i + " является нечетным ");
		}
	}
}

function isOdd(num) {
	return num % 2 === 0;
}

test9 = (chet());

//пустая ли введенная строка?!

var string = prompt("Введи строку для проверки", "Строку типа такой");

function emptyString(string) {
	string=string.replace(/ /g,"");
	return string === "";
}

console.log(emptyString(string));
// task 2
//строка - палиндром?

console.log(str + "- это палиндром? ");

function strPalindrome(str) {
	str = str.replace(/ /g, ''); //удалит все пробелы

	var strLeng = str.length;
	var result;

	for (var i = 0; i <= strLeng; i++) {
		if (str[i] === str[strLeng - 1 - i]) {
			result = true;
		} else {
			return false;
		}
	}

	return result;
}

console.log(strPalindrome("mycatdogym") ? console.log('yes') : console.log('no'));
console.log(strPalindrome("qwerewq") ? console.log('yes') : console.log('no'));
console.log(strPalindrome("q were wq") ? console.log('yes') : console.log('no'));

//создает много строк из частей одной

function strCombo(string) {
	console.log("Создадим из \'" + string + "\' много других слов: ");
	var resultCombo = "";
	for (i = 0; i <= string.length; i++) {
		for (j = i; j <= string.length; j++) {
			if (j > i) {
				console.log(string.substring(i, j) + "");
			}
		}
	}
}

test4 = (strCombo("kitty"));

//сортировка пузырьком для строки

console.log("Отсотрируем в алфавитном порядке: ");

function bubbleSort(str) {

	var strLeng = str.length;
	str = str.split('');

	//сделаем внешний цикл повторений операций
	for (var l = 0; l <= strLeng; l++) { 

		for (var i = 0; i <= strLeng - 1; i++) {
			if (str[i + 1] < str[i]) {
				var a = str[i];
				var b = str[i + 1];
				str[i] = b;
				str[i + 1] = a;
			}
		}
	}
	str = str.toString();
	str = str.replace(/,/g, ""); 
	return str;
}

console.log(bubbleSort("nvdfjhviudtgdjebca"));


//самое длинное слово в строке

function bigWord(line) {
	line = line.split(' ');

	var arrOfLeng = [];
	var result;

	for (var i = 0; i <= line.length - 1; i++) {
		arrOfLeng[i] = line[i].length;
	}

	var max = Math.max.apply(null, arrOfLeng);

	for (var i = 0; i <= line.length - 1; i++) {
		if (line[i].length == max) {
			result = line[i];
		}
	}

	return result;
}

console.log(bigWord("Kitty in the garden"));


//уникальные символы

console.log("уникальные символы");

function uniq(line) {
	var strLeng = line.length;
	line = line.split(''); //сделает массив из буковок	
	var lineResult = line; 

	for (i = 0; i <= strLeng - 1; i++) {
		for (j = 0; j <= strLeng - 1; j++) {
			if (line[i] == lineResult[j] && i != j) {
				lineResult[j] = ""; //удаляет повторный элемент
			}
		}
	}

	lineResult = lineResult.toString(); //из массива в строку
	lineResult = lineResult.replace(/,/g, ""); //уберем запятые из строки

	return lineResult;
}
console.log(uniq("kittyinthegarden"));