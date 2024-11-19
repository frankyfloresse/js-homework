// #nkMXISv
// створити класс для об'єктів Client з полями id, name, surname, email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'Maria', 'Bronishevska', 'm.bronishevska@gmail.com', 3809733344456, ['pillow', 'candles', 'towels', 'photo frames']),
    new Client(2, 'Anna', 'Petrenko', 'anna.petrenko@gmail.com', 380972223344, ['candles', 'vase', 'notebook']),
    new Client(3, 'Sergey', 'Melnyk', 'sergey.melnyk@gmail.com', 380983334455, ['pillow']),
    new Client(4, 'Olena', 'Tymoshenko', 'olena.tymoshenko@gmail.com', 380954445566, ['photo frames', 'paintings', 'candles']),
    new Client(5, 'Dmytro', 'Shevchenko', 'dmytro.shevchenko@gmail.com', 380965556677, ['towels', 'curtains', 'bed linen', 'lamp']),
    new Client(6, 'Iryna', 'Kovalenko', 'iryna.kovalenko@gmail.com', 380976667788, ['blanket', 'rug']),
    new Client(7, 'Viktor', 'Bondar', 'viktor.bondar@gmail.com', 380987778899, ['candles', 'vase']),
    new Client(8, 'Svitlana', 'Moroz', 'svitlana.moroz@gmail.com', 380998889900, ['pillow', 'candles', 'photo frames', 'curtains']),
    new Client(9, 'Nazar', 'Horobets', 'nazar.horobets@gmail.com', 380990001122, ['tablecloth', 'paintings']),
    new Client(10, 'Kateryna', 'Lytvyn', 'kateryna.lytvyn@gmail.com', 380991113344, ['bed linen', 'towels', 'rug', 'lamp', 'candles'])
];

console.log(clients);
