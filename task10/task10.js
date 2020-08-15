

// 1) Створити карту користувача(User Card):
// Створити функцію «userCard» яка приймає число(будь-яке число) і повертає
// об’єкт з методами:
// const card3 = userCard(3); // returns an object with methods
// User Card методи:
// getCardOptions. Дана функція повертає об’єкт котрий містить інформацію про
// карту:
// card3.getCardOptions(); // returns options object with card info
// Об’єкт має містити такі властивості:
// • balance (по замовчуванням 100)
// • transactionLimit (по замовчуванням 100. Це ліміт коштів які ви можете взяти з
// карти)
// • historyLogs (масив об’єктів який містить інформацію про операції та трансакції
// данної карти)
// • key (число в діапазоні[1; 3] залежить від числа яке ви передали в userCard
// функції. Кожна карта повинна мати унікальний key)
// putCredits. Ця функція отримує певну кількість грошей і заповнює баланс
// карти:
// card3.putCredits(150);
// takeCredits. Ця функція отримує певну кількість грошей і віднімає ці кошти з
// баланса карти (протилежний за дією від метода putCredits):
// card3.takeCredits(100);
// Ви можете брати кошти з картки, якщо ліміт транзакцій та залишок коштів
// перевищують кількість коштів, які ви бажаєте взяти. Якщо ні, то слід записати
// відповідне повідомлення у консолі (скористайтеся console.error)
// setTransactionLimit.Ця функція приймає як аргумент число і встановлює його
// як ліміт транзакцій на картці
// card3.setTransactionLimit(5000);
// transferCredits.
// Ця функція отримує два аргументи - кількість кредитів, які потрібно передати,
// та карту одержувача (інший об’єкт, створений функцією `userCard` - card1):
// card3.transferCredits(50, card1);
// Кошти, які ви хочете передати, повинні обкладатися податками 0,5%.
// Не забудьте перед перерахуванням перевірити залишок балансу та ліміт
// // транзакцій відправника кредитів (card3).
// Ви повинні відслідковувати тільки Put credits/Take credits/Transaction limit
// change операції і зберігайте history log. History log (Дивитись зображення 1)
// інформація має зберігатись в об’єктах з такими властивостями:
// • operationType (стрічка яка описує здійснену операцію)
// • credits (кількість коштів)
// • operationTime (формат: "27/07/2018, 03:24:53". Час коли була здійснена операція)
// 2) Створити UserAccount:
// Створити класс `UserAccount` (для цього завдання можна використати ES6 класс
// або звичайну функцію):
// const user = new UserAccount('Bob');
// Класс має містити:
// Властивості акаунту користувача:
// - name (передати в конструкторі)
// - cards (Масив карток користувача. Масив не має бути довшим ніж 3)
// Методи акаунту користувача:
// - addCard. Створює нову карту (використовуйте ‘userCard’ функцію) та додайте її до
// cards:
// user.addCard();
// Користувач повинен мати <= 3 карти.
// - getCardByKey. Приймає число в діапазоні {1; 3} і повертає об’єкт карти
/*
 * Повертає об’єкт {
 * key: 1,
 * balance: 150,
 * ...other card properties
 * }
 */
// user.getCardByKey(1);

function userCard (cardNum) {
    let key;
    (cardNum>=1 && cardNum<=3) ? key=cardNum : console.error('Incorrect number')
    let balance = 100;
    let transactionLimit = 100;
    const historyLogs = [];


    function getCardOptions ()  {
    // //  return {key,balance,transactionLimit,historyLogs}
    return {
    key,
    balance,
    transactionLimit,
    historyLogs
    // }
}
    }
function addHistory (operationType, credits, operationTime) {
    historyLogs.push({operationType, credits, operationTime})
}

function putCredits(creditAmount) {
    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();
    (creditAmount>0)?
    (balance+=creditAmount) && addHistory('putCredits',creditAmount, date+' ' + time)
    :console.log('Invalid credit Amount')

}
function takeCredits(takeCreditAmount) {
    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();
    (takeCreditAmount<=transactionLimit && takeCreditAmount<=balance)? 
    (balance-=takeCreditAmount) && addHistory('takeCredits', takeCreditAmount, date+' ' + time )
    : console.error(`Invalid amount. Your balance: ${balance}, Transaction Limit: ${transactionLimit}`)
    
}  
function setTransactionLimit(limit) {
    let now  = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();
    (limit>0)
    ? (transactionLimit = limit) && addHistory('setTransactionLimit', limit, date+' ' + time )
    : console.log(`Limit is not valid. Please try again.`)

}
function transferCredits(transferAmount, card) {;
    let now  = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();
    let transferWithTax = transferAmount-transferAmount*0.05;
    // (transferAmount<=transactionLimit && transferWithTax<=balance)
    // ?  (balance-=transferWithTax && (toCard.balance+=transferAmount)&& (addHistory('transferCredits', transferAmount, date+' ' + time)) 
    // : (console.error(`Invalid amount. Your balance: ${balance}, Transaction Limit: ${transactionLimit}, Transfer Tax: 0,5%`))
    if(transferAmount<=transactionLimit && transferWithTax<=balance && transferAmount>0) {
        balance-=transferWithTax;
        // card.balance = +(card.balance + transferAmount);
        card.putCredits(transferAmount);
        addHistory('transferCredits', transferAmount, date+' ' + time)
    }
    else {
    console.error(`Invalid amount. Your balance: ${balance}, Transaction Limit: ${transactionLimit}, Transfer Tax: 0,5%`)

    }
}
function getKey () {
    return key;
}
        return {putCredits,takeCredits,setTransactionLimit,transferCredits,getCardOptions, getKey}
}



// let userCard1 = userCard(1);
// const userCard1 = new userCard(1);
// console.log(userCard1.balance)
// userCard1.putCredits(400);
// // userCard1.takeCredits(50);//?????????????????
// console.log(userCard1.getCardOptions())
// userCard1.takeCredits(50);
// console.log(userCard1.getCardOptions())
// // console.log(typeof(userCard1.getCardOptions()))
// userCard1.setTransactionLimit(1000);
// console.log(userCard1.getCardOptions())

class UserAccount {
    constructor(name)
{
    this.name = name;
    this.cards = [];
}
}

UserAccount.prototype.addCard = function() {
    if(this.cards.length < 3){
        this.cards.push(new userCard(this.cards.length+1))
    }else{
        console.log('Number of cards is limited')
    }
}

UserAccount.prototype.getCardByKey = function(key) {
// return this.cards.find(value => value.getKey()=== key)
return this.cards.find(value => value.getCardOptions().key=== key)
}


let user1 = new UserAccount ('Vova')
user1.addCard()
user1.addCard()
console.log(user1)
let user1Card1 = user1.getCardByKey(1)
user1Card1.setTransactionLimit(100000);
user1Card1.putCredits(90000);
user1Card1.takeCredits(48);
console.log(user1)
console.log(user1Card1.getCardOptions())


let user2 = new UserAccount ('Jane')
user2.addCard();
user2.addCard();
user2.addCard();
let user2Card2 = user2.getCardByKey(2);
user1Card1.transferCredits(45000, user2Card2)
console.log(user1Card1.getCardOptions())
console.log(user2Card2.getCardOptions())

