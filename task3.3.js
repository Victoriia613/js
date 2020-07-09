// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let person = {
    idNumber: 10928374,
    age:25,
    citizenship: 'UK',
    insurance: true,
    drivingLicense: true
}

let country = {
    location: 'Southeast Europe',
    capital: 'Zagreb',
    language: 'croatian',
    government: 'Unitary parliamentary constitutional republic'
}

let band = {
    origin: 'London, England',
    genres: 'Rock',
    yearsActive: '1970–present',
    website: 'queenonline.com',
}

let ocean = {
    area: '106,460,000 sq km',
    subdivisions: 'the North Atlantic Ocean, the South Atlantic Ocean',
    averageDepth: '3,646 m'
}

let song = {
    band: 'The Beatles',
    author:  'Paul McCartney',
    album: 'Help!'
}



// - создать 5 объектов с полностью разным набором полей. 
//В каждом объекте должен присутсвовать массив и внутренний объект. 
//Опишите что угодно, машину, картину, болт... 
//Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// employee, user, phone, company, 

let house = {
    storeys: 3,
    backyard: {squere: 70, lawn:true},
    pool: true,
    garden: false,
    rooms: ['badroom', 'badroom', 'badroom', 'kitchen', 'dining room', 'bathroom', 'living room', 'office']

}

let desk = {
    details: {colour: 'white', drawers: 2},
    height: '70 cm',
    category: ['Tables & desks', 'computer desks', 'Desks for home',  'MICKE Desk']
}


let bag = {
    type: 'reversible tote bag',
    straps: {length: '25 cm', type: 'non-adjustable', material: 'polyurethane'},
    appearance: ['faux leather exterior', 'reversible smooth or all-over monogram styling', 'removable monogram pouch'],
    dimensions: '28 x 49 x 13',
    colour: 'brown'
}

let toy = {
    name: 'R2-D2',
    model: ' Sphero R2-D2 R201ROW',
    remoteControl: true,
    size: {weight:'370 g', dimensions: '13.5 x 10.8 x 17 cm'},
    techSpecs: ['iOS & Android compatible', 'USB charging','Integrated Speaker']
}

let musicBand = {
    members: ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'],
    backgroundInformation: {origin: 'Liverpool, England', genres: 'rock, pop', labels:'Parlophone,Apple,Capitol'},
    yearOfFormation: 1960
}

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
for (const key in person) {
        console.log(key);
    }
    for (const key in country) {
        console.log(key);
    }

    for (const key in band) {
        console.log(key);
    }
    for (const key in ocean) {
        console.log(key);
    }
    for (const key in song) {
        console.log(key);
    }
    for (const key in house) {
        console.log(key);
    }
    for (const key in desk) {
        console.log(key);
    }
    for (const key in bag) {
        console.log(key);
    }
    for (const key in toy) {
        console.log(key);
    }
    for (const key in musicBand) {
        console.log(key);
    }


// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

console.log(Object.keys(person));
console.log(Object.keys(country));
console.log(Object.keys(band));
console.log(Object.keys(ocean));
console.log(Object.keys(song));
console.log(Object.keys(house));
console.log(Object.keys(desk));
console.log(Object.keys(bag));
console.log(Object.keys(toy));
console.log(Object.keys(musicBand));

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// - взять объекты из задания 1 и превратить каждый в json.
// - взять json из задания 11 и превратить их обратно в объекты.
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];


