// #vV9a6584I5
// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// - drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// - info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// - increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// - changeYear (newValue) - змінює рік випуску на значення newValue
// - addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, productionYear, maximumSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.productionYear = productionYear;
    this.maximumSpeed = maximumSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
    };

    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key, this[key]);
            }
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {
       this.maximumSpeed += newSpeed;
    };

    this.changeYear = function (newValue) {
        this.productionYear =  newValue;
    };

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new Car('Model S', 'Tesla', 2022, 250, 100);
console.log(car);

car.drive();
car.info();

car.increaseMaxSpeed(250);
console.log(car.maximumSpeed);

car.changeYear(2024);
console.log(car.productionYear);

car.addDriver({
    name: 'Michael',
    surname: 'Shumacher',
});

console.log(car.driver);
console.log(car);
