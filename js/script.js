"use strict";

//const { type } = require("express/lib/response");

//training


/* let number = 5;
const leftBorderWidth = 1;
number = 10;
console.log(number);

const obj = {
    a:50
};

obj.a = 10;

console.log(obj); 

 console.log(name);
var name = 'Ivan';


{
    var result = 50;
}

console.log(result); 


 let number = 4.6;
console.log(-4/0); //-infinity
console.log('stric'*3) ;//nan
const persone = `Alex {number}`;
console.log(persone);
const bool = true;

const obj ={
    name: "John",
    age: 5,
isMarried :false
};

console.log(obj["age"]);
console.log(obj.age);
let arr = ["appe", "orange.jpg" , 6];
for(let i=0; i< arr.length;i++){
    console.log(arr[i]);
} */



/* Общение с пользователем

alert("Hello");
const result = confirm("Lol?)");
console.log(result);
 
const answer = +prompt("Вам есть 18?", "18");
console.log(answer + 5);
console.log(typeof(answer));  

 const answers = [];
answers[0] = prompt("How are you?", 'OK');
answers[1] = prompt("Sername?", 'Borov');
answers[0] = prompt("LOL?)", 'Nein');

document.write(answers);
console.log(typeof(null));  

const category = 'toys';
const user = 'Ivan';
console.log(`Hello ${user} ghj`);
console.log(4 + 'Ivan');  */


//!!!!!
//Первое задание
//!!!!!!!

/* let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");//не знаем, будет ли изменяться - лучше const

const personalMovieDB = {
count: numberOfFilms,
movies:{},
actors:{},
genres:[],
privat:false
};
const firstQuestion = prompt("Один из последних просмотренных фильмов?");
const secondQuestion = +prompt("На сколько оцените его?");
personalMovieDB.movies[firstQuestion] = secondQuestion;
console.log(personalMovieDB); */

//Условия

/* if(4) {
 console.log('OK!');
} else {
    console.log('Error');
}

const num = 50;
if(num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Viel');
} else {
    console.log('OK!');
}

//тернарные выражения
(num == 50) ?   console.log('OK!') : console.log('Error');

//switch

switch(num) {
case 500:
    console.log('True');
    break;
    case '1':
        console.log('False');
        break;
        default:
            console.log('OK!');
            break;
} */

//Циклы

/* let num = 50;

while(num <= 55){
    console.log(num);
    num++;
}

do {console.log(num);
    num++;}
while (num <=60);

for(let i = 1; i < 8;i++){
        if (i ===6){
            //break;
            continue;
        }
        console.log(i);
        
    }  */




//!!!!!
//Второе задание
//!!!!!!!

/* let numberOfFilms = "";
do{
numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "1");//не знаем, будет ли изменяться - лучше const
}
while(numberOfFilms === "") ;
while(numberOfFilms.length > 50){
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
}
const personalMovieDB = {
count: numberOfFilms,
movies:{},
actors:{},
genres:[],
privat:false
};
let firstQuestion ="", secondQuestion = "";
do{
 firstQuestion = prompt("Один из последних просмотренных фильмов?", "Гарри Поттер");
    }while((firstQuestion === "")||(firstQuestion.length > 50)) ;
    
do{
    secondQuestion = prompt("На сколько оцените его?", "10");
       }while((secondQuestion === "")||(secondQuestion.length > 50)) ;



       if(personalMovieDB.count<10){
           alert("Просмотрено довольно мало фильмов");
       }
       else if ((personalMovieDB.count > 10)&&(personalMovieDB.count < 30)) {
        alert("Вы классический зритель");
       } else if (personalMovieDB.count > 30){
        alert("Вы киноман");
       } else {
        alert("Произошла ошибка");
       }
personalMovieDB.movies[firstQuestion] = secondQuestion;
console.log(personalMovieDB); */
 



//или
/* 
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB); */

//Функции
/* let num = 0;

function showFirstMessage(text) {
    console.log(text);
     let num = 20;
console.log(num);
}

showFirstMessage('Help I need somebody!');
console.log(num);

const anotherNum = calc(4,5);
console.log(anotherNum);
function calc(a, b) {
    return (a+b);
}

const logger = function(){};
logger();

const call2 = (a,b) => a+b;
console.log(call2(2,3)); */
 

//Методы и свойства у строк и чисел

/* const str = 'rfy';
const arr = [1, 2, 4];

console.log(str[2]);
console.log(str);
console.log(str.toUpperCase());

let fruit = 'Some fruit';

console.log(fruit.indexOf("q"));

const logg  = 'Hello World';

console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11));

console.log(logg.substr(5, 4));

const num = 12.2, test = "12.2px";
console.log(Math.round(num));

console.log(parseInt(test));
console.log(parseFloat(test)); */




//!!!!!
//Третье задание
//!!!!!!!

/* let numberOfFilms;

function start(){
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms ()
{
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
}

function detectPersonalLevel()
{
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
}

function showMyDB (priva){
if (!priva){console.log(personalMovieDB);console.log('all works');}
}
showMyDB(personalMovieDB.privat);



function writeYourGenres(){
    for(let i = 1; i < 4; i++){
        let a;
        do
        {
             a = prompt(`Ваш любимый жанр под номером ${i}`);
            }
        while(a =='' || a == null );
        
        //pert.genres++;
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`); //или можно сразу
    }
}
/* start();
rememberMyFilms();
/* detectPersonalLevel(); 
writeYourGenres(personalMovieDB);
console.log(personalMovieDB);  */

//call back function

/* function first( ) {
    //do something
    setTimeout(function() {
        console.log(1);
    },500);
}
function second () {
    console.log(2);
}
first();
second();

function learnJs(lang, callback) {
    console.log(` я учу ${lang}`);
    callback();
}

learnJs('JavaScript' , function(){
console.log("YUUUU");
}); */


//Objects

/* const obj = new Object(); // запись устарела

const options = {
name: 'test',
width: 1024,
height: 1024,
colors: {
    border: 'black',
    bg: 'red'
},
makeTest : function () {
    console.log('Test!!');
}
};
options.makeTest();
console.log(Object.keys(options).length);

//Деструктиризация
const{border,bg} = options.colors;
console.log(border);





//console.log(options['colors']['border']);
//delete options.name;
//console.log(options); 
let counter = 0;

for (let key in options) {
    if( typeof(options[key]) === 'object'){
        counter++;
        for (let i in options[key]){
        console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
       
    }
    }else{
console.log(` Свойство ${key} имеет значение ${options[key]}`);
counter++;
}
}

console.log(counter);


var codes = {
    // телефонные коды в формате "код страны": "название"
    "7": "Россия",
    "38": "Украина",
    "1": "США"
  };
  
  for (let code in codes) console.log( code, codes[code] ); // 1, 7, 38


  var codes = {
    "+7": "Россия",
    "+38": "Украина",
    "+1": "США"
  };
  
  for (var code in codes) {
    var value = codes[code];
    code = +code; // ..если нам нужно именно число, преобразуем: "+7" -> 7
  
    console.log( code + ": " + value ); // 7, 38, 1 во всех браузерах
  } */


  //Массивы и псевдомассивы

/* const arr = [100, 2, -32, 6, -8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a,b){
    return a - b;
}

arr.forEach(function (item, i , arr) {
console.log(`${i}: ${item} внутри массива ${arr}`);
});
/* arr[99] = 0;//error
arr.pop();
console.log(arr);
arr.push(69); 
console.log(arr);

for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

for(let value of arr){
    console.log(value);
}

const str = prompt('',"");
const products = str.split(", ");

console.log(products.join('; ')); */



//Передача данных по ссылке и по значению



/* let a =5,
b = a;

b = b+5;
console.log(b,a);


const obj = {
    a: 5,
    b: 1
};

//const copy = obj;//ссылка на существующий обьект obj

//copy.a = 10;
//console.log(copy);
console.log(obj);

function copy(main) {
let objCopy = {};
for (let key in main){
    objCopy[key] = main[key];
}
return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x=10;
console.log(newNumbers);
console.log(numbers);

const add = {
d: 17,
e:20
};

 const clone =(Object.assign(numbers,add));

clone.d =25;
clone.c.x =25;
console.log(clone); 

const oldArray = ['a' , 'b', 'c'];
const newArray = oldArray.slice();
newArray[2] = 'efsfsef';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
blogs = ['wordpress', 'livejournal', 'blogger'],
internet = [...video,...blogs, 'vk'],
internet2 = [video, blogs];

console.log(internet2);

function log(a, b, c){
    console.log(a,b,c);
}
const numer = [2, 5, 7];
log(...numer);

const newObj2 = {...add};
console.log(newObj2);*/

//ООП. Прототипно-ориентированное программирвание


/*  let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]); */



//Prototypes
/* const soldier = {
    health:400,
    armor:100,
    x: {
        d:35
    }
};
const john ={
    health:100,

};
//john.__proto__ = soldier;//старый способ прототипирования
const clone = Object.create((soldier),
 Object.getOwnPropertyDescriptor(soldier));

 console.log(soldier);
 console.log(clone.x);


Object.setPrototypeOf(john, soldier);


const john2 = Object.create(soldier);//создаем обьект который будет прототипно наследоваться от солдата
console.log(john2.armor);  */






//!!!!!
//Четвертое задание
//!!!!!!!

/* const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function (){
        
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (priva) {
        if (priva){console.log(personalMovieDB);  console.log('all works - it is true');}
        else {console.log('all works - it is false');}
    
    },
    writeYourGenres: function(){
        for(let i = 1; i < 2; i++){
            let a;
            do
            {
                 a = prompt(`Ваш любимый жанр под номером ${i}`);
                 if( a === '' || a == null) {console.log("Вы ввели некорректные данные или не ввли вовсе");}
                }
            while(a =='' || a == null );
            
            //personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`); //или можно сразу
            personalMovieDB.genres[i-1] = a; 
            let genre = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if( genre === '' || genre == null) 
            {console.log("Вы ввели некорректные данные или не ввли вовсе");
             i--;}
            else{
                personalMovieDB.genres = genre.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach(function(item, i)
         {console.log(`Любимый жанр ${i+1} - это ${item}`);});
    },
    toggleVisibleMyDB: function(){
       if(personalMovieDB.privat){
           personalMovieDB.privat = false;
       }
       else{
           personalMovieDB.privat = true;
       }
}
};

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();



 */




//
/* Динамическая типизация */
//

/* console.log((String(null)));

const num = 5;
console.log("http://vk.com/catslog/" + num);

const fontSize = 26 + 'px';


console.log(typeof(Number('4')));

console.log(+'5');

console.log((parseFloat('15px, 10')));

function rr () {let answ = +prompt('Hello');}
rr();

let switcher = null;
if (switcher){
    console.log('Working...');
}
switcher = 1;
if (switcher){
    console.log('Working...');
}

console.log(typeof(!!"rty4")); */

/*
const box = document.getElementById('box');

const btns = document.getElementsByTagName('button');

const circles = document.getElementsByClassName('circle');



//hearts.forEach(item => console.log(item));

const oneheart = document.querySelector('.heart')[0];
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');

box.style.backgroundColor = 'blue';
box.style.width = '500px'; 

box.style.cssText = 'background-color: blue; width: 500px';
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

for (let i = 0; i < hearts.length; i++){
    hearts[i].style.backgroundColor = 'green';
} 

hearts.forEach(item => {
item.style.width = '200px';
});

const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');

div.classList.add('black');

//document.body.append(div); вставка в конец body
//document.querySelector('.wrapper').append(div);
wrapper.append(div);

//wrapper.prepend(div);
//hearts[0].after(div);

//circles[0].remove();

//hearts[0].replaceWith(circles[0]);


//OLD commands
//wrapper.appendChild(div);
//wrapper.insertBefore(div, hearts[0]);
//wrapper.removeChild(hearts[1]);
//wrapper.replaceChild(circles[0], hearts[2]);

//text HTML
//div.innerHTML = 'Hello World'; 
div.innerHTML = " <h1>Hello World</h1><p>bla bla bla bla bla(4)</p>";
//div.textContent = 'hel';
div.insertAdjacentHTML('afterbegin', "<h2>Hello</h2>"); */




//!!!!!
//Пятое задание - в ветке filmPage
//!!!!!!!

//События

/* const btns = document.querySelectorAll('button'),
overlay = document.querySelector('.overlay');

//btn.onclick = function() {};


//btn.addEventListener('click', () =>{}); 

let i = 0;
const deleteElement = (e) =>{
    console.log(e.target);
    //e.target.remove();
    console.log('hover_delete');
    i++;
    if(i ==1){
        btn.removeEventListener('click', deleteElement );
    }
};
const deleteElement2 = (e) =>{
    console.log(e.currentTarget);
    //e.target.remove();
    console.log(e.type);
   
};
//btn.addEventListener('click', deleteElement2 );
//overlay.addEventListener('click', deleteElement2 );

const link = document.querySelector('a');
link.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(e.target);
});

btns.forEach(btn => {
btn.addEventListener('click', deleteElement2, {once: true});
}); */



//navigation DOM

//console.log(document.head);
//console.log(document.documentElement);
/* console.log(document.body.childNodes);
console.log(document.body.firstChild);
console.log(document.body.lastChild);

console.log(document.querySelector('#current').parentElement);
console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for(let node of document.body.childNodes){
    if(node.nodeName == "#text"){
        continue;
    }
    console.log(node);
} */



//События на мобильном устройстве

/* window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('start');
        console.log(e.touches);
    });
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('end');
    });
}); */




//Время выполнения скриптов(setTimeout и setInterval)

// const timerId = setTimeout(function(text){
//     console.log(text);
// }, 2000, 'Hello');

// const timerId = setTimeout(logger, 2000, );



// clearInterval(timerId);

const btn = document.querySelector('.btn');
let timerId, i = 0;
// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger,2000);
//     timerId = setInterval(logger,500);
// });

// function logger( ) {
  
//     if (i===3) {clearInterval(timerId);}
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 1000);
// }, 500);

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300){
            clearInterval(id);
        }
        else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
btn.addEventListener('click', myAnimation);