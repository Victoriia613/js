// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або 
//document.getElementsByClassName або document.getElementsByTagName :


// - отримує текст з параграфа з id "content"
let par = document.getElementById('content');


// - отримує текст з блоку з id "rules"
let rule = document.getElementById('rules');

// - замініть текст параграфа з id 'content' на будь-який інший
par.innerHTML = 'Hello world';
// - замініть текст параграфа з id 'rules' на будь-який інший
rule.innerHTML = "kjolishofjspfisf";
// - змініть кожному елементу колір фону на червоний
par.style.backgroundColor = 'red';
rule.style.backgroundColor = 'red';
// - змініть кожному елементу колір тексту на синій
par.style.color = 'blue';
rule.style.color = 'blue';



// - отримати весь список класів елемента з id=rules і вивести їх в console.log????
let listOfTargetElements = document.getElementById('rules').classList;
console.log(listOfTargetElements);

for (const element of listOfTargetElements) {
    console.log(element);
}


// - отримати всі елементи з класом fc_rules
let elementsOfOneClass = document.getElementsByClassName('fc_rules');
console.log(elementsOfOneClass);


// - поміняти колір тексту у всіх елементів fc_rules на червоний
for (const element of elementsOfOneClass) {
    element.style.color = 'red';
}




