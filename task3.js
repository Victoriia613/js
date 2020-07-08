// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

let dog = {
    name: 'Grace',
    age: 4,
    breed: 'borderCollie',
    colour: 'black',
    weight: 12

}
let human = {
    name: 'Mark',
    age: 23,
    height: 189,
    weight: 80,
    drivingLicense: true
}

let car = {
    type: 'convertible',
    model: 'chevroletCamaro',
    colour: 'blue',
    year: 2021,
    seats: 4
}

let appartment = {
    story: 8,
    badrooms: 3,
    balcony: true,
    parking: true,
    alarm: true  
}

let book = {
    type: 'non -fiction',
    genre: 'novel',
    name: 'The Sun Also Rises',
    author: 'Ernest Hemingway',
    pages: 400

}

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

let dogs = ['labrador', 'retriver', 'spaniel', 'akita', 'malamute'];
console.log (dogs);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

let house = {
    storeys: 3,
    backyard: {squere: 70, lawn:true},
    pool: true,
    garden: false,
    rooms: ['badroom', 'badroom', 'badroom', 'kitchen', 'dining room', 'bathroom', 'living room', 'office']

}
console.log(house);

let driver = {
    name: 'David',
    age: 25,
    height: 185,
    appearence: {eyes: 'green', hair: 'dark-brown', glasses: true },
    documents: ['driving license', 'insurance']
}
console.log(driver);

let toy = {
    name: 'R2-D2',
    model: ' Sphero R2-D2 R201ROW',
    remoteControl: true,
    details: {weight:'370 g', dimensions: '13.5 x 10.8 x 17 cm'},
    techSpecs: ['iOS & Android compatible', 'USB charging','Integrated Speaker']
}
console.log(toy);

let desk = {
    name: 'MICKE',
    details: {colour: 'white', drawers: 2},
    size: '150 x 60 cm',
    height: '70 cm',
    category: ['Tables & desks', 'computer desks', 'Desks for home',  'MICKE Desk']
}
console.log(desk);

let bag = {
    type: 'reversible tote bag',
    straps: {length: '25 cm', type: 'non-adjustable', material: 'polyurethane'},
    details: ['faux leather exterior', 'reversible smooth or all-over monogram styling', 'removable monogram pouch'],
    dimensions: '28 x 49 x 13',
    colour: 'brown'
}
console.log(bag);

// Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
// 			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в 
//консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
            ];
//статус Андрія
console.log(users[7].status);
// - статус Максима
console.log(users[4].status);
// - ім'я передостаннього об'єкту
console.log(users[users.length-2].name);
// - ім'я третього об'єкта
console.log(users[2].name);
// - вік Олега
console.log(users[6].age);
// - вік Олі
console.log(users[3].age);
// - вік + ім'я 5го об'єкта
console.log(users[4].age, users[4].name);
// - вік + сатус Анни
console.log(users[5].age, users[5].status);

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :




// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний
