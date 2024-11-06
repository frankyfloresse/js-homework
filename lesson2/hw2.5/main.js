// #coYydZuaeEB
// Описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу


//Array of objects
let temperature = [
    {morning: 20, afternoon: 26, evening: 22},
    {morning: 19, afternoon: 28, evening: 24},
    {morning: 20, afternoon: 31, evening: 25},
    {morning: 18, afternoon: 27, evening: 20},
    {morning: 19, afternoon: 29, evening: 21},
    {morning: 21, afternoon: 30, evening: 23},
    {morning: 17, afternoon: 28, evening: 20},
]

console.log(temperature);
console.log(temperature.length);
console.log(temperature[5].evening);

//Nested array
let temperature2 = [
    [20, 26, 22],
    [19, 28, 24],
    [20, 31, 25],
    [18, 27, 20],
    [19, 29, 21],
    [21, 30, 23],
    [17, 28, 20],
]

console.log(temperature2);
console.log(temperature2[3][0]);
console.log(temperature2[4][2]);