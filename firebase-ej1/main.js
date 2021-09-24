//nos comunicamos con nuestra base de datos

const db = firebase.firestore()

const vaciar = () => {
    document.getElementById("inp_nom").value ='';
    document.getElementById("inp_ap").value  ='';
    document.getElementById("inp_dni").value ='';
}



function guardarCliente(){
const Uncliente = {
    nombre:document.getElementById("inp_nom").value,
    apellido:document.getElementById("inp_ap").value,
    dni:document.getElementById("inp_dni").value
}
db.collection("cliente").doc().set(Uncliente)
vaciar()

}