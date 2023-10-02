(() => {
    'use strict';

    let deck = [];
    let types = ['C', 'D', 'H', 'S'];
    let specials = ['A', 'J', 'Q', 'K'];
    let puntosJugador = 0,
        puntosComputer=0;
    
    //References of HTML
    const btnPedir = document.querySelector('#btnPedir');
    const btnDetener = document.querySelector('#btnDetener');
    const btnNuevo = document.querySelector('#btnNuevo');
    let puntosHTML = document.querySelectorAll('small');
    const cartasPlayer=document.querySelector('#player-cartas');
    const cartasComputer=document.querySelector('#computer-cartas');

    //Llamo a la clase Alertas
    const alertas=new Alertas();
    
    const crearDeck = () => {
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
    crearDeck();
    
    //Esta función sirve para pedir una carta
    const pedirCarta=()=>{
        //si ya no quedan cartas en el deck salta un error
        if(deck.length===0){
            throw 'No hay cartas en el deck';
        }
        //Se elimina la última carta del deck para pasarla a la mesa
        return deck.pop(); 
    }
    
    const valorCarta = (carta) => {
        const valor=carta.substring(0,carta.length-1);
        
    
        return ( isNaN(valor) ) ? ((valor==='A') ? 11 : 10) : ( valor * 1 );
    
    }
    
    //Events
    btnPedir.addEventListener('click',function(){
        const carta=pedirCarta();
        puntosJugador+=valorCarta(carta);
        puntosHTML[0].innerText=puntosJugador;
        creacionDeImagenCartas(carta,cartasPlayer);
    
    
        if(puntosJugador>21){
    
            btnPedir.disabled=true;
            btnDetener.disabled=true;
            turnoComputer(puntosJugador);
            
        }
        if(puntosJugador===21){
            alertas.victoria();
        }
    });
    const turnoComputer=(puntosMinimos)=>{
        do{
            const carta=pedirCarta();
            puntosComputer+=valorCarta(carta);
            puntosHTML[1].innerText=puntosComputer;
            creacionDeImagenCartas(carta,cartasComputer);
            if(puntosMinimos>21){
                break;
            }
        }while((puntosComputer<puntosMinimos) && (puntosMinimos<=21));
    
        final(puntosMinimos);
    }
    btnNuevo.addEventListener('click',()=>{
        alertas.nuevoJuego();
    });
    
    btnDetener.addEventListener('click',()=>{
        Swal.fire({
            title: 'Estas seguro?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            allowOutsideClick: false,
        
        }).then((result) => {
            if (result.isConfirmed) {
                btnPedir.disabled=true;
                btnDetener.disabled=true;
                turnoComputer(puntosJugador);
            }
        })
        
    });

    const creacionDeImagenCartas=(carta,tipoCarta)=>{
        const imgCarta=document.createElement('img');
        imgCarta.src=`assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        tipoCarta.append(imgCarta);
    }

    const final=(puntosMinimos)=>{
        if(puntosComputer>puntosMinimos && puntosComputer<=21){
            alertas.derrota();
        }else if(puntosMinimos>puntosComputer && puntosMinimos<=21){
            alertas.victoria();
        }else if(puntosMinimos>21){
            alertas.derrota();
        }else if(puntosComputer===puntosMinimos){
            alertas.empate();
        }else if(puntosComputer>21){
            alertas.victoria();
        }
    }
})();
