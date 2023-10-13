
/**
 * 
 * @param {} carta 
 * @param {Element} tipoCarta 
 */
export const creacionDeImagenCartas = (carta,tipoCarta) => {
    const imgCarta=document.createElement('img');
    imgCarta.src=`assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    tipoCarta.append(imgCarta);
}