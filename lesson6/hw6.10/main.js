// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
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
console.log(deck);

let cardsBySuit = deck.reduce((acc, card) => {
    acc[card.cardSuit].push(card);
    return acc;
}, {
    spade: [],
    diamond: [],
    heart: [],
    clubs: []
});

console.log(cardsBySuit);


