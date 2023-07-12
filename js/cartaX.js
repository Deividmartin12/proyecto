/*let entradas = ['clasicas'];
let segundos = ['arroces_y_carnes','fritos','pastas','marinos'];
let bebidas = ['gaseosas','refrescos'];*/


var clasicas = ['ensalada', 'aguadito norteño'];
var arroces_y_carnes = ['pollo_saltado', 'lomo_saltado', 'arroz_chaufa', 'seco_de_cabrito', 'cecina_saltada'];
var fritos = ['broaster', 'mostrito', 'salchipapa', 'hamburguesa_de_pollo', 'hamburguesa_de_carne'];
var pastas = ['tallarin_saltado', 'tallarines_verdes', 'tallarines_a_la_huancaina'];
var marinos = ['sudado', 'ceviche', 'arroz_con_mariscos', 'tortilla_de_raya', 'chicharron_de_pescado', 'parihuela'];
var gaseosas = ['coca_cola', 'inka_cola'];
var refrescos = ['chicha_de_jora', 'chicha_morada', 'limonada'];


var subcategorias = ['clasicas', 'arroces_y_carnes', 'fritos', 'pastas', 'marinos', 'gaseosas', 'refrescos'];


var filtro_busqueda = [];

let menu = [
    {
        id: 1,
        src: "../img/secodecabrito.jpg",
        nombre: "Ensalada",
        categoria: subcategorias[0],
        precio: 10.50
    },
    {
        id: 2,
        src: "../img/secodecabrito.jpg",
        nombre: "Aguadito norteño",
        categoria: subcategorias[0],
        precio: 10.50
    },
    {
        id: 3,
        src: "../img/secodecabrito.jpg",
        nombre: "Torta de choclo",
        categoria: subcategorias[0],
        precio: 10.50
    },
    {
        id: 4,
        src: "../img/secodecabrito.jpg",
        nombre: "Pollo saltado",
        categoria: subcategorias[1],
        precio: 10.50
    },
    {
        id: 5,
        src: "../img/secodecabrito.jpg",
        nombre: "Lomo saltado",
        categoria: subcategorias[1],
        precio: 10.50
    },
    {
        id: 6,
        src: "../img/secodecabrito.jpg",
        nombre: "Arroz chaufa",
        categoria: subcategorias[1],
        precio: 10.50
    },
    {
        id: 7,
        src: "../img/secodecabrito.jpg",
        nombre: "Seco de cabrito",
        categoria: subcategorias[1],
        precio: 10.50
    },
    {
        id: 8,
        src: "../img/secodecabrito.jpg",
        nombre: "Cecina saltada",
        categoria: subcategorias[1],
        precio: 10.50
    },
    {
        id: 9,
        src: "../img/secodecabrito.jpg",
        nombre: "Broaster",
        categoria: subcategorias[2],
        precio: 10.50
    },
    {
        id: 10,
        src: "../img/secodecabrito.jpg",
        nombre: "Mostrito",
        categoria: subcategorias[2],
        precio: 10.50
    },
    {
        id: 11,
        src: "../img/secodecabrito.jpg",
        nombre: "Salchipapa",
        categoria: subcategorias[2],
        precio: 10.50
    },
    {
        id: 12,
        src: "../img/secodecabrito.jpg",
        nombre: "Hamburguesa de pollo",
        categoria: subcategorias[2],
        precio: 10.50
    },
    {
        id: 13,
        src: "../img/secodecabrito.jpg",
        nombre: "Hamburguesa de carne",
        categoria: subcategorias[2],
        precio: 10.50
    },
    {
        id: 14,
        src: "../img/secodecabrito.jpg",
        nombre: "Tallarín saltado",
        categoria: subcategorias[3],
        precio: 10.50
    },
    {
        id: 15,
        src: "../img/secodecabrito.jpg",
        nombre: "Tallarines verdes",
        categoria: subcategorias[3],
        precio: 10.50
    },
    {
        id: 16,
        src: "../img/secodecabrito.jpg",
        nombre: "Tallarines a la huancaína",
        categoria: subcategorias[3],
        precio: 10.50
    },
    {
        id: 17,
        src: "../img/secodecabrito.jpg",
        nombre: "Sudado",
        categoria: subcategorias[4],
        precio: 10.50
    },
    {
        id: 18,
        src: "../img/secodecabrito.jpg",
        nombre: "Ceviche",
        categoria: subcategorias[4],
        precio: 10.50
    },
    {
        id: 19,
        src: "../img/secodecabrito.jpg",
        nombre: "Arroz con mariscos",
        categoria: subcategorias[4],
        precio: 10.50
    },
    {
        id: 20,
        src: "../img/secodecabrito.jpg",
        nombre: "Tortilla de raya",
        categoria: subcategorias[4],
        precio: 10.50
    },
    {
        id: 21,
        src: "../img/secodecabrito.jpg",
        nombre: "Chicharrón de pescado",
        categoria: subcategorias[4],
        precio: 10.50
    },
    {
        id: 22,
        src: "../img/secodecabrito.jpg",
        nombre: "Parihuela",
        categoria: subcategorias[4],
        precio: 10.50
    },
    {
        id: 23,
        src: "../img/secodecabrito.jpg",
        nombre: "Coca Cola",
        categoria: subcategorias[5],
        precio: 10.50
    },
    {
        id: 24,
        src: "../img/secodecabrito.jpg",
        nombre: "Inka Cola",
        categoria: subcategorias[5],
        precio: 10.50
    },
    {
        id: 25,
        src: "../img/secodecabrito.jpg",
        nombre: "Chicha de Jora",
        categoria: subcategorias[6],
        precio: 10.50
    },
    {
        id: 26,
        src: "../img/secodecabrito.jpg",
        nombre: "Chicha Morada",
        categoria: subcategorias[6],
        precio: 10.50
    },
    {
        id: 27,
        src: "../img/secodecabrito.jpg",
        nombre: "Limonada",
        categoria: subcategorias[6],
        precio: 10.50
    }
]

mostrar_platos(menu);

function mostrar_platos(lista) {

    // document.getElementById("card").innerHTML = "";

    for (var i = 0; i < lista.length; i++) {

        document.getElementById('platos').innerHTML += `
        <div class="col" id="${lista[i].nombre}">
                    <div class="card">
                        <img src="${lista[i].src}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${lista[i].nombre}</h5>
                            <p class="card-text"> S/. ${lista[i].precio}
                            </p>
                        </div>
                    </div>
                </div>
        `

    }
}






/* document.getElementById("buscador").addEventListener("keyup", function () {
    let text = document.getElementById("buscador").value;

    filtro_busqueda = menu.filter(function (a) {
        if (a.nombre.includes(text)) {
            return a.nombre;
        }
    });

    if (this.value == "") {
        mostrar_platos(menu);

    } else {
        if (filtro_busqueda == "") {
            document.getElementById("busqueda_fallida").style.display = 'block';
            document.getElementById("col").innerHTML = "";

        } else {
            mostrar_platos(filtro_busqueda);
            document.getElementById("busqueda_fallida").style.display = 'none';
        }
    }
}); */



     document.getElementById("btn_clasicas").addEventListener("click",() => {
        for (var i = 0; i < menu.length; i++) {
            const ca = menu[i].categoria;
            const nom = menu[i].nombre;
            
            if(ca=="clasicas"){
                document.getElementById(nom).style.display = 'block';
            }else{
                document.getElementById(nom).style.display = 'none';
            }
        }
     });

     document.getElementById("btn_arroces_y_carnes").addEventListener("click",() => {
        for (var i = 0; i < menu.length; i++) {
            const ca = menu[i].categoria;
            const nom = menu[i].nombre;
            
            if(ca=="arroces_y_carnes"){
                document.getElementById(nom).style.display = 'block';
            }else{
                document.getElementById(nom).style.display = 'none';
            }
        }
     });

     document.getElementById("btn_fritos").addEventListener("click",() => {
        for (var i = 0; i < menu.length; i++) {
            const ca = menu[i].categoria;
            const nom = menu[i].nombre;
            
            if(ca=="fritos"){
                document.getElementById(nom).style.display = 'block';
            }else{
                document.getElementById(nom).style.display = 'none';
            }
        }
     });
     document.getElementById("btn_pastas").addEventListener("click",() => {
        for (var i = 0; i < menu.length; i++) {
            const ca = menu[i].categoria;
            const nom = menu[i].nombre;
            
            if(ca=="pastas"){
                document.getElementById(nom).style.display = 'block';
            }else{
                document.getElementById(nom).style.display = 'none';
            }
        }
     });
     document.getElementById("btn_marinos").addEventListener("click",() => {
        for (var i = 0; i < menu.length; i++) {
            const ca = menu[i].categoria;
            const nom = menu[i].nombre;
            
            if(ca=="marinos"){
                document.getElementById(nom).style.display = 'block';
            }else{
                document.getElementById(nom).style.display = 'none';
            }
        }
     });
     document.getElementById("btn_gaseosas").addEventListener("click",() => {
        for (var i = 0; i < menu.length; i++) {
            const ca = menu[i].categoria;
            const nom = menu[i].nombre;
            
            if(ca=="gaseosas"){
                document.getElementById(nom).style.display = 'block';
            }else{
                document.getElementById(nom).style.display = 'none';
            }
        }
     });
     document.getElementById("btn_refrescos").addEventListener("click",() => {
        for (var i = 0; i < menu.length; i++) {
            const ca = menu[i].categoria;
            const nom = menu[i].nombre;
            
            if(ca=="refrescos"){
                document.getElementById(nom).style.display = 'block';
            }else{
                document.getElementById(nom).style.display = 'none';
            }
        }
     });


