// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//composition

// function Tag  (name, description, atribute) {
//         this.name = name;
//         this.description = description;
//         this.atributes = atribute;
//     }


// const div = new Tag
// ('div', 'Является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', 
// [{name:'align',descript: 'Задает выравнивание содержимого тега <div>.'}, {name: 'title', descript: 'Добавляет всплывающую подсказку к содержимому.'}]);

// console.log(div);

// agregation
function Tag(name, description, atributeName = 'id', atributeDescript = 'Указывает имя стилевого идентификатора.', atribute2Name = 'class', atribute2Descript = 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.') {
    this.name = name;
    this.description = description;
    this.atributes = [{ name: atributeName, description: atributeDescript }, { name: atribute2Name, description: atribute2Descript }];
}
const div = new Tag('div', 'Является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    'align', 'Задает выравнивание содержимого тега <div>.', 'title', 'Добавляет всплывающую подсказку к содержимому.');

const a = new Tag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', 'accesskey', 'Активация ссылки с помощью комбинации клавиш.', 'href', 'Задает адрес документа, на который следует перейти');
console.log(a);
console.log(div);
const h1 = new Tag('h1', 'Tег <h1> представляет собой наиболее важный заголовок первого уровня', 'align', 'Определяет выравнивание заголовка.',)
console.log(h1);
const span = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.',)
console.log(span);
const input = new Tag('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.', 'type', 'Сообщает браузеру, к какому типу относится элемент формы.', 'value', 'Значение элемента.');
console.log(input);
const form = new Tag('form', 'Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна.')
console.log(form);
const option = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей.', 'disabled', 'Заблокировать для доступа элемент списка.', 'label', 'Указание метки пункта списка.');
console.log(option);
const select = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.,', 'form', 'Связывает список с формой.', 'multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка.');

console.log(select);
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select

//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================






// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
class Tag1 {
    constructor(name, description, atributeName = 'id', atributeDescript = 'Указывает имя стилевого идентификатора.', atribute2Name = 'class', atribute2Descript = 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.') {
        this.name = name;
        this.description = description;
        this.atributes = [{ name: atributeName, description: atributeDescript }, { name: atribute2Name, description: atribute2Descript }];;
    }
}

const divNew = new Tag1('div', 'Является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    'align', 'Задает выравнивание содержимого тега <div>.', 'title', 'Добавляет всплывающую подсказку к содержимому.');

const aNew = new Tag1('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', 'accesskey', 'Активация ссылки с помощью комбинации клавиш.', 'href', 'Задает адрес документа, на который следует перейти');
console.log(aNew);
console.log(divNew);
const h1New = new Tag1('h1', 'Tег <h1> представляет собой наиболее важный заголовок первого уровня', 'align', 'Определяет выравнивание заголовка.',)
console.log(h1New);
const spanNew = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.',)
console.log(spanNew);
const inputNew = new Tag('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.', 'type', 'Сообщает браузеру, к какому типу относится элемент формы.', 'value', 'Значение элемента.');
console.log(inputNew);
const formNew = new Tag('form', 'Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна.')
console.log(formNew);
const optionNew = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей.', 'disabled', 'Заблокировать для доступа элемент списка.', 'label', 'Указание метки пункта списка.');
console.log(optionNew);
const selectNew = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.,', 'form', 'Связывает список с формой.', 'multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка.');

console.log(selectNew);




//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================



// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// let user = {
//     name: 'kokos',
//     age: 32,
//     greeting: function () {
//         let msg = `hello my name is ${this.name}, and i ${this.age} years old`;
//         console.log(msg);
//     }
// };

let car = {

    model: 'Range Rover Sport',
    manufacturer: 'Spain',
    year: 2018,
    maxSpeed: 180,
    engineDisplacement: 5.9,
    drive: function () {
        console.log(`Driving with the speed ${this.maxSpeed} km/h`)
    },
    info: function () {
        //should it log functions as well????????????????????????????????
        for (const key in this) {
            if (typeof (this[key]) !== 'function') {
                console.log(`${[key]}:${this[key]}`);
            }
        }

    },
    increaseMaxSpeed: function (newSpeed) {
        this.maxSpeed += newSpeed;
    },
    changeYear: function (newValue) {
        this.year = newValue;
    },
    addDriver: function (driver) {
        this.driver = driver;
    }
}
car.drive();
console.log(car);
console.log(999999999999);
car.info();
car.increaseMaxSpeed(20);
console.log(car);
car.changeYear(2021);
console.log(car);
car.addDriver({ name: 'John', age: 20 });
console.log(car);
console.log(typeof (car.info))



// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

function Vehicle(model, manufacturer, year, maxSpeed, engineDisplacement, driver) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineDisplacement = `${engineDisplacement} L`;

    this.drive = function drive() {
        console.log(`Driving with the speed ${this.maxSpeed} km/h`)
    }
    //don't log functions here
    this.info = function info() {
        for (const key in this) {
            if (typeof (this[key]) !== 'function') {
                console.log(`${[key]}:${this[key]}`);
            }
        }
    }

    this.increaseMaxSpeed = function increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function changeYear(newValue) {
        this.year = newValue;
    }
    this.addDriver = function addDriver(driver) {
        this.driver = JSON.stringify(driver);
    }

}

let rangeRover = new Vehicle('Range Rover Evoque', 'USA', 2020, 183, 6.0, { name: 'Piter', age: 35 });
rangeRover.info();
rangeRover.addDriver({ name: 'David', age: '30' });
rangeRover.info();

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
class Car {
    constructor(model, manufacturer, year, maxSpeed, engineDisplacement, driver) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineDisplacement = `${engineDisplacement} L`;

    }
    drive() {
        console.log(`Driving with the speed ${this.maxSpeed} km/h`)
    }
    info() {
        console.log(this);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }
    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
const toyota = new Car('Toyota', 'Japan', 2018, 170, '5.7');
toyota.info();
toyota.drive();
toyota.increaseMaxSpeed(30);
toyota.info();
toyota.changeYear(2019);
toyota.info();
toyota.addDriver({ name: 'David', age: '20' });
toyota.info();


// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги +
// --Створити 10 попелюшок , покласти їх в масив +
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов. +
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

class Cinderella {
    constructor(name, age, feetSize) {
        this.name = name;
        this.age = age;
        this.feetSize = feetSize;
    }
}
const belle = new Cinderella('Belle', 20, 35);
const caroline = new Cinderella('Caroline', 23, 35);
const diana = new Cinderella('Diana', 23, 35);
const anne = new Cinderella('Anne', 23, 35)
const elsa = new Cinderella('Elsa', 23, 35);
const camilla = new Cinderella('Camilla', 24, 36);
const beatrice = new Cinderella('Beatrice', 20, 39);
const elizabeth = new Cinderella('Elizabeth', 25, 36);
const edith = new Cinderella('Edith', 22, 35);
const cinderella = new Cinderella('Cinderella', 20, 37);
let princesses = [belle, caroline, diana, anne, elsa, cinderella, edith, elizabeth, beatrice, camilla];

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;

    }
    findMyPrincess(princesses) {
        for (const princess of princesses) {
            if (princess.feetSize === this.shoeSize) {
                this.myPrincess = princess.name
                console.log(`My princess is ${this.myPrincess}`);
            }
        }
    }
}
let prince = new Prince('Harry', 25, 37);
console.log(prince);
prince.findMyPrincess(princesses);
console.log(prince);

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================



// function Princess (name, age, feetSize) {
//     this.name = name;
//     this.age = age;
//     this.feetSize = feetSize;
// }

// let belle = new Princess('Belle', 20, 35);
// let caroline = new Princess ('Caroline', 23, 35);
// let diana = new Princess ('Diana', 23, 35);
// let anne = new Princess ('Anne', 23, 38);
// let elsa = new Princess ('Elsa', 23, 35);
// let camilla = new Princess ('Camilla', 24, 36);
// let  beatrice = new Princess ('Beatrice', 20, 39);
// let elizabeth = new Princess ('Elizabeth', 25, 36);
// let  edith = new Princess ('Edith', 22, 35);
// let  cinderella = new Princess ('Cinderella', 20, 37);
// let princesses = [belle, caroline, diana, anne, elsa, cinderella, edith, elizabeth, beatrice, camilla]; 


// function Prince (name, age, shoeSize) {
//     this.name = name;
//     this.age = age;
//     this.shoeSize = shoeSize;
//     this.lookForCinderella = function lookForCinderella (princesses) {
//         for(let princess of princesses) {
//                 if (princess.feetSize===this.shoeSize) {
//                     this.myPrincess = princess.name
//                     console.log(`My princess is ${this.myPrincess}`);
//                 }
//                 }

//     }
// }
// let prince = new Prince('Harry', 26, 37);
// console.log(prince);
// prince.lookForCinderella(princesses);
// console.log(prince);