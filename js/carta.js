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

let btn_agregar_carrito = document.getElementById("agregar_Carrito");

let categorias = ["entradas", "segundos", "bebidas"];

let subcategorias = [
    "clasicas",
    "arroces_y_carnes",
    "fritos",
    "pastas",
    "marinos",
    "gaseosas",
    "refrescos",
];

var filtro_busqueda = [];

let menu = [
    {
        id: 1,
        src: "https://th.bing.com/th/id/R.144d3f0c892347675be957e0212fd7aa?rik=xke02njMgisZ8g&riu=http%3a%2f%2fimg.kb-cdn.com%2fimgviewer%2fNVpIM2ptOHhYRzVmUk5rM1NrNlFxYVV6enV4aGk2UFRJMmxPckdDUUVNWWhDL09UTndiOHQzUGNhajNmUlpieTcyaGhPWm9QMDF4WFRNV2tFcWFCajZJekh0bkViNS9TSm84NHZkVElMZUVreEloUXpFVHlpMVdtSUloOTkzbWxYdnhGdnNOQlNkWDVCWVVUdXQwUUMyZVF4bnExdU1JOGZVUVRYWWRNajJoN3d0SFgyUk9qbWV4WllDcE1pSDZq&ehk=YB5qXWrN54M41ESW%2f10abiyCgIJddCO2SgH1HHiAngk%3d&risl=&pid=ImgRaw&r=0",
        nombre: "Ensalada",
        categoria: categorias[0],
        subcategoria: subcategorias[0],
        precio: 5.50
    },
    {
        id: 2,
        src: "https://th.bing.com/th/id/R.71698717c2d270baec48bfbdafaf7850?rik=bVqXYSsM3QkYyw&pid=ImgRaw&r=0",
        nombre: "Aguadito norteño",
        categoria: categorias[0],
        subcategoria: subcategorias[0],
        precio: 10
    },
    {
        id: 3,
        src: "https://t2.rg.ltmcdn.com/es/posts/3/0/6/torrejas_de_choclo_75603_600.jpg",
        nombre: "Torta de choclo",
        categoria: categorias[0],
        subcategoria: subcategorias[0],
        precio: 5.50
    },
    {
        id: 4,
        src: "https://www.deliciosi.com/images/1600/1676/pollo-saltado.jpg",
        nombre: "Pollo saltado",
        categoria: categorias[1],
        subcategoria: subcategorias[1],
        precio: 12
    },
    {
        id: 5,
        src: "https://keeprecipes.com/sites/keeprecipes/files/lomo-saltado21.jpg",
        nombre: "Lomo saltado",
        categoria: categorias[1],
        subcategoria: subcategorias[1],
        precio: 12
    },
    {
        id: 6,
        src: "https://micomidaperuana.com/wp-content/uploads/2019/05/Arroz-chaufa.jpg",
        nombre: "Arroz chaufa",
        categoria: categorias[1],
        subcategoria: subcategorias[1],
        precio: 10.5,
    },
    {
        id: 7,
        src: "https://3.bp.blogspot.com/-PPNmQtwVYNM/Vk4Rkxf42MI/AAAAAAAAH7E/tFc-MfOsBBE/s1600/seco%2Bde%2Bcabrito.jpg",
        nombre: "Seco de cabrito",
        categoria: categorias[1],
        subcategoria: subcategorias[1],
        precio: 13
    },
    {
        id: 8,
        src: "https://cdn.shopify.com/s/files/1/0571/7557/2638/products/RES18-3_a50f8c70-cb3e-4de4-b131-9c580c62f51d_800x.jpg?v=1627844545",
        nombre: "Cecina saltada",
        categoria: categorias[1],
        subcategoria: subcategorias[1],
        precio: 11
    },
    {
        id: 9,
        src: "https://larazon.pe/wp-content/uploads/2020/02/pollo.jpeg",
        nombre: "Broaster",
        categoria: categorias[1],
        subcategoria: subcategorias[2],
        precio: 14.50
    },
    {
        id: 10,
        src: "https://th.bing.com/th/id/R.d9bd5baec815cbfb1c9c6ad893b07a39?rik=Q%2bUiR56HvEiSOg&riu=http%3a%2f%2fblog.redbus.pe%2fwp-content%2fuploads%2f2019%2f09%2fF44167459.jpg&ehk=iMm%2b3QYiAaanPX7L1uVepqukyzaIFh%2fJXdJL0PX8hss%3d&risl=&pid=ImgRaw&r=0",
        nombre: "Mostrito",
        categoria: categorias[1],
        subcategoria: subcategorias[2],
        precio: 20
    },
    {
        id: 11,
        src: "https://th.bing.com/th/id/R.a191b9300fa74f92f48c5a8e01ad5f02?rik=YDoCMamWqXAJDQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-qnskLouHmW8%2fVh_vrTcGkzI%2fAAAAAAAABYs%2fEn6sKoMpL24%2fs1600%2fsalchipapa2.JPG&ehk=0KIzbEAW6BzoDzrxrsh0fShSlsaJ2wav%2fhkAsTwssFU%3d&risl=&pid=ImgRaw&r=0",
        nombre: "Salchipapa",
        categoria: categorias[1],
        subcategoria: subcategorias[2],
        precio: 10
    },
    {
        id: 12,
        src: "https://th.bing.com/th/id/R.f6b6f80326d3cc150667c699e9c8d02f?rik=TlwcbYmoHwSxnw&pid=ImgRaw&r=0",
        nombre: "Hamburguesa de pollo",
        categoria: categorias[1],
        subcategoria: subcategorias[2],
        precio: 7.00
    },
    {
        id: 13,
        src: "https://uniqueboscobel.com/wp-content/uploads/2020/03/AdobeStock_123949075-768x507.jpeg",
        nombre: "Hamburguesa de carne",
        categoria: categorias[1],
        subcategoria: subcategorias[2],
        precio: 8.00
    },
    {
        id: 14,
        src: "https://i.pinimg.com/originals/1d/91/06/1d91064d5b6271ba966b0cb2621a1b09.jpg",
        nombre: "Tallarín saltado",
        categoria: categorias[1],
        subcategoria: subcategorias[3],
        precio: 13.00
    },
    {
        id: 15,
        src: "https://wapa.cronosmedia.glr.pe/migration/imagen/2019/06/27/noticia-1561649043-tallarines-verdes-portada.png",
        nombre: "Tallarines verdes",
        categoria: categorias[1],
        subcategoria: subcategorias[3],
        precio: 13.50
    },
    {
        id: 16,
        src: "https://i1.wp.com/decomidaperuana.com/wp-content/uploads/2018/06/receta-de-tallarin-a-la-huancaina.jpg?fit=700%2C465&ssl=1",
        nombre: "Tallarines a la huancaína",
        categoria: categorias[1],
        subcategoria: subcategorias[3],
        precio: 13.00
    },
    {
        id: 17,
        src: "https://th.bing.com/th/id/R.8173c3cbc5874941065f5fdcd4d0dcf4?rik=Gwm9YA7o0jEyTw&riu=http%3a%2f%2fwww.acomerpescado.gob.pe%2fwp-content%2fuploads%2f2017%2f07%2f35774870440_c568f314dd_k.jpg&ehk=17NQHX%2bCEBRDEIaXgpxy1YdIvgNifyzcRFJ8o69MzDE%3d&risl=&pid=ImgRaw&r=0",
        nombre: "Sudado",
        categoria: categorias[1],
        subcategoria: subcategorias[4],
        precio: 14.00
    },
    {
        id: 18,
        src: "https://infomercado.pe/wp-content/uploads/2018/03/ceviche_sullana.jpg",
        nombre: "Ceviche",
        categoria: categorias[1],
        subcategoria: subcategorias[4],
        precio: 15.00
    },
    {
        id: 19,
        src: "https://4.bp.blogspot.com/--kKtGrsZrWw/VtNrxJJaY_I/AAAAAAAAHRw/_75u0SnjQPA/s1600/arroz-con-mariscos-ingredientes-receta.jpg",
        nombre: "Arroz con mariscos",
        categoria: categorias[1],
        subcategoria: subcategorias[4],
        precio: 14.00
    },
    {
        id: 20,
        src: "https://imgmedia.buenazo.pe/1200x660/buenazo/original/2020/10/16/5f8a27f4b7cb7b7d12596279.jpg",
        nombre: "Tortilla de raya",
        categoria: categorias[1],
        subcategoria: subcategorias[4],
        precio: 10.00
    },
    {
        id: 21,
        src: "https://www.gastrolabweb.com/u/fotografias/m/2021/5/31/f1280x720-14019_145694_5050.jpg",
        nombre: "Chicharrón de pescado",
        categoria: categorias[1],
        subcategoria: subcategorias[4],
        precio: 13.00
    },
    {
        id: 22,
        src: "https://www.enperu.org/gastronomia/wp-content/uploads/2016/07/Parihuela-grande.jpg",
        nombre: "Parihuela",
        categoria: categorias[1],
        subcategoria: subcategorias[4],
        precio: 14.00
    },
    {
        id: 23,
        src: "https://www.distribuidorabebidas.com.uy/wp-content/uploads/sites/31/2018/05/Coca-Cola-litro-descartable.jpg",
        nombre: "Coca Cola",
        categoria: categorias[2],
        subcategoria: subcategorias[5],
        precio: 12.00
    },
    {
        id: 24,
        src: "https://inkachickenokinawa.com/wp-content/uploads/2017/12/inka-cola-1.5.png",
        nombre: "Inka Cola",
        categoria: categorias[2],
        subcategoria: subcategorias[5],
        precio: 12.00
    },
    {
        id: 25,
        src: "https://comidasperuanas.net.pe/wp-content/uploads/2022/09/BR0WDxdCcAAZSO8-751x1024.png",
        nombre: "Chicha de Jora",
        categoria: categorias[2],
        subcategoria: subcategorias[6],
        precio: 10.00
    },
    {
        id: 26,
        src: "https://www.lovferments.com/wp-content/uploads/2021/04/beb_chicha.jpg",
        nombre: "Chicha Morada",
        categoria: categorias[2],
        subcategoria: subcategorias[6],
        precio: 9.00
    },
    {
        id: 27,
        src: "https://th.bing.com/th/id/R.761b4909ab3080ac910f84a2535206f3?rik=m0GG2Ud%2b88NHQQ&riu=http%3a%2f%2fwww.fuentesaludable.com%2fwp-content%2fuploads%2f2016%2f11%2flimonada.jpg&ehk=iJY3cTZLMtzPkjFBpn%2b5hp1vDtHyxvoR6wkEhqZcnow%3d&risl=&pid=ImgRaw&r=0",
        nombre: "Limonada",
        categoria: categorias[2],
        subcategoria: subcategorias[6],
        precio: 7.00
    },
    {
        id: 27,
        src: "https://th.bing.com/th/id/R.929013296ea8917a6f63cdf983915c8f?rik=HVpY3PoOpOp87w&riu=http%3a%2f%2f2.bp.blogspot.com%2f-77yZc3rl8g4%2fUZayYw8QVgI%2fAAAAAAAAAbk%2fbxImKBnGsXM%2fs1600%2frefresco-de-linaza-cebada-y-borraja.jpg&ehk=63ijlKAQx0%2bBOemL4JUlF5xFjVlDNP6vIOdiK4g7aws%3d&risl=&pid=ImgRaw&r=0",
        nombre: "Cebada",
        categoria: categorias[2],
        subcategoria: subcategorias[6],
        precio: 8.00
    },
    {
        id: 28,
        src: "https://mamaskitchenct.com/wp-content/uploads/2020/11/drink-jugo-de-tamarindo.jpg",
        nombre: "Jugo de tamarindo",
        categoria: categorias[2],
        subcategoria: subcategorias[6],
        precio: 8.00
    },
    {
        id: 29,
        src: "https://blog.redbus.pe/wp-content/uploads/2017/12/maxresdefault-1-1.jpg",
        nombre: "Papa a la huancaína",
        categoria: categorias[0],
        subcategoria: subcategorias[0],
        precio: 8.00
    },
    {
        id: 30,
        src: "https://unareceta.com/wp-content/uploads/2018/01/Caldo-de-gallina-con-fideos.jpg",
        nombre: "Caldo de fideos",
        categoria: categorias[0],
        subcategoria: subcategorias[0],
        precio: 11.50
    },
    {
        id: 31,
        src: "https://cubiro.com/wp-content/uploads/2020/10/receta-de-caldo-de-gallina.jpg",
        nombre: "Caldo de gallina",
        categoria: categorias[0],
        subcategoria: subcategorias[0],
        precio: 12.00
    },
    {
        id: 32,
        src: "https://th.bing.com/th/id/R.833e4babe25273d062a984a4ce268163?rik=6807pxyNFXc1Tg&riu=http%3a%2f%2fwww.stock.com.py%2fimages%2fthumbs%2f0174451.jpeg&ehk=R%2b2xjUC5nfJ9K0QgKrRexTR3gTu8yJ7cshuVQJptDNY%3d&risl=&pid=ImgRaw&r=0",
        nombre: "Fanta",
        categoria: categorias[2],
        subcategoria: subcategorias[5],
        precio: 12.00
    },
    {
        id: 33,
        src: "https://th.bing.com/th/id/OIP.yZApXc0NbBUDiEvnqd5chQHaHa?pid=ImgDet&rs=1",
        nombre: "Sprite",
        categoria: categorias[2],
        subcategoria: subcategorias[5],
        precio: 10.50
    }
]

mostrar_platos(menu);

function mostrar_platos(lista) {
    // document.getElementById("card").innerHTML = "";

    for (var i = 0; i < lista.length; i++) {
        document.getElementById("platos").innerHTML += `
        <div class="col" id="${lista[i].nombre}">
                    <div class="card" data-bs-toggle="modal" data-bs-target="#modal_imagen">
                        <img  
                        src="${lista[i].src}" class="card-img-top" alt="${lista[i].nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${lista[i].nombre}</h5>
                            <p class="card-text"> S/. ${lista[i].precio}
                            </p>
                            <a href="#" class="btn btn-primary px-5 ordenar_carrito" data-bs-toggle="modal" 
                            id="${lista[i].id}" data-bs-target="#modal_carrito" >Ordenar</a>
                        </div>
                    </div>
                </div>
        `;
    }
}

document.getElementById("btn_clasicas").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "clasicas") {
            document.getElementById(nom).style.display = "block";
        } else {
            document.getElementById(nom).style.display = "none";
        }
    }
});

document
    .getElementById("btn_arroces_y_carnes")
    .addEventListener("click", () => {
        for (var i = 0; i < menu.length; i++) {
            const ca = menu[i].subcategoria;
            const nom = menu[i].nombre;

            if (ca == "arroces_y_carnes") {
                document.getElementById(nom).style.display = "block";
            } else {
                document.getElementById(nom).style.display = "none";
            }
        }
    });

document.getElementById("btn_fritos").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "fritos") {
            document.getElementById(nom).style.display = "block";
        } else {
            document.getElementById(nom).style.display = "none";
        }
    }
});
document.getElementById("btn_pastas").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "pastas") {
            document.getElementById(nom).style.display = "block";
        } else {
            document.getElementById(nom).style.display = "none";
        }
    }
});
document.getElementById("btn_marinos").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "marinos") {
            document.getElementById(nom).style.display = "block";
        } else {
            document.getElementById(nom).style.display = "none";
        }
    }
});
document.getElementById("btn_gaseosas").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "gaseosas") {
            document.getElementById(nom).style.display = "block";
        } else {
            document.getElementById(nom).style.display = "none";
        }
    }
});
document.getElementById("btn_refrescos").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "refrescos") {
            document.getElementById(nom).style.display = "block";
        } else {
            document.getElementById(nom).style.display = "none";
        }
    }
});
document.getElementById("btn_todos_entradas").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "clasicas") {
            document.getElementById(nom).style.display = "block";
        } else {
            document.getElementById(nom).style.display = "none";
        }
    }
});
document.getElementById("btn_todos_segundos").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (
            ca == "arroces_y_carnes" ||
            ca == "fritos" ||
            ca == "pastas" ||
            ca == "marinos"
        ) {
            document.getElementById(nom).style.display = "block";
        } else {
            document.getElementById(nom).style.display = "none";
        }
    }
});
document.getElementById("btn_todos_bebidas").addEventListener("click", () => {
    for (var i = 0; i < menu.length; i++) {
        const ca = menu[i].subcategoria;
        const nom = menu[i].nombre;

        if (ca == "refrescos" || ca == "gaseosas") {
            document.getElementById(nom).style.display = "block";
        } else {
            document.getElementById(nom).style.display = "none";
        }
    }

    console.log("Hola");
});

id_entradas.addEventListener("click", () => {
    id_todos_entradas.click();
});

id_segundos.addEventListener("click", () => {
    id_todos_segundos.click();
});

id_bebidas.addEventListener("click", () => {
    id_todos_bebidas.click();
});

document.getElementById("buscador").addEventListener("keyup", function () {
    let texto_ingresado = document.getElementById("buscador").value;

    filtro_busqueda = menu.filter(function (a) {
        if (a.nombre.toUpperCase().includes(texto_ingresado.toUpperCase())) {
            document.getElementById(a.nombre).style.display = "block";
        } else {
            document.getElementById(a.nombre).style.display = "none";
        }
    });
});

document
    .querySelector("#myTabContent .nav-link")
    .addEventListener("click", function () {
        document
            .querySelector("#myTabContent .nav-link")
            .classList.add("show active");
    });
{
    /* <div class="col" id="${lista[i].nombre}">
                      <div class="card" data-bs-toggle="modal" data-bs-target="#modal_imagen">
                          <img  
                          src="${lista[i].src}" class="card-img-top" alt="${lista[i].nombre}">
                          <div class="card-body">
                              <h5 class="card-title">${lista[i].nombre}</h5>
                              <p class="card-text"> S/. ${lista[i].precio}
                              </p>
                              <a href="#" class="btn btn-primary px-5" data-bs-toggle="modal" 
                              id="${lista[i].id}" data-bs-target="#modal_carrito" >Ordenar</a>
                          </div>
                      </div>
                  </div>  */
}