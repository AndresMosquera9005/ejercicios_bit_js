const btn_haga_su_memu = document.getElementById("Valor_a_pagar");
const resultado_4 = document.getElementById("CUARTO_EJERCICIO");
const btn_buscando_menu = document.getElementById("Valor_a_pagar");
const btn_lista_menu = document.getElementById("lista_menu")


let arr_menu =[ 
    {
        nombre: "HAMBURGUESA",
        precio: 10000 ,
        img:"asset/img/hamburguesa.jpeg",
        cantidad: 1
    },
    {
        nombre: "PERRO CALIENTE", 
        precio: 10000,
        img: "asset/img/perro_caliente.jpeg",
        cantidad: 1
    },
    {
        nombre: "PIZZA",
        precio: 10000 ,
        img:"asset/img/pizza.jpeg",
        cantidad: 1
    },
    {
        nombre: "CHULETA VALLUNA",
        precio: 20000 ,
        img:"",
        cantidad: 1
    },
    {
        nombre: "EMPANADA", 
        precio: 3000,
        img: "asset/img/empanada.jpeg",
        cantidad: 1
    },
    {
        nombre: "SALCHIPAPAS",
        precio: 12500,
        img: "",
        cantidad: 1
    },
    {
        nombre: "GASEOSA COLOMBIANA", 
        precio: 2500 ,
        img: "asset/img/gaseosa_colombiana.jpeg",
        cantidad: 1
    },    
    {
        nombre: "AGUA BRISA", 
        precio: 2500 ,
        img: "asset/img/",
        cantidad: 1
    },
    {
        nombre: "JUGO HIT", 
        precio: 2500 ,
        img:"asset/img/agua_cristal.jpeg",
        cantidad: 1
    },
    {
        nombre: "GASEOSA COCA COLA", 
        precio: 2500 ,
        img: "asset/img/cocacola.jpeg",
        cantidad: 1
    },    
    {
        nombre: "LIMONADA", 
        precio: 2500 ,
        img: "asset/img/limonada.jpeg",
        cantidad: 1
    },
]


total_comida = 0;
let div_lista_menu = document.getElementById("menu")

btn_buscando_menu.addEventListener("click", function () {
    
    const menu_del_cliente = document.getElementById("menu").value.toUpperCase()
    const resultado_4 = document.getElementById("CUARTO_EJERCICIO")
    const lista_pedido = document.getElementById("lista_pedido")
    const eleccion_cliente = arr_menu.find(x => x.nombre == menu_del_cliente)
    const nuevoCampoLista = document.createElement("li");
    if(eleccion_cliente == null){
        alert("Lo sentimos en este momento no tenemos")
    }else{
        total_comida += eleccion_cliente.precio;
        nuevoCampoLista.textContent = menu_del_cliente + " " + "$" + eleccion_cliente.precio;
        lista_pedido.appendChild(nuevoCampoLista)
    }
    resultado_4.innerHTML = "Total a pagar: " + " " + "$" + total_comida
})
