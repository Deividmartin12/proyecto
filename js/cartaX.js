

let id_entradas = document.getElementById("entradas-tab");
let id_segundos = document.getElementById("segundos-tab");
let id_bebidas = document.getElementById("bebidas-tab");

let id_todos_entradas = document.getElementById("btn_todos_entradas");
let id_todos_segundos = document.getElementById("btn_todos_segundos");
let id_todos_bebidas = document.getElementById("btn_todos_bebidas");
let id_clasicas = document.getElementById("btn_clasicas");
let id_arroces_y_carnes = document.getElementById("btn_arroces_y_carnes");
let id_fritos = document.getElementById("btn_fritos");
let id_pastas = document.getElementById("btn_pastas");
let id_marinos = document.getElementById("btn_marinos");
let id_gaseosas = document.getElementById("btn_gaseosas");
let id_refrescos = document.getElementById("btn_refrescos");

let categorias = ['entradas', 'segundos', 'bebidas'];

let subcategorias = ['clasicas', 'arroces_y_carnes', 'fritos', 'pastas', 'marinos', 'gaseosas', 'refrescos'];

var filtro_busqueda = [];

let menu = [
    {
        id: 1,
        src: "https://th.bing.com/th/id/R.144d3f0c892347675be957e0212fd7aa?rik=xke02njMgisZ8g&riu=http%3a%2f%2fimg.kb-cdn.com%2fimgviewer%2fNVpIM2ptOHhYRzVmUk5rM1NrNlFxYVV6enV4aGk2UFRJMmxPckdDUUVNWWhDL09UTndiOHQzUGNhajNmUlpieTcyaGhPWm9QMDF4WFRNV2tFcWFCajZJekh0bkViNS9TSm84NHZkVElMZUVreEloUXpFVHlpMVdtSUloOTkzbWxYdnhGdnNOQlNkWDVCWVVUdXQwUUMyZVF4bnExdU1JOGZVUVRYWWRNajJoN3d0SFgyUk9qbWV4WllDcE1pSDZq&ehk=YB5qXWrN54M41ESW%2f10abiyCgIJddCO2SgH1HHiAngk%3d&risl=&pid=ImgRaw&r=0",
        nombre: "Ensalada",
        categoria: categorias[0],
        subcategoria: subcategorias[0],
        precio: 5.00
    },
    {
        id: 2,
        src: "../img/secodecabrito.jpg",
        nombre: "Aguadito norteño",
        categoria: categorias[0],
        subcategoria: subcategorias[0],
        precio: 10.50
    },
    {
        id: 3,
        src: "../img/secodecabrito.jpg",
        nombre: "Torta de choclo",
        categoria: categorias[0],
        subcategoria: subcategorias[0],
        precio: 10.50
    },
    {
        id: 4,
        src: "../img/secodecabrito.jpg",
        nombre: "Pollo saltado",
        categoria: categorias[1],
        subcategoria: subcategorias[1],
        precio: 10.50
    },
    {
        id: 5,
        src: "../img/secodecabrito.jpg",
        nombre: "Lomo saltado",
        categoria: categorias[1],
        subcategoria: subcategorias[1],
        precio: 10.50
    },
    {
        id: 6,
        src: "../img/secodecabrito.jpg",
        nombre: "Arroz chaufa",
        categoria: categorias[1],
        subcategoria: subcategorias[1],
        precio: 10.50
    },
    {
        id: 7,
        src: "../img/secodecabrito.jpg",
        nombre: "Seco de cabrito",
        categoria: categorias[1],
        subcategoria: subcategorias[1],
        precio: 10.50
    },
    {
        id: 8,
        src: "../img/secodecabrito.jpg",
        nombre: "Cecina saltada",
        categoria: categorias[1],
        subcategoria: subcategorias[1],
        precio: 10.50
    },
    {
        id: 9,
        src: "../img/secodecabrito.jpg",
        nombre: "Broaster",
        categoria: categorias[1],
        subcategoria: subcategorias[2],
        precio: 10.50
    },
    {
        id: 10,
        src: "../img/secodecabrito.jpg",
        nombre: "Mostrito",
        categoria: categorias[1],
        subcategoria: subcategorias[2],
        precio: 10.50
    },
    {
        id: 11,
        src: "../img/secodecabrito.jpg",
        nombre: "Salchipapa",
        categoria: categorias[1],
        subcategoria: subcategorias[2],
        precio: 10.50
    },
    {
        id: 12,
        src: "../img/secodecabrito.jpg",
        nombre: "Hamburguesa de pollo",
        categoria: categorias[1],
        subcategoria: subcategorias[2],
        precio: 10.50
    },
    {
        id: 13,
        src: "../img/secodecabrito.jpg",
        nombre: "Hamburguesa de carne",
        categoria: categorias[1],
        subcategoria: subcategorias[2],
        precio: 10.50
    },
    {
        id: 14,
        src: "../img/secodecabrito.jpg",
        nombre: "Tallarín saltado",
        categoria: categorias[1],
        subcategoria: subcategorias[3],
        precio: 10.50
    },
    {
        id: 15,
        src: "../img/secodecabrito.jpg",
        nombre: "Tallarines verdes",
        categoria: categorias[1],
        subcategoria: subcategorias[3],
        precio: 10.50
    },
    {
        id: 16,
        src: "../img/secodecabrito.jpg",
        nombre: "Tallarines a la huancaína",
        categoria: categorias[1],
        subcategoria: subcategorias[3],
        precio: 10.50
    },
    {
        id: 17,
        src: "../img/secodecabrito.jpg",
        nombre: "Sudado",
        categoria: categorias[1],
        subcategoria: subcategorias[4],
        precio: 10.50
    },
    {
        id: 18,
        src: "../img/secodecabrito.jpg",
        nombre: "Ceviche",
        categoria: categorias[1],
        subcategoria: subcategorias[4],
        precio: 10.50
    },
    {
        id: 19,
        src: "../img/secodecabrito.jpg",
        nombre: "Arroz con mariscos",
        categoria: categorias[1],
        subcategoria: subcategorias[4],
        precio: 10.50
    },
    {
        id: 20,
        src: "../img/secodecabrito.jpg",
        nombre: "Tortilla de raya",
        categoria: categorias[1],
        subcategoria: subcategorias[4],
        precio: 10.50
    },
    {
        id: 21,
        src: "../img/secodecabrito.jpg",
        nombre: "Chicharrón de pescado",
        categoria: categorias[1],
        subcategoria: subcategorias[4],
        precio: 10.50
    },
    {
        id: 22,
        src: "../img/secodecabrito.jpg",
        nombre: "Parihuela",
        categoria: categorias[1],
        subcategoria: subcategorias[4],
        precio: 10.50
    },
    {
        id: 23,
        src: "../img/secodecabrito.jpg",
        nombre: "Coca Cola",
        categoria: categorias[2],
        subcategoria: subcategorias[5],
        precio: 10.50
    },
    {
        id: 24,
        src: "../img/secodecabrito.jpg",
        nombre: "Inka Cola",
        categoria: categorias[2],
        subcategoria: subcategorias[5],
        precio: 10.50
    },
    {
        id: 25,
        src: "../img/secodecabrito.jpg",
        nombre: "Chicha de Jora",
        categoria: categorias[2],
        subcategoria: subcategorias[6],
        precio: 10.50
    },
    {
        id: 26,
        src: "../img/secodecabrito.jpg",
        nombre: "Chicha Morada",
        categoria: categorias[2],
        subcategoria: subcategorias[6],
        precio: 10.50
    },
    {
        id: 27,
        src: "../img/secodecabrito.jpg",
        nombre: "Limonada",
        categoria: categorias[2],
        subcategoria: subcategorias[6],
        precio: 10.50
    }
]

mostrar_platos(menu);

function mostrar_platos(lista) {

    // document.getElementById("card").innerHTML = "";

    for (var i = 0; i < lista.length; i++) {

        document.getElementById('platos').innerHTML += `
        <div class="col" id="${lista[i].nombre}">
                    <div class="card text-center">
                        <img src="${lista[i].src}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${lista[i].nombre}</h5>
                            <p class="card-text"> S/. ${lista[i].precio}
                            </p>
                            <a href="#" class="btn btn-primary px-5">Agregar</a>
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



document.getElementById("btn_clasicas").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "clasicas") {
            document.getElementById(nom).style.display = 'block';
        } else {
            document.getElementById(nom).style.display = 'none';
        }
    }
});

document.getElementById("btn_arroces_y_carnes").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "arroces_y_carnes") {
            document.getElementById(nom).style.display = 'block';
        } else {
            document.getElementById(nom).style.display = 'none';
        }
    }
});

document.getElementById("btn_fritos").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "fritos") {
            document.getElementById(nom).style.display = 'block';
        } else {
            document.getElementById(nom).style.display = 'none';
        }
    }
});
document.getElementById("btn_pastas").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "pastas") {
            document.getElementById(nom).style.display = 'block';
        } else {
            document.getElementById(nom).style.display = 'none';
        }
    }
});
document.getElementById("btn_marinos").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "marinos") {
            document.getElementById(nom).style.display = 'block';
        } else {
            document.getElementById(nom).style.display = 'none';
        }
    }
});
document.getElementById("btn_gaseosas").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "gaseosas") {
            document.getElementById(nom).style.display = 'block';
        } else {
            document.getElementById(nom).style.display = 'none';
        }
    }
});
document.getElementById("btn_refrescos").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "refrescos") {
            document.getElementById(nom).style.display = 'block';
        } else {
            document.getElementById(nom).style.display = 'none';
        }
    }
});
document.getElementById("btn_todos_entradas").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "clasicas") {
            document.getElementById(nom).style.display = 'block';
        } else {
            document.getElementById(nom).style.display = 'none';
        }
    }
});
document.getElementById("btn_todos_segundos").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "arroces_y_carnes" || ca == "fritos" || ca == "pastas" || ca == "marinos") {
            document.getElementById(nom).style.display = 'block';
        } else {
            document.getElementById(nom).style.display = 'none';
        }
    }
});
document.getElementById("btn_todos_bebidas").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "refrescos" || ca == "gaseosas") {
            document.getElementById(nom).style.display = 'block';
        } else {
            document.getElementById(nom).style.display = 'none';
        }
    }

    console.log("Hola");
});



document.getElementById("sub_entradas-tab").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "refrescos" || ca == "gaseosas") {
            document.getElementById(nom).style.display = 'block';
        } else {
            document.getElementById(nom).style.display = 'none';
        }
    }
});

document.getElementById("sub_segundos-tab").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        document.getElementById("btn_todos_segundos").onselect(this.addEventListener("click"));
        /* if(ca=="refrescos" || ca=="gaseosas"){
            document.getElementById(nom).style.display = 'block';
        }else{
            document.getElementById(nom).style.display = 'none';
        } */
    }
});

document.getElementById("sub_bebidas-tab").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "refrescos" || ca == "gaseosas") {
            document.getElementById(nom).style.display = 'block';
        } else {
            document.getElementById(nom).style.display = 'none';
        }
    }
});


