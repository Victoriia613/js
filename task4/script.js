// - створити функцію яка виводить масив
function array(a) {
    console.log(a)
}

let members = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
array(members);
// - створити функцію яка заповнює масив рандомними числами та виводить його. 
//Для виведення використати попвередню функцію.
let array2 = [];
function randomNumbers(b) {
    while (b.length < 10) {
        let number = Math.floor((Math.random() * 1000) + 1);
        b.push(number);
    }
    array(b);
}
randomNumbers(array2);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
function numbersMin(a, b, c) {
    console.log(Math.min(a, b, c))
}
numbersMin(3, 15, 2);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function numbersMax(a, b, c) {
    let max = Math.max(a, b, c)
    // console.log(Math.max(a, b, c))
    return max;
}
console.log(numbersMax(3, 15, 2));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function myFunction() {
    let max = arguments[0];
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
    console.log(`Max: ${max}`)
    return min;
}
let min = myFunction(-2, 6, 123, 87, 9, 1, 24567, 543224, 234)
console.log(`Min: ${min}`);


// - створити функцію яка виводить масив
function arrayFunction(a) {
    console.log(a)
}

let numbers = [-2, 6, 123, 87, 9, 1, 24567, 543, 234, 647, 89, 59 - 1290];
arrayFunction(numbers);

// - створити функцію яка повертає найбільше число з масиву

function maxNumberOfArray(a) {
    let max = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i]
        }
    }
    return max;
}
let max = maxNumberOfArray(numbers);
console.log(`Max number is: ${max}`);

// - створити функцію яка повертає найменьше число з масиву
function minNumberOfArray(a) {
    let min = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
    }
    return min;
}
let min1 = minNumberOfArray(numbers);
console.log(`Min number is: ${min1}`);

// - створити функцію яка -  приймає масив чисел та  - складає значення елементів масиву та повертає його.
function arraySum(a) {
    let sum = 0;
    for (const item of a) {
        sum += item;
    }
    return sum;
}
let sum = arraySum(numbers);
console.log(`Sum = ${sum}`);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arrayAverage(a) {
    let sum = 0;
    for (const item of a) {
        sum += item;
    }
    let average = Math.round(sum / a.length);
    return average;
}
let aver = arrayAverage(numbers);
console.log(`Average: ${aver}`);

// - Створити функцію яка  - приймає масив будь яких объектів, та  - повертає значення кількості об'єктів в масиві.

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


function objectCount(a) {
    return a.length;
}
let num = objectCount(userS);
console.log(`There are ${num} objects in the array`);


// - Створити функцію яка  - приймає масив будь яких объектів, та -  повертає загальну кількість полів в них.
function propertiesCount(a) {
    let numOfProperties = 0;
    for (const obj of a) {
        let keys = Object.keys(obj)   //Array with property names
        numOfProperties += keys.length;
    }
    return numOfProperties;
}
let propertiesSum = propertiesCount(userS);
console.log(`Загальнa кількість полів: ${propertiesSum}`);



// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

let firstArray = [23, 56, 1, 23, 78, 40, 48, 50, 48];
let secondArray = [65, 20, 12, 28, 6, 105];
function sumOfArrays(array1, array2) {
    let thirdArray = [];
    let iterCount;
    if (array1.length > array2.length) {
        iterCount = array1.length;
    }
    else {
        iterCount = array2.length;
    }
    for (let i = 0; i < iterCount; i++) {
        let sum = (array1[i] || 0) + (array2[i] || 0)
        thirdArray.push(sum);
    }
    return thirdArray;
}

console.log(sumOfArrays(firstArray, secondArray));

//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
console.log(firstArray);
function changeIndex(a, i) {
    const buffer = a[i];
    a[i] = a[i + 1];
    a[i + 1] = buffer;
    // a[i] = a[i+1] + a[i];
    // a[i+1] = a[i] - a[i+1];
    // a[i] = a[i] -a[i+1];
    return a;
}
console.log(changeIndex(firstArray, 6));

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець масиву. 
//Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100

let fifthArray = [23, 0, 56, 1, 0, 23, 78, 40, 48, 0, 48, 0, 48];
console.log(fifthArray);
function moveZero(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            let o = array.splice(i, 1);
            array.push(o[0]);
        }
    }
    return array;
}
console.log(moveZero(fifthArray));

// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu".
function addText() {
    let div = document.createElement('div');
    div.innerText = 'Hello owu';
    document.body.appendChild(div);
}
addText();
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи.
function addElAndText(element, text) {
    let newElement = document.createElement(element);
    newElement.innerText = text;
    document.body.appendChild(newElement);
}
addElAndText('p', 'Hello there');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елементу 
//в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Всі властивості авто в обному блоці.
let cars = [{ model: 'Toyota', year: 2018, color: 'white', power: 127 }, { model: 'Toyota Camry', year: 2020, color: 'white', power: 131 }, { model: 'Volkswagen Jetta SEL', year: 2010, color: 'black', power: 128 }, { model: 'BMW X5', year: 2015, color: 'black', power: 125 }, { model: 'BMW X3', year: 2018, color: 'grey', power: 120 }, { model: 'Range Rover Evoque', year: 2020, color: 'white', power: 128 }, { model: 'Range Rover Sport', year: 2019, color: 'blue', power: 130 }, { model: 'Range Rover Discovery Sport', year: 2020, color: 'orange', power: 132 }, { model: 'MEGANE SEDAN', year: 2019, color: 'white', power: 130 }, { model: 'Range Rover Velar', year: 2018, color: 'blue', power: 130 }];

function forCarArray(array, id) {
    for (let i = 0; i < array.length; i++) {
        let ident = document.getElementById(id);
        let divForEachCar = document.createElement('div');
        divForEachCar.innerText = (JSON.stringify(array[i]));
        ident.appendChild(divForEachCar);
    }

    return array;

}
forCarArray(cars, 4);

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок.

function eachPropertyDiv(array, id) {
    for (let i = 0; i < array.length; i++) {
        let ident = document.getElementById(id);
        let divForEachCar = document.createElement('div');
        for (const key in array[i]) {
            let divForEachProperty = document.createElement('div');
            divForEachProperty.innerText = `${key}: ${array[i][key]}`;
            divForEachCar.appendChild(divForEachProperty);
        }
        ident.appendChild(divForEachCar);
    }

    return array;

}
eachPropertyDiv(cars, 4);

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з
// відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:

let usersWithId = [{ id: 1, name: 'vasya', age: 31, status: false }, { id: 2, name: 'petya', age: 30, status: true }, { id: 3, name: 'kolya', age: 29, status: true }, { id: 4, name: 'olya', age: 28, status: false },];
let citiesWithId = [{ user_id: 3, country: 'USA', city: 'Portland' }, { user_id: 1, country: 'Ukraine', city: 'Ternopil' }, { user_id: 2, country: 'Poland', city: 'Krakow' }, { user_id: 4, country: 'USA', city: 'Miami' },];

function mergeArrays(arrayUser, arrayAddress) {
    for (let i = 0; i < arrayUser.length; i++) {
        for (let j = 0; j < arrayAddress.length; j++) {
            if (usersWithId[i].id === arrayAddress[j].user_id) {
                arrayUser[i].address = arrayAddress[j];
            }
        }

    }
    return arrayUser;
}
console.log(mergeArrays(usersWithId, citiesWithId));



// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в 
//окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
let listOfTheRules = (rules) => {
    let wrap = document.createElement('wrap');

    for (let i = 0; i < rules.length; i++) {
        let divEachRule = document.createElement('div');
        let divTitle = document.createElement('div');
        let divForRule = document.createElement('div');


        divTitle.innerText = rules[i].title;
        divForRule.innerText = rules[i].body;
        divEachRule.appendChild(divTitle);
        divEachRule.appendChild(divForRule);
        wrap.appendChild(divEachRule);
    }

    document.body.appendChild(wrap);
}

listOfTheRules(rules);
