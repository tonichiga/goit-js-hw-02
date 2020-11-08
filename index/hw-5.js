//  // Write code under this line
// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
    

// }

// Account.prototype.getInfo = function () {
//         return `login: ${this.login}, email: ${this.email}`

// };

// console.log(typeof Account.prototype.getInfo);
// //'function'

// const mango = new Account( 'Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo()); 

// //'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account( 'Poly', 'poly@mail.com');
// console.log(poly.getInfo());

// //'login : Poly, email: poly@mail.com'


//test///////////////////

// function getAllPropValues(array, prop) {
//     'use strict';
//     let items = []
//     // Write code under this line 
//     for (const item of array) {
//         if (item[prop] !== undefined) {           
//             items.push(item[prop])         
//         }
//     }

// }

// // Объекты и ожидаемый результат
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Радар', price: 1280, quantity: 2 },
//     { name: 'Радар', price: 1320, quantity: 1 },
//     { name: 'Сканер', price: 2700, quantity: 1 },
//     { name: 'Сканер', price: 2500, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ]; 

// console.log(getAllPropValues(products, 'name'));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity'));
// // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, 'category'));
// //  []
/////////////////////Задание 2.....



 // Write code under this line

// class User {
//     constructor(name, age, followers) {           
//         this.name = name;
//         this.age = age;
//         this.followers = followers;
//     }
//     getInfo() {
//         return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`           
//      }
// }


//  console.log(typeof User);
// // 'function'

//  const mango = new User('Mango', 2, 20);
//  console.log(mango.getInfo()); 
// // 'User Mango is 2 years old and has 20 followers'

//  console.log(typeof mango.getInfo); 
// // 'function'  

//  const poly = new User( 'Poly', 3, 17);
//  console.log(poly.getInfo());
// // 'User Poly is 3 years old and has 17 followers'

// const bruno = new User('Bruno', 20, 122)
// console.log(bruno.getInfo())

// console.dir(User)

// Задание 3


 // Write code under this line

// class Storage {

//     constructor (arr) {
//         this.items = arr;    
//     }
//     getItems() {
//         return this.items;
//     }

//     addItem(itemAdd) {
//         if (this.items.includes(itemAdd) === false) {
//           return this.items.push(itemAdd)
//         }
//     }

//     removeItem(itemRemove) {
//         for (let i = 0; i < this.items.length; i += 1) {
//             if (this.items[i] === itemRemove) {
//                return this.items.splice(i, 1)
//             }
//         }
//     }
//   }



//  console.log(typeof Storage);
// // 'function'

// const goods = [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ];

//  const storage = new Storage(goods);

//  console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ] */

//  storage.addItem('Дроид');
//  console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

//  storage.removeItem('Пролонгер');
//  console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */


// Задача 4 

 // Write code under this line
  
// class StringBuilder {
//     constructor(value) {
//         this._value = value;
        
//     }

//     get value() {
//         return this._value
//     }
//     set value(value) {
//         this._value = value;
//     }

//     append(str) {
//         return this.value = this.value + str
//     }
//     prepend(str) {
//         return this.value = str + this.value 
//     }

//     pad(str) {
//         return this.prepend(str) + this.append(str) 
//     }
//  }

//  console.log(typeof StringBuilder);
// // 'function'


//  const builder = new StringBuilder('.');

//  builder.append('^');
//  console.log(builder.value); // '.^'

//  builder.prepend('^');
//  console.log(builder.value); // '^.^'

//  builder.pad('=');
//  console.log(builder.value); // '=^.^='

// Задание 5

class Car {
    // Write code under this line
    static getSpecs(obj) {
        let result = [];
        const arrayValue = Object.values(obj);
        const arrayKeys = Object.keys(obj);

        console.log('работает')

        for (let i = 0; i < arrayValue.length; i += 1) {
            console.log("не работает")
            }
           
        console.log(result)
        
        // return `maxSpeed: ${obj.maxSpeed}, speed: ${obj.speed}, isOn: ${obj.isOn}, distance: ${obj.distance}, price: ${obj.price}`
    }
    static getAllValues() {

    }
    constructor(objValue) {
        this.distance = 0;
        this.speed = 0;
        this.maxSpeed = objValue.maxSpeed
        this._price = objValue.price;
        this.isOn = false;
    };
    get price() {
        return this._price;

    };
    set price(value) {
        this._price = value;
    };
     turnOn() { 
         return this.isOn = true;
    };
    turnOff() {
        return this.isOn = false, this.speed = 0;
    };
    accelerate(value) {
        this.speed += value;
        if (this.speed > this.maxSpeed) {           
            return this.speed = this.maxSpeed;
        }
    };
    decelerate(value) {
        this.speed -= value;
        if (this.speed < 0) {
            return this.speed = 0;
        }
    };
    drive(hours) {
        return this.distance += this.speed * hours;
    };
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn()
mustang.accelerate(50);
mustang.drive(2);

 console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);

mustang.drive(1);
mustang.turnOff();

 console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

 console.log(mustang.price); // 2000
mustang.price = 4000;
 console.log(mustang.price); // 4000
// console.log(mustang)