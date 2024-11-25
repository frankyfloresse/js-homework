// #RbQGnH5DuC
// В localStorage зберігаються масиви.
// Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції - addToLocalStorage(arrayName:string,objToAdd:any{}):void

let user = {name: 'vasya', age: 31, status: false};
let user2 = {name: 'katya', age: 25, status: true};
let city = {address: 'kharkiv'};

function addToLocalStorage(arrayName, objToAdd) {
    let arr = JSON.parse(localStorage.getItem(arrayName)) || [];
    arr.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(arr));
}

addToLocalStorage('usersArray', user);
addToLocalStorage('usersArray', user2);
addToLocalStorage('cityArray', city);