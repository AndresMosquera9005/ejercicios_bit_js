const btn_a_sumar = document.getElementById("btn_a_sumar");
const btn_par_impar = document.getElementById("btn_#_par_impar");
const btn_edad_menor = document.getElementById("btn_menor");
const btn_edad_mayor = document.getElementById("btn_mayor");
const btn_genero = document.getElementById("btn_genero");
const btn_multiplicacion = document.getElementById("btn_multiplica")



//PUNTO UNO
let valor_inicial = 0;

btn_a_sumar.addEventListener("click", function(){
    const numero_del_usario = document.getElementById("digito_a_sumar").value;
    const resultado_1 = document.getElementById("PRIMER_EJERCICIO");
    
    for(i=1; i<=numero_del_usario; i++){
        valor_inicial = valor_inicial + i;
        console.log(valor_inicial);
        resultado_1.innerHTML += valor_inicial+"<br>"
    }
});


//PUNTO DOS 

btn_par_impar.addEventListener("click", function(){
    const numero_p_i = document.getElementById("digito_par_impar").value;
    const resultado_2 = document.getElementById("SEGUNDO_EJERCICIO");

    if (numero_p_i % 2 == 0) {
        resultado_2.innerHTML = `${numero_p_i} Es un numero par ` ;
    }else {
        resultado_2.innerHTML = `${numero_p_i} Es un numero impar`;
    }
});

// PUNTO 3
btn_edad_menor.addEventListener("click", function(){
    const numero_edad_menor = document.getElementById("edad_del_menor").value;
    const resultado_3 = document.getElementById("TERCER_EJERCICIO");

    if(numero_edad_menor <= 10){
        resultado_3.innerHTML = 'si, puede reclame el juego';
    }else{
        resultado_3.innerHTML = 'No, puede reclamar el juego'
    }    
});

btn_edad_mayor.addEventListener("click", function(){
    const numero_edad_adulto = document.getElementById("numero_edad_mayor").value;
    const resultado_3 = document.getElementById("TERCER_EJERCICIO");

    if (numero_edad_adulto >= 18) {
        resultado_3.innerHTML = 'Si, puede reclamar una cerveza'
    }else{
        resultado_3.innerHTML = 'No, puede reclamar una cerveza'
    }
});

btn_genero.addEventListener("click", function(){
    const genero = document.getElementById("genero").value.toUpperCase();
    const resultado_3 = document.getElementById("TERCER_EJERCICIO");
    
    if (genero === "MUJER") {
        resultado_3.innerHTML = 'puede reclamar una pizza hawaina'
    }else{
        resultado_3.innerHTML = 'puede reclamar una pizza de tres carnes'
    }
});


// PUNTO CUATRO


// PUNTO QUINTO 

btn_multiplicacion.addEventListener("click", function(){
    const numero_a_multiplicar = document.getElementById("numero_tabla").value;
    const numero_fin = document.getElementById("numero_hasta").value;
    const resultado_5 = document.getElementById("QUINTO_EJERCICIO")
    let totalmult = 0;

    for ( i = 0; i <= numero_fin; i++) {
        resultado_5.innerHTML = "numero_a_multiplicar" + totalmult * i       
    }



});




// PUNTO SEXTO 

btn_descuento.addEventListener("click", function(){
    const valor_nota = document.getElementById("nota").value;
    let valor_matricula = 1000000;
    let resultado_6 = document.getElementById("SEXTO_EJERCICIO")
    let descuento_5 = 5
    
    

    if(valor_nota < 3){
        resultado_6.innerHTML = `Total a pagar es ${valor_matricula}`
    }

    if(valor_nota > 3){

    }

});




