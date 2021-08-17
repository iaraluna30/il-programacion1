

const mostrar = () => {

    const miobjeto = {
        nombre:"pepe",
        apellido:"argento",
        dni:45212147
    } 

    console.log(`
    
        Nombre: ${miobjeto.nombre}
        Apellido: ${miobjeto.apellido}
    
    `)

}


const boton = document.getElementById("btm_mostrar")
boton.addEventListener("click", mostrar)