// Завдання 4:
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

const number = prompt("Введіть кількість хвилин:")
const hours = Math.floor(number / 60); // Цілочисельне ділення для отримання годин матиме метод Math.floor (поверає найбільше ціле число, менше або рівне аргументу)
const minutes = number % 60; // Залишок (остача) від ділення для отримання хвилин
const formattedHours = String(hours).padStart(2, "0"); // Форматування годин з використанням padStart для додавання нулів на початку
const formattedMinutes = String(minutes).padStart(2, "0"); // Форматування хвилин з використанням padStart для додавання нулів на початку
console.log(`${formattedHours}:${formattedMinutes}`); // Виведення результату у форматі "години:хвилини"

// Або
// console.log(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`); // Форматування рядка з використанням padStart для додавання нулів на початку