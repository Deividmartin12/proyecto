function generar_subcategorias() {
    /*document.getElementById("barra_sub").innerHTML('<ul class="nav nav-justified"> <li class="nav-item"><a class="nav-link" href="#">Arroces y carnes</a> </li> <li class="nav-item"><a class="nav-link" href="#">Pastas</a> </li> <li class="nav-item"><a class="nav-link" href="#">Sopas</a></li><li class="nav-item"><a class="nav-link" href="#">Pescado y mariscos</a></li></ul>');
*/

}


function mostrar_subcategorias(categoria) {

    switch (categoria) {
        case 'entradas':
            document.getElementById("entradas_sub").style.display = 'block';
            document.getElementById("segundos_sub").style.display = 'none';
            document.getElementById("bebidas_sub").style.display = 'none';
            break;
        case 'segundos':
            document.getElementById("entradas_sub").style.display = 'none';
            document.getElementById("segundos_sub").style.display = 'block';
            document.getElementById("bebidas_sub").style.display = 'none';
            break;
        case 'bebidas':
            document.getElementById("entradas_sub").style.display = 'none';
            document.getElementById("segundos_sub").style.display = 'none';
            document.getElementById("bebidas_sub").style.display = 'block';
            break;

        default:

            break;
    }
}