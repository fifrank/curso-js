var peleadores = [
        {
            nombre : "Picachon",
            vida : 200,
            ataque : 10,
            defensa : 2
        },
        {
            nombre : "Dratilascage",
            vida : 180,
            ataque : 15,
            defensa : 3
        }
    ],
    peleaActiva = true,
    offset = 0,
    turno = 1

console.log("Inicia la pelea")
while(peleaActiva){
    let elQueDa = offset,
        elQueRecibe = (offset) ? 0 : 1,
        quienDa = peleadores[elQueDa].nombre,
        quienRecibe = peleadores[elQueRecibe].nombre,
        daño = peleadores[elQueDa].ataque,
        vida = peleadores[elQueRecibe].vida,
        defensa = peleadores[elQueRecibe].defensa
    
    // Mostrar turno
    console.log(`Turno: ${turno++}: ${quienDa} golpea a ${quienRecibe}`)
    
    // Sacar golpe
    let vidaRestante = golpe(daño, vida, defensa)

    // Asignar la vida restante al peleador
    peleadores[elQueRecibe].vida = vidaRestante
        
    // Se quedó sin vida el prro
    if(vidaRestante <= 0){
        console.log(`${quienRecibe} se quedó sin vida! ${quienDa} es el ganador!`)
        // Acabar pelea
        peleaActiva = false
    }
    // Cambiar el offset
    offset = elQueRecibe
}

function golpe(daño, vida, defensa){
    let dañoRealizado = (daño - defensa <= 0) ? 0 : daño - defensa
    console.log(`Realizó ${dañoRealizado} de daño. Vida restante: ${vida-dañoRealizado}`)
    return vida - dañoRealizado
}