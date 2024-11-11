// #pghbnSB
// створити функцію яка повертає найменьше число з масиву

let numbers = [23, 40, 5, 29, 7, 23, 44, 51];

function findSmallestNumber(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
console.log(findSmallestNumber(numbers));
