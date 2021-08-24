
const calcular = () =>{
const d1= document.getElementById("inp_dato1").value;
const d2= document.getElementById("inp_dato2").value;
const d3= document.getElementById("inp_dato3").value;

let resultado1 = (Math.pow(d2,2) ) - (4*d1*d3)
let raiz = Math.sqrt(resultado1)

let r1 = (-d2 + raiz) / (2*d1)
let r2 = (-d2 - raiz) / (2*d1)

let resultado = 'Raiz 1='+r1+'  '+'Raiz 2='+r2

document.getElementById("h_resultado").textContent = resultado;
}

const boton = document.getElementById("btn_calcular")
boton.addEventListener("click",calcular)