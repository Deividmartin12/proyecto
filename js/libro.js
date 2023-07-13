function cargarProvincias() {
    var departamentoSelect = document.getElementById("departamento");
    var provinciaSelect = document.getElementById("provincia");

    
    var departamento = departamentoSelect.value;

    
    provinciaSelect.innerHTML = "";

    if (departamento === "1") { // Tumbes
        cargarProvinciasTumbes();
    } else if (departamento === "2") { // Piura
        cargarProvinciasPiura();
    } else if (departamento === "3") { // Lambayeque
        cargarProvinciasLambayeque();
    } else if (departamento === "4") { // La Libertad
        cargarProvinciasLaLibertad();
    }
}

function cargarProvinciasTumbes() {
    var provincias = [
        { id: "1", nombre: "Tumbes" },
        { id: "2", nombre: "Contralmirante Villar" },
        { id: "3", nombre: "Zarumilla" }
    ];

    cargarProvinciasEnSelect(provincias);
}

function cargarProvinciasPiura() {
    var provincias = [
        { id: "4", nombre: "Piura" },
        { id: "5", nombre: "Ayabaca" },
        { id: "6", nombre: "Huancabamba" },
        { id: "7", nombre: "Morropón" },
        { id: "8", nombre: "Paita" },
        // Resto de provincias de Piura
    ];

    cargarProvinciasEnSelect(provincias);
}

function cargarProvinciasLambayeque() {
    var provincias = [
        { id: "9", nombre: "Chiclayo" },
        { id: "10", nombre: "Ferreñafe" },
        { id: "11", nombre: "Lambayeque" },
        
    ];

    cargarProvinciasEnSelect(provincias);
}

function cargarProvinciasLaLibertad() {
    var provincias = [
        { id: "12", nombre: "Trujillo" },
        { id: "13", nombre: "Ascope" },
        { id: "14", nombre: "Bolívar" },
        { id: "15", nombre: "Chepén" },
        { id: "16", nombre: "Julcán" },
        { id: "17", nombre: "Otuzco" },
        { id: "18", nombre: "Pacasmayo" },
        { id: "19", nombre: "Pataz" },
        
    ];

    cargarProvinciasEnSelect(provincias);
}

function cargarProvinciasEnSelect(provincias) {
    var provinciaSelect = document.getElementById("provincia");

    
    for (var i = 0; i < provincias.length; i++) {
        var provinciaOption = document.createElement("option");
        provinciaOption.value = provincias[i].id;
        provinciaOption.innerText = provincias[i].nombre;
        provinciaSelect.appendChild(provinciaOption);
    }
}





