/*  //  !   1. Переменные (variable).
        todo   -   Cейчас лучше исп. const или let, предпочтительно const.
*/

// var name = "Alex";

// *    camelCase
// const firstName = "Alex";

// todo string
// const lastName = "Belikh";

// todo number
// let age = 26;

// todo boolean
// const isProgrammer = true;

/*
    ? Как можно и нельзя называть переменные:
*/

// const _z = "можно";
// const $z = "можно";
// const _1 = "можно";
// const $1 = "можно";
// const text1 = "можно";

// const 1text="нельзя"

/*
    ? Как можно и нельзя называть переменные /
*/

/*
    !   2. Мутирование
*/
// console.log("Имя человека: " + firstName,"а возраст человека: " + age);
// alert("Имя человека: " + firstName,"а возраст человека: " + age);

// выдает переменную age как текст, а не число

/*
    !   3. Операторы

    + Конкатенация (склеивание)
*/
// const currentYear = 2020;
// const birthYear = 1989;

// const age = currentYear - birthYear;

// console.log(age);

// const a = 10;
// const b = 5;

// let c = 32;

/*  аналогичное
 *   c = c + a;
 *   c += a;
 *   c -= a;
 */
// console.log(a + b);
// console.log(a - b);

// console.log(a * b);
// console.log(a / b);

// console.log(currentYear++);

// console.log(c + a);

/*
    !   4. Типы данных
*/

// *    Проверка переменной на ее тип: typeof

// let x;
// null;

// console.log(typeof firstName);
// console.log(typeof age);
// console.log(typeof isProgrammer);
// console.log(typeof x);
// console.log(typeof null);

/*
    !   5.  Приоритет операторов (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
*/

// const fullAge = 31;
// const birthYear = 1989;  подтянет с верху
// const currentYear = 2020;   подтянет с верху

// const isFullAge = (currentYear - birthYear) >= fullAge;

// console.log(isFullAge);

/*
    !   6.  Условные операторы
*/

// const courseStatus = "pending"; //  ready, fail, pending    time 1:10:25

// if (courseStatus === "ready") {
// 	console.log("Курс уже готов и его можно проходить");
// } else if (courseStatus === "pending") {
// 	console.log("Курс пока находится в процессе разработки");
// } else {
// 	console.log("Курс не получился");
// }

// const isReady = true;

// if (isReady === true) {
// 	console.log("Все готово!");
// } else {
// 	console.log("Все не готово!");
// }

// ?    Тернарное выражение

// isReady ? console.log("Все готово!") : console.log("Все не готово!");

// const num1 = 42;
// const num2 = "42";

// console.log(num1 == num2);
// приведит к 1 типу данных

// ? двойное равно лучше забыть и исп ===

// console.log(num1 === num2);
// условие false, потому что не равно

/*  
    !   7.  Булевая логика  (https://developer.mozilla.org/ru/docs/conflicting/Web/JavaScript/Reference/Operators_843c998343f0cdaa5699874c806d4cea)
*/

/*
    !   8.  Функции
*/

// function - объявление функции
// calculateAge - название функции, котороая принимает в себя параметр year

// function calculateAge(year) {
// 	return 2020 - year;
// }

// const myAge = calculateAge(1989);

// console.log(myAge);

// function myAge(ago5) {
// 	return 2021 - ago5;
// }

// const res = myAge(5);

// console.log(res);

// это все Инструкции – это синтаксические конструкции и команды, которые выполняют действия.
// alert("Привет");
// alert("мир");

let old = prompt("Как бы вы СЕБЯ описали одним словом?");

alert(`Думаете Вы: ${old}?`);

alert("не Михайловна, Вы циркулярка))))");
