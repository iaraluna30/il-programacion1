import Comentario from "./comentarios.js"


const mostrar = () =>{

const comentario = new Comentario()

comentario.obtenercomentario()
}
const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click", mostrar)

const mostrar2 = ( ) => {
     const fotografias = new comentarios
     fotografias.obtenerFotografias()
}
const boton2 = document.getElementById("btn_mostrar2")
boton2.addEventListener("click", mostrar2)
