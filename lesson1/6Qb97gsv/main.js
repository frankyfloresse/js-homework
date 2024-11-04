// 6Qb97gsv
// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Тетяна';
let middleName = 'Олександрівна';
let lastName = 'Жорник';

let person = lastName + ' ' + firstName + ' ' + middleName;
console.log(person);

let person2 = `${lastName} ${firstName} ${middleName}`;
console.log(person2);