 export default class Anime{


constructor(){}

async obtenercatalogo()
{
    const datos = await fetch("https://api.jikan.moe/v3/search/anime?q=dragon%20ball")
    const lista = await datos.json()
    const datos_definitivo = lista.results
    
    let micatalogo = [] 
    datos_definitivo.forEach(element => {
        let columna = `
        <div class="col-4">
        <div class="card">
            <img src="${element.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>
        `
        micatalogo.push(columna)
    });
    document.getElementById("lista_fotografias").innerHTML = micatalogo.join('')


}


}