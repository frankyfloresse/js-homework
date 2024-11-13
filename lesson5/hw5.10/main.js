// #pghbnSB
// створити функцію яка повертає найменьше число з масиву

let numbers = [1, 5, 0, 20, -1, 30];

const findLeastNumber = (arr) => {
    let currentMinNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (currentMinNumber > arr[i]) {
            currentMinNumber = arr[i];
        }
    }
    return currentMinNumber;
};

console.log(findLeastNumber(numbers));

