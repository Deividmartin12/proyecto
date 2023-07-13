document.addEventListener('DOMContentLoaded', () => {
    mostrar_fin()
    const datos_pedido = document.querySelector("#datos_pedido");
    let total = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        const producto = JSON.parse(localStorage.getItem(key));
        total += producto.precio;
        show_producto(producto);
    }

    const linea = document.createElement("HR");
    const total_etiqueta = document.createElement("P");
    total_etiqueta.classList.add("text-end", "p-3", "fw-bold", "fs-5")
    total_etiqueta.textContent = "Total: " + total;
    datos_pedido.appendChild(linea)
    datos_pedido.appendChild(total_etiqueta)
})


function show_producto(producto, total) {
    const title = producto.title;
    const descripcion = producto.descripcion;
    const src = producto.src;
    const precio = producto.precio;

    const div_card = document.createElement("DIV");
    const div_body = document.createElement("DIV");
    const img = document.createElement("IMG");
    const h5 = document.createElement("H5");
    const p = document.createElement("P");
    const precio_etiqueta = document.createElement("P");

    h5.classList.add("text-left", "w-50");
    precio_etiqueta.classList.add("text-center", "w-50");

    p.textContent = descripcion;
    h5.textContent = title;
    img.src = src;
    precio_etiqueta.textContent = precio;

    div_card.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center")
    div_body.classList.add("w-100", "d-flex", "gap-2", "justify-content-around")
    div_body.appendChild(h5)
    div_body.appendChild(precio_etiqueta)
    div_card.appendChild(div_body);


    datos_pedido.appendChild(div_card);
}

function mostrar_fin() {
    const Boton = document.querySelector("#pagarpedido");
    Boton.addEventListener('click', (e) => {
        e.preventDefault();
        const nombre = document.querySelector("#nombre").value;
        const apellido = document.querySelector("#apellido").value;

        swal('Pago exitos', nombre + " " + apellido, 'success');

        localStorage.clear();

        setTimeout(() => {
            window.location.reload()
        }, 8000);
    });

}
