
//funcion flecha
const calcular = () => { 
const d1= document.getElementById("inp_dato1").Value;
const d2= document.getElementById("inp_dato2").Value;

const  resultado = parseInt (d1) + parseInt (d2);

document.getElementById("h_resultado").textContent = resultado;
}



const boton = document.getElementById("btn_calcular")
boton.addEventListener("click", calcular)
