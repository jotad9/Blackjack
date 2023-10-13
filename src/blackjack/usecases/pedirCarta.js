/**
 * 
 * @param {Array<String>} deck 
 * @returns {String} retorna la última carta del deck
 */
export const pedirCarta = (deck) => {
    //si ya no quedan cartas en el deck salta un error
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    //Se elimina la última carta del deck para pasarla a la mesa
    return deck.pop();
}
