import Pitagoras from './pitagoras.js'

const ejecutar = () => {

    const instancia = new Pitagoras()

    //ejecute el metodo calcular
    instancia.calcular()

}

 const boton = document.getElementById("btn-calcular")
 boton.addEventListener("click",ejecutar)