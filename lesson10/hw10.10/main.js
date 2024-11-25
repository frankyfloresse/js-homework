// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// // При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let arr = [...Array(100).keys()];
console.log(arr);

let div = document.getElementById('main');
let prev = document.getElementById('btn-prev');
let next = document.getElementById('btn-next');

let page = 0;

function renderList(arr) {
    div.innerHTML = '';
    for (const el of arr) {
        let row = document.createElement('div');
        row.innerText = el;
        div.appendChild(row);
    }
}

renderList(arr.slice(0, 10));

prev.addEventListener('click', function () {
    if (page > 0) {
        page--;
        renderList(arr.slice(page * 10, page * 10 + 10));
    }
});

next.addEventListener('click', function () {
    if (page < arr.length / 10 - 1) {
        page++;
        renderList(arr.slice(page * 10, page * 10 + 10));
    }
});