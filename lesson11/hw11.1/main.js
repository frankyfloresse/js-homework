// #HmvAfRQM
// взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.

const wrapper = document.querySelector('.wrapper');

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(({ carts }) => {
        for (const { total, totalProducts, totalQuantity, userId, products } of carts) {

            let cartDiv = document.createElement('div');
            cartDiv.classList.add('cartInfo');
            cartDiv.innerHTML = `
                <div>userId: ${userId}</div>
                <div>total: ${total}</div>
                <div>totalProducts: ${totalProducts}</div>
                <div>totalQuantity: ${totalQuantity}</div>
            `;

            for (const { id, title, price, quantity, total, discountPercentage, discountedTotal, thumbnail } of products ) {
                let productDiv = document.createElement('div');
                productDiv.classList.add('productInfo');
                productDiv.innerHTML = `
                    <div>title: ${title}</div>
                    <img src="${thumbnail}" alt="${thumbnail}">
                    <div>id: ${id}</div>
                    <div>price: ${price}</div>
                    <div>quantity: ${quantity}</div>
                    <div>total: ${total}</div>
                    <div>discountPercentage: ${discountPercentage}</div>
                    <div>discountedTotal: ${discountedTotal}</div>
                `;

                cartDiv.appendChild(productDiv);
            }

            wrapper.appendChild(cartDiv);
        }

    });



