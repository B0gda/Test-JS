"use strict";
/* let number = 5;
const leftBorderWidth = 1;
number = 10;
console.log(number);


const obj = {
    a:50
};

obj.a = 10;

console.log(obj); */


/* console.log(name);
var name = 'Ivan';


{
    var result = 50;
}

console.log(result); */


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

//console.log(obj["age"]);
console.log(obj.age);

let arr = ["appe", "orange.jpg" , 6];
for(let i=0; i< arr.length;i++){
    console.log(arr[i]);
}

//Общение с пользователем

//alert("Hello");
//const result = confirm("Lol?)");
//console.log(result);
/* 
const answer = +prompt("Вам есть 18?", "18");
console.log(answer + 5);
console.log(typeof(answer));  */

const answers = [];
answers[0] = prompt("How are you?", 'OK');
answers[1] = prompt("Sername?", 'Borov');
answers[0] = prompt("LOL?)", 'Nein');

//document.write(answers);
console.log(typeof(null));  