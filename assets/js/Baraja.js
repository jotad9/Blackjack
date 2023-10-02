class Baraja {
    constructor() {
        this.deck = [];
    }
    crearDeck(types, specials) {
        for (let i = 2; i <= 10; i++) {
            for (let type of types) {
                this.deck.push(i + type);
            }
        }
        for (let type of types) {
            for (let special of specials) {
                this.deck.push(special + type);
            }
        }
        this.deck = _.shuffle(this.deck);
        return this.deck;
    }

    //Esta función sirve para pedir una carta
    pedirCarta() {
        //si ya no quedan cartas en el deck salta un error
        if (this.deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        //Se elimina la última carta del deck para pasarla a la mesa
        return this.deck.pop();
    }

    valorCarta(carta){
        const valor=carta.substring(0,carta.length-1);
        
    
        return ( isNaN(valor) ) ? ((valor==='A') ? 11 : 10) : ( valor * 1 );
    
    }

    creacionDeImagenCartas(carta,tipoCarta){
        const imgCarta=document.createElement('img');
        imgCarta.src=`assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        tipoCarta.append(imgCarta);
    }
}