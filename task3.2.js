// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемeнту з ід main_header на будь-який інший
let mainHeader = document.getElementById('main_header');
mainHeader.style.color = 'green';
// -- робить шириниу елементу ul 400 пікселів
    let list1 = document.getElementsByTagName('ul');
    list1[0].style.width = '400px';


// -- робить шириниу всіх елементів з класом linkList шириною 50%
let listOfTheLinks = document.getElementsByClassName('linkList');
for (let i = 0; i<listOfTheLinks.length; i++) {
listOfTheLinks[i].style.width = '50%';
}

// -- отримує текст який зберігається в елементі з класом listElement2
let textInside = document.getElementsByClassName('listElement2');
console.log(textInside[0].innerText);

// -- отримує всі елементи li та змінює ім колір фону на сірий
let allLis = document.getElementsByTagName('li');
for (let i = 0; i < allLis.length; i++) {
    allLis[i].style.backgroundColor = 'grey';
} 
// -- отримує всі елементи 'a' та додає їм клас anchor
let allA = document.getElementsByTagName('a');
for (let i = 0; i < allA.length; i++) {
    allA[i].classList.add('anchor');
    // const a = allA[i];
    // a.classList.add('anchor');   
}

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, 
//змінює йому розмір тексту на 40 пікселів
for (let i = 0; i < allA.length; i++) {
    if (allA[i].innerText === 'link3') {
        allA[i].style.fontSize = '40px';
    }
}

// -- отримує всі елементи 'a' та додає їм клас element_XXX. 
//Де XXX - текстовий контент елементу a.
for (let i = 0; i < allA.length; i++) {

    allA[i].classList.add(`element_${allA[i].innerText}`);
}

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.getElementsByClassName('sub-header');
for (let i = 0; i < subHeader.length; i++) {
subHeader[i].style.backgroundColor = prompt('Enter colour', '');
}

// // -- отримує всі елементи 'sub-header' та змінює колір тексту у 
// //видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (let i = 0; i < subHeader.length; i++) {
    if(subHeader[i].innerText === 'content 2 segment') {
    subHeader[i].style.color = prompt('Enter colour', '');
    }
}

// -- отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. 
//Текст отримати з prompt().
let content1 = document.getElementsByClassName('content_1');
for (let i = 0; i < content1.length; i++) {
    content1[i].innerText = prompt('Enter your text', '');
}

// -- отримати елементи p та змінити їм paddin на довільне значення

let pArray = document.getElementsByTagName('p');
for (const eachP of pArray) {
    eachP.style.padding = '80px';

}
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
let text2Class = document.getElementsByClassName('text2');
for (const text of text2Class) {
    text.innerText = 'Hello there'
}


