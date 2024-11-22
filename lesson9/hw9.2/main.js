// #OPLI89c9G
// - Є масив: ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const items = ['Main','Products','About us','Contacts'];

let ul = document.createElement('ul');
for (const item of items) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}

document.body.appendChild(ul);