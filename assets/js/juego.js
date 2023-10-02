(() => {
    'use strict';

    let deck = [];
    let types = ['C', 'D', 'H', 'S'];
    let specials = ['A', 'J', 'Q', 'K'];
    //let puntosJugador = 0,
      //  puntosComputer=0;
    let puntosJugadores=[];
    
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

    const inizializarJuego=(numJugadores=2)=>{
        deck=baraja.crearDeck(types,specials);
        for(let i=0;i<numJugadores;i++){
            puntosJugadores.push(0);
        }
    }
    inizializarJuego(); 
    deck=baraja.pedirCarta();

    
    
    //Events
    btnPedir.addEventListener('click',function(){
        const carta=baraja.pedirCarta();
        acumularPuntos(carta,0);
        baraja.creacionDeImagenCartas(carta,cartasPlayer);
    
    
        if(puntosJugadores[0]>21){
    
            btnPedir.disabled=true;
            btnDetener.disabled=true;
            turnoComputer(puntosJugadores[0]);
            
        }
        if(puntosJugadores[0]===21){
            alertas.victoria();
        }
    });

    const acumularPuntos=(carta,turno)=>{
        puntosJugadores[turno]+=baraja.valorCarta(carta);
        puntosHTML[turno].innerText=puntosJugadores[turno];
        return puntosJugadores[turno];
    }
    const turnoComputer=()=>{
        do{
            const carta=baraja.pedirCarta();
            acumularPuntos(carta,1);
            baraja.creacionDeImagenCartas(carta,cartasComputer);
            if(puntosJugadores[0]>21){
                break;
            }
        }while((puntosJugadores[1]<puntosJugadores[0]) && (puntosJugadores[0]<=21));
    
        alertas.resultado(puntosJugadores[0],puntosJugadores[1]);
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
                turnoComputer();
            }
        })
        
    });

})();
