// --Завантажити з мережі будь-який шаблон сайту. 
//Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
console.log(document.querySelectorAll('[class]'));

//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
let allP = document.getElementsByTagName('p');
for (const p of allP) {
p.innerText = 'hello oktenweb!';
}
//  - знайти всі div та змінити ім колір на червоний
let allDiv = document.getElementsByTagName('div');
for (const div of allDiv) {
    div.style.backgroundColor = 'red';
}