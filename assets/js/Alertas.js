class Alertas{
    victoria(){
        Swal.fire({
            title: 'Has ganado!!',
            icon: 'success',
            confirmButtonText: 'Si',
            allowOutsideClick: false,
        
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            }
        })
    }

    derrota(){
        Swal.fire({
            title: 'Has perdido',
            icon: 'error',
            confirmButtonText: 'Jo',
            allowOutsideClick: false,
        
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            }
        })
    }

    nuevoJuego(){
        Swal.fire({
            title: 'Estas seguro?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            allowOutsideClick: false,
        
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            }
        })
    }

    empate(){
        Swal.fire({
            title: 'Empate',
            icon: 'info',
            confirmButtonText: 'Jo',
            allowOutsideClick: false,
        
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            }
        })
    }
    resultado(puntosMinimos,puntosComputer){
        if(puntosComputer>puntosMinimos && puntosComputer<=21){
            this.derrota();
        }else if(puntosMinimos>puntosComputer && puntosMinimos<=21){
            this.victoria();
        }else if(puntosMinimos>21){
            this.derrota();
        }else if(puntosComputer===puntosMinimos){
            this.empate();
        }else if(puntosComputer>21){
            this.victoria();
        }
    }
}