// #whXxOBlYS0H
// взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.

let wrapper = document.querySelector('.wrapper');

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then( ({ recipes }) => {
        for (const recipe of recipes ) {
            let divContainer = document.createElement('div');
            divContainer.classList.add('recipe');

            for (const key in recipe) {
                const value = recipe[key];

                if (key === 'ingredients') {
                    let ul = document.createElement('ul');
                    for (const ingredient of value) {
                        let li = document.createElement('li');
                        li.innerText = ingredient;
                        ul.appendChild(li);
                    }
                    divContainer.appendChild(ul);
                } else if (key === 'image') {
                    let image = document.createElement('img');
                    image.src = value;
                    divContainer.append(image);
                }  else {
                    let div = document.createElement('div');
                    div.innerText = `${key}: ${Array.isArray(value) ? value.join(', ') : value}`;
                    divContainer.appendChild(div);
                }
            }
            wrapper.appendChild(divContainer);
        }
    });


