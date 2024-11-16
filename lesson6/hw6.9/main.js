// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

const deck = [];

for (const cardSuit of suits) {
    for (const value of values) {
        deck.push({
            cardSuit,
            value,
            color: cardSuit === 'diamond' || cardSuit === 'heart' ? 'red' : 'black'
        })
    }
}

let spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);

let cardsWithSix = deck.filter(card => card.value === '6');
console.log(cardsWithSix);

let redCards = deck.filter(card => card.color === 'red');
console.log(redCards);

let diamondCards = deck.filter(card => card.cardSuit === 'diamond');
console.log(diamondCards);

let clubsCads = deck.filter(card => card.cardSuit === 'clubs' && ['10', 'jack', 'queen', 'king', 'ace'].includes(card.value));
console.log(clubsCads);






