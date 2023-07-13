const ordenar = document.querySelectorAll(".ordenar_carrito");

document.addEventListener("DOMContentLoaded", () => {
  show_carrito();
});

ordenar.forEach((boton) => {
  boton.addEventListener("click", () => {
    const title = boton.parentElement.querySelector(".card-title").textContent;
    const src = boton.parentElement.parentElement.querySelector("img").src;
    let precio = boton.parentElement.querySelector(".card-text").textContent;
    precio = parseInt(precio.split("/.")[1]);

    const boton_agregar = document.querySelector("#agregar_carrito");
    boton_agregar.onclick = () => {
      const id = localStorage.length + 1;
      const obj = {
        title,
        src,
        precio,
      };
      localStorage.setItem(id, JSON.stringify(obj));
      alert("Agregado correctamente");
      window.location.reload();
    };
  });
});

function show_carrito() {
  const info_carrito = document.querySelector(".info_carrito");

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const obj = JSON.parse(localStorage.getItem(key));
    console.log(obj);

    const { title, src, precio } = obj;

    info_carrito.innerHTML += `<ul class="navbar-nav justify-content-end flex-grow-1 pe-3"> 
          <div class="d-flex justify-content-center gap-2">
            <h2 class="fs-5">${title}</h2>
            <h1 class="fs-5">Precio: ${precio}</h1>
            
          </div>
    </ul>`;
  }
}