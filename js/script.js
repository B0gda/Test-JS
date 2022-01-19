"use strict";
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

