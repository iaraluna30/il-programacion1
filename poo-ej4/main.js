import Anime from './anime.js'

const mostrar = () => {

const instancia = new Anime()
instancia.obtenercatalogo()
//con la instancia ejecutar el metodo obtenercatalogo
}


const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click",mostrar)