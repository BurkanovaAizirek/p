//1)-----------------Измените программу, которая будет выводить только ключи объекта на консоль.
function printKeys(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}

// Пример использования:
const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};

printKeys(obj);

// 2)----------------Напишите программу, которая перебирает свойства объекта и удаляет свойства, значение которых равно null (используем метод delete). const obj = {
// a: 10,
// b: null,
// c: "string",
// d: null,
// e: "another string"
// };
const obj2 = {
    a: 10,
    b: null,
    c: "string",
    d: null,
    e: "another string"
};

function removeNullProperties(obj) {
    for (let key in obj2) {
        if (obj2.hasOwnProperty(key) && obj2[key] === null) {
            delete obj2[key];
        }
    }
}

removeNullProperties(obj2);

console.log(obj2);

//3)----------------------Напишите программу, которая проверяет, содержит ли объект определенное свойство.

const obj3 = {
    a: 10,
    b: null,
    c: "string",
    d: null,
    e: "another string"
};

function hasProperty(obj3, propertyName) {
    return propertyName in obj3;
}

// Пример использования:
console.log(hasProperty(obj3, 'e')); 
console.log(hasProperty(obj3, 't')); 
console.log(hasProperty(obj3, 'd'));


// 4)---------Напишите программу, которая находит среднее значение числовых элементов массива. 
//Чтобы найти среднее значение, вы должны сперва суммировать эти значения и поделить сумму на количество значений
function findAverage(array) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
            count++;
        }
    }

    if (count === 0) {
        return 0; // Если массив пустой или не содержит чисел, вернуть 0
    }

    return sum / count;
}

// Пример использования:
const numbers = [2, 4, 6, 8, 10];
const average = findAverage(numbers);
console.log("Среднее значение чисел в массиве:", average);


//3--------5) Вывести все ключи и значения массива, содержащего списки студентов по классам.
// const studentsByClass = [
// ["1A", ["Alice", "Bob", "Charlie"]],
// ["2B", ["David", "Emily", "Frank"]],
// ["3C", ["Grace", "Henry", "Ivy"]]
// ];
// Вывод: Class: 1A - Alice, Bob, Charkie и т.д

const studentsByClass = [
    ["1A", ["Alice", "Bob", "Charlie"]],
    ["2B", ["David", "Emily", "Frank"]],
    ["3C", ["Grace", "Henry", "Ivy"]]
];

function printStudentsByClass(studentsByClass) {
    for (let i = 0; i < studentsByClass.length; i++) {
        const classInfo = studentsByClass[i];
        const className = classInfo[0];
        const students = classInfo[1];
        let studentString = students.join(", ");
        console.log(`Class: ${className} - ${studentString}`);
    }
}

// Пример использования:
printStudentsByClass(studentsByClass);
