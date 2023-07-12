// Array para almacenar las mesas seleccionadas
let selectedTables = [];

// Función para alternar la selección de una mesa
function toggleSelection(event) {
  const table = event.target;
  const tableId = parseInt(table.dataset.id);
  const index = selectedTables.indexOf(tableId);

  if (index === -1) {
    // Si la mesa no está seleccionada, la agregamos al array
    selectedTables.push(tableId);
    table.classList.add('selected');
  } else {
    // Si la mesa ya está seleccionada, la eliminamos del array
    selectedTables.splice(index, 1);
    table.classList.remove('selected');
  }
}

// Función para quitar la selección de todas las mesas
function clearSelection() {
  const tables = document.getElementsByClassName('table');
  for (let table of tables) {
    table.classList.remove('selected');
  }
  selectedTables = [];
  localStorage.removeItem('selectedTables');
  showMessage('Selección eliminada.', 'success');
}

// Función para reiniciar todas las mesas a un estado inicial
function resetTables() {
  const tables = document.getElementsByClassName('table');
  for (let table of tables) {
    table.classList.remove('selected');
    table.classList.remove('saved');
  }
  selectedTables = [];
  localStorage.removeItem('selectedTables');
  showMessage('Mesas reiniciadas.', 'success');
}

// Función para guardar la selección en el localStorage y resaltar las mesas guardadas
function saveSelection() {
  if (selectedTables.length > 0) {
    localStorage.setItem('selectedTables', JSON.stringify(selectedTables));
    showMessage('Selección guardada correctamente.', 'success');

    const tables = document.getElementsByClassName('table');
    for (let table of tables) {
      const tableId = parseInt(table.dataset.id);
      if (selectedTables.includes(tableId)) {
        table.classList.add('saved');
      } else {
        table.classList.remove('saved');
      }
    }
  } else {
    showMessage('No has seleccionado ninguna mesa.', 'error');
  }
}

// Función para cargar la selección almacenada en el localStorage
function loadSelection() {
  const storedSelection = localStorage.getItem('selectedTables');
  if (storedSelection) {
    selectedTables = JSON.parse(storedSelection);
    const tables = document.getElementsByClassName('table');
    for (let table of tables) {
      const tableId = parseInt(table.dataset.id);
      if (selectedTables.includes(tableId)) {
        table.classList.add('selected');
        table.classList.add('saved');
      }
    }
  }
}

// Función para mostrar mensajes
function showMessage(message, type) {
  const messageContainer = document.getElementById('message');
  messageContainer.textContent = message;
  messageContainer.className = type;
}

// Cargar la selección al cargar la página
loadSelection();

// Agregar evento de clic a las mesas
const tables = document.getElementsByClassName('table');
for (let table of tables) {
  table.addEventListener('click', toggleSelection);
}

// Agregar evento de clic al botón de guardar
const saveButton = document.getElementById('saveBtn');
saveButton.addEventListener('click', saveSelection);

// Agregar evento de clic al botón de quitar selección
const clearButton = document.getElementById('clearBtn');
clearButton.addEventListener('click', clearSelection);

// Agregar evento de clic al botón de reiniciar mesas
const resetButton = document.getElementById('resetBtn');
resetButton.addEventListener('click', resetTables);
