const ordenar = document.querySelectorAll(".ordenar_carrito");

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
    };
  });
});