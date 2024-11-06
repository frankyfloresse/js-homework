// #sA3Gg1sCp
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let horrorBook = {
    title: 'It',
    pageCount: 1140,
    genre: 'Horror',
    authors: [{name: 'Stephen King', age: 77}]
}
console.log(horrorBook);

let dystopianBook = {
    title: 'Nineteen Eighty-Four',
    pageCount: 320,
    genre: 'Dystopian',
    authors: [{name: 'George Orwell', age: 46}]
}
console.log(dystopianBook);

let adventureBook = {
    title: 'The Hobbit ',
    pageCount: 670,
    genre: 'Adventure',
    authors: [{name: 'John Tolkien', age: 81}]
}
console.log(adventureBook);