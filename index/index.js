// Задание 1

// Нумерация списка имен

// const arrays = ["Mango", "Poly", "Ajax"];

// const getItemsString = function (array) {
//   "use strict";
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

// Задание 5
// Вариант 1
// let spamToFind = ["spam", "sale"];
// function checkForSpam(str) {
//   str = str.toLowerCase().replace("[", "").replace("]", "").split(" ");
//   console.log(str);
//   let message = "n";

//   for (let i = 0; i < str.length; i += 1) {
//     for (let j = 0; j < spamToFind.length; j += 1) {
//       if ((message = spamToFind[j] === str[i])) {
//         return message;
//       }
//     }
//   }
//   return message;
// }

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// Вариант 2
// let message;
// let spamToFindSpam = "spam";
// let spamToFindSale = "sale";

// function checkForSpam(str) {
//   str = str.toLowerCase().replace("[", "").replace("]", "").split(" ");
//   if ((message = str.includes(spamToFindSpam))) {
//   } else if ((message = str.includes(spamToFindSale))) {
//     return message;
//   }
//   return message;
// }

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// Задание 6

// умножает каждый элемент массива.
// function mapArray(array) {
//   "use strict";
//   let numbers = new Array(array.length);

//   for (let i = 0; i < numbers.length; i += 1) {

// numbers = array.map((array) => array * 5);

//  Вариант 2

//     numbers = array.map(function (array) {
//       return array * 10;
//     });
//     // console.log(array);
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

//console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]

// Задача 7
// Если число конечно то вывести результат
// function filterArray(array) {
//   "use strict";
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     Number.isFinite(array[i]);
//     if (Number.isFinite(array[i]) === true) {
//       let j = 0;
//       j += array[i];
//       numbers.push(j);
//     }
//   }
//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// // [1]

// console.log(filterArray([0, -0, 100, "100"]));
// // [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
// // [1]

// console.log(filterArray([{}, () => {}, 2]));
// [2]

// Задание 8
// function reduceArray(array) {
//   "use strict";
//   let total = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] !== []) {
//       total += array[i];
//     }
//   }
//   return total;
// }

// console.log(reduceArray([1, 2, 3]));
// // 6

// console.log(reduceArray([-2, 0, 2]));
// // 0

// console.log(reduceArray([1, 2, 2.5]));
// // 5.5

// Задание 9
const addLogins = ["Zod", "Ajax", "jqueryisextremelyfast", "robotGoogles"];
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;

  function isLoginValid(login, min = 4, max = 16) {
    let loginsValid;

    for (let i = 0; i < addLogins.length; i += 1) {
      // console.log(addLogins.length);
      for (let j = 0; j < addLogins.length; j += 1) {
        console.log(addLogins[j]);
        // if ((loginsValid = login.length >= min && login.length <= max)) {
        // }
      }
    }
    return loginsValid;
    function isLoginUnique(allLogins, login) {}
  }
  console.log(isLoginValid("Zod"));
}

// console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'

// console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
