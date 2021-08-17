

const calcular = () => { 
   const co =  document.getElementById("inp_co").value;
   const ca = document.getElementById("inp_ca").value;

   const bloque1 = Math.pow(co,2) + Math.pow(ca,2);

   const resultado = Math.sqrt(bloque1);

   console.log(resultado)
}
const boton = document.getElementById("btn-calcular")

boton.addEventListener("click",calcular)
