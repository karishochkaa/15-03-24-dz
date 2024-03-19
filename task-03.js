// * Завдання 3
// У вас є масив, який містить числа. 
//Необхідно знайти всі числа, які є парними і більшими за 10, і повернути їх у зворотньому порядку.
// Наприклад, масив: [5, 14, 8, 20, 3, 11, 17, 4]
// Відповідь: [20, 14]
// Для вирішення цієї задачі можна використовувати методи filter() та reverse().
const numbers = [5, 14, 8, 20, 3, 11, 17, 4];
function getNewArray (arr){
    return arr.filter((value) => value % 2 === 0 && value > 10).reverse();
}
console.log(numbers);
console.log(getNewArray(numbers));