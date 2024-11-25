// #bq1zkx7WP
// Cтворити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let div = document.getElementById('money');

let moneyCounter = +localStorage.getItem('moneyAmount') || 100;
let lastOpen = localStorage.getItem('lastOpen');

div.innerText = `${moneyCounter} грн.`;

if (!lastOpen || Date.now() - lastOpen >= 10 * 1000) {
    moneyCounter += 10;
    localStorage.setItem('moneyAmount', moneyCounter);
    localStorage.setItem('lastOpen', String(Date.now()));
}





