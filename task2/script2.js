// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу


let numbers = [23, 45, 32, 78, 98];
let fruits = ['Banana', 'Orange', 'Watermelon', 'Apple', 'Kiwi'];
let countries = ['SAR', 'Ukraine', 'the USA', 'Canada', 'Poland', 4, 67, 87, 2, 10, true, true, false, false, true ];

console.log(numbers);
console.log(fruits);
console.log(countries);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль.

let states = [];
states[0] = 'New York';
states[1] = 'New Jersey';
states[2] = 'Pennsylvania';
states[3] = 'Maryland';
states[4] = 'Delaver';

console.log(states);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині.

for (let i = 0; i<=10; i++) {
    document.write('<div>' + 'Hola' + '</div>')
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині.

for (let i = 0; i<=10; i++ ) {
    document.write('<div>' + 'number ' + i + '</div>');
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i<=20) {
    document.write('<h1>'+'Lorem ipsum dolor sit amet' + '</h1>');
    i++;
}


//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let j = 0;
while (j<=20) {
    document.write('<h1>' + 'Number ' + j +'</h1>');
    j++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let orders = [50, 34, 65, 23, 67, 87, 93, 12, 73, 43];
for (const order of orders) {
    document.write(order + '</br>');
}






// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let words = ['Kiev', 'Warsaw', 'Capetown', 'Wahington', 'Tokio', 'Amsterdam', 'Berlin', 'Paris', 'Minsk', 'Mexico'];
for (const word of words) {
    document.write(word + '</br>');
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let subjects = [true, 'Amsterdam', 'Berlin', false,  'Paris', 'Minsk', 'Mexico', 2, 76, 91];
for (const subject of subjects) {
    console.log(subject);
} 


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. 
//За допомогою if та typeof вивести тільки булеві елементи.
let items = [true, 'Amsterdam', 'Berlin', false,  'Paris', true, 'Mexico', 2, 76, 91];
for (const item of items) {
    if (typeof(item) === "boolean") {
    console.log(item)
    }
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу.  
//За допомогою if та typeof вивести тільки числові елементи

let wordsAr = [true, 'Amsterdam', 'Berlin', false,  'Paris', true, 'Mexico', 2, 76, 91];
for (const word of wordsAr) {
    if (typeof(word) === "number") {
    console.log(word)
    }
}


//- Створити масив з 10 елементів числового, стрічкового і булевого типу. 
//За допомогою if та typeof вивести тільки рядкові елементи
let books = [true, 'Amsterdam', 'Berlin', false,  'Paris', true, 'Mexico', 2, 76, 91];
for (const book of books) {
    if (typeof(book) === "string") {
    console.log(book)
    }
}
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. 
//Вивести в консоль всі його елементи в циклі.
let emptyArrays = [];
emptyArrays[0] = 'a';
emptyArrays[1] = 23;
emptyArrays[2] = 'Earth';
emptyArrays[3] = true;
emptyArrays[4] = false;
emptyArrays[5] = 'image';
emptyArrays[6] = 90;
emptyArrays[7] = 76;
emptyArrays[8] = 32;
emptyArrays[9] = 'apple';
for (const emptyArray of emptyArrays) {
    console.log(emptyArray)
}






// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i=0; i<10; i++) {
    console.log(i)
    document.write(i + '</br>')
}


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i=0; i<100; i++) {
    console.log(i);
    document.write(i + '</br>');
}



// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write//
for (let i=0; i<100; i+=2) {
    console.log(i);
    document.write(i + '</br>');
}


//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i=0; i<100; i+=2) {
    console.log(i);
    document.write(i + '</br>');
}


//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i=1; i<100; i+=2) {
    console.log(i);
    document.write(i + '</br>');
}


//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for(let m=0; m<2; m++){
for (let s = 0; s<60; s++) {
    console.log (`time: ${m}:${s}`);
}
}


//- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for(let h = 0; h<=2;h++) {
for(let m=0; m<60; m++){
    for (let s = 0; s<60; s++) {
        console.log (`time: ${h}:${m}:${s}`);
        if (h === 2 && m === 20 && s === 0) {
            break;
        }
    }
    if (h ===2 && m ===20) {
        break;
    }
    }
}


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let abc = [ 'a', 'b', 'c'];
for (let i=0; i<abc.length; i++) {
    document.write(abc[i])
}
document.write('<br>');



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let cba = [ 'a', 'b', 'c'];
n = 0;
while (n<cba.length) {
    document.write(cba[n]);
    n++;
}
document.write('<br>');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let abcs = [ 'a', 'b', 'c'];
for (const abc of abcs) {
    document.write(abc)
}

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let tree = ['a', 'b', 'c'];
tree.push(1);
tree.push(2);
tree.push(3);
console.log(tree);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let two = [1, 2, 3];
two = [3, 2, 1];
console.log(two);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

let one = [1, 2, 3];
one.push(4);
one.push(5);
one.push(6);
console.log(one);


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let five = [1, 2, 3];
five.unshift(4);
five.unshift(5);
five.unshift(6);
console.log(five);


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let seven = ['js', 'css', 'jq'];
let firstItem = seven.shift();
console.log(firstItem);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
let six = ['js', 'css', 'jq'];
let lastItem = six.pop();
console.log(lastItem);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let four = [1, 2, 3, 4, 5];
let fourSliced = four.slice(3);
console.log(fourSliced);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
let ten = [1, 2, 3, 4, 5];
let tenSliced = ten.slice(0, 2);
console.log(tenSliced);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції solice перетворіть масив в [1, 4, 5].????????????????????????????

let thirteen = [1, 2, 3, 4, 5];
let thirteenSpliced = thirteen.splice(1, 2);
console.log(thirteen);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let twelve = [1, 2, 3, 4, 5];
let twelveSpliced = twelve.splice(3, 0, 'a', 'b', 'c');
console.log(twelve);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього
// масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let fifteen = [1, 2, 3, 4, 5];

fifteen.splice(2,0, 'a', 'b');
fifteen.splice(6,0, 'c');
fifteen.splice(8, 0, 'e');
console.log(fifteen);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let oranges = [50, 34, 65, 23, 67, 87, 93, 12, 73, 43];
for (const orange of oranges) {
    if (orange % 2 === 0) {
        console.log(orange);
    }
}


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший.

let bananas = [50, 34, 65, 23, 67, 87, 93, 12, 73, 43];
let mangos = [];
for (let i = 0; i<bananas.length; i++) {
    mangos.push(bananas[i])
}
console.log(mangos);
console.log(bananas);




// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. 
//За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let stars = [50, 34, 65, 23, 67, 87, 93, 12, 75, 48];
let arrays = [];
for (let i = 0; i<stars.length; i++) {
    arrays[i] = stars[i];
    
}
console.log(arrays);

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:


// 1. перебрати його циклом while
let doors = [2,17,13,6,22,31,45,66,100,-18];
let d = 0;
while (d < doors.length) {
    console.log(doors[d]);
    d++;
}

// 2. перебрати його циклом for

for (const door of doors) {
    console.log(door);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let g=1;
while (g < doors.length) {
    console.log(doors[d]);
    g+=2;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let d=1; d<doors.length; d+=2) {
    console.log(doors[d]);
}


// 5. перебрати циклом while та вивести  числа тільки парні  значення

d=0;
while (d < doors.length) {
    if (doors[d] % 2 === 0) {
    console.log(doors[d]);
}
d++;
}


// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (const door of doors) {
    if (door % 2 === 0) {
    console.log(door);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
let array12 = [2,17,13,6,22,31,45,66,100,-18];
for (let i=0; i< array12.length; i++) {
    if (array12[i] % 3 === 0) {
        array12[i] = 'okten';
    }
}
console.log(array12);

// 8. вивести масив в зворотньому порядку.
let array13 = [2,17,13,6,22,31,45,66,100,-18];
console.log(array13.reverse());









// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу. 

let emptyArray = [];
console.log(emptyArray);
while (emptyArray.length<50) { 
    let h = Math.floor((Math.random() * 1000) + 1);
    if(h % 2 === 0) {
      emptyArray.push(h);
}
}




// - заповнити його 50 непарними числами за допомоги циклу.
let oneMoreArray = [];
console.log(oneMoreArray);
while (oneMoreArray.length<50) { 
    let h = Math.floor((Math.random() * 100) + 1);
    if(h % 2 !== 0) {
        oneMoreArray.push(h);
}
}

// 1
//  створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.

let anotherArray = [];
console.log(anotherArray);
while (anotherArray.length<50) { 
    let h = Math.floor((Math.random() * 100) + 1);
    if(h % 2 === 0) {
      anotherArray.push(h);
}
}
// 2. заповнити його 50 непарними числами за допомоги циклу.
let mondayArray = [];
console.log(mondayArray);
while (mondayArray.length<50) { 
    let h = Math.floor((Math.random() * 100) + 1);
    if(h % 2 !== 0) {
        mondayArray.push(h);
}
}
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.

let tuesdayArray = [];
console.log(tuesdayArray);
while (tuesdayArray.length<20) { 
    let h = Math.floor((Math.random() * 100) + 1);
    tuesdayArray.push(h);

}

//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
let rangeArray = [];
console.log(rangeArray);
while (rangeArray.length<20) { 
    let h = Math.floor((Math.random() * (732 - 8)) + 8);
    rangeArray.push(h);

}



//  2. вывести на консоль  каждый третий елемент
for (let i = 1; i<rangeArray.length; i+=2) {
    console.log(rangeArray[i]);

}
//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
for (let i = 1; i<rangeArray.length; i+=2) {
    if (rangeArray[i] % 2 === 0) {
    console.log(rangeArray[i]);
    }
}

//  4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.
let newArray =[];
console.log(newArray);
for (let i = 1; i<rangeArray.length; i+=2) {
    if (rangeArray[i] % 2 === 0) {
        newArray.push(rangeArray[i]);
    }
}


//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный.
for (let i = 0; i< rangeArray.length; i++) {
    if (rangeArray[i+1] % 2 === 0) {
        console.log(rangeArray[i])
    }

}

//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. 
//обрахувати середній чек.

let receipts = [100,250,50,168,120,345,188];
let receiptSum = 0;
for (const receipt of receipts) {
    receiptSum+=receipt;
}
averageReceipt = receiptSum / receipts.length;
console.log(Math.round(averageReceipt));




// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та 
//перемістити їх в інший масив.
let thursdayArray = [];
let fridayArray = [];
// console.log(thursdayArray);
while (thursdayArray.length<20) { 
    let h = Math.floor((Math.random() * 10) + 1);
    thursdayArray.push(h);
    fridayArray.push(h*5);

}
console.log(thursdayArray);
console.log(fridayArray);



// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, 
//і якщо об'єкт є числом,
//  додати його в інший масив.
let randomItems = [true, 'Amsterdam', 'Berlin', false,  'Paris', true, 'Mexico', 2, 76, 91];
let numberAr = [];
for (const item of randomItems) {
    if (typeof(item) === "number") {
    numberAr.push(item);
    }
}
console.log(numberAr);








