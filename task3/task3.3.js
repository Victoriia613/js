// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let person = {
    idNumber: 10928374,
    age: 25,
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
    author: 'Paul McCartney',
    album: 'Help!'
}



// - создать 5 объектов с полностью разным набором полей. 
//В каждом объекте должен присутсвовать массив и внутренний объект. 
//Опишите что угодно, машину, картину, болт... 
//Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// employee, user, phone, company, 

let house = {
    storeys: 3,
    backyard: { squere: 70, lawn: true },
    pool: true,
    garden: false,
    rooms: ['badroom', 'badroom', 'badroom', 'kitchen', 'dining room', 'bathroom', 'living room', 'office']

}

let desk = {
    details: { colour: 'white', drawers: 2 },
    height: '70 cm',
    category: ['Tables & desks', 'computer desks', 'Desks for home', 'MICKE Desk']
}


let bag = {
    type: 'reversible tote bag',
    straps: { length: '25 cm', type: 'non-adjustable', material: 'polyurethane' },
    appearance: ['faux leather exterior', 'reversible smooth or all-over monogram styling', 'removable monogram pouch'],
    dimensions: '28 x 49 x 13',
    colour: 'brown'
}

let toy = {
    name: 'R2-D2',
    model: ' Sphero R2-D2 R201ROW',
    remoteControl: true,
    size: { weight: '370 g', dimensions: '13.5 x 10.8 x 17 cm' },
    techSpecs: ['iOS & Android compatible', 'USB charging', 'Integrated Speaker']
}

let musicBand = {
    members: ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'],
    backgroundInformation: { origin: 'Liverpool, England', genres: 'rock, pop', labels: 'Parlophone,Apple,Capitol' },
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

let cars = [{ model: 'Toyota', year: 2018, color: 'white', power: 127 }, { model: 'Toyota Camry', year: 2020, color: 'white', power: 131 }, { model: 'Volkswagen Jetta SEL', year: 2010, color: 'black', power: 128 }, { model: 'BMW X5', year: 2015, color: 'black', power: 125 }, { model: 'BMW X3', year: 2018, color: 'grey', power: 120 }, { model: 'Range Rover Evoque', year: 2020, color: 'white', power: 128 }, { model: 'Range Rover Sport', year: 2019, color: 'blue', power: 130 }, { model: 'Range Rover Discovery Sport', year: 2020, color: 'orange', power: 132 }, { model: 'MEGANE SEDAN', year: 2019, color: 'white', power: 130 }, { model: 'Range Rover Velar', year: 2018, color: 'blue', power: 130 }];
console.log(cars);

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let cities = [{ name: 'Kiev', population: 2950800, country: 'Ukraine', region: 'north-central Ukraine' }, { name: 'Warsaw', population: 1790658, country: 'Poland', region: ' east-central Poland' }, { name: 'Budapest', population: 17530000, country: 'Hungary', region: 'Central Hungary' }];
console.log(cities);
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let carsWithDrivers = [{ model: 'Toyota', year: 2018, color: 'white', power: 127, driver: { name: 'John', age: 30, gender: 'male', experience: 3 } }, { model: 'Toyota Camry', year: 2020, color: 'white', power: 131, driver: { name: 'Anna', age: 24, gender: 'female', experience: 5 } }, { model: 'Volkswagen Jetta SEL', year: 2010, color: 'black', power: 128, driver: { name: 'Simon', age: 35, gender: 'male', experience: 18 } }];
console.log(carsWithDrivers);

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
i = 0;
while (i < cars.length) {
    console.log(cars[i]);
    i++;
}

i = 0;
while (i < cities.length) {
    console.log(cars[i]);
    i++;
}

i = 0;
while (i < carsWithDrivers.length) {
    console.log(cars[i]);
    i++;
}


// - проитерировать каждый массив из задания 5,6,7 при помощи for .
for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
for (i = 0; i < carsWithDrivers; i++) {
    console.log(cars[i]);
}
for (i = 0; i < cities; i++) {
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

let users = [{ name: 'vasya', age: 31, status: false, skills: ['java', 'js'] }, { name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html'] }, { name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo'] }, { name: 'olya', age: 28, status: false, skills: ['java', 'js'] }, { name: 'max', age: 30, status: true, skills: ['mysql', 'mongo'] }];
for (const user of users) {
    for (i = 0; i < user.skills.length; i++) {
        console.log(user.skills[i]);
    }

}



// - Создать массив пользователей. 
//У каждого пользователя обязательно должено быть поле skills которое является массивом. 
//Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив
let usersSkills = [];
for (const user of users) {
    for (i = 0; i < user.skills.length; i++) {
        usersSkills.push(user.skills[i]);
    }

}
console.log(usersSkills);

let userS = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати 
//(скопіювати) їх в інший порожній масив.

let userSaddress = [];
for (const user of userS) {
        userSaddress.push(user.address);
    }

console.log(userSaddress);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги 
//document.createElement. Всі данні в одному блоці.

for (const user  of userS) {
    let div = document.createElement('div');
     div.innerText = `Name - ${user.name}, Age - ${user.age}, Status - ${user.status}, Address: city - ${user.address.city}, country - ${user.address.country}, street - ${user.address.street}, houseNumber - ${user.address.houseNumber})}`
    document.body.appendChild(div);
    document.write(div);
    console.log(div);
}

// - За допомоги циклу проітерувати  масив users, 
//записати кожного юзера в сівй блок за 
//допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4).
   for (const user  of userS) {
   let userDiv = document.createElement('div');
   for (const item in user) {
   let itemDiv = document.createElement('div');
   itemDiv.innerText = JSON.stringify(user[item]);
   userDiv.appendChild(itemDiv);
   }
   document.body.appendChild(userDiv);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок 
//за допомоги document.createElement, розділивши всі властивості по своїм блокам , 
//блок з адресою зробити окремим блоком, з блоками для кожної властивості.
for (let i = 0; i < userS.length; i++) {
    let userDiv = document.createElement('div');
    for (const key in userS[i]) {
        let divForEachProperty = document.createElement('div');
        divForEachProperty.innerText = `${key}: ${userS[i][key]}`;
        if (key === 'address') {
        for (const prop in userS[i].address) {
            let divForEachAddressProperty = document.createElement('div');
            divForEachAddressProperty.innerText = `${prop}: ${userS[i].address[prop]}`;
            divForEachProperty.appendChild(divForEachAddressProperty);
        
        }
    }
        userDiv.appendChild(divForEachProperty);}
        document.body.appendChild(userDiv);
        }
        
    


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: 
//{user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

for (let i = 0; i < usersWithId.length; i++)
    {
        for (let j = 0; j < citiesWithId.length; j++)
        {
            if (usersWithId[i].id===citiesWithId[j].user_id)
            {
                usersWithId[i].address=citiesWithId[j];
            }
        }

    }
    console.log(usersWithId);

// - створити розмітці блок з id, class та текстом в середені. 
//Зчитати окремо цей текст з селекторів по id , class та тегу.
let newDiv=document.createElement('div');
newDiv.id='private';
newDiv.classList.add('public');
newDiv.innerText='Lorem ipsum dolor sit amet';
document.body.append(newDiv);

//Зчитати окремо цей текст з селекторів по id:

let idText = document.getElementById('private');
console.log(idText.innerText);

//по class:
let classText = document.getElementsByClassName('public');
for (const item of classText) {
    console.log(item.innerText)
}
// по тегу:
let tagText = document.getElementsByTagName('div');
console.log(tagText[[tagText.length - 1]].innerText);


// - змінити цей текст використовуючи селектори id, class,  tag.
idText.innerText = 'qwertyiopasdfghjkl';

for (const item of classText) {
item.innerText = 'asdfghjkl';
}

tagText[[tagText.length - 1]].innerText = 'lorem';


// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag.
idText.style.height = '200px';
idText.style.width = '200px';
for (const item of classText) {
    item.style.height = '400px';
    item.style.width = '400px'
    }
tagText[[tagText.length - 1]].style.height = '70px';
tagText[[tagText.length - 1]].style.width = '70px';


// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з 
//трьома ячейками всередені.

let table = document.createElement('TABLE');
document.body.appendChild(table);
let row = table.insertRow(0);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків 
//з трьома ячейками всередені
let table1 = document.createElement('TABLE');
document.body.appendChild(table1);
for (let i = 0; i<10; i++) {
    let row = table1.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
}


// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 
//рядків з 5 ячейками всередені
let table2 = document.createElement('TABLE');
document.body.appendChild(table2);
for (let i = 0; i<10; i++) {
    let row = table2.insertRow();
    for (let j=0; j<5; j++) {
        let cell = row.insertCell();
    }
}

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків 
// з m ячейками всередені. n та m отримати з prompt
let table3 = document.createElement('TABLE');
document.body.appendChild(table3);
let n = +prompt('Number of rows: ');
let m = +prompt('Number of cells: ');
for (let i = 0; i<n; i++) {
    let row = table3.insertRow();
    for (let j=0; j<m; j++) {
        let cell = row.insertCell();
    }
}




