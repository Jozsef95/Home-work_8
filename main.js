//1.Вивести на сторінку в один рядок через кому числа від 10 до 20.
// let numbers = "";
//         for (let i = 10; i <= 20; i++) {
//             numbers += i;
//             if (i < 20) {
//                 numbers += ", ";
//             }
//         }
// document.write(numbers);

//2.Вивести квадрати чисел від 10 до 20.
// for (let i = 10; i <= 20; i++) {
//     let square = i * i;
//     console.log(i + " квадрати чисел : " + square);
// }

//3.Вивести таблицю множення на 7.
// for (let i = 1; i <= 10; i++) {
//     let result = 7 * i;
//     console.log("7 * " + i + " = " + result);
// }

//4.Знайти суму всіх цілих чисел від 1 до 15.
// let sum = 0;
// for (let i = 1; i <= 15; i++) {
//     sum += i;
// }
// console.log("" + sum);

//5.Знайти добуток усіх цілих чисел від 15 до 35.
// let product = 1;
// for (let i = 15; i <= 35; i++) {
//     product *= i;
// }
// console.log("" + product);

//6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
//   let amount = 0;
//   let minLimit = 1;
//   let maxLimit = 500;
// for (let i = minLimit; i <= maxLimit; i++){
//    amount += i;
// }
//    let average = amount / (maxLimit - minLimit + 1);
// console.log("" + average);

//7.Вивести суму лише парних чисел в діапазоні від 30 до 80.
// let amount = 0;
// let minLimit = 30;
// let maxLimit = 80;
// for (let i = minLimit; i <= maxLimit; i++) {
//   if (i % 2 === 0) { 
//      amount += i;
// }}
// console.log("" + amount);

//8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.
// for (let i = 100; i <= 200; i++) {
//     if (i % 3 === 0) { 
//         console.log(i);
//     }
// }

//9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// let number = prompt("Ваш натуральне число?");
//     number = parseInt(number);
// if (!isNaN(number) && number > 0) {
//         document.write("");
//     for (let i = 1; i <= number; i++) {
//      if (number % i === 0) {
//         document.write(i + " , ");
// }}} 

//10.Визначити кількість його парних дільників.
// let num = prompt("Number");
// num = parseInt(num);
// 		if (!isNaN(num) && num > 0) {
// let evenDivisorsnumber = 0;
//    for (let i = 1; i <= num; i++) {
//     if (num % i === 0 && i % 2 === 0) {
//   evenDivisorsnumber++;
// }}
//     document.write(+ evenDivisorsnumber);
// } ¨

//11.Знайти суму його парних дільників.
// let number = prompt("Number");
//  number= parseInt(number);
// if (!isNaN(number) && number > 0) {
// let evenDivisors = 0;
//   for (let i = 1; i <= number; i++) {
// if (number % i === 0 && i % 2 === 0) {
// evenDivisors += i;
// }}
// document.write(+ evenDivisors);
// }

//12.Надрукувати повну таблицю множення від 1 до 10.
//for (let i = 1; i <= 10; i++) {
//    for (let j = 1; j <= 10; j++) {
//        let resultat = i * j;
//        console.log(i + " * " + j + " = " + resultat);
//    }
//}