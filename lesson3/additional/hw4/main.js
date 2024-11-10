// #u3vmD0YJXh
// Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи

let arr = [1, true, 45, 'hello', 'asd', -10, false, 56, 'nana', 2];
for (let item of arr) {
    // console.log(typeof item);
    if (typeof item === 'string') {
        console.log(item);
    }
}