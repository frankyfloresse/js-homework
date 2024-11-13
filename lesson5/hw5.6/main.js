// #hOL6126
// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const createList = (text) => {
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`);
};

createList('Hello, world!');