// #zg6Fifnqig
// Cтворити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//   - За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//   - Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella('Anna', 18, 36),
    new Cinderella('Olena', 19, 37),
    new Cinderella('Maria', 20, 38),
    new Cinderella('Diana', 21, 35),
    new Cinderella('Viktoria', 22, 39),
    new Cinderella('Valeria', 23, 36.5),
    new Cinderella('Kateryna', 24, 37.5),
    new Cinderella('Iryna', 25, 38.5),
    new Cinderella('Ksenia', 26, 40),
    new Cinderella('Daryna', 27, 39.5)
];

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }

    findCinderella(cinderellas) {
        return cinderellas.find(cinderella => cinderella.footSize === this.shoe);
    }

    findCinderellaWithLoop(cinderellas) {
        for (const cinderella of cinderellas) {
            if (cinderella.footSize === this.shoe) {
                return cinderella
            }
        }
    }
}

let prince = new Prince('William', 23, 39.5);
let prince2 = new Prince('Cedric', 21, 35);

console.log(prince.findCinderella(cinderellas));
console.log(prince.findCinderellaWithLoop(cinderellas));

console.log(prince2.findCinderella(cinderellas));
console.log(prince2.findCinderellaWithLoop(cinderellas));








