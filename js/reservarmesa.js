let selectedTable = null;

function toggleSelection(event) {
  const table = event.target;
  const tableId = parseInt(table.dataset.id);

  if (selectedTable === tableId) {
    selectedTable = null;
    table.classList.remove('selected');
  } else {
    if (selectedTable !== null) {
      const previousSelectedTable = document.querySelector(`[data-id="${selectedTable}"]`);
      previousSelectedTable.classList.remove('selected');
    }
    selectedTable = tableId;
    table.classList.add('selected');
  }
}

function clearSelection() {
  const table = document.querySelector(`[data-id="${selectedTable}"]`);
  if (table) {
    table.classList.remove('selected');
  }
  selectedTable = null;
  localStorage.removeItem('selectedTable');
  showMessage('Selección eliminada.', 'success');
}

function resetTables() {
  const table = document.querySelector(`[id="${selectedTable}"]`);
  if (table) {
    table.classList.remove('selected');
  }
  selectedTable = null;
  localStorage.removeItem('selectedTable');
  showMessage('Mesas reiniciadas.', 'success');
}

function saveSelection() {
  if (selectedTable !== null) {
    const currentDate = document.getElementById("fecha1").value;
    const currentTime = document.getElementById("hora1").value;
    const reservationData = {
      date: currentDate,
      time: currentTime,
      table: selectedTable
    };
    localStorage.setItem('reservationData', JSON.stringify(reservationData));
    showMessage('Selección guardada correctamente.', 'success');

    const table = document.querySelector(`[data-id="${selectedTable}"]`);
    if (table) {
      table.classList.add('saved');
    }
  } else {
    showMessage('No has seleccionado ninguna mesa.', 'error');
  }
}

function loadSelection() {
  const storedData = localStorage.getItem('reservationData');
  if (storedData) {
    const reservationData = JSON.parse(storedData);
    selectedTable = reservationData.table;
    const table = document.querySelector(`[data-id="${selectedTable}"]`);
    if (table) {
      table.classList.add('selected');
      table.classList.add('saved');
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
  table.addEventListener('click', toggleSelection);
}

const saveButton = document.getElementById('saveBtn');
saveButton.addEventListener('click', saveSelection);

const clearButton = document.getElementById('clearBtn');
clearButton.addEventListener('click', clearSelection);

const resetButton = document.getElementById('resetBtn');
resetButton.addEventListener('click', resetTables);
