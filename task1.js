// 1. Присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 
// 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write.


let word1 = `hello`;
let word2 = `owu`;
let word3 = `com`;
let word4 = `ua`;
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let boolean1 = true;
let boolean2 = false;
console.log(word1);
alert(word1);
document.write(word1);
console.log(word2);
alert(word2);
document.write(word2);
console.log(word3);
alert(word3);
document.write(word3);
console.log(word4);
alert(word4);
document.write(word4);
console.log(num1);
alert(num1);
document.write(num1);
console.log(num2);
alert(num2);
document.write(num2);
console.log(num3);
alert(num3);
document.write(num3);
console.log(num4);
alert(num4);
document.write(num4);
console.log(num5);
alert(num5);
document.write(num5);
console.log(num6);
alert(num6);
document.write(num6);
console.log(num7);
alert(num7);
document.write(num7);
console.log(boolean1);
alert(boolean1);
document.write(boolean1);
console.log(boolean2);
alert(boolean2);
document.write(boolean2);

// 2. Переопределить каждую переменную из задания 1 дав им произвольные значения.
// Вывести каждую при помощи console.log , alert, document.write.

word1 = `How `;
word2 = `are `;
word3 = `you `;
word4 = `doing?`;
num1 = 5;
num2 = 12;
num3 = -9;
num4 = 3;
num5 = 3.454;
num6 = 1.1;
num7 = 26;
boolean1 = false;
boolean2 = true;

console.log(word1);
alert(word1);
document.write(word1);
console.log(word2);
alert(word2);
document.write(word2);
console.log(word3);
alert(word3);
document.write(word3);
console.log(word4);
alert(word4);
document.write(word4);
console.log(num1);
alert(num1);
document.write(num1);
console.log(num2);
alert(num2);
document.write(num2);
console.log(num3);
alert(num3);
document.write(num3);
console.log(num4);
alert(num4);
document.write(num4);
console.log(num5);
alert(num5);
document.write(num5);
console.log(num6);
alert(num6);
document.write(num6);
console.log(num7);
alert(num7);
document.write(num7);
console.log(boolean1);
alert(boolean1);
document.write(boolean1);
console.log(boolean2);
alert(boolean2);
document.write(boolean2);

// 3. Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write.
 
const const1 = 25;
const const2 = -76;
const const3 = 1;
const const4 = 'Apple';
const const5 = 'Orange';
const const6 = 'Banana';
console.log(const1);
alert(const1);
document.write(const1);
console.log(const2);
alert(const2);
document.write(const2);
console.log(const3);
alert(const3);
document.write(const3);
console.log(const4);
alert(const4);
document.write(const4);
console.log(const5);
alert(const5);
document.write(const5);
console.log(const6);
alert(const6);
document.write(const6);

// 4. При помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. 
//Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , 
//alert, document.write.

let firstName = prompt("Enter your first name");
let middleName = prompt("Enter your middle name");
let lastName = prompt("Enter your last name");
console.log(firstName); alert(firstName); document.write(firstName);
console.log(middleName); alert(middleName); document.write(middleName);
console.log(lastName); alert(lastName); document.write(lastName);

//5. Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);


//6. Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

let momFirstName = prompt("Enter your mother's first name");
let momMiddleName = prompt("Enter your mother's middle name");
let momLastName = prompt("Enter your mother's last name");

let mom = momFirstName + ' ' + momMiddleName + ' ' + momLastName;
console.log(mom);

let dadFirstName = prompt("Enter your fathers's first name");
let dadMiddleName = prompt("Enter your father's middle name");
let dadLastName = prompt("Enter your father's last name");

let dad = dadFirstName + ' ' + dadMiddleName + ' ' + dadLastName;
console.log(dad);

//7. При помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

let firstNum = +prompt("Enter first number");
let secondNum = +prompt("Enter second number");
let thirdNum = +prompt("Enter third number");
console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);

//8. При помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. 
//Сложить их между собой записав результат в переменную result и вывести в консоль браузера.

let numberOne = parseInt(prompt('Enter your number'));
let numberTwo = parseInt(prompt('Enter your number'));
let numberThree = parseInt(prompt('Enter your number'));
let numberFour = parseInt(prompt('Enter your number'));
let result = numberOne + numberTwo + numberThree + numberFour;
console.log(result);


// 9.при помощи prompt()  получить 3 числа с плавающей точекой. 
//при помощи parseFloat привести их к соответсвующему типу. 
//Сложить их между собой записав результат в переменную result и вывести в консоль браузера.

let floatNum1 = parseFloat(prompt('Enter your number'));
let floatNum2 = parseFloat(prompt('Enter your number'));
let floatResult = floatNum1 + floatNum2;
console.log(floatResult);

// 10. при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round 
//Сложить их между собой записав результат в переменную  и вывести в консоль браузера

let roundNum1 = Math.round(prompt('Enter your number'));
let roundNum2 = Math.round(prompt('Enter your number'));
let roundNum3 = Math.round(prompt('Enter your number'));
let roundResult = roundNum1 + roundNum2 + roundNum3;
console.log(roundResult);




// 11. при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу.  
//Первое число - это число которое будут возводить в степень. 
//Второе число - это число которое является степенью.
//  При помощи Math.pow возвести первое число в степень второго числа.

let numberBase = +prompt('Enter base number');
let numberPower = +prompt('Enter power number');
let powResult = Math.pow(numberBase, numberPower); 
console.log(powResult);

// 12. При помощи оператора опредеоения типа typeof определить типы следующих переменных и 
//вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;

let a = 100;
let b = '100'; 
let c = true;
let d = undefined;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));

// 13. Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
//     5 ? 6 -> true
//     5 ? 6 -> false
//     5 ? 6 -> false
//     5 ? 6 -> false
//     10 ? 10 -> true
//     10 ? 10 -> true
//     10 ? 10 -> false
//     10 ? 10 -> false
//     10 ? 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true

let result1 = 5 < 6;
let result2 = 5 > 6;
let result3 = 5 == 6;
let result4 = 5 === 6;
let result5 = 10 == 10;
let result6 = 10 === 10;
let result7 = 10 > 10;
let result8 = 10 < 10;
let result9 = 10 !== 10;
let result10 = 123 === '123';
let result11 = 123 == '123';

console.log(result1); console.log(result2); console.log(result3); console.log(result4); console.log(result5); console.log(result6); console.log(result7); console.log(result8); console.log(result9); console.log(result10); console.log(result11);


//Дополнительно:

// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 );  -> false
// console.log(34 > 33 && 23 < 90 );    -> true
// console.log(99 > 100 && 45 > 12 );   -> false
// console.log(132 > 100 || 45 < 12 );  -> true
// console.log(111 > 11 || 45 < 111 );  -> true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );  -> true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );   -> true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );-> false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));   -> true
// console.log(!!'-1'); -> true 
// console.log(!!-1); -> true
// console.log(!!'0'); -> true
// console.log(!!'null'); -> true
// console.log(!!'undefined'); -> true
// console.log(!!(3/'owu')); -> false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); -> true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); -> false






