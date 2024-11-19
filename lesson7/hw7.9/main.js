// #gsKLAsNWM
// Через Array.prototype. створити власний foreach, filter

let arr = [7, 14, 17, 22, 24, 35, 46, 53];

Array.prototype.myForEach = function (callback) {
    for (const item of this) {
        callback(item)
    }
};

arr.myForEach((item) => console.log(item));

Array.prototype.myFilter = function (callback) {
    let filteredItems = [];

    for (const item of this) {
        if (callback(item)) {
            filteredItems.push(item);
        }
    }
    return filteredItems;
};

console.log(arr.myFilter((item) => item % 2 === 0));




