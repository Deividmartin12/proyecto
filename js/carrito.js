const botones_agregar_carrito = document.querySelectorAll("#agregar-carrito");


botones_agregar_carrito.forEach(boton => {
    boton.addEventListener('click', () => {
        const title = boton.parentElement.querySelector(".card-title").textContent;
        const descripcion = boton.parentElement.querySelector(".card-text").textContent;
        const src = boton.parentElement.parentElement.querySelector("img").src
        
        const precio = parseInt(boton.parentElement.querySelector(".precio").textContent);

        agregar_local_storage(title,descripcion,src,precio);
    })
    
});

function agregar_local_storage(title, descripcion,src, precio) {

    const id = localStorage.length + 1;

    const obj = {
        title,
        descripcion,
        src,
        precio
    }
    localStorage.setItem(id,JSON.stringify(obj));
    alert("Agregado correctamente");
}