// #j693ca8
// Cтворити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18 та повідомити про це користувача

const input = document.querySelector('input[name="age"]');
const button = document.querySelector('.btn');

button.addEventListener('click', function () {
    let age = +input.value;
    if (age < 18 || isNaN(age)) {
        alert('Entry denied!');
    } else {
        alert('Welcome!')
    }
});


