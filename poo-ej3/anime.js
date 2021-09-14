export default class Anime{
    constructor(){}

    async obtenerfotografias()
    {
     const datos = await fetch("http:/jsonplaceholder.typicode.com/photos?album")
     const fotografias = await datos.json()

     let array_fotografias = [];

     fotografias.forEach(element => {
        let item = `
        
        <div class="col-3 mb-3">
        <div class="card">
            <img src="$´{element.url}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${element.id}</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        `
        array_fotografias.push(item)
     });

     document.getElementById("lista_fotografias").innerHTML = array_fotografias.join('')
    }
}