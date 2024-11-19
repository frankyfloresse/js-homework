// #2ikXsE2WiKZ
// Взяти масив User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'Alisa', 'Severin', 'a.severin@gmail.com', 380976545123),
    new User(2, 'Olga', 'Ivanova', 'olga.ivanova@gmail.com', 380972223344),
    new User(3, 'Andriy', 'Shevchenko', 'andriy.shevchenko@gmail.com', 380983334455),
    new User(4, 'Natalia', 'Koval', 'natalia.koval@gmail.com', 380954445566),
    new User(5, 'Oksana', 'Bondarenko', 'oksana.bondarenko@gmail.com', 380965556677),
    new User(6, 'Dmytro', 'Lysenko', 'dmytro.lysenko@gmail.com', 380976667788),
    new User(7, 'Yuliya', 'Tkachenko', 'yuliya.tkachenko@gmail.com', 380987778899),
    new User(8, 'Pavlo', 'Rudenko', 'pavlo.rudenko@gmail.com', 380998889900),
    new User(9, 'Sofiia', 'Melnyk', 'sofiia.melnyk@gmail.com', 380990001122),
    new User(10, 'Viktor', 'Khomenko', 'viktor.khomenko@gmail.com', 380991113344)
];

const evenIdUsers = users.filter(user => user.id % 2 === 0);
console.log(evenIdUsers);

