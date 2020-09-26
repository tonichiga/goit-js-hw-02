// Задание 1

// Нумерация списка имен

// const arrays = ["Mango", "Poly", "Ajax"];

// const getItemsString = function (array) {
//   "use strict";
//   // Write code under this line
//   let result = "";
//   for (let i = 0; i < array.length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };
// console.log(getItemsString(arrays));

// Задание 2

// Сколько стоит каждое слово

// const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
//   message.split(" ").length * pricePerWord;

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// );

// Задание 3

// Поиск самого длинного числа

// function findLongestWord(string = "") {
//   let strSplit = string.split(" ");
//   let theBiggestWord = "";
//   let shortWord = "";
//   for (let i = 0; i < strSplit.length; i += 1) {
//     if (strSplit[i].length > theBiggestWord) {
//       theBiggestWord = strSplit[i].length;
//       shortWord = strSplit[i];
//     }
//   }
//   return shortWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// Задание 4

// Если строка превышает определенное количество символов, то добавить троеточие

// function formatString(string, maxLength = 40) {
//   let strSplit = string.split("");
//   let strSplice = "";
//   // console.log(strSplit.length);
//   if (strSplit.length > maxLength) {
//     strSplit.splice(maxLength, 100, "...");

//     strSplit = strSplit.join("");
//     return strSplit;
//   }
//   return string;
// }

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
