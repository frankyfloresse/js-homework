// #sH8c4er
// Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text"

const div = document.getElementById('text');
const button = document.querySelector('.btn');

button.addEventListener('click', function () {
    div.style.display = div.style.display === 'block' ? 'none' : 'block';
});

