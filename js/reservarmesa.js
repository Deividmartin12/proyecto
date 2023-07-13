let selectedTable = null;

function selectTable(event) {
  const table = event.target;
  const tableId = parseInt(table.dataset.id);

  if (selectedTable === null) {
    table.classList.add('selected');
    selectedTable = tableId;
  } else {
    const previousTable = document.querySelector(`.table[data-id="${selectedTable}"]`);
    previousTable.classList.remove('selected');

    if (selectedTable === tableId) {
      selectedTable = null;
    } else {
      table.classList.add('selected');
      selectedTable = tableId;
    }
  }
}

function clearSelection() {
  const tables = document.getElementsByClassName('table');
  for (let table of tables) {
    table.classList.remove('selected');
  }
  selectedTable = null;
  localStorage.removeItem('selectedTable');
  showMessage('Selección eliminada.', 'success');
}

function resetTables() {
  const tables = document.getElementsByClassName('table');
  for (let table of tables) {
    table.classList.remove('selected');
    table.classList.remove('saved');
  }
  selectedTable = null;
  localStorage.removeItem('selectedTable');
  showMessage('Mesas reiniciadas.', 'success');
}

function saveSelection() {
  if (selectedTable !== null) {
    localStorage.setItem('selectedTable', selectedTable);
    showMessage('Selección guardada correctamente.', 'success');

    const tables = document.getElementsByClassName('table');
    for (let table of tables) {
      const tableId = parseInt(table.dataset.id);
      if (tableId === selectedTable) {
        table.classList.add('saved');
      } else {
        table.classList.remove('saved');
      }
    }
  } else {
    showMessage('No has seleccionado ninguna mesa.', 'error');
  }
}

function loadSelection() {
  const storedSelection = localStorage.getItem('selectedTable');
  if (storedSelection) {
    selectedTable = parseInt(storedSelection);
    const table = document.querySelector(`.table[data-id="${selectedTable}"]`);
    if (table) {
      table.classList.add('selected');
    }
  }
}

function showMessage(message, type) {
  const messageContainer = document.getElementById('message');
  messageContainer.textContent = message;
  messageContainer.className = type;
}

loadSelection();

const tables = document.getElementsByClassName('table');
for (let table of tables) {
  table.addEventListener('click', selectTable);
}

const saveButton = document.getElementById('saveBtn');
saveButton.addEventListener('click', saveSelection);

const clearButton = document.getElementById('clearBtn');
clearButton.addEventListener('click', clearSelection);

const resetButton = document.getElementById('resetBtn');
resetButton.addEventListener('click', resetTables);