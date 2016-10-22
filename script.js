// task 1

var a="Variable 1";
var b="Variable 2";


console.log(a);
console.log(b);


// task 2

var a=4; // основание
var b=6; // высота

var c=(a*b)/2;
console.log(c);


// task 3.1 
//сдвиг кота на одну позицию влево

var cat1 = ["Barsik","Pushok","Maruska"];
var n = 0;
var first=cat1[0];
while (n < cat1.length) {
	cat1[n]=cat1[n+1];
	n=n+1;
}
cat1[cat1.length-1]=first;
console.log(cat1);

// task 3.2 
// сдвиг кота на одну позицию влево
var cat2 = ["Basya","Nastya","Richi"];
var n = 0;
var first=cat2[0];
do {
	cat2[n]=cat2[n+1];
	n=n+1;
}
while 
	(n < cat2.length)

cat2[cat2.length-1]=first;
console.log(cat2);

// task 3.3 
// сдвиг кота на одну позицию влево
var cat3 = ["Snegok","Ryigik","Pyhlya"];
var first=cat3[0];
for (var n = 0; n < cat3.length; n++) {
	cat3[n]=cat3[n+1];
}
cat3[cat3.length-1]=first;
console.log(cat3);


// task 4
//различия между i++ и ++i
var h=10; 
var j=10;

h=h++; //возвращает h без ++
j=++j; //возвращает h с ++
console.log(h,j);

// task 5
// выясняет, переменная отрицательная, положительная или равна 0
var i=-10;
if (i==0){
	console.log("Равно нулю");
} else if (i>0) {
	console.log("Больше нуля");
} else {
console.log("Меньше нуля");
}

// task 6
// спашивает имя и возвращает его в консоль
var name;
name=prompt("Как вас зовут?", '');
console.log(name);


// task 7
// вычисляет факториал с запросом его от пользователя
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}
number=prompt("Факториал какого числа вас интересует?", '');
console.log( factorial(number));


