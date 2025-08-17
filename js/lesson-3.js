// Задача 1
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map((num) => num ** 2);
// console.log(squares);

// ---------------------------

// Задача 2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];
// const allValues = data.flatMap((number) => number.values);
// console.log(allValues);

// -----------------------------------------
    
// Задача 3
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
// const objektValue = people.some((person) => person.age < 20);
// console.log(objektValue);

// ----------------------------------------------------

// Задача 4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// const allEven = numbers.every((num) => num % 2 === 0);
// console.log(allEven);

// -----------------------------------------

// Задача 5
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const firstOdd = numbers.find((num) => num % 2 !== 0);
// console.log(firstOdd);

// ----------------------------------------------

// Задача 6
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// const sortedArray = numbersArray.sort((a, b) => a - b);
// console.log(sortedArray);

// -------------------------------------------

// Задача 7
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const sortedArray = stringArray.toSorted();
// console.log(sortedArray);

// -------------------------------------------------

//Задача 8
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
// const sortedUsers = users.sort((a, b) => a.age - b.age);
// console.log(sortedUsers);

// ----------------------------------------------------

// Задача 9

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const filtUsers = user.filter((person) => person.age > 20);
// console.log(filtUsers);

// ---------------------------------------------------

// Задача 10
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);

// ---------------------------------------------------

// Задача 10а
// маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.
// const products = [
//   { name: 'Milk', price: 20 },
//   { name: 'Bread', price: 10 },
//   { name: 'Eggs', price: 15 },
// ];
// const total = products
//   .filter((product) => product.price > 10)
//   .reduce((acc, product) => acc + product.price, 0);
// console.log(total);

// -----------------------------------------------

// Задача 10б
// Напишіть функцію getGirlsPassports() яка поверне масив номерів паспортів дівчат.
// const friends = [
//     { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
//     { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//     { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
//     { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
//     { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
//     { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
// ]
// function getGirlsPassports(friends) {
//     return friends
//         .filter(friend => friend.sex === 'f')
//         .map(girl => girl.passport);
// }
// console.log(getGirlsPassports(friends)); // ['03005991', '03005992', '03005993']

// ----------------------------------------------------------------
    
// Задача 10в
// Маємо масив об'єктів, який представляє список замовлень:
// Завдання:  Поверніть список товарів з усіх виконаних замовлень.
// const orders = [
//   { id: 1, products: ['Milk', 'Bread'], status: 'completed' },
//   { id: 2, products: ['Eggs', 'Juice'], status: 'processing' },
//   { id: 3, products: ['Pasta', 'Spices'], status: 'completed' },
// ];
// const completedProducts = orders
//   .filter(order => order.status === 'completed')
//   .flatMap(order => order.products);
// console.log(completedProducts); // ['Milk', 'Bread', 'Pasta', 'Spices']

// -----------------------------------------------------------

// Задача 11
// Розроби клас Calculator, який дозволяє виконувати арифметичні 
 // операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
 // Приклад використання:

// const calc = new Calculator();
// class Calculator {
//   constructor() {
//     this.result = 0;
//   }

//   number(value) {
//     this.result = value;
//     return this;
//   }

//   add(value) {
//     this.result += value;
//     return this;
//   }

//   subtract(value) {
//     this.result -= value;
//     return this;
//   }

//   multiply(value) {
//     this.result *= value;
//     return this;
//   }

//   divide(value) {
//     if (value === 0) {
//       throw new Error("Cannot divide by zero");
//     }
//     this.result /= value;
//     return this;
//   }

//   getResult() {
//     return this.result;
//   }
// }
// const result = calc
// .number(10)   // Встановлюємо початкове значення 10
// .add(5)       // Додаємо 5 (10 + 5 = 15)
// .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
// .multiply(4)  // Множимо на 4 (12 * 4 = 48)
// .divide(2)    // Ділимо на 2 (48 / 2 = 24)
// .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// виправлене
// class Calculator {
//   constructor() {
//     this.result = 0;
//   }

//   number(value) {
//     this.result = value;
//     return this;
//   }

//   add(number) {
//     this.result += number;
//     return this;
//   }
//   subtract(number) {
//     this.result -= number;
//     return this;
//   }
// divide(number) {
//     if (this.result === 0) {
//       return "I can not divide to 0";
//     }
//     this.result /= number;
//     return this;
//   }

//   multiply(number) {
//     this.result *= number;
//     return this;
//   }
//   getResult() {
//     return this.result;
//   }
// }
// const number = new Calculator();

// const result = number
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// --------------------------------------------------

// Задача this
//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   calculateArea() {
//     return this.height * this.width;
//   }
// }
// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.calculateArea()); // 50 

// --------------------------------------------------


// Завдання 12:
 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const newclient = new Client("user123", "user@example.com");
// console.log(newclient.login); // user123
// newclient.login = "newUser456";
// console.log(newclient.email); // user@example.com
// newclient.email = "newUser456@example.com";
// console.log(newclient.login); // newUser456
// console.log(newclient.email); // newUser456@example.com

// ---------------------------------------------

// Задача 13
  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Person {
  constructor(name, age, gender, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }

  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email
    };
  }
}

class Employee extends Person {
  constructor(name, age, gender, email, salary, department) {
    super(name, age, gender, email);
    this.salary = salary;
    this.department = department;
  }

  getEmployeeDetails() {
    return {
      ...this.getDetails(),
      salary: this.salary,
      department: this.department
    };
  }
}