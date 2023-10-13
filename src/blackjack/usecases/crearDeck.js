import _ from 'underscore';

/**
 * 
 * @param {Array} types 
 * @param {Array} specials 
 * @returns 
 */
export const crearDeck=(types, specials) =>{
    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push(i + type);
        }
    }
    for (let type of types) {
        for (let special of specials) {
            deck.push(special + type);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}