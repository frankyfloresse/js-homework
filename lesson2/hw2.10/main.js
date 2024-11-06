// #uwsz1RnTQJ1
// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох.
// Також потрібно врахувати коли введені рівні числа.

let a = +prompt('Please enter a number');
let b = +prompt('Please enter a number');

if (!isNaN(a) && !isNaN(b)) {
    if (a > b) {
        console.log(`Максимальне число - ${a}`);
    } else if (b > a) {
        console.log(`Максимальне число - ${b}`);
    } else {
        console.log('Числа рівні');
    }
} else {
    console.log('Invalid data');
}

