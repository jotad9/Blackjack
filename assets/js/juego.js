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
    //Llamo a la clase Baraja
    const baraja=new Baraja();
    //Creo el deck
    deck=baraja.crearDeck(types,specials);
    
    deck=baraja.pedirCarta();
    
    //Events
    btnPedir.addEventListener('click',function(){
        const carta=baraja.pedirCarta();
        puntosJugador+=baraja.valorCarta(carta);
        puntosHTML[0].innerText=puntosJugador;
        baraja.creacionDeImagenCartas(carta,cartasPlayer);
    
    
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
            const carta=baraja.pedirCarta();
            puntosComputer+=baraja.valorCarta(carta);
            puntosHTML[1].innerText=puntosComputer;
            baraja.creacionDeImagenCartas(carta,cartasComputer);
            if(puntosMinimos>21){
                break;
            }
        }while((puntosComputer<puntosMinimos) && (puntosMinimos<=21));
    
        alertas.resultado(puntosMinimos,puntosComputer);
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

})();
