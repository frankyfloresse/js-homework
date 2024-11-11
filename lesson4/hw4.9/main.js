// #bovDJDTIjt
// створити функцію яка приймає масив об'єктів з наступними полями id,name,age та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let users = [
    {
        id: 1,
        name: 'Charlie',
        age: 23,
    },
    {
        id: 2,
        name: 'Kate',
        age: 31,
    },
    {
        id: 3,
        name: 'Sarah',
        age: 19,
    },
    {
        id: 4,
        name: 'Taylor',
        age: 39,
    },
    {
        id: 5,
        name: 'Monica',
        age: 27,
    },
    {
        id: 6,
        name: 'Allison',
        age: 34,
    },
];


function printUserList(arr) {
    for (const user of arr) {
        document.write(`<div>${user.id}, ${user.name}, ${user.age}</div>`);
    }
}

printUserList(users);

