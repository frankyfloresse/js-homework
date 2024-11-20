// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.

let cat1 = {
    name: 'Semka',
    age: 1,
    paws: 4,
    say() {
        console.log(this.name);
    }
};

function makeDeepCopy(obj) {
    if (obj) {
        let extractedMethods = {};

        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                extractedMethods[key] = obj[key];
            }
        }

        let copy = JSON.parse(JSON.stringify(obj));
        return { ...copy, ...extractedMethods };
    }

    throw new Error('Please provide valid object!');
}

let cat2 = makeDeepCopy(cat1);
cat2.name = 'Keksik';
cat2.say();
console.log(cat1, cat2);






