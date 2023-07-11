let entradas = ['clasicas'];
let segundos = ['arroces_y_carnes','fritos','pastas','marinos'];
let bebidas = ['gaseosas','refrescos'];


function mostrar_menu(categoria) {

    switch (categoria) {
        case 'entradas':
            document.getElementById("entradas_platos").style.display = 'block';
            document.getElementById("segundos_platos").style.display = 'none';
            document.getElementById("bebidas_platos").style.display = 'none';

            mostrar_entradas('clasicas');
            break;

        case 'segundos':
            document.getElementById("entradas_platos").style.display = 'none';
            document.getElementById("segundos_platos").style.display = 'block';
            document.getElementById("bebidas_platos").style.display = 'none';
            
            mostrar_segundos('arroces_y_carnes');
            break;

        case 'bebidas':
            document.getElementById("entradas_platos").style.display = 'none';
            document.getElementById("segundos_platos").style.display = 'none';
            document.getElementById("bebidas_platos").style.display = 'block';
            
            mostrar_bebidas('refrescos');
            break;

        default:

            break;
    }
}

function mostrar_subcategorias(categoria) {

    switch (categoria) {
        case 'entradas':
            document.getElementById("entradas_subcategorias").style.display = 'block';
            document.getElementById("segundos_subcategorias").style.display = 'none';
            document.getElementById("bebidas_subcategorias").style.display = 'none';

            mostrar_menu('entradas');
            break;

        case 'segundos':
            document.getElementById("segundos_subcategorias").style.display = 'block';
            document.getElementById("entradas_subcategorias").style.display = 'none';
            document.getElementById("bebidas_subcategorias").style.display = 'none';

            mostrar_menu('segundos');
            break;

        case 'bebidas':
            document.getElementById("bebidas_subcategorias").style.display = 'block';
            document.getElementById("entradas_subcategorias").style.display = 'none';
            document.getElementById("segundos_subcategorias").style.display = 'none';

            mostrar_menu('bebidas');
            break;

        default:

            break;
    }
}

function mostrar_entradas(sub_categoria) {

    for (let i = 0; i < entradas.length; i++) {
        var ent = entradas[i];
        
        if (ent==sub_categoria) {
            document.getElementById(ent).style.display = 'block';
        } else {
            document.getElementById(ent).style.display = 'none';
        }
    }
}

function mostrar_segundos(sub_categoria) {

    for (let i = 0; i < segundos.length; i++) {
        var ent = segundos[i];
        
        if (ent==sub_categoria) {
            document.getElementById(ent).style.display = 'block';
        } else {
            document.getElementById(ent).style.display = 'none';
        }
    }
}

function mostrar_bebidas(sub_categoria) {

    for (let i = 0; i < bebidas.length; i++) {
        var ent = bebidas[i];
        
        if (ent==sub_categoria) {
            document.getElementById(ent).style.display = 'block';
        } else {
            document.getElementById(ent).style.display = 'none';
        }
    }
}