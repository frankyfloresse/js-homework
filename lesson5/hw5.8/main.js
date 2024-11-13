// #gEFoxMMO
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let primitiveElements = [1, true, 'qwerty', -12, 'asd', 15, 18];

const createList = (arr) => {
    document.write('<ul>');
    for (const element of arr) {
        document.write(`<li>${element}</li>`);
    }
    document.write('</ul>');
};

createList(primitiveElements);