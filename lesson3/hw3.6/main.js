// #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://www.simplyrecipes.com/thmb/z95Tx3jzQkPNc_i1MlDHmy2pI-Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2008__08__homemade-tomato-juice-horiz-a-1200-c37b5128f0f248999446fc460f8afb96.jpg'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://media.istockphoto.com/id/466073662/photo/tea-cup-on-saucer-with-tea-being-poured.jpg?s=612x612&w=0&k=20&c=skmYl4zd-1Op_YF0pYVh2is4D6fakwK2LPFpRZRMB9U='
    },
];

for (let product of products) {
    document.write(`<div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="image" class="product-image">
    </div>`);
}
