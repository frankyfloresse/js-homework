// #0Kxco1edSN
// створити функцію яка створює ul з  елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (використовувати цикл) та виводить його через document.write

function printList(text, counter) {
    document.write('<ul>');
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

printList('lorem ipsum', 7);
