// #EKRNVPM
// створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function sum(arr) {
    let counter = 0;
    for (const number of arr) {
        counter += number;
    }
    return counter;
}

console.log(sum([1, 2, 10]));