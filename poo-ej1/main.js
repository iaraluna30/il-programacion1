import Bhaskara from "./bhaskara.js"

const mostrar = () =>{

    const a = parseInt(document.getElementById("inp_a").value)
    const b = parseInt(document.getElementById("inp_b").value)
    const c = parseInt(document.getElementById("inp_c").value)

    const instancia = new Bhaskara()

    instancia.coef_a = a;
    instancia.coef_b = b;
    instancia.ti_c = c;
    
    //ejecute la funcion que calcula raiz 1
    const r1 = instancia.calcularRaiz1()
    const r2 = instancia.calcularRaiz2()

    document.getElementById("r1").textContent = 'R1='+r1
    document.getElementById("r2").textContent = 'R2='+r2 
}

const boton = document.getElementById("btn_calcular")
boton.addEventListener("click",mostrar)