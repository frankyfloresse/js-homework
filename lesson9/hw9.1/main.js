// #8Nmt60ZT
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі (довільні значення): колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.style.background = 'hotpink';
div.style.color = 'green';
div.style.margin = '10px';
div.style.fontSize = '32px';
div.innerText = 'hello world!';
document.body.appendChild(div);

let clone = div.cloneNode(true);
document.body.appendChild(clone);
