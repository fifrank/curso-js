var peleadores = {
        pikachon : {
            nombre : "Picachon",
            vida : 200,
            ataque : 10,
            defensa : 2
        },
        dratilascage : {
            nombre : "Dratilascage",
            vida : 180,
            ataque : 15,
            defensa : 3
        }
    },
    turno = 1

iniciarPelea(peleadores.pikachon, peleadores.dratilascage)

function iniciarPelea(peleadorUno, peleadorDos){
    // Mostrar inicio
    console.log(`La pelea entre ${peleadorUno.nombre} vs ${peleadorDos.nombre} comienza!`)
    // Iniciar turnos
    siguienteTurno(peleadorUno, peleadorDos)
}

function siguienteTurno(atacante, victima){
    // Mostrar turno
    console.log()
    console.log(`Turno ${turno++}: ${atacante.nombre} golpea a ${victima.nombre}`)
    
    // Calcular daño
    let dañoRealizado = atacante.ataque - victima.defensa
    if(dañoRealizado < 0) dañoRealizado = 0
    // Mostrar daño
    console.log(`Daño realizado: ${dañoRealizado}`)
    
    // Calcular vida restante
    let vidaRestante = victima.vida - dañoRealizado
    if(vidaRestante <= 0) return console.log(`${victima.nombre} se ha quedado sin vida! ${atacante.nombre} es el ganador!`)
    // Mostrar vida restante
    console.log(`Vida restante: ${vidaRestante}`)
    // Asignar vida restante
    victima.vida = vidaRestante

    // Siguiente turno
    siguienteTurno(victima, atacante)
}