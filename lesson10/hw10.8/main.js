// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const table = document.getElementById('table');
const form = document.forms['table-form'];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let rows = +this.rows.value;
    let cols = +this.cols.value;
    let description = this.description.value;

    if (isNaN(rows) || isNaN(cols)) {
        throw new Error('Inserted value is invalid');
    }

    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j  < cols; j++) {
            let column = document.createElement('td');
            column.innerText = description;
            row.appendChild(column);
        }
        table.appendChild(row);
    }
});


