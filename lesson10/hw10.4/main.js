// #2VaLt4vDczH
// Є сторінка, на якій є блок, я кому знаходиьтся цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї + 1

const div = document.querySelector('.number');

let number = +localStorage.getItem('number') || 0;
number += 1;
div.innerText = number;
localStorage.setItem('number', number);