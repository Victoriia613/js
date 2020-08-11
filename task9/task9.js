
// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні
//варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема що їсти), то має бути викинута помилка і решта функцій 
//виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.



/////////////////////////CALLBACKS//////////////////////////////


// function wakeUp(isAlarmOn, cb) {
//     setTimeout(() => {
// if(isAlarmOn) {
//     // document.write(null, "I am up!")
//     cb(null, "I am up!");
// }
// else {
// // document.write("Noo, I overslept. I will be late!",null)
// cb("Noo, I overslept. I will be late!", null)
// }
//     }, randomTimeout())
// }

// wakeUp(true, (result) => {
//     console.log(result)
//     // console.log(negative)

// })





// function wakeUp(isAlarmOn, cb) {
//       setTimeout(() => {
//         if (isAlarmOn) {
//           cb(null, 'Lets make coffee');
//         } else {
//           cb('Noo, I will be late', null)
//         }
//       }, 1000)
//     }
    
//     function makeCoffee(iHaveTime, cb) {
//       setTimeout(() => {
//         if (iHaveTime) {
//           console.log('mmm,it is coffee time')
//           cb(null, money)
//         } else {
//           console.log('I do not have time for coffee');
//           cb('NEMA', null)
//         }
//       }, 1000)
//     }
    




///////////////////PROMISES///////////////////////////

let chance = 0.1;
function randomTimeout(){
  return 1000-0.5+Math.random()* (5000-1000+1);
}
function wakeUp (isAlarmOn){
  console.log('It is time to wake up')
return new Promise ((resolve)=>{
  setTimeout(() => {
    Math.random() > chance
    ?resolve(isAlarmOn)
    :reject('I overslept')
    
  }, randomTimeout());
})

}
function takeAShower(isThereWater){
  console.log('I am going to take a shower')
  return new Promise ((resolve,reject)=>{
    setTimeout(() => {
      Math.random() > chance
      ?resolve(isThereWater)
      :reject('There is no hot water in the building')
      
    }, randomTimeout())
  })
  
}

function walkMyDog(isHeUpToIt){
  console.log('I am taking a dog for a walk')
  return new Promise ((resolve,reject)=>{
    setTimeout(() => {
      Math.random() > chance
      ?resolve(isHeUpToIt)
      :reject('Dog is asleep')
      
    },randomTimeout())
  })
  
}


function breakfast(doIWannaEat){
  console.log('I am eating breakfast')
  return new Promise ((resolve,reject)=>{
    setTimeout(() => {
      Math.random() > chance
      ?resolve(doIWannaEat)
      :reject('There are no food in the fridge')
      
    }, 2000)
  })
  
}


function goToWork(workHard){
  console.log('Starting to work now')
  return new Promise ((resolve,reject)=>{
    setTimeout(() => {
      Math.random() > chance
      ?resolve(workHard)
      :reject('There is quaranteen at the office. I have to go home!')
      
    }, 2000)
  })
  
}

function coffeeBreak(doIWannaCoffee){
  console.log('I am going to get some coffee')
  return new Promise ((resolve,reject)=>{
    setTimeout(() => {
      Math.random() > chance
      ?resolve(doIWannaCoffee)
      :reject('There are no coffee left')
      
    }, 2000)
  })
  
}

function dinnerWithFriends(isWorkDone){
  console.log('Going to have a dinner with friends now')
  return new Promise ((resolve,reject)=>{
    setTimeout(() => {
      Math.random() > chance
      ?resolve(isWorkDone)
      :reject('I have call with the customer this evening, I can not make it to the dinner')
      
    }, 2000)
  })
  
}

function goToSleep(amITired){
  console.log('I am going to bad, goodnight')
  return new Promise ((resolve,reject)=>{
    setTimeout(() => {
      Math.random() > chance
      ?resolve(amITired)
      :reject('I do not want to sleep yet so I am gonna watch a movie!!!')
      
    }, 2000)
  })
  
}

// wakeUp('I am up!') 
// .then((result) => {
  
//   return takeAShower()
// })
// .then((result) => {
//   return walkMyDog()
// })
// .then((result) => {
//   return breakfast()
// })
// .then((result) => {
//   return goToWork()
// })
// .then((result) => {
//   return coffeeBreak()
// })
// .then((result) => {
//   return dinnerWithFriends()
// })
// .then((result) => {
//   return goToSleep()
// })
// .catch(error => {
//   console.log('error', error)
// })

////////////////////////////////////////ASYNC AWAIT///////////////////////////////////////////
async function myDay() {
  try {
   let start = await wakeUp();
    let shower = await takeAShower();
    let walk = await walkMyDog();
    let eat = await breakfast();
    let work = await goToWork();
    let coffee = await coffeeBreak();
    let dinner = await dinnerWithFriends();
    let sleep = await goToSleep();

  } catch (e) {
    console.error(e);
  }
}
myDay();