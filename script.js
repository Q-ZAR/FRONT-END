// task 1
//какое число больше?!

var variabA = prompt("Введи первое число","");
var variabB = prompt("Введи второе число","");

if (+variabA == +variabB) {
	document.writeln("Эти числа равны <br/>");
} else if (+variabA > +variabB) {
	document.writeln(variabA+" больше "+variabB+"<br/>");
} else {
	document.writeln(variabB+" больше "+variabA+"<br/>");
}

//выводит числа от 0 до 9 и проверяет их на четность
document.writeln("Я знаю, что... <br/>");
for (var i = 0; i <= 9; i++) {
	if (i%2 == 0) {
	document.writeln("число "+i+" является четным <br/>");
} else {
	document.writeln("число "+i+" является нечетным <br/>");
}
}

//пустая лт введенная строка?!

var string = prompt("Введи строку для проверки","Строку типа такой");
if (Boolean(string)==false) {
	document.writeln("<br/>Строка \'"+ string+ "\' является пустой <br/> <br/>");
} else {
	document.writeln("<br/>В строке \'"+ string+ "\' есть символы <br/> <br/>");
}

// task 2
//строка - палиндром?

function strPalindrome(str) {
	document.writeln(str+"- это палиндром? <br/>");
	str = str.replace(/ /g, ''); //удалит все пробелы
    var strLeng = str.length;
    var result = '';
    for (var i = 0; i <= strLeng; i++) {
      if (str[i] === str[strLeng - 1 - i]) {
        result = "да <br/>";
      } else {
        result = "нет <br/>";
        return result;
      }
    }
    return result;
  }

test1 = strPalindrome("mycatdogym");
document.writeln(test1+"<br/>");
test2 = strPalindrome("qwerewq");
document.writeln(test2+"<br/>");
test3 = strPalindrome("q were wq");
document.writeln(test3+"<br/>");

//создает много строк из частей одной

function strCombo(string) {
	document.writeln("Создадим из \'"+string+"\' много других слов: <br/>");
	var resultCombo = "";
	for (i = 0; i <= string.length; i++) {
		for (j = i; j <= string.length; j++) {
			if (j > i)
				document.writeln(string.substring(i, j)+"<br/>");
		}
	}
}

test4 = strCombo("kitty");

//сортировка пузырьком для строки

function bubbleSort(str) {
	document.writeln("<br/>Отсотрируем "+str+" в алфавитном порядке. <br/>");
	var strLeng = str.length;
	str = str.split('');
	for (var l = 0; l <= strLeng; l++) { //сделаем внешний цикл повторений операций
	
    for (var i = 0; i <= strLeng-1; i++) {
    	if (str[i+1] < str[i]) {
    		var a=str[i];
    		var b=str[i+1];
    		str[i]=b;
    		str[i+1]=a;
    	} 
    }
    }
    str = str.toString(); //из массива в строку
	str = str.replace(/,/g,""); //уберем запятые из строки 
    document.writeln("Получится : "+str+"<br/>");
}

test5 = bubbleSort("nvdfjhviudtgdjebca");


//самое длинное слово в строке

function bigWord(line) {
	line = line.split(' ');
	var arrOfLeng = [];
	var result;
	for (var i = 0; i <= line.length-1; i++) {
		arrOfLeng[i] = line[i].length;
	}
	var max = Math.max.apply(null, arrOfLeng);
	

	for (var i = 0; i <= line.length-1; i++) {
		if (line[i].length==max){
			result=line[i];
		}
	}
document.writeln("<br/>Максимальная длина слова = "+max+ ", слово ("+result+ ") <br/>");
	} 

test6 = bigWord("Kitty in garden");


//уникальные символы

function uniq (line) {
	document.writeln("<br/>строка с повторами: "+line+"<br/>");
	var strLeng = line.length;
	line = line.split(''); //сделает массив из буковок
	var lineResult = line; //массив, который будем сравнивать и редактировать
	for (i = 0; i <= strLeng - 1; i++){
		for (j = 0; j <= strLeng - 1; j++){
			if (line[i]==lineResult[j] && i!=j){
				lineResult[j]=""; //удаляет повторный элемент
			}
		}
	}
	lineResult = lineResult.toString(); //из массива в строку
	lineResult = lineResult.replace(/,/g,""); //уберем запятые из строки
	document.writeln("строка без повторов: "+lineResult+"<br/>");
}
test7 = uniq("kittyingarden");