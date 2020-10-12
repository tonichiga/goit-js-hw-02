// Задание 1
//Записать в значение message объект user

// let message = "";
// const user = {
//   age: 20,
//   hobby: "html",
//   name: "Mango",
//   premium: true,
// };

// user.mood = "happy";
// user["full time"] = true;
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// const values = Object.values(user);

// for (const key of keys) {
//   message += `${key} :${user[key]} ${"\n"}`;
// }

// console.log(message);
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */

// Задание 2

// const countProps = function (obj) {
//   "use strict";
//   // Write code under this line
//   const countProp = Object.keys(obj);
//   return countProp.length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

// Задача 3

// const findBestEmployee = function (employees) {
//   "use strict";
//   // Write code under this line
//   const biggestNumber = Object.values(employees);
//   const keys = Object.keys(employees);
//   let taskDone = 0;
//   let bestEmployees = "";
//   for (let i = 0; i < biggestNumber.length; i += 1) {
//     if (biggestNumber[i] > taskDone) {
//       taskDone = biggestNumber[i];
//     }
//   }
//   let test1 = "";
//   for (const key in employees) {
//     if (employees[key] === taskDone) {
//       bestEmployees = `${key}: ${employees[key]}`;
//     }
//   }
//   // console.log(key + employees[key]);
//   return bestEmployees;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports));
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };

// console.log(findBestEmployee(sellers));
// // 'lux'
// const emptyObj = {};
// console.log(findBestEmployee(emptyObj));

// Задание 4
// Посчитать общую сумму зарплат работникам

// const countTotalSalary = function (employees) {
//   "use strict";
//   let totalSumSalary = 0;
//   const salaryes = Object.values(employees);
//   for (let i = 0; i < salaryes.length; i += 1) {
//     totalSumSalary += salaryes[i];
//   }
//   return totalSumSalary;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers));
// // 1000

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// };
// console.log(countTotalSalary(supports));
// // 500

// Задание 5
// Написать функцию которая возвращает массив значений определенного свойства

///////////////////

// function getAllPropValues(array, prop) {
//   "use strict";

// }
// const cart = {
//   items: [],

//   // Метод показывающий все товары в корзине
//   getItems() {
//     return this.items;
//   },

//   // Метод добавления
//   add(product) {
//     // Проверка на совпадение товаров в корзине
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         // Если совпадает товар, то увеличиваем quantity
//         item.quantity += 1;

//         return;
//       }
//     }
//     // На случай если изачать нет количества товаров
//     // product.quantity = 1
//     this.items.push(product);
//   },

//   // Метод удаления
//   remove(productName) {
//     console.log(productName);

//     // Перебор корзины для нахождения удаляемого товара
//     for (let i = 0; i < this.items.length; i += 1) {
//       console.log(this.item);

//       // Сравнения удаляемого товара с товарами корзины
//       if (productName === this.items[i].name) {
//         console.log("ок");

//         // Смотрим какой индекс удаления
//         console.log(i);

//         // Удаляем (в нашем случае i = 0, 0-ой индекс, 1 ед. удалить)
//         this.items.splice(i, 1);
//       }
//     }
//   },

//   // Метод полной очистки корзины
//   clear() {
//     this.items = [];
//   },

//   // Метод подсчета общей стоимости товар в корзине
//   countTotalPrice() {
//     let total = 0;

//     // Извлекаем из массима отделный элесент
//     for (const item of this.items) {
//       // Берем свойство price нашего элемент и умножаем на свойство quantity
//       total += item.price * item.quantity;
//     }

//     return total;
//   },
// };

// // Вызываем метод для добавления товаров в корзину
// cart.add({ name: "Радар", price: 1300, quantity: 4 });
// cart.add({ name: "Сканер", price: 2700, quantity: 1 });
// console.table(cart.getItems());

// // Вызываем метод для добавления товаров в корзину
// cart.remove("Радар");

// // Смотрим все товары в корзине
// console.table(cart.getItems());

// // Смотрим конечную стоимость
// console.log("Total:", cart.countTotalPrice());

// // Добавляем повторно такой же товар как и был
// cart.add({ name: "Сканер", price: 2700, quantity: 1 });

// // Смотрим все товары корзины
// console.table(cart.getItems());

// // Смотрим конечную стоимость
// console.log("Total:", cart.countTotalPrice());
///////////////
//=====================================================
// Объекты и ожидаемый результат

// Задача 5
// Использование методов.
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.
// Используй метод push для добавления значения в массив и оператор in для проверки наличия свойства в объекте.

// const getAllPropValues = function (array, prop) {
//   const cart = {
//     items: array,
//     itemName: [],

//     getItems(prop) {
//       return this.items;
//     },
//     getNames(prop) {
//       for (const item of this.items) {
//         console.log(item[prop]);
//         this.itemName.push(item[prop]);
//       }
//     },
//     getInderfined() {
//       // console.log;
//       for (const itemSubname of this.itemName) {
//         if (itemSubname === undefined) this.itemName = [];
//       }
//     },
//   };
//   cart.getItems(prop);
//   cart.getNames(prop);
//   cart.getInderfined();

//   return cart.itemName;
// };
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];
// console.log(getAllPropValues(products, "name"));
// //["Радар", "Радар", "Радар", "Сканер", "Сканер", "Дроид", "Захват"];

// console.log(getAllPropValues(products, "quantity"));
// //[4, 2, 1, 1, 3, 7, 2];

// console.log(getAllPropValues(products, "category"));
//[];

// Задача 6
// Посчитать сумму определенных товаро в корзине.

// function calculateTotalPrice(array, prop) {
//   let totalPrice = 0;

//   const cart = {
//     items: array,
//     productArray: [],

//     getItems() {
//       return this.productArray;
//     },
//     getPrice(prop) {
//       for (const item of this.items) {
//         if (prop === item.name) {
//           // console.log(item.quantity);
//           totalPrice += item.price * item.quantity;
//         }
//       }
//     },
//   };
//   cart.getPrice(prop);
//   return totalPrice;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(products, "Радар"));
// // 9080

// console.log(calculateTotalPrice(products, "Сканер"));
// // 10200

// console.log(calculateTotalPrice(products, "Захват"));
// // 2400

// console.log(calculateTotalPrice(products, "Дроид"));
// 2800

// Просто пример сложения всем цифр в числе
// function getSum(number) {
//   const x = number;
//   const text = String(x);

//   let sum = 0;
//   for (let i = 0; i < text.length; i += 1) {
//     const num = Number(text[i]);

//     sum += num;
//   }
//   return sum;
// }
// console.log(getSum(1234567));

// Задание 7 Дополнительное
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],
  lengthId: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    if (type === Transaction.DEPOSIT) {
      this.transactions.push({ id: this.lengthId.length, type, amount });
    } else if (type === Transaction.WITHDRAW) {
      this.transactions.push({ id: this.lengthId.length, type, amount });
    }
    // console.log(this.transactions);
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.lengthId.push(1);
    this.createTransaction(amount, Transaction.DEPOSIT);
    return `Средства успешно пополнены!`;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance - amount < 0) {
      return `На счету недостаточно средства, баланс ${this.balance} кредитов.`;
    }
    this.lengthId.push(2);

    this.balance -= amount;
    this.createTransaction(amount, Transaction.WITHDRAW);
    return `Средства успешно выведены!`;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `На вашем счету ${this.balance} кредитов.`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].id === id) {
        return this.transactions[i];
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalTransactions = [];
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].type === type) {
        totalTransactions.push(this.transactions[i]);
      }
    }
    return totalTransactions;
  },
};

account.deposit(150);
account.withdraw(100);
account.withdraw(100);
account.deposit(250);
account.withdraw(250);
account.deposit(350);
account.deposit(50);
account.deposit(100);
// console.log(account.getBalance());
// console.log(account);
// console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
