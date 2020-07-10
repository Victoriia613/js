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

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, 
//год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными).
 
let cars = [{model: 'Toyota', year: 2018, color: 'white', power: 127 }, {model: 'Toyota Camry', year: 2020, color: 'white', power: 131 }, {model: 'Volkswagen Jetta SEL', year: 2010, color: 'black', power: 128}, {model: 'BMW X5', year: 2015, color: 'black', power: 125}, {model: 'BMW X3', year: 2018, color: 'grey', power: 120}, {model: 'Range Rover Evoque', year: 2020, color: 'white', power: 128}, {model: 'Range Rover Sport', year: 2019, color: 'blue', power: 130}, {model: 'Range Rover Discovery Sport', year: 2020, color: 'orange', power: 132}, {model: 'MEGANE SEDAN', year: 2019, color: 'white', power: 130}, {model: 'Range Rover Velar', year: 2018, color: 'blue', power: 130}];
console.log(cars);

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let cities = [{name:'Kiev', population: 2950800, country: 'Ukraine', region: 'north-central Ukraine'}, {name:'Warsaw', population:1790658, country: 'Poland', region: ' east-central Poland'}, {name:'Budapest', population:17530000, country: 'Hungary', region: 'Central Hungary'}];
console.log(cities);
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let carsWithDrivers = [{model: 'Toyota', year: 2018, color: 'white', power: 127, driver: {name:'John', age:30, gender:'male', experience: 3 }}, {model: 'Toyota Camry', year: 2020, color: 'white', power: 131, driver: {name:'Anna', age:24, gender:'female', experience:5 }}, {model: 'Volkswagen Jetta SEL', year: 2010, color: 'black', power: 128, driver: {name:'Simon', age:35, gender: 'male', experience:18 }}];
console.log(carsWithDrivers);

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
i = 0;
while (i<cars.length) {
    console.log(cars[i]);
    i++;
}

i = 0;
while (i<cities.length) {
    console.log(cars[i]);
    i++;
}

i = 0;
while (i<carsWithDrivers.length) {
    console.log(cars[i]);
    i++;
}


// - проитерировать каждый массив из задания 5,6,7 при помощи for .
for (i = 0; i<cars.length; i++) {
    console.log(cars[i]);
}
for (i = 0; i<carsWithDrivers; i++) {
    console.log(cars[i]);
}
for (i = 0; i<cities; i++) {
    console.log(cars[i]);
}

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
for (const obj of cars) {
    console.log(obj);
}
for (const iter of cities) {
    console.log(iter);
}
for (const car of carsWithDrivers) {
    console.log(car);
}

// 11. - взять объекты из задания 1 и превратить каждый в json.
let jsonPerson = JSON.stringify(person);
console.log(jsonPerson);
let jsonCountry = JSON.stringify(country);
console.log(jsonCountry);
let jsonBand = JSON.stringify(band);
console.log(jsonBand);
let jsonOcean = JSON.stringify(ocean);
console.log(jsonOcean);
let jsonSong = JSON.stringify(song);
console.log(jsonSong);
let jsonHouse = JSON.stringify(house);
console.log(jsonHouse);
let jsonDesk = JSON.stringify(desk);
console.log(jsonDesk);
let jsonBag = JSON.stringify(bag);
console.log(jsonBag);
let jsonToy = JSON.stringify(toy);
console.log(jsonToy);
let jsonMusicBand = JSON.stringify(musicBand);
console.log(jsonMusicBand);

// - взять json из задания 11 и превратить их обратно в объекты.
let parsedJsonPerson = JSON.parse(jsonPerson);
console.log(parsedJsonPerson);
let parsedJsonCountry = JSON.parse(jsonCountry);
console.log(parsedJsonCountry);
let parsedJsonBand = JSON.parse(jsonBand);
console.log(parsedJsonBand);
let parsedJsonOcean = JSON.parse(jsonOcean);
console.log(parsedJsonOcean);
let parsedJsonSong = JSON.parse(jsonSong);
console.log(parsedJsonSong);
let parsedJsonHouse = JSON.parse(jsonHouse);
console.log(parsedJsonHouse);
let parsedJsonDesk = JSON.parse(jsonDesk);
console.log(parsedJsonDesk);
let parsedJsonBag = JSON.parse(jsonBag);
console.log(parsedJsonBag);
let parsedJsonToy = JSON.parse(jsonToy);
console.log(parsedJsonToy);
let parsedJsonMusicBand = JSON.parse(jsonMusicBand);
console.log(parsedJsonMusicBand);


// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
//let cars
for (const obj of cars) {
    let jsonCar = JSON.stringify(obj);
    console.log(jsonCar);
}

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
//let cities
for (const obj of cities) {
    let jsonCity = JSON.stringify(obj);
    console.log(jsonCity);
}
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу
// скоприовать в новый массив.
//carsWithDrivers
let jsonCarWithDriver = [];
for (const obj of carsWithDrivers) {
    jsonCarWithDriver.push(JSON.stringify(obj));
}
console.log(jsonCarWithDriver);

// - Создать массив пользователей. 
//У каждого пользователя обязательно должно быть поле skills которое является массивом. 
//Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.

let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}];
for (const user of users) {
    for (i=0; i<user.skills.length; i++) {
        console.log(user.skills[i]);
    }
    
}



// - Создать массив пользователей. 
//У каждого пользователя обязательно должено быть поле skills которое является массивом. 
//Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив
let usersSkills = [];
for (const user of users) {
    for (i=0; i<user.skills.length; i++) {
        usersSkills.push(user.skills[i]);
    }
    
}
console.log(usersSkills);

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

            			let users = [{
            				name: 'vasya',
            				age: 31,
            				status: false,
            				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
            			}, {
            				name: 'petya',
            				age: 30,
            				status: true,
            				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
            			}, {
            				name: 'kolya',
            				age: 29,
            				status: true,
            				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
            			}, {
            				name: 'olya',
            				age: 28,
            				status: false,
            				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
            			}, {
            				name: 'max',
            				age: 30,
            				status: true,
            				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
            			}, {
            				name: 'anya',
            				age: 31,
            				status: false,
            				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
            			}, {
            				name: 'oleg',
            				age: 28,
            				status: false,
            				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
            			}, {
            				name: 'andrey',
            				age: 29,
            				status: true,
            				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
            			}, {
            				name: 'masha',
            				age: 30,
            				status: true,
            				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
            			}, {
            				name: 'olya',
            				age: 31,
            				status: false,
            				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
            			}, {
            				name: 'max',
            				age: 31,
            				status: true,
            				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
            			}];
