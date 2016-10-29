// Number
// task 1 - проверка на число
console.log("----Число ли это?----");
function isNumber(numb){
	return !isNaN(parseFloat(numb)) && isFinite(numb);
}

test1 = isNumber(123);
console.log(test1);
test2 = isNumber('road');
console.log(test2);
test3 = isNumber(' ');
console.log(test3);

// Number
// task 2 - отрицательное
console.log("----Это отрицательное число?----");
function isNegative(numb){
	if (isNumber(numb)) {
		return (numb < 0);
	} else {
		return ("вообще не число");
	}
}
test4 = isNegative('road');
console.log(test4);
test5 = isNegative(1233);
console.log(test5);
test6 = isNegative(-1233);
console.log(test6);

// Number
// task 3 - положительное
console.log("----Это положительное число?----");
function isPositive(numb){
	if (isNumber(numb)) {
		return (numb > 0);
	} else {
		return ("вообще не число");
	}
}
test7 = isPositive('road');
console.log(test7);
test8 = isPositive(1233);
console.log(test8);
test9 = isPositive(-1233);
console.log(test9);

// Number
// task 4 - факториал с рекурсией
console.log("----Факториал----");
function Factorial(numb) {
	if (isNumber(numb)) {
		if (numb != 1) {
			return numb * Factorial(numb - 1);
		} else {
			return 1;
		}
	}
	return ("вообще не число");	
}
test10 = Factorial(5);
console.log(test10);

// Number
// task 5 - простое число
console.log("----Простое число?----");
function isPrime(numb){
	if (isPositive(numb)) {

		if (numb==1) {return ("Это не простое число (число 1)");}
		for (var i = 2; i<numb; i++) {
			if (numb%i==0) {
				return ("Это не простое число");
			}
		}
		return ("Это простое число");
	}
}

test11 = isPrime(11);
console.log(test11);
test12 = isPrime(12);
console.log(test12);

// String
// task 1 - проверка на строку
console.log("----Строка ли это?----");
function isString(str){
	if (typeof(str)=="string") {
		return true;
	} else {
		return false;
	}
}

test13 = isString(123);
console.log(test13);
test14 = isString('road');
console.log(test14);
test15 = isString(' ');
console.log(test15);

// String
// task 2 - преобразование в число
console.log("----Можно ли преобразовать в число?----");
function canParseToNumber(str){
	var strNumb= +str;
	return isFinite(strNumb);
}

test16 = canParseToNumber("123");
console.log(test16);
test17 = canParseToNumber('road');
console.log(test17);

// String
// task 3 - длина строки
console.log("----Определить длину строки----");
function getStringLength(str){
	if (isString(str)) {
		return str.length;
	} else {
		return ("Это не строка");
	}
}

test18 = getStringLength(123);
console.log(test18);
test19 = getStringLength('road');
console.log(test19);
test20 = getStringLength(' ');
console.log(test20);

// String
// task 4 - длина строки
console.log("----Преобразовать в camel case----");
function camelize(str) {
	if (isString(str)) {
		var arr = str.split(" ");
		for (var i = 0; i < arr.length; i++) {
			arr[i]=arr[i].replace(arr[i][0],arr[i][0].toUpperCase());
		}
		return str=arr.join("");
	}
}
test21 = camelize("java script");
console.log(test21);
test22 = camelize("small Cat In the garden");
console.log(test22);

// String
// task 5 - текст в capitalize
console.log("----Преобразовать в capitalize----");
function capitalize(str) {
	if (isString(str)) {
		str=str.replace(str[0],str[0].toUpperCase());
	}
	return str;
}

test23 = capitalize("small cat");
console.log(test23);

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
function findOccurrences(el,str){
	var arr= str.split(el);
	return arr.length-1;
} 

test24 = findOccurrences("a","small cat a");
console.log(test24);


// Array
// task 1 - массив ли это?
console.log("----Массив ли это?----");
function isArray(array){ 
	if (typeof(array)=='object')
		return true;
	else
		return false;
}

test25 = isArray([1,2,3]);
console.log(test25);
test26 = isArray([]);
console.log(test26);
test27 = isArray();
console.log(test27);

// Array
// task 2 - Убираем элементы
console.log("----Убираем элементы----");
function cleanArr(array){
	if (isArray(array)){
		console.log(array);
		var length=array.length;
		for (var i = 0; i < length; i++) {
			if (array[i]==null || array[i]==0 || array[i]==false || array[i]==undefined || isNaN(array[i])){
				array.splice(i,1);
				length=array.length; //обновляем
			}
		}
		return array;
	}
}

test28 = cleanArr([1,2,null,null,3,0,null,"0",false,4,undefined,5,NaN,NaN]);
console.log(test28);

// Array
// task 3 - максимальное значение в массиве
console.log("----Максимальное значение в массиве----");
function maxValue(array){
	if (isArray(array)){
		var max=array[0];
		for (var i = 1; i <array.length; i++) {
			if (array[i]>=max) {
				max=array[i];
			}
		}
	} else {
		return ("Это даже не массив")
	}
	return max;
}

test29 = maxValue([1,3,6,2,0,8,10,33,3,4]);
console.log(test29);
test30 = maxValue("like array");
console.log(test30);

// Array
// task 4 - минимальное значение в массиве
console.log("----Минимальное значение в массиве----");
function minValue(array){
	if (isArray(array)){
		var min=array[0];
		for (var i = 1; i <array.length; i++) {
			if (array[i]<=min) {
				min=array[i];
			}
		}
	} else {
		return ("Это даже не массив")
	}
	return min;
}

test31 = minValue([1,3,6,2,8,10,33,3,4]);
console.log(test31);
test32 = minValue("like array");
console.log(test32);

// Array
// task 5 - строка в массив из слов
console.log("----Преобразовать строку в массив из слов----");
function stringToArray(str){
	var array=str.split(" ");
	return array;
}
test33 = stringToArray("like array");
console.log(test33);
test34 = stringToArray("little cat in the garden");
console.log(test34);

// Array
// task 6 - наиболее частый элемент массива
console.log("----Найти наиболее частый элемент массива----");
function frequentItem(array){
	if (isArray(array)){
		var n=0; // считает кол-во повторов
		var max=0; // самое большое кол-во повторов
		var item; //повторяющееся число
		for (var i = 0; i < array.length; i++) {
			for (var j=0; j < array.length; j++) {
				if (j==i) {
					n=n+1;
				}
			} if (n > max){
				max = n;
				item = j;
			}
		}
		return array[item];
	}
}

test35 = frequentItem(["d","s","f","f","a","d","f"]);
console.log(test35); 

// Array
// task 7 - клон массива
console.log("----Клон массива----");
function cloneArr(array){
	if (isArray(array)){
		console.log(array);
		var clone = array.slice();
		return clone;
	}
}

test36 = cloneArr([1,2,3,4,5]);
console.log(test36); 

// Array
// task 8 - удалить дубликаты строк из массива (игнор чувств к рег)
console.log("----Удалить дубликаты строк----");
function delDubl(array){
	if (isArray(array)) {
		console.log("было "+array);
		var strLeng = array.length;
		var arrayResult = array; //массив, который будем сравнивать и редактировать
		for (i = 0; i < strLeng; i++){
			for (j = 0; j < strLeng; j++){
				if (array[i]==arrayResult[j] && i!=j){
					arrayResult.splice(j,1); //удаляет повторный элемент
				}
			}
		}
	}
	return ("стало "+arrayResult);
}

test37 = delDubl([1,2,1,4,1]);
console.log(test37); 
test38 = delDubl(["a","a","d","f","d","j"]);
console.log(test38); 
test39 = delDubl(["a","A","d","A","D","j"]);
console.log(test39); 

// Array
// task 9 - объединить 2 массива и удалить дубликаты
console.log("----Удалить дубликаты строк после суммирования массивов----");
function delDublInSum(array,array1){
	if (isArray(array) && isArray(array1)) {
		console.log("первый "+array);
		console.log("второй "+array1);
		array=array.concat(array1);
		var strLeng = array.length;
		var arrayResult = array; //массив, который будем сравнивать и редактировать
		for (i = 0; i < strLeng; i++){
			for (j = 0; j < strLeng; j++){
				if (array[i]==arrayResult[j] && i!=j){
					arrayResult.splice(j,1); //удаляет повторный элемент
				}
			}
		}
	}
	return ("стало "+arrayResult);
}

test40 = delDublInSum([1,2,1,4,1],[1,8,9,2,10]);
console.log(test40); 
test41 = delDublInSum(["cat","fish","rat"],["cat","dog","bird"]);
console.log(test41); 

// Array
// task 10 - удалить определенный элемент из массива
console.log("----Удалить определенный элемент из массива----");
function delSpecific(el,array){
	if (isArray(array)){
		console.log("удалить "+el+" из ["+array+"]");
		for (var i = 0; i < array.length; i++) {
			if (el==array[i]){
				array.splice(i,1);
			}
		}
		return array;
	}
}

test42 = delSpecific("bird",["cat","dog","bird"]);
console.log(test42); 

// Array
// task 11 - сортировка массива элементов
console.log("----Сортировка массива элементов----");








