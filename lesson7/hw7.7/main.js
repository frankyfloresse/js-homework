// #5kla3yMpgp
// (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:

// - drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// - info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// - increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// - changeYear (newValue) - змінює рік випуску на значення newValue
// - addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, manufacturer, productionYear, maximumSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.productionYear = productionYear;
        this.maximumSpeed = maximumSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
    }

    info() {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key, this[key]);
            }
        }
    };

    increaseMaxSpeed(newSpeed) {
        this.maximumSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.productionYear = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let car = new Car('Model S', 'Tesla', 2022, 250, 100);
console.log(car);

car.drive();
car.info();

console.log(car.maximumSpeed);
car.increaseMaxSpeed(400);
console.log(car.maximumSpeed);

console.log(car.productionYear);
car.changeYear(2025);
console.log(car.productionYear);
console.log(car);

car.addDriver({
    name: 'Michael',
    surname: 'Shumacher',
});
console.log(car.driver);
console.log(car);


