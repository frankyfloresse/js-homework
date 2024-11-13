// #SIdMd0hQ
// створити функцію яка приймає масив та виводить кожен його елемент

let primitiveValues = [1, true, 'qwerty', 23, -15, false, 'asd'];

const printArrElement = (array) => {
    for (const element of array) {
        console.log(element);
    }
};

printArrElement(primitiveValues);