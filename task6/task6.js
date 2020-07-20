// - создать массив с 20 числами.
let numbers = [23, 45, 72, 3, 12, 23, 6, 8, 876, 46, 105, 238, 865, 24, 12, 34, 57, 61, 90, 82];
// -- при помощи метода sort и колбека  отсортировать массив.
let sortNumbers = numbers.sort();
console.log(numbers);

numbers.sort(function (a, b) {
    return a - b;

});
console.log(numbers);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
numbers.sort(function (a, b) {
    return b - a;
});
console.log(numbers);
// -- при помощи filter получить числа кратные 3
let filter = numbers.filter(function (number) {
    if (number % 3 === 0) {
        return true;
    }

});
console.log(filter);
// -- при помощи filter получить числа кратные 10
let filter10 = numbers.filter(function (number) {
    return number % 10 === 0;
});
console.log(filter10);

// -- перебрать (проитерировать) массив при помощи foreach()
numbers.forEach(value => {
    console.log(value);
});
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let map = numbers.map(function (value) {
    return value * 3;
});
console.log(map);
// - создать массив со словами на 15-20 элементов.
let cities = ['Kiev', 'Warsaw', 'Capetown', 'Paz', 'Sidney', 'Gao', 'Wahington', 'Tokio', 'Fes', 'Berlin', 'Paris', 'Minsk', 'Mexico', 'Lviv', 'Wroclaw', 'Gdansk', 'New York', 'Montreal', 'Hebron', 'Frankfurt'];
console.log(cities.length);
// -- отсортировать его по алфавиту в восходящем порядке.
cities.sort();
console.log(cities);
// -- отсортировать его по алфавиту  в нисходящем порядке.
// let sortCities = cities.sort((a,b) => {
//     if(a<b) {
//         return 1
//     }
//     else {
//         return -1;
//     }
// })
let sortCities = cities.sort((a, b) => (a > b) ? -1 : 1);
console.log(sortCities);



// -- отфильтровать слова длиной менее 4х символов??????????
// const result = words.filter(word => word.length > 6);

// console.log(result);
const filterWord = cities.filter(city => city.length < 4);

console.log(filterWord);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let newCities = cities.map(value => `${value}!`)
console.log(newCities);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [{ name: 'vasya', age: 31, status: false }, { name: 'petya', age: 30, status: true }, { name: 'kolya', age: 29, status: true }, { name: 'olya', age: 28, status: false }, { name: 'max', age: 30, status: true }, { name: 'anya', age: 31, status: false }, { name: 'oleg', age: 28, status: false }, { name: 'andrey', age: 29, status: true }, { name: 'masha', age: 30, status: true }, { name: 'olya', age: 31, status: false }, { name: 'max', age: 31, status: true }];
// // - відсортувати його за  віком (зростання , а потім окремо спадання)
//зростання 
let sortUsers = users.sort((a, b) => a.age - b.age);
console.log(sortUsers);
//спадання
let sortUsersReverse = users.sort((a, b) => b.age - a.age);
console.log(sortUsersReverse);
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let sortUsersNames = users.sort((a, b) => a.name.length - b.name.length);
console.log(sortUsersNames);
//спадання
let sortUsersNamesReverse = users.sort((a, b) => b.name.length - a.name.length);
console.log(sortUsersNamesReverse);
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор 
//(По якому принципу його створювати - ваше рішення), 
//та зберегти це в новий масив (первинний масив залишиться без змін);
let s = JSON.stringify(users);
let usersGetId = JSON.parse(s);
usersGetId.map((user, id) => {
    user.id = id + 1;
    return user;
})
console.log(usersGetId);

// - відсортувати його за індентифікатором
let sortUsersGetIdReverse = usersGetId.sort((a, b) => b.id - a.id);
console.log(sortUsersGetIdReverse);

// -- написать функцию калькулятора с 2мя числами и колбеком
function calculate(a, b, action) {
    let result = action(a, b);
    console.log(result);
}

calculate(10, 20, function (a, b) {
    return a * b;
});

// -- написать функцию калькулятора с 3мя числами и колбеком;


function calculate3(a, b, c, action) {
    let result = action(a, b, c);
    console.log(result);
}

calculate3(10, 20, 50, function (a, b, c) {
    return a * b + c;
});


let cars = [{ producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400 },
{ producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250 },
{ producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300 },
{ producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140 },
{ producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200 },
{ producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165 },
{ producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120 },
{ producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120 },
{ producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350 },
{ producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180 },
{ producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180 },
{ producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400 },
{ producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230 }];
// Відфільтрувати масив за наступними крітеріями :

// const eng = cars.filter(function (car) {
//     if (car.volume > 3) {
//         return true;
//     }
//     return false;
// })
//     console.log(eng);

const engineVolumeOver3 = cars.filter(car => car.volume > 3)
console.log(engineVolumeOver3);

// - двигун = 2л
const engineVolume2 = cars.filter(car => car.volume === 2);
console.log(engineVolume2);

// - виробник мерс
const mers = cars.filter(car => car.producer === 'mercedes');
console.log(mers);

// - двигун більше 3х літрів + виробник мерседес
const mersWithEngineOver3 = cars.filter(car => car.producer === 'mercedes' && car.volume > 3);
console.log(mersWithEngineOver3);
// - двигун більше 3х літрів + виробник субару
const subaruWithEngineOver3 = cars.filter(car => car.producer === 'subaru' && car.volume > 3)
console.log(subaruWithEngineOver3);
// - сили більше ніж 300
const hasPowerOver300 = cars.filter(car => car.power > 300);
console.log(hasPowerOver300);
// - сили більше ніж 300 + виробник субару
const subaruWithPowerOver300 = cars.filter(car => car.power > 300 && car.producer === 'subaru');
console.log(subaruWithPowerOver300)
// - мотор серіі ej
const carsWithEngineEj = cars.filter(car => car.engine.startsWith('ej'));
console.log(carsWithEngineEj);
// - сили більше ніж 300 + виробник субару + мотор серіі ej
const subaruWithPowerOver300Ej = cars.filter(car => car.power > 300 && car.producer === 'subaru' && car.engine.startsWith('ej'));
console.log(subaruWithPowerOver300Ej)
// - двигун меньше 3х літрів + виробник мерседес
const mersWithEngineBelow3 = cars.filter(car => car.producer === 'mercedes' && car.volume < 3);
console.log(mersWithEngineBelow3);
// - двигун більше 2л + сили більше 250
const has2LPowerOver250 = cars.filter(car => car.volume > 2 && car.power > 250);
console.log(has2LPowerOver250);
// - сили більше 250  + виробник бмв
const bmwWithPowerOver250 = cars.filter(car => car.power > 250 && car.producer === 'bmw');
console.log(bmwWithPowerOver250)


// - взять слeдующий массив
let usersWithAddress = [
    { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 1 } },
    { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
    { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 90 } },
    { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
    { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 2 } },
    { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 22 } },
    { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
    { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 12 } },
    { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 11, name: 'max', age: 31, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } }
];
// -- отсортировать его по id пользователей
let sort1 = usersWithAddress.sort((a, b) => a.id - b.id)
console.log(sort1);
// -- отсортировать его по id пользователей в обратном опрядке
let sort2 = usersWithAddress.sort((a, b) => b.id - a.id)
console.log(sort2);

// -- отсортировать его по возрасту пользователей
let sortAge = usersWithAddress.sort((a, b) => a.age - b.age);
console.log(sortAge);

// -- отсортировать его по возрасту пользователей в обратном порядке
let sortAge2 = usersWithAddress.sort((a, b) => b.age - a.age);
console.log(sortAge2);

// -- отсортировать его по имени пользователей.
let nameSort = usersWithAddress.sort((a, b) => (a.name > b.name) ? 1 : -1);
console.log(nameSort);

// -- отсортировать его по имени пользователей в обратном порядке;
let nameSortReverse = usersWithAddress.sort((a, b) => (a.name > b.name) ? -1 : 1);
console.log(nameSortReverse);



// -- отсортировать его по названию улицы  в алфавитном порядке
let streetSort = usersWithAddress.sort((a, b) => (a.address.street > b.address.street) ? 1 : -1);
console.log(streetSort);
// -- отсортировать его по номеру дома по возрастанию
let buildingNum = usersWithAddress.sort((a, b) => (a.address.number > b.address.number) ? 1 : -1);
console.log(buildingNum);
// -- отфильтровать (оставить) тех кто младше 30
let under30 = usersWithAddress.filter(user => user.age < 30);
console.log(under30);
// -- отфильтровать (оставить) тех у кого отрицательный статус

let status = usersWithAddress.filter(user => !user.status);
console.log(status);
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let statusUnder30 = usersWithAddress.filter(user => !user.status && user.age < 30);
console.log(statusUnder30);
// -- отфильтровать (оставить) тех у кого номер дома четный
let houseNumber = usersWithAddress.filter(user => user.address.number % 2 === 0)
console.log(houseNumber);


