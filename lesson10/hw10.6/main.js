// #Jg0gPO00
// Створити конвертор ваги з кг в фунти. Данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const LBS_PER_KG = 2.205;

let kgInfo = document.querySelector('input[name="kilogram"]');
let lbsInfo = document.querySelector('input[name="pound"]');

kgInfo.addEventListener('input', function () {
    lbsInfo.value = this.value * LBS_PER_KG;
});

lbsInfo.addEventListener('input', function () {
    kgInfo.value = this.value / LBS_PER_KG;
});