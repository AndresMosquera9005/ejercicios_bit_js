let form =document.querySelector("#punto_1")
form.addEventListener("submit", function(e){
    e.preventDefault()
    let numero_usario = parseInt(e.target.numero_usario.value)
    let sumatoria =0
    console.log(numero_usario);

    for(i=0; numero_usario; i++){
        sumatoria =sumatoria+ i
    }
    document.querySelector("#resultado_1").innerHTML =sumatoria
})